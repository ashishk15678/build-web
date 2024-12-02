import React from "react";
import { Code2, Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="w-full px-6 py-4 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-mono font-bold text-white">
            make_web
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            Documentation
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            Examples
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">
            <Terminal className="w-4 h-4" />
            Start Building
          </button>
        </div>
      </nav>
    </header>
  );
}
