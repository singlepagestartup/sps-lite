"use client";

import { cn } from "@sps/shared-frontend-utils-client";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { forwardRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { Toggle } from "../toggle";
import { Bold, Italic, Strikethrough } from "lucide-react";

export type ITipTapEditableProps = {
  value: JSON;
  form: UseFormReturn<any>;
  placeholder?: string;
  className?: string;
  editable: boolean;
};

export type ITipTapContentProps = {
  value: JSON;
  className?: string;
};

export type ITipTapProps = ITipTapEditableProps | ITipTapContentProps;

export const TipTapEditable = forwardRef<
  HTMLInputElement,
  ITipTapEditableProps
>((props: ITipTapEditableProps, ref) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.value,
    editorProps: {
      attributes: {
        class: cn(
          "prose dark:prose-invert prose-xs lg:prose-base p-5 focus:outline-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.className,
        ),
      },
    },
    onUpdate: ({ editor }) => {
      const editorJson = editor?.getJSON();
      props.form.setValue("description", JSON.stringify(editorJson));
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="relative">
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="p-2 bg-white rounded-lg flex gap-3"
        >
          <Toggle
            aria-label="Toggle bold"
            data-state={editor.isActive("bold") ? "on" : "off"}
            asChild={true}
          >
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleBold().run();
              }}
            >
              <Bold className="h-4 w-4" />
            </button>
          </Toggle>
          <Toggle
            aria-label="Toggle italic"
            data-state={editor.isActive("italic") ? "on" : "off"}
            asChild={true}
          >
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleItalic().run();
              }}
            >
              <Italic className="h-4 w-4" />
            </button>
          </Toggle>
          <Toggle
            aria-label="Toggle strike"
            data-state={editor.isActive("strike") ? "on" : "off"}
            asChild={true}
          >
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleStrike().run();
              }}
            >
              <Strikethrough className="h-4 w-4" />
            </button>
          </Toggle>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
});

export const TipTapContent = forwardRef<HTMLDivElement, ITipTapContentProps>(
  (props: ITipTapContentProps, ref) => {
    const editor = useEditor({
      extensions: [StarterKit],
      content: props.value,
      editorProps: {
        attributes: {
          class: cn("w-full prose mx-auto focus:outline-none", props.className),
        },
      },
      editable: false,
    });

    if (!editor) {
      return;
    }

    return <EditorContent editor={editor} />;
  },
);

export const TipTap = forwardRef<HTMLInputElement, ITipTapProps>(
  (props: ITipTapProps, ref) => {
    if ("editable" in props) {
      return <TipTapEditable {...props} ref={ref} />;
    }

    return <TipTapContent {...props} ref={ref} />;
  },
);
