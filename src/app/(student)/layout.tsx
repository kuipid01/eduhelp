import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import AdminNav from "@/components/AdminNav";
import SidebarComp from "@/components/SidebarComp";
import StudentNav from "@/components/StudentNav";
import StudentSideBar from "@/components/StudentSideBar";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Eduhelp,Student Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" p-5  relative flex gap-5 ">
          <StudentSideBar teacher={false} />
          <div className=" flex flex-col  gap-[2rem] flex-1">
            <StudentNav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
