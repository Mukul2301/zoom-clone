"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer sm:hidden"
            src="/icons/hamburger.svg"
            alt="Menu"
            height={36}
            width={36}
          />
        </SheetTrigger>
        <SheetContent className=" border-none bg-dark-1" side="left">
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
          <div className="flex flex-col justify-between overflow-y-auto  h-[calc(100vh-72px)]">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  console.log(pathname);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-40",
                          { "bg-blue-1": isActive }
                        )}
                        key={link.label}
                        href={link.route}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavigation;
