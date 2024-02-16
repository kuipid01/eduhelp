import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeacherCardProps {
  image: string;
  link: string;
  bgColour: string;
  componentObject: {
    title: string;
    value?: string;
  };
}
const TeacherCard: React.FC<TeacherCardProps> = ({
  image,
  componentObject,
  link,
  bgColour,
}) => {
  return (
    <Link
      href={link}
      className="w-full  border sm:w-[calc(50%-10px)]  overflow-hidden h-[250px] rounded-xl hover:shadow-sm hover:shadow-brand/NEUTRAL/50 transition-all flex flex-col justify-between "
    >
      <div className={`w-full ${bgColour}  relative h-4/5`}>
        <Image
          src={image}
          className=" object-cover object-center"
          fill
          alt="3d image"
        />
      </div>

      <div className="flex w-full p-3 border-t-2 flex-col gap3">
        <h1 className=" text-lg capitalize font-black">
          {componentObject.title}
        </h1>
        <p className=" capitalize text-wrap">{componentObject.value}</p>
      </div>
    </Link>
  );
};

export default TeacherCard;
