import CoverHeader from "@/components/CoverHeader";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className=" w-full min-h-screen">
      <CoverHeader
        teacher={true}
        studentName="Mr Rafiu "
        image="/teacher.png"
      />
      <div className=" flex mt-12 relative">
        <div className="w-[75%] h-fit"></div>
        <div className="flex-1 h-[65vh] ">{/* <ClassTeacherCorner /> */}</div>
      </div>
    </div>
  );
};

export default page;
