import {
  Component as KnowledgeModuleSource,
  type ISourceCardProps,
} from "../../../../../../../../knowledge/source";
export interface IProfileDocumentListProps extends ISourceCardProps {
  variant?: string;
}
export function Component({
  variant = "knowledge-module-source-list-document-ai-chat",
  ...card
}: IProfileDocumentListProps = {}) {
  return (
    <section
      aria-label="Document knowledge"
      className="grid min-w-0 gap-4"
      data-module="social"
      data-model="profile"
      data-variant={variant}
    >
      <KnowledgeModuleSource {...card} variant="id-ai-chat" />
    </section>
  );
}
