"use client";
import React, { KeyboardEvent, useState } from "react";

export function Editor() {
  const [content, setContent] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const cursorPosition = e.currentTarget.selectionStart;
      const newContent =
        content.substring(0, cursorPosition) +
        "\n" +
        content.substring(cursorPosition);
      setContent(newContent);
    }
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="absolute inset-0 bg-white/5 rounded-lg blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2 px-4 py-2 bg-black rounded-t-lg border border-white/10">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Start building your next project..."
          className="w-full h-64 bg-black border border-white/10 backdrop-blur-sm text-white p-4 rounded-b-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
