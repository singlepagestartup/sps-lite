import { randomUUID } from "node:crypto";
import { api as threadApi } from "@sps/social/models/thread/sdk/server";
import {
  getAIChatDocument,
  getAIChatDocumentProposal,
  RBAC_AI_DOCUMENT_PROPOSAL_KEY,
  type IAIChatDocument,
  type IAIChatDocumentProposal,
} from "@sps/rbac/models/subject/sdk/model";
import type { IModel as IThread } from "@sps/social/models/thread/sdk/model";
import type { IModel as IMessage } from "@sps/social/models/message/sdk/model";
import {
  RBAC_SECRET_KEY,
  replaceKnowledgeUserContext,
} from "@sps/shared-utils";
import type { KnowledgeService } from "@sps/knowledge/backend/app/api/src/lib/service";
import type { ISocialModule } from "../../../../../di";
import type { ISocialProfileAiTool } from "./tool-loop";

export interface IAIChatDocumentContext {
  thread: IThread;
  document: IAIChatDocument;
  targetSourceId: string | null | undefined;
  proposal: IAIChatDocumentProposal | null;
}

export class Service {
  constructor(
    readonly socialModule: ISocialModule,
    readonly knowledge: KnowledgeService,
  ) {}

  async load(props: {
    profileId: string;
    threadId: string;
    message: IMessage;
  }): Promise<IAIChatDocumentContext | null> {
    const thread: IThread = await this.socialModule.thread.findById({
      id: props.threadId,
    });
    const document = getAIChatDocument(thread?.metadata);
    if (!document) return null;
    if (document.profileId !== props.profileId)
      throw new Error(
        "Authorization error. Document belongs to another replying profile.",
      );
    const links = await this.socialModule.profilesToKnowledgeModuleSources.find(
      {
        params: {
          filters: {
            and: [
              { column: "profileId", method: "eq", value: props.profileId },
            ],
          },
        },
      },
    );
    const allowed = new Set(
      links.map(
        (link: { knowledgeModuleSourceId: string }) =>
          link.knowledgeModuleSourceId,
      ),
    );
    if (document.sourceIds.some((id) => !allowed.has(id)))
      throw new Error(
        "Authorization error. Document Source is outside profile Knowledge.",
      );
    const selected = props.message.metadata?.["aiChatDocumentSourceId"];
    if (
      selected !== undefined &&
      (typeof selected !== "string" || !document.sourceIds.includes(selected))
    )
      throw new Error(
        "Authorization error. Selected Source does not belong to this document.",
      );
    return {
      thread,
      document,
      targetSourceId:
        typeof selected === "string"
          ? selected
          : document.sourceIds.length === 1
            ? document.sourceIds[0]
            : document.sourceIds.length === 0
              ? null
              : undefined,
      proposal: getAIChatDocumentProposal(thread.metadata),
    };
  }

  private async save(
    context: IAIChatDocumentContext,
    proposal: IAIChatDocumentProposal,
  ) {
    if (!RBAC_SECRET_KEY)
      throw new Error("Configuration error. RBAC_SECRET_KEY not set");
    // Read fresh metadata so proposals preserve unrelated preferences and Source links.
    const current: IThread = await this.socialModule.thread.findById({
      id: context.thread.id,
    });
    const currentProposal = getAIChatDocumentProposal(current.metadata);
    if ((currentProposal?.id ?? null) !== (context.proposal?.id ?? null))
      throw new Error(
        "Document proposal changed during this request. Review the latest proposal.",
      );
    const thread = await threadApi.update({
      id: current.id,
      data: {
        metadata: {
          ...current.metadata,
          [RBAC_AI_DOCUMENT_PROPOSAL_KEY]: proposal,
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          "Cache-Control": "no-store",
        },
      },
    });
    context.thread = thread;
    context.document = getAIChatDocument(thread.metadata)!;
    context.proposal = proposal;
  }

