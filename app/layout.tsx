import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MatrixRain } from "@/components/ui/matrix-rain";

const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeGrid | Autonomous Cyber Defense",
  description: "Autonomous Cyber Defense for Critical Infrastructure. Protecting legacy industrial systems using real-time AI.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={shareTechMono.className} suppressHydrationWarning>
        <MatrixRain />
        <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
