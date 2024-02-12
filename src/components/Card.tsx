import React from "react";
interface CardProps {
  title: string;
  subtext: string;
}
const Card: React.FC<CardProps> = ({ title, subtext }) => {
  return (
    <div className="border cursor-pointer w-[calc(25%-40px)] hover:bg-slate-300 transition-all  flex flex-col rounded-xl bg-white shadow-sm shadow-brand/NEUTRAL ter sm:px-[25px] sm:py-[40px] ">
      <p className=" text-lg font-bold">{title}</p>
      {subtext}
    </div>
  );
};

export default Card;
