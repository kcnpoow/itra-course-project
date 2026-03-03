"use client";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";

import { editorTheme } from "@/components/editor/themes/editor-theme";
import { TooltipProvider } from "@/shared/shadcn/components/ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from "@lexical/markdown";

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export function Editor({
  markdown,
  onChange,
  onSerializedChange,
  onMarkdownChange,
}: {
  markdown: string;
  onChange?: (editorState: EditorState) => void;
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
  onMarkdownChange?: (markdown: string) => void;
}) {
  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          editorState: (editor) => {
            if (markdown) {
              editor.update(() => {
                $convertFromMarkdownString(markdown, TRANSFORMERS);
              });
            }
          },
        }}
      >
        <TooltipProvider>
          <Plugins />

          <OnChangePlugin
            ignoreSelectionChange={true}
            onChange={(editorState) => {
              onChange?.(editorState);
              onSerializedChange?.(editorState.toJSON());

              editorState.read(() => {
                const markdown = $convertToMarkdownString(TRANSFORMERS);

                onMarkdownChange?.(markdown);
              });
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
}
