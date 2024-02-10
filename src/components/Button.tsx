import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonCompProps {
  transparent?: boolean;
  text: string;
  link?: string;
}
const ButtonComp: React.FC<ButtonCompProps> = ({ transparent, text, link }) => {
  if (transparent)
    return (
      <Button className="w-fit" variant="outline">
        {" "}
        <Link href={link || ""}>{text}</Link>
      </Button>
    );
  return (
    <Button className="w-fit" asChild>
      <Link href={link || ""}>{text}</Link>
    </Button>
  );
};

export default ButtonComp;
