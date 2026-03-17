"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const popular = [
  "reactjs",
  "nextjs",
  "nodejs",
  "javascript",
  "postgresql",
  "docker",
];

const categories = {
  Frontend: [
    "reactjs",
    "nextjs",
    "nuxtjs",
    "tailwindcss",
    "javascript",
    "figma",
  ],
  Backend: ["nodejs", "php", "laravel", "postgresql", "redis", "swagger"],
  DevOps: ["docker", "kubernetes", "linux", "git", "render", "vercel"],
  Tools: ["neovim", "postman", "jira", "atlassian", "azure", "railway"],
};

function TechIcon({ name }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100/40 dark:bg-white/5 backdrop-blur-md hover:scale-110 transition">
      <Image src={`/${name}.svg`} alt={name} width={22} height={22} />
    </div>
  );
}

export default function TechStack() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {popular.map((tech) => (
          <TechIcon key={tech} name={tech} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-2 mt-6 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
      >
        {open ? "Hide tech stack" : "Show tech stack"}
        {open ? (
          <ChevronUp aria-hidden="true" size={16} />
        ) : (
          <ChevronDown aria-hidden="true" size={16} />
        )}
      </button>

      {open && (
        <div className="mt-6 space-y-6">
          {Object.entries(categories).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-3">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
