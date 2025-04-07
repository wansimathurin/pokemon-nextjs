import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
  return (
    <div className="flex justify-between items-center bg-fuchsia-900 text-white p-4 h-[70px] w-full">
      <h1 className="font-bold text-4xl">Pokemon</h1>
      <ul className="flex gap-5">
        <Link href="/" className="cursor-pointer hover:text-fuchsia-300 transition duration-300">
          Home
        </Link>
        <li className="cursor-pointer hover:text-fuchsia-300 transition duration-300">
          About
        </li>
        <Link href="/contact" className="cursor-pointer hover:text-fuchsia-300 transition duration-300">
          Contact
        </Link>
      </ul>
    </div>
  );
}
