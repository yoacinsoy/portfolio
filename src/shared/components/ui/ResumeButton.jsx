import { LucideFileText } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/config/site";
import { Button } from "@/shared/components/ui/button";

export default function ResumeButton() {
  return (
    <Button
      asChild
      variant="outline"
      className="
        flex items-center gap-2 sm:gap-3
        px-3 sm:px-5
        py-6 sm:py-6
        text-sm sm:text-base
        bg-white text-black border-black
        hover:bg-black hover:text-white
        dark:bg-black dark:text-white dark:border-zinc-800
        dark:hover:bg-zinc-100 dark:hover:text-black
        transition-all duration-300
        cursor-pointer z-60
      "
    >
      <Link href={SITE.resumeUrl}>
        <LucideFileText
          aria-hidden="true"
          size={18}
          className="sm:w-5 sm:h-5"
        />
        <span className="font-medium tracking-wide">Resume</span>
      </Link>
    </Button>
  );
}
