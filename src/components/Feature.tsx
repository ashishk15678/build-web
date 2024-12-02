import React from "react";
import { Globe, Palette, Cpu, Box } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Framework Freedom",
    description: "Build with Next.js or Vite - your choice, your workflow",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design System",
    description: "Access our curated collection of minimal, modern templates",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Assistance",
    description: "Get intelligent suggestions as you code your project",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Component Library",
    description: "Drag and drop pre-built components into your project",
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group p-6 rounded-md border border-white/10 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-md border border-white/10 flex items-center justify-center mb-4 group-hover:border-blue-500/50 transition-all">
            <div className="text-white group-hover:text-blue-500 transition-colors">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-mono font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-white/60">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
