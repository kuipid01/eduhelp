import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClassTeacherCorner = () => {
  return (
    <div className="flex w-full h-full flex-col gap-5">
      <div className=" flex  text-lg justify-between items-center">
        <h1 className="text-black font-black ">Class Teachers</h1>
        <Link className=" text-brand/prim-blue" href="/">
          See all
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        {[1, 2, 3].map((link, i) => (
          <Link
            href="/"
            className=" w-[87px] h-[87px] rounded-full ter bg-brand/prim-blue "
          >
            <div className="w-20 relative ter h-20 rounded-full p-2 ">
              <Image
                src="/img1.jpg"
                fill
                className=" object-cover rounded-full object-center"
                alt="teacher image"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex  text-lg justify-between items-center">
        <h1 className="text-black font-black ">Notifications</h1>
        <Link className=" text-brand/prim-blue" href="/">
          See all
        </Link>
      </div>
    </div>
  );
};

export default ClassTeacherCorner;
