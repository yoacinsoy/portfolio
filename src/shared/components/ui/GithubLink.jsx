import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/config/site";

export default function GithubLink() {
    return (
        <Link
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View profile on GitHub"
            title="View profile on GitHub"
            className="flex items-center justify-center gap-2
                bg-zinc-700 hover:bg-zinc-600
                text-white font-medium
                border-dotted dark:border-solid border-black
                px-4 py-3
                md:px-3 md:py-2
                rounded-lg
                shadow-[0_0_10px_rgba(255,255,255,0.25)]
                hover:shadow-lg
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-white/50
                w-full md:w-auto
                max-w-xs md:max-w-fit
            "
        >
            <GithubIcon aria-hidden="true" size={18} />

            <span className="hidden sm:inline whitespace-nowrap">
                View on GitHub
            </span>
        </Link>
    );
}
