import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/logo.png"
          width={50}
          height={25}
          alt="TS Bridge"
          className="max-sm:size-25"
        />
        <p className="text-[26px] font-extrabold text-ts-bridge max-sm:hidden">
          TS Bridge
        </p>
      </Link>
      <div className="flex-between gap-5">
       <SignedIn>
        <UserButton afterSignOutUrl="/sign-in"/>
       </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
