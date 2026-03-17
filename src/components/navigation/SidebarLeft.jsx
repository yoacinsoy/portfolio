"use client";

import { useEffect, useState } from "react";
import { useTerminalMode } from "@/context/TerminalModeContext";

const navLinks = [
  { label: ".is()", terminalLabel: "whoami", href: "#home" },
  { label: ".projects()", terminalLabel: "ls projects", href: "#projects" },
  { label: ".about()", terminalLabel: "cat about.md", href: "#architecture" },
  { label: ".resume()", terminalLabel: "cat resume.pdf", href: "#stack" },
  { label: ".works()", terminalLabel: "ls works", href: "#lab" },
  { label: ".contact()", terminalLabel: "ping contact", href: "#contact" },
];

function DefaultSidebar() {
  return (
    <nav
      aria-label="Page sections"
      className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-40"
    >
      {navLinks.map(({ label, href }) => (
        <p key={href} className="sidebar-link">
          <a href={href}>{label}</a>
        </p>
      ))}

      <div className="my-2 h-16 w-px bg-black/20 dark:bg-white/20" />
    </nav>
  );
}

function TerminalSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % navLinks.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col gap-3 z-40 font-mono text-sm"
    >
      {navLinks.map(({ terminalLabel, href }, i) => (
        <a
          key={href}
          href={href}
          className={`flex items-center gap-2 transition-all duration-300 ${
            activeIndex === i
              ? "text-green-400"
              : "text-zinc-500 hover:text-white"
          }`}
        >
          <span className="text-green-500">$</span>
          <span>{terminalLabel}</span>
          {activeIndex === i && (
            <span className="ml-1 w-2 h-4 bg-green-400 cursor-block" />
          )}
        </a>
      ))}
    </nav>
  );
}

export default function SidebarLeft() {
  const { terminalMode } = useTerminalMode();

  return terminalMode ? <TerminalSidebar /> : <DefaultSidebar />;
}
