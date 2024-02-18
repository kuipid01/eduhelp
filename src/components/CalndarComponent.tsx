"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

const CalndarComponent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-xl w-fit shadow shadow-amber-300 border"
    />
  );
};

export default CalndarComponent;
