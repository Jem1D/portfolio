import Header from "@/components/header";
import "./globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ChatWidget from "@/components/chat-widget";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Jemil | Personal Portfolio",
  description: "Jemil is a Software developer.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} relative min-h-screen pt-32 font-[family-name:var(--font-space-grotesk)] text-[var(--ink)] sm:pt-44`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
          <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-[var(--accent-cyan)] blur-3xl" />
          <div className="absolute right-4 top-28 h-52 w-52 rounded-full bg-[var(--accent-pink)] blur-3xl" />
          <div className="absolute bottom-12 left-1/3 h-44 w-44 rounded-full bg-[var(--accent-lime)] blur-3xl" />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
            <Footer />
            <Toaster position="top-left" />
            <ChatWidget />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
