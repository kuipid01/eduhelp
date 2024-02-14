import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import AdminNav from "@/components/AdminNav";
import SidebarComp from "@/components/SidebarComp";

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
          <div className=" w-full h-full  relative ">
            <SidebarComp />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
