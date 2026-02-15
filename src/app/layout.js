import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/gsap-provider";
import BackgroundVideo from "@/components/BackgroundVideo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GfG × Elixir Hackathon 2025",
  description:
  "Join 1000+ developers, designers, and innovators for an epic 48-hour hackathon. Build cutting-edge projects and compete for amazing prizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        <BackgroundVideo />
        <GSAPProvider>{children}</GSAPProvider>
      <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
