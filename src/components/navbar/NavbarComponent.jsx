import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function NavbarComponent() {
  return (
    <div className="flex justify-between fixed z-5 items-center bg-fuchsia-900 text-white p-4 h-[70px] w-full">
      <Link href="/" className="font-bold text-4xl">Pokemon</Link>
      <ul className="flex gap-5">
       <div className="relative">
         <FaHeart size={25} color="white" className="cursor-pointer" />
        <div className="bg-[red] absolute -bottom-1 -right-1 p-2 rounded-full w-[15px] h-[15px] flex justify-center items-center">
          <h1 className="text-[10px]">2</h1>
        </div>
       </div>
        <Link href="/contact" className="cursor-pointer hover:text-fuchsia-300 transition duration-300">
          Contact
        </Link>
      </ul>
    </div>
  );
}
