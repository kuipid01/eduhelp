import Image from "next/image";
import React from "react";

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
      className={`" w-full flex-col overflow-y-hidden  flex justify-center h-[30vh] md:h-[60vh] ${
        bgColor ? bgColor : " bg-brand/ORANGE"
      } text-black`}
    >
      <h1 className="mb-[2rem] w-4/5 mx-auto  text-xl font-black leading-9 z-20">
        {title}
      </h1>

      <div className="absolute right-3 -bottom-10 w-fit h-fit">
        <Image
          className=" object-cover object-center"
          src={image1 || ""}
          height={500}
          width={400}
          alt="3dsvg"
        />
      </div>
      <div className="absolute z-10 -left-[100px]  -bottom-[100px] w-fit h-fit">
        <Image
          className=" object-cover object-center"
          src={image2 || ""}
          height={500}
          width={400}
          alt="3dsvg"
        />
      </div>
    </div>
  );
};

export default AdminCard;
