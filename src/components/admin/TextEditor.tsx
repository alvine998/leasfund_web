import dynamic from "next/dynamic";
import React from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}
function TextEditor({ value, onChange, placeholder }: TextEditorProps) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-2 text-gray-800"
    />
  );
}

export { TextEditor };
