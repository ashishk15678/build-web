import React from "react";
import { Header } from "@/components/Header";
import { Editor } from "@/components/Editor";
import { Features } from "@/components/Feature";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-[0.02] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      </div>

      <div className="relative">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-4 py-1 rounded-full border border-white/10 text-white/60 text-sm">
              Version 1.0 Beta Now Available
            </div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
              Build Websites.
              <br />
              <span className="text-blue-500">Without Limits.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The modern way to create web applications. Choose your stack,
              customize your workflow, and let make_web handle the rest.
            </p>
          </div>

          <div className="flex justify-center mb-20">
            <Editor />
          </div>

          <Features />

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-white/60">Ready to start building?</span>
              <button className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                Try make_web Free
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
