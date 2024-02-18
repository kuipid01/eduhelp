import { Heart, Star } from "lucide-react";
import React from "react";
import { StringSchema } from "yup";
import { CarouselItem } from "./ui/carousel";
export interface PlanProps {
  id: number;
  price: number;
  type: string;
  perks: {
    id: number;
    description: string;
  }[];
}
const PlanCard = ({
  selectedPlan,
  id,
  plan,
}: {
  id: number;
  plan: PlanProps;
  selectedPlan: number;
}) => {
  const { price, type, perks } = plan;
  return (
    <div
      className={` px-[2rem] border-brand/prim-blue   transition-all min-h-[450px] h-fit relative border rounded-2xl flex flex-col items-center mx-auto sm:w-full w-[90%] justify-between  text-lg py-[3rem]  ${
        id === selectedPlan
          ? "bg-brand/prim-blue hover:bg-brand/prim-blue/90  text-white rounded-2xl relative"
          : " text-black bg-white"
      }`}
    >
      {id === 1 && (
        <div
          className=" absolute top-0 left-3 bg-brand/ORANGE
             flex text-white items-center text-[10px] gap-1 p-3 rounded-b-lg"
        >
          {" "}
          Standard Choice <Star size={8} />{" "}
        </div>
      )}
      {id === selectedPlan && (
        <div
          className=" absolute bottom-0 right-0 opacity-5 rotate-12  
             "
        >
          <Heart fill="white" strokeWidth={0} size={300} />{" "}
        </div>
      )}
      <div className="space-y-2 flex flex-col items-center">
        <p
          className={`  ${
            id === selectedPlan ? " text-white " : "text-gray-600"
          } text-xl font-light `}
        >
          {type}
        </p>
        <h1 className=" text-2xl leading-10 font-black ">
          #{price === 0 ? "0" : price}
          {price === 0 ? "" : <small className=" text-sm">/term</small>}
        </h1>
      </div>
      <div className="flex w-full flex-col gap-3">
        <ul>
          {perks.map((perk, i) => (
            <li className=" gap-2 items-center flex" key={i}>
              {" "}
              <span> *</span> <span>{perk.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={` w-4/5 relative  rounded-xl ter py-3 ${
          id === selectedPlan
            ? "text-brand/prim-blue bg-white rounded-2xl relative"
            : "bg-brand/prim-blue text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PlanCard;
