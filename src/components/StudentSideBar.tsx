import {
  CircleDollarSign,
  CreditCard,
  Edit2,
  Home,
  Hourglass,
  LayoutDashboard,
  SearchCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonComp from "./Button";

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
export const teacherLinks = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    link: "",
  },
  {
    title: "Class Students",
    icon: <CircleDollarSign />,
    link: "/classStudents",
  },
  {
    title: "Documents",
    icon: <Edit2 />,
    link: "/documents",
  },
  {
    title: "Timetable",
    icon: <SearchCheck />,
    link: "/timetable",
  },
  {
    title: "My Classes",
    icon: <Home />,
    link: "/classes",
  },
];
interface sideBarProps {
  teacher: boolean;
}
const StudentSideBar: React.FC<sideBarProps> = ({ teacher }) => {
  if (teacher) {
    return (
      <div className="sticky items-center top-[5vh] overflow-hidden rounded-3xl left-5 p-3 min-w-[250px] w-fit flex flex-col   bg-brand/prim-blue h-[95vh] justify-between overflow-y-scroll text-white">
        <Image
          alt="student-on-desk"
          width={200}
          height={200}
          src="/desk3d.png"
        />
        <ul className="flex mt-[2rem] flex-col gap-3 text-white">
          {teacherLinks.map((link, i) => (
            <li className="w-full  " key={i}>
              <Link
                className="flex  w-fit gap-3 p-2 justify-between "
                href={`/student/${link.link}`}
              >
                {link.icon} <span className="capitalize">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className=" font-bold w-full py-3 bg-brand/ORANGE rounded-xl  text-white">
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="sticky justify-between items-center top-[5vh] overflow-hidden rounded-3xl left-5 p-3 min-w-[250px] w-fit flex flex-col bg-brand/prim-blue h-[95vh] overflow-y-auto text-white">
        <Image
          alt="student-on-desk"
          width={200}
          height={200}
          src="/desk3d.png"
        />
        <ul className="flex mt-[2rem] flex-col gap-3 text-white">
          {studentLinks.map((link, i) => (
            <li className="w-full  " key={i}>
              <Link
                className="flex  w-fit gap-5 p-2 justify-between"
                href={`/student/${link.link}`}
              >
                {link.icon} <span className="capitalize">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className=" font-bold w-full py-3 bg-brand/ORANGE rounded-xl  text-white">
          Log Out
        </button>
      </div>
    );
  }
};

export default StudentSideBar;
