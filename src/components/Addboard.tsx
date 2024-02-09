import React from "react";
import ButtonComp from "./Button";

const Addboard = () => {
  return (
    <div className="relative overflow-hidden flex gap-5 flex-col items-left justify-center px-5 sm:px-10 py-3 text-white  bg-brand/prim-blue h-fit max-h-[40vh]">
      <div className="z-10 bg-green-300 overflow-y-hidden opacity-20 absolute top-0 left-0 w-full h-full flex justify-between">
        {Array.from({ length: 4 }).map((item, i) => (
          <div className="w-[1px]  h-screen bg-neutral-400" key={i}></div>
        ))}
      </div>
      <div className="z-10 overflow-y-hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-between">
        {Array.from({ length: 8 }).map((item, i) => (
          <div
            className="w-full h-[1px] opacity-20 bg-neutral-400"
            key={i}
          ></div>
        ))}
      </div>

      <h1 className="sm:text-2xl capitalize text-xl font-black">Get The App</h1>
      <div className="flex sm:flex-row flex-col items-start sm:items-center  justify-between">
        {" "}
        <p className=" mb-4 sm:mb-0 w-full sm:max-w-[570px] text-left sm:leading-9">
          Don&apos;t want to go through the hassle of having to come to the
          website ? why not download the app
        </p>
        <ButtonComp text=" 🔥 Download Now" />
      </div>
    </div>
  );
};

export default Addboard;