  tool(
    context: IAIChatDocumentContext,
    message: IMessage,
  ): ISocialProfileAiTool {
    return {
      source: "knowledge",
      display: { label: "Propose document Knowledge update" },
      definition: {
        type: "function",
        function: {
          name: "profile_knowledge_propose",
          description:
            "Propose the complete new human notes for the current document Source. This never saves Knowledge. Read all existing userContext pages first, preserve unrelated notes, and provide the read contentHash. The exact proposed text will be shown to the user and saved only after a later confirmation. For a document without a Source, propose its first Source. Do not use this tool for brainstorming unless a concrete document draft is ready.",
          parameters: {
            type: "object",
            properties: {
              title: { type: "string", minLength: 1 },
              userContext: { type: "string", minLength: 1 },
              expectedContentHash: { type: "string" },
            },
            required: [
              "title",
              "userContext",
              ...(context.targetSourceId ? ["expectedContentHash"] : []),
            ],
            additionalProperties: false,
          },
        },
      },
      execute: async (args) => {
        if (context.targetSourceId === undefined)
          throw new Error(
            "Select one Knowledge section before proposing a change to this document.",
          );
        if (
          typeof args["title"] !== "string" ||
          !args["title"].trim() ||
          typeof args["userContext"] !== "string" ||
          !args["userContext"].trim()
        )
          throw new Error("Proposal title and userContext are required.");
        let expectedContentHash: string | null = null;
        if (context.targetSourceId) {
          const [source] = await this.knowledge.listSources({
            sourceIds: [context.targetSourceId],
          });
          if (!source || args["expectedContentHash"] !== source.contentHash)
            throw new Error(
              "Source changed or was not read. Read all existing notes again before proposing an edit.",
            );
          expectedContentHash = source.contentHash;
        }
        const links =
          await this.socialModule.messagesToFileStorageModuleFiles.find({
            params: {
              filters: {
                and: [{ column: "messageId", method: "eq", value: message.id }],
              },
            },
          });
        const proposal: IAIChatDocumentProposal = {
          version: 1,
          id: randomUUID(),
          status: "pending",
          sourceId: context.targetSourceId,
          expectedContentHash,
          title: args["title"].trim(),
          userContext: args["userContext"],
          fileIds: links.map(
            (link: { fileStorageModuleFileId: string }) =>
              link.fileStorageModuleFileId,
          ),
          triggerMessageId: message.id,
        };
        await this.save(context, proposal);
        return {
          proposalId: proposal.id,
          status: "pending_confirmation",
          sourceId: proposal.sourceId,
        };
      },
    };
  }

  preview(
    context: IAIChatDocumentContext,
    messageId: string,
    language: string,
  ): string | null {
    const proposal = context.proposal;
    if (
      !proposal ||
      proposal.status !== "pending" ||
      proposal.triggerMessageId !== messageId
    )
      return null;
    const russian = language.toLowerCase().startsWith("ru");
    return [
      russian
        ? `Предлагаю сохранить в «${proposal.title}» следующий текст:`
        : `Proposed text for “${proposal.title}”:`,
      proposal.userContext,
      russian
        ? "Подтвердите эту правку ответом в чате или напишите, что изменить. Знания пока не сохранены."
        : "Confirm this edit in chat or describe the changes you need. Knowledge has not been saved yet.",
    ].join("\n\n");
  }

  async markShown(
    context: IAIChatDocumentContext,
    triggerId: string,
    replyId: string,
  ) {
    if (
      context.proposal?.status === "pending" &&
      context.proposal.triggerMessageId === triggerId
    )
      await this.save(context, {
        ...context.proposal,
        shownInMessageId: replyId,
      });
  }

