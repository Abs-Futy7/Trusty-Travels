import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import menu from "@/public/menu.svg";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="p-3 flex items-center justify-between bg-[#DFE8FF] sticky top-0 z-50">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={75} />
      </Link>
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="hover:font-semibold text-gray-800 rounded-2xl border border-blue-800 px-3 py-1"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div>
        <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="bg-blue-900 hover:bg-blue-800 text-white hidden lg:flex"
        />
      </div>
      <Image
        src={menu}
        width={25}
        height={25}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden items-center"
      />
    </nav>
  );
};

export default Navbar;
