import CoverHeader from "@/components/CoverHeader";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalndarComponent from "@/components/CalndarComponent";
import Image from "next/image";
import TeacherCard from "@/components/TeacherCard";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className=" w-full min-h-screen">
      <CoverHeader
        teacher={true}
        studentName="Mr Rafiu "
        image="/teacher.png"
      />
      <div className=" flex mt-12 gap-[2rem] relative">
        <div className="w-[75%] h-fit">
          <h1 className="font-black text-2xl">Assigned Class : JSS3</h1>

          <div className=" flex mt-[3rem] gap-[20px] flex-wrap">
            <TeacherCard
              link="/classStudents"
              bgColour="bg-purple-700"
              componentObject={{
                title: "Total Number Students",
                value: "100",
              }}
              image="/desk3d.png"
            />
            <TeacherCard
              link="/attendanc"
              bgColour="bg-amber-500"
              componentObject={{
                title: "Attendance",
                value: "100%",
              }}
              image="/desk3d.png"
            />

            <TeacherCard
              link="/project"
              bgColour="bg-yellow-500"
              componentObject={{
                title: "Project work",
                value: "In Progress",
              }}
              image="/landingSvg.svg"
            />
            <TeacherCard
              link="/schedule"
              bgColour="bg-green-500"
              componentObject={{
                title: "Timetable",
                value: "70%",
              }}
              image="/woman3d.png"
            />
            <TeacherCard
              link="/project"
              bgColour="bg-orange-500"
              componentObject={{
                title: "LESSON nOTE",
                value: "In Progress",
              }}
              image="/landingSvg.svg"
            />
            <TeacherCard
              link="/schedule"
              bgColour="bg-cyan-500"
              componentObject={{
                title: " EXAMINATION qUESTIONS",
                value: "70%",
              }}
              image="/woman3d.png"
            />
          </div>
          {/* <tOTALnUMBERoFsTUDENT/> */}
          {/* aTTENDANCE */}
          {/* pERSONAL tIME tABLE */}
          {/* CLASSpROJECT */}
          {/* LESSON nOTE */}
          {/* eXAMINATION qUESTIONS */}
        </div>
        <div className="flex-1 h-[65vh] ">
          <CalndarComponent />
          {/* <ClassTeacherCorner /> */}
          <div className=" mt-[2rem] flex  text-lg justify-between items-center">
            <h1 className="text-black font-black ">Notifications</h1>
            <Link className=" text-brand/prim-blue" href="/">
              See all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
