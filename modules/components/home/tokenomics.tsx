"use client";
import React from "react";
import Blur1 from "@/assets/blur3.svg";
import Blur2 from "@/assets/blur4.svg";
import Image from "next/image";
import { Title } from "@/modules/app/title";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";

export function Tokenomics() {
  return (
    <section className="relative w-full">
      <div className="max-w-[1529px] mx-auto flex-col flex w-full px-14 max-lg:px-5 items-center justify-center relative">
        <SlideInOnScroll>
          <Title
            text="Tokenomics"
            tinted
            className="max-lg:text-6xl max-sm:text-4xl"
          />
        </SlideInOnScroll>
        <FadeInOnScroll
          delay={0.3}
          className="flex items-center justify-center w-full"
        >
          {/* Wrapper to ensure proper positioning */}
          <div className="relative">
            <Image
              src={"/webp/tok.webp"}
              alt="tokenomics"
              width={1200}
              height={500}
              className="z-20"
            />
            {/* Positioning the text inside the image */}
            <div className="absolute top-[18%] max-md:right-0 right-4 max-[1150px]:right-8 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-[1150px]:w-28">
                <Marker />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light">
                  TEAM & <br /> ADVISORS
                </p>
                <p className="text-sm md:text-xl font-bold mt-1">15%</p>
              </div>
            </div>
            <div className="absolute top-[38%] max-md:-right-3 -right-8 max-[1150px]:right-0 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-[1150px]:w-28 max-sm:w-12">
                <Marker />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light max-sm:text-[10px]">
                  LIQUIDITY & <br /> EXCHANGE
                </p>
                <p className="text-sm md:text-xl font-bold mt-1 max-sm:mt-0">
                  10%
                </p>
              </div>
            </div>
            <div className="absolute top-[58%] max-md:-right-3 -right-8 max-[1150px]:right-0 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-[1150px]:w-28 max-sm:w-12">
                <Marker/>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light max-sm:text-[10px]">
                  MARKETING & <br /> COMMUNITY
                </p>
                <p className="text-sm md:text-xl font-bold mt-1 max-sm:mt-0">
                  10%
                </p>
              </div>
            </div>
            <div className="absolute max-md:bottom-[14%] bottom-[18%] max-md:right-0 right-20 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-[1150px]:w-28 max-sm:w-12">
                <Marker />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light">
                  RESERVE
                </p>
                <p className="text-sm md:text-xl font-bold mt-1">05%</p>
              </div>
            </div>
            <div className="absolute top-[18%] max-md:left-0 left-4 z-40 flex items-center gap-3">
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light">
                  ECOSYSTEM & <br /> DEVELOPMENT
                </p>
                <p className="text-sm md:text-xl font-bold mt-1">20%</p>
              </div>
              <div className="w-64 max-md:w-20 max-[1150px]:w-28">
                <Marker className="rotate-180 max-sm:-ml-14" />
              </div>
            </div>
            <div className="absolute max-md:bottom-[14%] bottom-[23%] max-md:leftt-0 left-4 z-40 flex items-center gap-3">
              <div>
                <p className="text-xs md:text-sm text-[#DBDBDB] text-light">
                  PRESALE
                </p>
                <p className="text-sm md:text-xl font-bold mt-1">40%</p>
              </div>
              <div className="w-64 max-md:w-20 max-[1150px]:w-28 max-sm:w-12">
                <Marker className="rotate-180" />
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <Blur1 className="absolute top-0 z-30 " />
        <Blur2 className="absolute right-0 top-1" />
      </div>
      {/* <div className="h-[80%] bg-gradient-to-t from-[#00070F] to-transparent absolute w-full top-[65%] z-20" /> */}
    </section>
  );
}

type MarkerProps = {
  className?: string;
};
function Marker({ className }: MarkerProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 311 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="-1"
        x2="296"
        y2="-1"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 15 10)"
        stroke="url(#paint0_linear_17_26173)"
        strokeWidth="2"
      />
      <circle
        cx="10.5"
        cy="10.5"
        r="10.5"
        transform="matrix(-1 0 0 1 21 0)"
        fill="#1EDECA"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17_26173"
          x1="296"
          y1="0.5"
          x2="0"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#121927" />
          <stop offset="1" stopColor="#596278" />
        </linearGradient>
      </defs>
    </svg>
  );
}
