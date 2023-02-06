import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <>
      <Menu className="font-[Open Sans]" right>
        <Link href="/" className=" font-bold text-xl">
          Our Board
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
