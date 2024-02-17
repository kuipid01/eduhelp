"use client";
import React, { useState } from "react";
import PlanCard, { PlanProps } from "./PlanCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);
  const plans = [
    {
      id: 0,
      price: 0,
      type: "Free",
      perks: [
        {
          id: 1,
          description: "100 students",
        },
        {
          id: 2,
          // Add more perks as needed
        },
      ],
    },
    {
      id: 1,
      price: 19.99,
      type: "Standard",
      perks: [
        {
          id: 3,
          description: "500 students",
        },
        {
          id: 4,
          // Add more perks as needed
        },
      ],
    },
    {
      id: 2,
      price: 39.99,
      type: "Pro",
      perks: [
        {
          id: 5,
          description: "Unlimited students",
        },
        {
          id: 6,
          // Add more perks as needed
        },
      ],
    },
    // Add more plans as needed
  ];

  return (
    <section className="w-full md:w-[80%] py-[2rem] mx-auto h-fit md:min-h-screen">
      <h1 className="text-black  font-black text-xl text-center">
        Choose Your Preffered Plan
      </h1>
      <p
        className="mt-3 mb-5 text-lg text-center
      "
      >
        The best plans available on the web
      </p>
      <Carousel className="">
        <CarouselContent className="gap-[20px] ">
          {plans.map((plan, i) => (
            <PlanCard
              key={i}
              plan={plan as PlanProps}
              id={i}
              selectedPlan={selectedPlan}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Plans;
