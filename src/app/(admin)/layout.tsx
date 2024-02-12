import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import AdminNav from "@/components/AdminNav";

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
      <body className={inter.className}>
        <main className="relative">
          <AdminNav />
          {children}
        </main>
      </body>
    </html>
  );
}
