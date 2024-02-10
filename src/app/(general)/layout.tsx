import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edu Help",
  description: "Eduhelp,School management made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
