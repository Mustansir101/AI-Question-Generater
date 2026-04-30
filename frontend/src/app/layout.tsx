import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Questions Generator - AI-Powered Question Generation",
  description: "Transform any topic into thoughtfully crafted questions using advanced AI. Perfect for educators, students, and content creators.",
  keywords: [
    "AI Questions",
    "Question Generator",
    "Education",
    "Learning",
    "Gemini API",
    "RAG",
  ],
  authors: [{ name: "AI Questions Generator Team" }],
  creator: "AI Questions Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
