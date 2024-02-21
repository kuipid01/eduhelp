import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import AdminNav from "@/components/AdminNav";
import SidebarComp from "@/components/SidebarComp";
import SmallScreenNav from "@/components/SmallScreenNav";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edu Help Admin Dashboard",
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
        <main className="  flex  relative ">
          <div className="flex md:hidden">
            <SmallScreenNav />
          </div>

          <div className="hidden md:flex">
            <SidebarComp />
          </div>

          <div className=" flex flex-col  gap-[2rem] flex-1 ">{children}</div>
        </main>
      </body>
    </html>
  );
}
