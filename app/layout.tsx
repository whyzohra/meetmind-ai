import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "MeetMind AI | Meeting notes, made clear", description: "AI-powered meeting notes and action items." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
