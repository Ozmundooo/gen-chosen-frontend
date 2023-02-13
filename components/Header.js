import React from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
export default function Header() {
  return (
    <>
      <header className="flex lg:justify-between lg:p-10 lg:py-2 p-4 align-middle  lg:place-items-center bg-white">
        <div>
          <Link href="/">
            <Image className=" w-[100px] lg:w-20" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="font-['Poppins'] font-normal text-black ">
          <ul className="lg:flex hidden flex-row align-middle gap-8 text-lg">
            <Link href="/ourboard">
              <li>Our Board</li>
            </Link>
            <Link href="/ourteam">
              <li>Our Team</li>
            </Link>
            <Link href="/programs">
              <li>Programs</li>
            </Link>
            <Link href="/videos">
              <li>Videos</li>
            </Link>
            <Link href="/shop">
              <li>Shop</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <div className="">
              <li>Donate</li>
            </div>
          </ul>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </header>
    </>
  );
}
