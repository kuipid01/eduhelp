import AdminCard from "@/components/AdminCard";
import Card from "@/components/Card";
import SidebarComp from "@/components/SidebarComp";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-full  relative ">
      <div className=" flex flex-col w-full min-h-screen  relative h-fit">
        <AdminCard title="Dashboard" image1="/svg1.png" image2="/svg2.png" />
        <div className="flex absolute w-4/5 z-50 gap-10  top-[35vh] left-1/2 -translate-x-1/2   flex-wrap ">
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
        </div>
      </div>
    </div>
  );
};

export default page;
