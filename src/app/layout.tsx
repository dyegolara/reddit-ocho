import "./globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";
import ColorModeProvider from "@/app/ColorModeProvider";

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
        <Topbar />
        {children}
      </ColorModeProvider>
    </html>
  );
}
