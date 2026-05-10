import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Younus Syed | Software Engineer",
  description: "Software Engineer specializing in AI/ML systems, distributed architecture, and full-stack development.",
  keywords: ["Younus Syed", "Software Engineer", "AI", "Machine Learning", "Full Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
