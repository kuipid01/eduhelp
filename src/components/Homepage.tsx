import React from "react";
import Navbar from "./Navbar";
import ButtonComp from "./Button";
import Image from "next/image";

const Homepage = () => {
  return (
    <section className=" flex justify-center flex-col items-center text-white px-10 bg-brand/prim-blue h-screen">
      <div className="z-10 opacity-20 fixed top-0 left-0 w-full h-screen flex justify-between">
        {Array.from({ length: 15 }).map((item, i) => (
          <div className="w-[1px] h-screen bg-neutral-400" key={i}></div>
        ))}
      </div>
      <div className="z-10 fixed top-0 left-0 w-full h-screen flex flex-col justify-between">
        {Array.from({ length: 15 }).map((item, i) => (
          <div
            className="w-full h-[1px] opacity-20 bg-neutral-400"
            key={i}
          ></div>
        ))}
      </div>
      <Navbar />
      <main className=" z-20 relative w-full  h-[80vh] flex gap-5 flex-col justify-center items-center">
        <h1 className="sm:max-w-[800px]  leading-[180%] w-4/5 text-3xl font-black text-center">
          Elevate Learning Experiences with Our School Management Solution
        </h1>
        <p className=" font-light text-neutral-200 w-4/5 sm:max-w-[900px] text-lg text-center ">
          Effortless school management, from attendance tracking to grade
          reporting, all in one place.
        </p>
        <ButtonComp text="🐱‍🏍 Try now !" />

        {/* left */}
        <div className=" absolute bottom-0 left-0 flex  flex-col gap-5">
          <h1 className=" text-xl tracking-wide font-bold uppercase">
            120 + Schools
          </h1>
          <div className="  flex gap-5">
            <div className="w-[50px] relative bg-white rounded-md  flex justify-center items-center overflow-hidden h-[50px]">
              <Image
                className=" object-center object-conver h-[40px] rounded-md "
                height={40}
                width={40}
                src="/img1.jpg"
                alt="corporate Image"
              />
            </div>
            <div className="w-[50px] relative bg-white rounded-md  flex justify-center items-center overflow-hidden h-[50px]">
              <Image
                className=" object-center object-conver h-[40px] rounded-md "
                height={40}
                width={40}
                src="/img2.jpg"
                alt="corporate Image"
              />
            </div>
            <div className="w-[50px] relative bg-white rounded-md  flex justify-center items-center overflow-hidden h-[50px]">
              <Image
                className=" object-center object-conver h-[40px] rounded-md "
                height={40}
                width={40}
                src="/img3.jpg"
                alt="corporate Image"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Homepage;
