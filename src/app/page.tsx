import Addboard from "@/components/Addboard";
import Extras from "@/components/Extras";
import Homepage from "@/components/Homepage";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const textFirst = {
    title: "Understanding why Eduhelp",
    subText:
      "Test text now new tysd Effortless school management, from attendance tracking to grade reporting, all in one place.",
  };
  return (
    <main className="">
      <Homepage />
      <Extras
        linkAddress=""
        image=""
        textDetails={textFirst}
        reversed={false}
      />
      <Addboard />
      <Extras
        linkAddress=""
        image=""
        textDetails={textFirst}
        reversed={false}
      />
      <Extras linkAddress="" image="" textDetails={textFirst} reversed={true} />
      <Extras
        linkAddress=""
        image=""
        textDetails={textFirst}
        reversed={false}
      />
      <Testimonial />
    </main>
  );
}
