"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Book,
  Calendar,
  Edit,
  File,
  FileText,
  Group,
  Home,
  List,
  MessageSquare,
  PersonStanding,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Links = [
  {
    id: 1,
    icon: <Home size={18} />,
    text: "Overview",
    active: true,
    link: "/admin",
  },
  {
    id: 2,
    icon: <Book size={18} />,
    text: "Classes & Subjects",
    active: false,
    link: "/admin/subjects",
  },
  {
    id: 3,
    icon: <Group size={18} />,
    text: "Teachers",
    active: false,
    link: "/admin/teachers",
  },
  {
    id: 4,
    icon: <PersonStanding size={18} />,
    text: "Students",
    active: false,
    link: "/admin/students",
  },
  {
    id: 5,
    icon: <List size={18} />,
    text: "Attendance",
    active: false,
  },
  {
    id: 6,
    icon: <Edit size={18} />,
    text: "Exams & Results",
    active: false,
  },
  // {
  //   id: 7,
  //   icon: <File size={18} />,
  //   text: "Reports",
  //   active: false,
  // },
  {
    id: 8,
    icon: <Calendar size={18} />,
    text: "Calendar",
    active: false,
  },
  {
    id: 9,
    icon: <FileText size={18} />,
    text: "Documents",
    active: false,
  },
  {
    id: 10,

    icon: <MessageSquare size={18} />,
    text: "Messages",
    active: false,
  },
  {
    id: 11,
    icon: <Bell size={18} />,
    text: "Notifications",
    active: false,
  },
  {
    id: 12,
    icon: <Settings size={18} />,
    text: "System Settings",
    active: false,
  },
];

const SidebarComp = () => {
  const [expanded, setExpanded] = useState(false);
  if (expanded)
    return (
      <div className=" absolute overflow-y-scroll z-[100] px-[.5rem] top-0 py-[1vh]  h-screen bg-neutral-100 border-r left-0 w-fit ">
        <ul className=" flex flex-col w-[250px] gap-5">
          {Links.map((link) => (
            <>
              <Link key={link.id} href={link?.link || "/"}>
                <li
                  className={`cursor-pointer  flex w-full  gap-5 px-2 items-center text-sm font-medium  hover:bg-brand/prim-blue/30 transition-all rounded-2xl ${
                    link.active && " bg-brand/prim-blue/90"
                  }   py-2`}
                >
                  {" "}
                  <span>{link.icon}</span>
                  <span> {link.text}</span>
                </li>
              </Link>
            </>
          ))}
          <li
            onClick={() => setExpanded(false)}
            className="w-1/4 mx-auto rounded-lg cursor-pointer ter text-brand/prim-blue border border-brand/prim-blue p-1"
          >
            <ArrowLeft />
          </li>
        </ul>
      </div>
    );
  return (
    <div className="fixed z-[100] top-0 py-[1vh]  h-screen bg-neutral-100 border-r left-0 w-fit ">
      <ul className=" flex flex-col gap-5">
        {Links.map((link) => (
          <>
            <Link href={link?.link || "/"}>
              <li
                key={link.id}
                className={`cursor-pointer min-w-[70px] hover:bg-brand/prim-blue/30 transition-all rounded-2xl ${
                  link.active && " bg-brand/prim-blue/90"
                }  ter py-2`}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger> {link.icon}</TooltipTrigger>
                    <TooltipContent>{link.text}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>{" "}
              </li>
            </Link>
          </>
        ))}
        <li
          onClick={() => setExpanded(true)}
          className="w-3/4 mx-auto rounded-lg cursor-pointer ter text-brand/prim-blue border border-brand/prim-blue p-1"
        >
          <ArrowRight />
        </li>
      </ul>
    </div>
  );
};

export default SidebarComp;
