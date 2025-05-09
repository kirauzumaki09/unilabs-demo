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
    <div className="relative section tokenomicsBg">
      <div className="container mx-auto flex-col flex w-full items-center justify-center relative">
        <SlideInOnScroll>
          <Title
            text="Tokenomics"
            tinted
            className="!text-[80px]  max-lg:!text-[60px] max-md:!text-[50px] max-sm:!text-[40px] !uppercase"
          />
        </SlideInOnScroll>
        <FadeInOnScroll
          delay={0.3}
          className="flex items-center justify-center w-full"
        >
          {/* Wrapper to ensure proper positioning */}
          <div className="relative z-[99] flex items-center justify-center">
            <Image
              src={"/webp/tok.webp"}
              alt="tokenomics"
              width={1200}
              height={500}
              className="z-20  max-lg:w-[700px]"
            />
            {/* Positioning the text inside the image */}
            <div className="absolute top-[20%]  right-20 max-xl:right-30 max-sm:right-0  z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-xl:w-[120px]">
                <Marker className="max-lg:hidden" />
              </div>
              <div>
                <p className="text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light">
                PRESALE
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1">20%</p>
              </div>
            </div>
            <div className="absolute top-[45%]  -right-8 max-xl:right-10 max-sm:right-0 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-xl:w-[120px] max-sm:w-12">
                <Marker className="max-lg:hidden" />
              </div>
              <div>
                <p className="text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light max-sm:text-[10px]">
                RESERVE
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1 max-sm:mt-0">
                05%
                </p>
              </div>
            </div>
          
            <div className="absolute max-md:bottom-[14%] bottom-[18%] max-xl:right-30 max-md:right-20 right-20  max-sm:right-0 z-40 flex items-center gap-3">
              <div className="w-64 max-md:w-20 max-xl:w-[120px] max-sm:w-12">
                <Marker className="max-lg:hidden" />
              </div>
              <div>
                <p className="  text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light">
                MARKETING & <br /> COMMUNITY
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1">10%</p>
              </div>
            </div>
            <div className="absolute top-[18%] max-md:left-5 -left-8  max-xl:left-30 left-4 z-40 max-sm:left-0 flex items-center gap-3">
              <div>
                <p className="  text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light">
                ECOSYSTEM & <br /> DEVELOPMENT
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1">20%</p>
              </div>
              <div className="w-64 max-md:w-20 max-xl:w-[120px]">
                <Marker className="rotate-180 max-sm:-ml-14 max-lg:hidden" />
              </div>
            </div>
            <div className="absolute top-[48%] max-xl:!left-4 max-md:!left-0 left-4 z-40 flex items-center gap-3 globearrwoLeftMidlle">
              <div>
                <p className="  text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light">
                TEAM & <br /> ADVISORS
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1">15%</p>
              </div>
              <div className="w-64 max-md:w-20 max-xl:w-[120px]">
                <Marker className="rotate-180 max-lg:hidden" />
              </div>
            </div>
            <div className="absolute max-md:bottom-[14%] bottom-[23%] max-xl:left-30  max-md:left-5 max-sm:left-0 left-4 z-40 flex items-center gap-3">
              <div>
                <p className="  text-[18px] max-md:text-[12px] text-[#DBDBDB] text-light">
                LIQUIDITY & <br /> EXCHANGE
                </p>
                <p className="text-[28px] max-md:text-[16px] font-bold mt-1">40%</p>
              </div>
              <div className="w-64 max-md:w-20 max-xl:w-[120px] max-sm:w-12">
                <Marker className="rotate-180 max-lg:hidden" />
              </div>
            </div>
          </div>
        </FadeInOnScroll>

    
      </div>


    </div>
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
          x1="100%"
          y1="0%"
          x2="0%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
         <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
         <stop offset="100%" stopColor="#7D869D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
