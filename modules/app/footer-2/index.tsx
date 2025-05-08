"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.svg";
import FooterRightShape from "@/assets/new-footer/footer-right-shape.png";
import FooterLeftShape from "@/assets/new-footer/footer-left-shape.png";
import FooterLineShape from "@/assets/new-footer/footer-line.png";
import { SlideInOnScroll } from "../slide-in-on-scroll";
import UNILABS from "@/assets/Unilabs.svg";

const FooterTwo = () => {
  const FooterList = [
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

  return (
    <>
      <div className="footer-two-sec relative pb-90 pt-[100px] max-md:py-[60px]">
        <div className="container mx-auto flex-col flex w-full px-14 max-lg:px-5 z-1 relative">
          <div className="relative flex items-center justify-center z-2">
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
                width={175}
                height={175}
                className="max-md:size-[100px]"
              />
            </motion.div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-1/2 flex items-center justify-center">
              <Logo className="w-[132px] max-md:size-[80px]" />
            </div>
          </div>
          <div className="newletter-sec text-center -mt-10 max-md:-mt-2">
            <p className="newsletter-head font-anybody uppercase font-extrabold text-[100px ] max-xl:text-[75px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] leading-[1] text-white mb-[49px] max-md:mb-5">
              Subscribe to <br /> our newsletter
            </p>

            <div className="newsletter-form mb-[50px] max-md:mb-[20px]">
              <form>
                <div className="form-intput relative  flex max-sm:flex-col items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="backdrop-blur-[30px] max-sm:w-full max-sm:px-4 rounded-[30px] size-full bg-secondary h-[90px] max-md:h-[60px] pl-[42px] pr-[240px] outline-none placeholder:text-[#DBDBDB]"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="absolute max-sm:relative   max-sm:h-[60px] max-sm:max-w-full max-sm:rounded-full max-sm:w-full max-sm:mt-2 top-0 right-0 bg-gradient-to-r from-accent-foreground to-primary-foreground max-w-[232px] px-[77px] h-full rounded-r-[30px] outline-none text-[16px] text-[#04111B] font-inter font-medium cursor-pointer hover:opacity-75"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="footer-list relative z-[2000] mb-[37px]">
            <ul className="flex align-center justify-center gap-x-[64px] max-lg:gap-x-[20px] flex-wrap gap-y-1 max-md:justify-start">
              {FooterList.map((item, index) => (
                <li key={index} className="max-md:w-[30%] max-sm:w-[45%]">
                  <a className="hover:text-[#0FEDBE]" href={item.path}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="copyright flex align-center justify-center max-md:flex-col">
            <p className='pr-[18px] max-md:pr-0 max-md:mr-0 max-md:text-center mr-[18px] relative before:content-[""] dotText before:absolute before:right-0 before:top-[12px] before:size-[4px] before:bg-[#fff] before:rounded-full'>
              <a className="hover:text-[#0FEDBE]" href="#url">
                UNILABS
              </a>{" "}
              © 2025, All rights reserved
            </p>
            <ul className="flex align-center justify-center">
              <li className='relative pr-[8px] mr-[8px] before:content[""]  max-md:before:hidden max-md:before:bg-transperant before:absolute before:right-0 before:top-[6px] before:w-[1px] before:h-[16px] before:bg-[#3DFF45]'>
                <a className="hover:text-[#0FEDBE]" href="#url">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-[#0FEDBE]" href="#url">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-0 px-5">
          <SlideInOnScroll>
            <UNILABS />
          </SlideInOnScroll>
        </div>

        <Image
          className="absolute bottom-0 right-0 max-w-[645px] pointer-events-none
 z-2"
          src={FooterRightShape}
          alt="footer-right-shape"
        />
        <Image
          className="absolute bottom-0 left-0 max-w-[893px] pointer-events-none
 z-2 "
          src={FooterLeftShape}
          alt="footer-left-shape"
        />
        <Image
          className="absolute top-0 left-0 right-0 size-full z-1 pointer-events-none
 z-[-1]"
          src={FooterLineShape}
          alt="footer-line"
        />
      </div>
    </>
  );
};

export default FooterTwo;
