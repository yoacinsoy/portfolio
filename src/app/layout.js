import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { TerminalModeProvider } from "@/shared/context/TerminalModeContext";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TerminalModeProvider>{children}</TerminalModeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
