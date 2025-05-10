"use client";

import Logo from "@/assets/logo.svg";
import { cn } from "@/modules/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
// import Dot from "@/assets/dot.svg";
import Bag from "@/assets/bag.svg";
import CloseIcon from "@/assets/close.svg";
import MenuIcon from "@/assets/menu-04.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { FadeIn } from "../fade-in";
import Button from "../button";
import SignInIcon from "@/ui/icons/SignInIcon";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b transition-all duration-400 ease-in-out border-b-transparent w-full 0 fixed top-0 z-[1000] h-[116px] ",
        {
          "border-b-[#2DC5EC] backdrop-blur-lg": isScrolled,
        }
      )}
    >
      <div className="flex items-center w-full p-5 container mx-auto relative">
        <div className="w-[200px] flex items-center">
          <FadeIn>
            <Link href={"/"} className="relative w-[75px] h-[75px] block">
              <motion.div
                animate={{
                  rotate: 360,
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={"/webp/earth.webp"}
                  alt="globe"
                  width={75}
                  height={75}
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo className="w-[59px]" />
              </div>
            </Link>
          </FadeIn>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex items-center justify-center gap-8 max-lg:hidden">
            {navLinks.map((nav, index) => {
              const isActive = pathname === nav.path;
              return (
                <FadeIn key={nav.name} delay={index * 0.1}>
                  <li className="p-2 flex items-center justify-center">
                    <Link
                      href={nav.path}
                      className={cn("text-white font-medium text-[16px]", {
                        "text-[#0FEDBE] text-[16px]": isActive,
                      })}
                    >
                      {nav.name}
                    </Link>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-end ml-5">
          <div className="flex items-center justify-between gap-5 ">
            <FadeIn>
              <Button
                onClick={() => {
                  window.open(
                    "https://buy.unilabs.finance",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="z-40 cursor-pointer max-lg:h-10 w-fit h-12"
              >
                <Bag />
                Buy Unil
              </Button>
            </FadeIn>
                 <div className="min-lg:hidden flex items-center gap-8">
       
          {isMobileNavOpen && (
            <CloseIcon
              onClick={toggleMobileNav}
              className="text-muted-foreground size-5 cursor-pointer"
            />
          )}
          {!isMobileNavOpen && (
            <MenuIcon
              className="text-muted-foreground size-5 cursor-pointer"
              onClick={toggleMobileNav}
            />
          )}
        </div>
          </div>

     
            {isMobileNavOpen && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full absolute top-[100%] bg-background backdrop-blur-[90px] left-0 right-0 p-8 border-b border-b-accent z-[1000000]"
              >
                <ul className="flex items-center flex-col justify-between gap-4">
                  {navLinks.map((nav) => {
                    return (
                      <li
                        key={nav.name}
                        className="flex items-center justify-center"
                      >
                        <Link
                          href={nav.path}
                          onClick={() => setIsMobileNavOpen(false)}
                        >
                          {nav.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {/* <div className="flex items-center justify-center w-full">
                  <div className="relative h-10 w-[65%] hover:opacity-90 transition duration-300 ease-in-out bg-gradient-to-br from-[#00634E] via-[#02FFEB] to-[#00B4E2] rounded-[11px] mt-10 text-center">
                    <button className="bg-[#34383F] cursor-pointer absolute inset-0 z-20 flex items-center justify-center gap-2.5 text-foreground h-10 w-full px-2 rounded-[11px]">
                      <Dot />
                      Sign in
                    </button>
                  </div>
                </div> */}
              </motion.div>
            )}
 
        </div>

   
      </div>
    </div>
  );
}

export const navLinks = [
  {
    name: "How to Buy",

    path: "/how-to-buy",
  },
  {
    name: "Core Features",
    path: "/core-features",
  },
  {
    name: "Fund Updates",

    path: "/fund-updates",
  },
  {
    name: "Unilabs Roadmap",
    path: "/roadmap",
  },
];
