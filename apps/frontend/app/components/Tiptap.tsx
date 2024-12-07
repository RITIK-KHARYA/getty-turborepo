"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapProps {
  placeholder: string;
}

const Tiptap = ({ placeholder }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return <EditorContent placeholder={placeholder} editor={editor} />;
};

export default Tiptap;
