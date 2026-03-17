import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TerminalModeProvider } from "@/context/TerminalModeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Wallace Henrique — Full Stack Developer",
    template: "%s | Wallace Henrique",
  },
  description:
    "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Wallace Henrique Carneiro" }],
  openGraph: {
    title: "Wallace Henrique — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Henrique — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies.",
  },
};

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