  async resolve(
    context: IAIChatDocumentContext,
    action: "confirm" | "reject" | "revise" | "none",
    messageId: string,
  ): Promise<Record<string, unknown> | null> {
    const fresh: IThread = await this.socialModule.thread.findById({
      id: context.thread.id,
    });
    const proposal = getAIChatDocumentProposal(fresh.metadata);
    if (!proposal || !["confirm", "reject", "revise"].includes(action))
      return null;
    if (proposal.id !== context.proposal?.id)
      return {
        status: "conflict",
        reason:
          "The pending proposal changed. Confirm the new shown proposal separately.",
      };
    context.thread = fresh;
    context.document = getAIChatDocument(fresh.metadata)!;
    if (action === "reject" || action === "revise") {
      if (proposal.status === "pending")
        await this.save(context, { ...proposal, status: "rejected" });
      return {
        proposalId: proposal.id,
        status: action === "revise" ? "needs_revision" : "rejected",
      };
    }
    if (proposal.status === "applied")
      return {
        proposalId: proposal.id,
        status: "already_applied",
        sourceId: proposal.sourceId,
      };
    if (proposal.status !== "pending" || !proposal.shownInMessageId)
      return {
        status: "not_confirmable",
        reason: "No shown pending proposal is available.",
      };
    if (
      proposal.sourceId &&
      !context.document.sourceIds.includes(proposal.sourceId)
    )
      throw new Error(
        "Authorization error. Proposal Source no longer belongs to this document.",
      );
    const author = await this.socialModule.profilesToMessages.find({
      params: {
        filters: {
          and: [
            {
              column: "profileId",
              method: "eq",
              value: context.document.profileId,
            },
            {
              column: "messageId",
              method: "eq",
              value: proposal.shownInMessageId,
            },
          ],
        },
      },
    });
    if (!author.length)
      throw new Error(
        "Authorization error. Proposal was not shown by this assistant.",
      );
    let saved;
    if (proposal.sourceId) {
      const [source] = await this.knowledge.listSources({
        sourceIds: [proposal.sourceId],
      });
      if (!source || source.contentHash !== proposal.expectedContentHash) {
        await this.save(context, { ...proposal, status: "rejected" });
        return {
          status: "conflict",
          reason:
            "Knowledge changed after the proposal. Prepare and confirm a new proposal.",
        };
      }
      saved = await this.knowledge.updateSource({
        sourceId: source.id,
        title: proposal.title,
        content: replaceKnowledgeUserContext(
          source.content,
          proposal.userContext,
        ),
        expectedContentHash: proposal.expectedContentHash!,
      });
    } else {
      if (context.document.sourceIds.length)
        return {
          status: "conflict",
          reason:
            "A Source was added after this proposal. Read it and prepare a new edit.",
        };
      saved = await this.knowledge.learnContent({
        slug: `ai-chat-document-${context.thread.id}`,
        title: proposal.title,
        content: proposal.userContext,
        fileIds: proposal.fileIds,
        onSourceSaved: async (sourceId) => {
          await this.socialModule.profilesToKnowledgeModuleSources.findOrCreate(
            {
              data: {
                profileId: context.document.profileId,
                knowledgeModuleSourceId: sourceId,
              },
            },
          );
          await this.socialModule.messagesToKnowledgeModuleSources.findOrCreate(
            {
              data: {
                messageId: proposal.triggerMessageId,
                knowledgeModuleSourceId: sourceId,
                kind: "origin",
                orderIndex: 0,
              },
            },
          );
          await this.attach(context, sourceId);
        },
      });
    }
    if (!saved.source) throw new Error("Knowledge was not saved.");
    const processingError =
      "processingError" in saved ? saved.processingError : undefined;
    await this.save(context, {
      ...proposal,
      status: "applied",
      sourceId: saved.source.id,
      confirmationMessageId: messageId,
      ...(saved.indexError ? { indexError: saved.indexError } : {}),
      ...(processingError ? { processingError } : {}),
    });
    return {
      proposalId: proposal.id,
      status: "applied",
      sourceId: saved.source.id,
      indexError: saved.indexError,
      processingError,
      contentHash: saved.source.contentHash,
    };
  }

  private async attach(context: IAIChatDocumentContext, sourceId: string) {
    const current: IThread = await this.socialModule.thread.findById({
      id: context.thread.id,
    });
    const document = getAIChatDocument(current.metadata)!;
    const thread = await threadApi.update({
      id: current.id,
      data: {
        metadata: {
          ...current.metadata,
          aiChatDocument: {
            ...document,
            sourceIds: [...new Set([...document.sourceIds, sourceId])],
          },
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY!,
          "Cache-Control": "no-store",
        },
      },
    });
    context.thread = thread;
    context.document = getAIChatDocument(thread.metadata)!;
  }
}
