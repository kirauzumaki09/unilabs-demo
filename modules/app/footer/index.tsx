"use client";
import React from "react";
import Section from "../section";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import Vector from "@/assets/footer-vector.svg";
import UNILABS from "@/assets/Unilabs.svg";

import { SlideInOnScroll } from "../slide-in-on-scroll";
import { FadeInOnScroll } from "../fadein-scroll";
import X from "@/assets/x.svg";
import Telegram from "@/assets/telegram.svg";

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
    <Section sectionClasName="relative min-h-screen overflow-hidden">
      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between w-full flex-col">
        <div className="flex items-center max-md:items-start justify-between w-full border-b border-b-accent pb-8 max-md:flex-col max-md:gap-4">
          <div className="relative flex items-center">
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
                width={85}
                height={85}
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Logo className="w-[59px]" />
            </div>
          </div>
          <FadeInOnScroll className="flex items-center justify-end max-md:hidden">
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition duration-300 ease-in-out border-r border-r-accent pr-2"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition duration-300 ease-in-out pl-2"
            >
              Privacy Policy
            </Link>
          </FadeInOnScroll>
          <div className="flex flex-col gap-4 md:hidden">
            <p className="text-muted text-sm">Disclaimer:</p>
            <p className="w-full text-sm">
              Digital currencies may be unregulated in your jurisdiction. The
              value of digital currencies may go down as well as up. Profits may
              be subject to capital gains or other taxes applicable in your
              jurisdiction.
            </p>
          </div>
        </div>
        <FadeInOnScroll className="flex items-center justify-between w-full md:py-8 py-5 border-b border-b-accent">
          <div className="flex flex-col gap-4 max-md:hidden">
            <p className="text-muted">Disclaimer:</p>
            <p className="w-[45%]">
              Digital currencies may be unregulated in your jurisdiction. The
              value of digital currencies may go down as well as up. Profits may
              be subject to capital gains or other taxes applicable in your
              jurisdiction.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-muted whitespace-nowrap">Follow us on:</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 hover:text-accent hover:scale-105 duration-300 ease-in-out transition"
                >
                  <div className="size-6">{link.icon}</div>
                </Link>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
        <div className="flex items-center justify-between w-full md:py-8 py-5 max-md:border-b border-b-accent">
          <div className="flex gap-8 mt-8 max-md:grid grid-cols-2">
            {footerLinks.map((link, index) => (
              <FadeInOnScroll key={link.label} delay={index * 0.4}>
                <Link
                  href={link.path}
                  className="opacity-80 hover:opacity-100 transition duration-300 ease-in-out text-xl max-md:text-sm"
                >
                  {link.label}
                </Link>
              </FadeInOnScroll>
            ))}
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition duration-300 ease-in-out md:hidden text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition duration-300 ease-in-out md:hidden text-sm"
            >
              Privacy Policy
            </Link>
            {/* <FadeInOnScroll></FadeInOnScroll> */}
          </div>
          <p className="max-md:hidden">UNILABS © 2025, All rights reserved</p>
        </div>
        <p className="md:hidden pt-5 z-50 text-left">UNILABS © 2025, All rights reserved</p>
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

const footerLinks = [
  {
    label: "About Us",
    path: "#",
  },
  {
    label: "Roadmap",
    path: "#",
  },
  {
    label: "Refer & Earn",
    path: "#",
  },
  {
    label: "Tokenomics",
    path: "#",
  },
  {
    label: "Marketplace",
    path: "#",
  },
  {
    label: "FAQ's",
    path: "#",
  },
];
