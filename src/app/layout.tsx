import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import FireFliesBackground from "../components/FireFliesBackground";
import Sound from "../components/Sound";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | CodeBucks",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by CodeBucks",
  },
  description:
    "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound  />
        <div id="my-modal" />
      </body>
    </html>
  );
}
