import React from "react";

import { Menu, X } from "lucide-react";
interface MenuCompProps {
  menuOpen: boolean;
}
const MenuComp: React.FC<MenuCompProps> = ({ menuOpen }) => {
  return <div className="flex sm:hidden"> {!menuOpen ? <Menu /> : <X />}</div>;
};

export default MenuComp;
