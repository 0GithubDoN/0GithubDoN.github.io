import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata: Metadata = {
  metadataBase: new URL("https://0githubdon.github.io"),
  title: "Void Dash - One Tap. Pure Reflex. Endless Neon.",
  description:
    "Dash through the neon void with global leaderboards, cloud save, and unique power skins. A fast, hypnotic, one-tap arcade runner with progression. Available on Google Play.",
  keywords: [
    "void dash",
    "arcade game",
    "endless runner",
    "mobile game",
    "neon game",
    "one tap game",
    "leaderboards",
    "cloud save",
    "power skins",
    "android game",
    "free arcade game",
  ],
  authors: [{ name: "DoN [George Lucian]" }],
  icons: {
    icon: "/branding/icon.jpeg",
    apple: "/branding/AppIcon.png",
  },
  openGraph: {
    title: "Void Dash - One Tap. Pure Reflex. Endless Neon.",
    description:
      "Dash through the neon void as far as you dare. A fast, hypnotic, one-tap arcade runner.",
    type: "website",
    images: [
      {
        url: "/branding/AppIcon.png",
        width: 1024,
        height: 1024,
        alt: "Void Dash App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Void Dash - One Tap. Pure Reflex. Endless Neon.",
    description:
      "Dash through the neon void as far as you dare. A fast, hypnotic, one-tap arcade runner.",
    images: ["/branding/AppIcon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${exo2.variable} font-body bg-void-dark text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
