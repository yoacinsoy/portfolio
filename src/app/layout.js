import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { TerminalModeProvider } from "@/shared/context/TerminalModeContext";
import { Oxanium } from "next/font/google";

import "./globals.css";

const oxanium = Oxanium({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-oxanium",
    display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${oxanium.variable} font-sans bg-zinc-900 text-white min-h-screen flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TerminalModeProvider>{children}</TerminalModeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
