import Image from "next/image";
import React from "react";
interface CoverHeaderProps {
  studentName: string;
}
const CoverHeader: React.FC<CoverHeaderProps> = ({ studentName }) => {
  return (
    <div className="relative h-[280px] bg-gradient-to-r from-brand/prim-blue via-brand/prim-blue  to-brand/prim-blue/60 text-white rounded-3xl  p-[3rem]  flex-1 flex flex-col  justify-between">
      <small className="font-light text-neutral-200">Febuary 19,2024</small>
      <div>
        <h1 className="font-black text-2xl">Welcome back, {studentName}!</h1>
        <p className="font-light text-lg">
          Always stay updated in your student portal
        </p>
      </div>
      <Image
        className="absolute bottom-0 right-3 "
        src="/student3d.png"
        alt="student-image-reading"
        height={200}
        width={350}
      />{" "}
    </div>
  );
};

export default CoverHeader;
