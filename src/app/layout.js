import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { TerminalModeProvider } from "@/shared/context/TerminalModeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TerminalModeProvider>{children}</TerminalModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
