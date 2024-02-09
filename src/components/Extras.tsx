import Image from "next/image";
import ButtonComp from "./Button";

interface ExtraProps {
  image: string;
  reversed: boolean;
  textDetails: {
    title: string;
    subText: string;
  };
  linkAddress: string;
}
const Extras: React.FC<ExtraProps> = ({
  image,
  reversed,
  textDetails,
  linkAddress,
}) => {
  return (
    <section
      className={` gap-10 txt-black items-center w-full sm:w-4/5 mx-auto ${
        reversed ? "flex-col-reverse sm:flex-row-reverse" : ""
      } my-5 flex sm:flex-row flex-col h-fit sm:h-[70vh] py-5  sm:my-10`}
    >
      <div className="sm:w-2/5 w-full h-[50vh] rounded-3xl overflow-hidden bg-brand/prim-blue relative p-2 sm:h-full">
        <Image
          className="  object-cover relative object-center"
          fill
          alt="description-images"
          src={image}
        />
      </div>
      <div className=" flex flex-col gap-5">
        <h1 className=" sm:text-2xl capitalize text-xl font-black">
          {textDetails.title}
        </h1>
        <p className=" text-lg w-full sm:max-w-[570px] text-left leading-9">
          {textDetails.subText}
        </p>

        <ButtonComp link="" text=" ✔ Learn More" />
      </div>
    </section>
  );
};

export default Extras;
