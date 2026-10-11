"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../../website-builder/feature";
import { useId, useState } from "react";
import { useProfiles } from "../../../../../../../../social/profile/singlepage/scope/ai-chat/project/Profiles";
import { useNavigate } from "../../../../../../../../host/layout/singlepage/ai-chat-landing/Navigation";
import { useStudioAccount } from "../../../../account/Account";
export interface ISubjectProfileCreateProps {
  variant?: string;
  subjectId?: string;
}
export function Component({
  variant = "me-social-module-profile-create-ai-chat",
  subjectId,
}: ISubjectProfileCreateProps = {}) {
  const { account } = useStudioAccount();
  const { create, projects } = useProfiles();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const id = useId();
  return (
    <form
      data-module="rbac"
      data-model="subject"
      data-variant={variant}
      data-subject-id={subjectId ?? account.subject?.id}
      onSubmit={(event) => {
        event.preventDefault();
        const id = create(name.trim());
        if (id) navigate(`/ai-chat/social/profiles/${encodeURIComponent(id)}`);
      }}
      className="mt-8 grid gap-4"
    >
      <label htmlFor={id} className="text-sm font-semibold">
        Project name
      </label>
      <input
        id={id}
        className="min-h-12 w-full rounded-xl border border-sps-line bg-sps-white px-4 text-base focus-visible:outline-2"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="What are you working on?"
        required
        maxLength={100}
        autoComplete="off"
      />
      <Button type="submit" disabled={!name.trim()}>
        <WebsiteBuilderModuleFeature variant="icon" name="plus" />
        Create project
      </Button>
      {projects[0] && (
        <Button
          appearance="plain"
          onClick={() =>
            navigate(
              `/ai-chat/social/profiles/${encodeURIComponent(projects[0].id)}`,
            )
          }
        >
          Back to my project
        </Button>
      )}
    </form>
  );
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "primary" | "plain";
}
function Button({
  appearance = "primary",
  type = "button",
  className = "",
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50 ${appearance === "primary" ? "bg-sps-green text-sps-graphite" : "text-sps-muted"} ${className}`}
    />
  );
}
