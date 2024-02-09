import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Testimony = () => (
  <div className=" relative bg-white flex flex-col gap-5 py-7 px-3">
    <p className="font-medium text-neutral-400 text-sm italic">
      Look at the call stack and identify where the error is being thrown. It
      might give you more information about which component or part of your code
      is causing the problem.
    </p>
    <Quote
      size={48}
      className=" absolute left-0 -top-3 opacity-30 brightness-50"
    />

    <div className=" flex gap-5 items-center">
      <div className="w-[70px] relative  bg-brand/prim-blue h-[70px] rounded-full overflow-hidden">
        <Image
          className="relative object-cover object-center"
          alt="testimony-giver"
          src="/img2.jpg"
          fill
        />
      </div>
      <div className=" flex flex-col justify-between">
        <h1 className="text-lg font-bold">Tom Kery</h1>
        <p className="text-base font-normal">Analytics</p>
      </div>
    </div>
  </div>
);
const Testimonial = () => {
  return (
    <section className=" overflow-x-hidden h-fit w-full max-h-screen py-5 px-10 min-h-[80vh] bg-neutral-200 sm:h-screen ">
      <h1 className=" text-xl md:text-3xl font-black text-center">
        Testimonials
      </h1>

      <Carousel className=" h-[70vh] flex justify-center items-center flex-1 ">
        <CarouselContent>
          {[1, 2, 3, 4, 6, 7, 8].map((item, i) => (
            <CarouselItem key={i} className="basis-1/4 h-full">
              <Testimony />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonial;
