"use client";
import Vector from "@/assets/footer-vector.svg";
import Logo from "@/assets/logo.svg";
import UNILABS from "@/assets/Unilabs.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "../section";

import Telegram from "@/assets/telegram.svg";
import X from "@/assets/x.svg";
import { FadeInOnScroll } from "../fadein-scroll";
import { SlideInOnScroll } from "../slide-in-on-scroll";
import { navLinks } from "../nav";

export function Footer() {
  const socialLinks = [
    {
      icon: <X />,
      path: "https://x.com/unilabsofficial?t=2PTvQ5XFm-PeT209o7om7A&s=09",
    },
    {
      icon: <Telegram />,
      path: "https://t.me/unilabsofficial",
    },
  ];

  return (
    <Section sectionClasName="relative pb-[220px] max-md:pb-[40px] pt-[130px] max-lg:pt-[0px] max-md:pt-[60px]  overflow-hidden footerBG">
      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between w-full flex-col">
        <div className="flex w-full justify-between items-center pb-[35px] border-b !border-b-[rgba(255,255,255,0.1)] mb-[40px]  flex-wrap gap-4 max-sm:flex-col ">
          <div className="relative flex items-center ">
            <motion.div
              animate={{
                rotate: 360,
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src={"/webp/earth.webp"}
                alt="globe"
                width={134}
                height={140}
                className="max-sm:w-[80px]"
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Logo className="w-[96px] max-sm:w-[50px]" />
            </div>
          </div>
          <FadeInOnScroll className="flex items-center justify-end ">
            <Link
              href="/terms-and-conditions"
              className="text-[18px] text-white hover:opacity-100 transition duration-300 ease-in-out border-r border-r-white pr-[16px] hover:text-[#2DC5EC]"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[18px] text-white hover:opacity-100 transition duration-300 ease-in-out pl-[16px] hover:text-[#2DC5EC]"
            >
              Privacy Policy
            </Link>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll className="flex items-center max-xl:flex-col justify-between w-full pb-[30px] border-b !border-b-[rgba(255,255,255,0.1)]">
          <div className="flex gap-[32px] items-center">
            <div className="flex flex-col gap-4 max-md:hidden">
              <p className="text-[18px] text-[#DBDBDB] mb-[17px]">
                Disclaimer:
              </p>
              <p className="max-w-[955px] text-[18px] text-[#DBDBDB] ">
                Digital currencies may be unregulated in your jurisdiction. The
                value of digital currencies may go down as well as up. Profits
                may be subject to capital gains or other taxes applicable in
                your jurisdiction.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end max-xl:justify-center">
            <div className="flex items-center max-md:items-start justify-between w-full  pb-8 max-md:flex-col max-md:gap-4">
              <div className="flex flex-col gap-4 md:hidden">
                <p className="text-muted text-sm">Disclaimer:</p>
                <p className="max-w-[745px]">
                  Digital currencies may be unregulated in your jurisdiction.
                  The value of digital currencies may go down as well as up.
                  Profits may be subject to capital gains or other taxes
                  applicable in your jurisdiction.
                </p>
              </div>
            </div>
            <div className="flex  flex-col gap-4 justify-center items-end max-xl:justify-center ">
              <p className=" whitespace-nowrap text-[18px] text-white">
                Follow us on
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-accent  hover:scale-105 duration-300 ease-in-out transition"
                  >
                    <div className="size-6">{link.icon}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
        <div className="flex items-center pt-[32px] w-full justify-between flex-wrap gap-4">
          <ul className="flex items-center  justify-between gap-11 flex-wrap max-md:gap-y-2">
            {navLinks.map((nav) => {
              return (
                <li key={nav.name} className="flex items-center justify-center max-md:w-[42%] max-md:justify-start">
                  <Link
                    href={nav.path}
        
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="  z-50 text-left text-[18px] text-[#DBDBDB] max-md:w-full max-md:text-center">
            UNILABS © 2025, All rights reserved
          </p>
        </div>
      </div>

      {/* Background Vector */}
      <Vector className="absolute top-0 -z-10 w-full" />
      <div className="bg-gradient-to-t from-[#00070F] to-transparent h-[8.25rem] w-full flex items-end justify-end absolute left-0 bottom-0 z-50" />

      {/* UNILABS Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-0 px-5">
        <SlideInOnScroll>
          <UNILABS />
        </SlideInOnScroll>
      </div>

      {/* Left & Right Blurs */}
    </Section>
  );
}
