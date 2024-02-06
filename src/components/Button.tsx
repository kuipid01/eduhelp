import { Button } from "@/components/ui/button"
import Link from "next/link"


interface ButtonCompProps {
  transparent?:boolean,
  text:string
}
const ButtonComp:React.FC<ButtonCompProps> = ({transparent,text}) => {
  if (transparent) return (
    <Button variant="outline">{text}</Button>

  )
  return (
    <Button asChild>
    <Link href="/login">{text}</Link>
  </Button>

  )
}

export default ButtonComp