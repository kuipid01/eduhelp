import Image from "next/image";
import React from "react";
import AdminNav from "./AdminNav";

interface AdminCardProps {
  title: string;
  image1?: string;
  image2?: string;
  bgColor?: string;
}
const AdminCard: React.FC<AdminCardProps> = ({
  title,
  bgColor,
  image2,
  image1,
}) => {
  return (
    <div
      className={`" relative w-full flex-col overflow-y-hidden  flex justify-center h-[40vh] md:h-[60vh] ${
        bgColor ? bgColor : " bg-brand/ORANGE"
      } text-black`}
    >
      <AdminNav />
      <h1 className=" text-2xl md:text-xl text-center  font-black leading-9 z-20">
        {title}
      </h1>

      <div className="absolute right-3 -bottom-10 w-[150px] md:w-[400px] h-[150px] md:h-[300px]">
        <Image
          className=" object-cover object-center"
          src={image1 || ""}
          fill
          alt="3d-svg"
        />
      </div>
      <div className="absolute  right-0  w-[150px] md:w-[400px] h-[150px] md:h-[400px] z-10 -left-[100px]  -bottom-[100px] ">
        <Image
          className=" object-cover object-center"
          src={image2 || ""}
          fill
          alt="3d-svg"
        />
      </div>
    </div>
  );
};

export default AdminCard;
