"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
export default function WriteBlog() {
  const [content, setContent] = useState("");
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-12">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
        <form className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Write your Blog</h2>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your title..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="blogType" className="text-lg mb-1">
              Type of Blog
            </label>
            <input
              type="text"
              id="blogType"
              placeholder="e.g., Travel, Technology..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-lg mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              placeholder="Paste your image URL..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="blogContent" className="text-lg mb-1">
              Blog Content
            </label>
            <div className="h-full">
              <QuillEditor
                value={content}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                className="w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
