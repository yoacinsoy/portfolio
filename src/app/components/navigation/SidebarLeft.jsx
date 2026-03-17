"use client"

import { useTerminalMode } from "@/app/context/TerminalModeContext"
import { useEffect, useState } from "react"

function DefaultSidebar() {
    return (
        <div className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-40">

            <p className="sidebar-link"><a href="#home">.is()</a></p>
            <p className="sidebar-link"><a href="#projects">.projects()</a></p>
            <p className="sidebar-link"><a href="#architecture">.about()</a></p>

            <div className="my-2 h-16 w-px bg-black/20 dark:bg-white/20"></div>

            <p className="sidebar-link"><a href="#stack">.resume()</a></p>
            <p className="sidebar-link"><a href="#lab">.works()</a></p>
            <p className="sidebar-link"><a href="#contact">.contact()</a></p>

        </div>
    )
}

function TerminalSidebar() {
    const commands = [
        { label: "whoami", href: "#home" },
        { label: "ls projects", href: "#projects" },
        { label: "cat about.md", href: "#architecture" },
        { label: "cat resume.pdf", href: "#stack" },
        { label: "ls works", href: "#lab" },
        { label: "ping contact", href: "#contact" }
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % commands.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col gap-3 z-40 font-mono text-sm"
        >
            {commands.map((cmd, i) => (
                <a
                    key={i}
                    href={cmd.href}
                    className={`flex items-center gap-2 transition-all duration-300
          ${activeIndex === i
                            ? "text-green-400"
                            : "text-zinc-500 hover:text-white"
                        }
          `}
                >
                    <span className="text-green-500">$</span>

                    <span>{cmd.label}</span>

                    {activeIndex === i && (
                        <span className="ml-1 w-2 h-4 bg-green-400 cursor-block" />
                    )}
                </a>
            ))}
        </div>
    )
}

export default function SidebarLeft() {
    const { terminalMode } = useTerminalMode()

    return terminalMode ? <TerminalSidebar /> : <DefaultSidebar />
}
