import DarkModeToggle from "@/components/ui/DarkModeToggle";
import GithubLink from "@/components/ui/GithubLink";
import ResumeButton from "@/components/ui/ResumeButton";

export default function Header() {
  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] max-w-6xl flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 rounded-xl z-80">
      <GithubLink />
      <ResumeButton />
      <DarkModeToggle />
    </header>
  );
}
