import CoverHeader from "@/components/CoverHeader";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className=" w-full min-h-screen">
      <CoverHeader studentName="John " />
    </div>
  );
};

export default page;
