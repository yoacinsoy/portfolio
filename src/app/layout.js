import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TerminalModeProvider } from "@/app/context/TerminalModeContext"
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
    title: "Wallace Henrique",
    description: "Full Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body>

                <ThemeProvider attribute="class" defaultTheme="dark">

                    <TerminalModeProvider>
                        {children}
                    </TerminalModeProvider>

                </ThemeProvider>

            </body>
        </html>
    )
}
