import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <>
      <Menu className="font-[Poppins]" right>
        <Link href="/ourboard" className="font-bold text-xl">
          Our Board
        </Link>
        <Link href="/ourtherapists" className=" font-bold text-xl">
          Our Therapists
        </Link>
        <Link href="/programs" className=" font-bold text-xl">
          Programs
        </Link>
        <Link href="/videos" className="font-bold text-xl">
          Videos
        </Link>
        <Link href="https://www.anchorshop.org" className="font-bold text-xl">
          Shop
        </Link>
        <Link href="/contact" className="font-bold text-xl">
          Contact
        </Link>
        {/* <Link href="/donate" className="font-bold text-xl">
          Donate
        </Link> */}
      </Menu>
    </>
  );
}

export default Sidebar;
