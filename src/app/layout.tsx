import "./globals.css";

import { Inter } from "next/font/google";

import ColorModeProvider from "@/app/ColorModeProvider";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit Ocho",
  description: "Clone of Reddit for Ocho by @dyegolara. Hire me, senpai! 🥺",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <ColorModeProvider>
        <body className="dark-theme">
          <Topbar />
          {children}
        </body>
      </ColorModeProvider>
    </html>
  );
}
