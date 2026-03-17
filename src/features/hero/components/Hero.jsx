"use client";

import SidebarLeft from "@/features/hero/components/SidebarLeft";
import SidebarRight from "@/features/hero/components/SidebarRight";
import TypingText from "@/features/hero/components/TypingText";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4">
      <SidebarLeft />
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
        Hello, I'm Wallace.
        <br className="hidden sm:block" />
        <TypingText
          words={[
            "Full Stack Developer",
            "Backend Engineer",
            "API Architect",
            "Open Source Enthusiast",
            "TypeScript Lover",
          ]}
        />
      </h1>
      <SidebarRight />
    </section>
  );
}
