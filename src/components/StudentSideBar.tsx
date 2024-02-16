import {
  CircleDollarSign,
  CreditCard,
  Hourglass,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const studentLinks = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    link: "",
  },
  {
    title: "Payment Info",
    icon: <CircleDollarSign />,
    link: "/finance",
  },
  {
    title: "Results",
    icon: <Hourglass />,
    link: "/result",
  },
];
const StudentSideBar = () => {
  return (
    <div className="sticky items-center top-[5vh] overflow-hidden rounded-3xl left-5 p-3 min-w-[250px] w-fit flex flex-col bg-brand/prim-blue h-[95vh] overflow-y-scroll text-white">
      <Image alt="student-on-desk" width={200} height={200} src="/desk3d.png" />
      <ul className="flex mt-[2rem] flex-col gap-3 text-white">
        {studentLinks.map((link, i) => (
          <li className="w-full  " key={i}>
            <Link
              className="flex  w-[200px] p-2 justify-between "
              href={`/student/${link.link}`}
            >
              {link.icon} <span className="capitalize">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSideBar;
