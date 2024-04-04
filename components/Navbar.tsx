import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import { SignIn, SignedIn, UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full  dark:bg-dark-1 bg-gray-400 px-6 py-4 lg:px-10">
      <Link className="flex items-center gap-1" href="/">
        <Image
          className="max-sm:size-10"
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>
      <ThemeToggle />
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
