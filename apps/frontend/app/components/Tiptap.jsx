"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
    const editor = useEditor({
      className:" ",
    extensions: [StarterKit],
    content: "<p>say hello to the world !! </p>",
  });

  return (
    <EditorContent
      editor={editor}
      className="border border-neutral-600/90 bg-neutral-700/40 rounded-xl h-24 p-4 "
    />
  );
};

export default Tiptap;
