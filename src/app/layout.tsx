import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GENHEPPIII — Three Scenes. One Hell of a Year.",
  description: "Skate jams in car parks, dance battles under strobes, and stacks of loud, messy music. Jakarta / Bandung / Surabaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#7AC142] text-[#111111] antialiased selection:bg-[#D8232A] selection:text-[#FFFFFF] min-h-screen">
        {children}
      </body>
    </html>
  );
}
