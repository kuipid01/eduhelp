import AdminCard from "@/components/AdminCard";
import AdminNav from "@/components/AdminNav";
import CalndarComponent from "@/components/CalndarComponent";
import Card from "@/components/Card";
import SidebarComp from "@/components/SidebarComp";
import TeacherCard from "@/components/TeacherCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="  w-full h-full  relative ">
      <div className=" flex flex-col overflow-y-hidden w-full  relative h-fit">
        <AdminCard title="Dashboard" image1="/svg1.png" image2="/svg2.png" />
      </div>
      <div className=" md:px-5 flex  flex-col md:flex-row my-[3rem] mx-auto w-full  gap-[2rem] relative">
        <div className="w-full h-fit">
          <h1 className="font-black text-2xl text-brand/prim-blue">
            Quick Links
          </h1>

          <div className=" flex flex-col w-full md:flex-row mt-[3rem] gap-[20px] flex-wrap">
            <TeacherCard
              link="/students"
              bgColour="bg-purple-700"
              componentObject={{
                title: "Students ",
                // value: "100",
              }}
              image="/desk3d.png"
            />
            <TeacherCard
              link="/teachers"
              bgColour="bg-amber-500"
              componentObject={{
                title: "Teachers",
                // value: "100%",
              }}
              image="/desk3d.png"
            />

            <TeacherCard
              link="/project"
              bgColour="bg-yellow-500"
              componentObject={{
                title: "Finance",
                // value: "In Progress",
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
          </div>
        </div>
        <div className="flex-1 h-[30vh]  w-full md:h-[65vh] ">
          <CalndarComponent />
          {/* <ClassTeacherCorner /> */}
          <div className=" mt-[2rem] flex w-full text-lg justify-between items-center">
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
