"use client";
import React from "react";
import Blur from "@/assets/blur.svg";
import Image from "next/image";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";

export function Launchpad() {
  return (
    <div className="earlyBg section">
      <div className="flex w-full container mx-auto  px-14 max-lg:px-5 ">

      <div className="relative">
        <SlideInOnScroll>
          <h2 className=" tracking-normal text-[50px] max-lg:text-[40px] max-md:text-[30px] font-extrabold leading-[1] !uppercase font-anybody">
            Get In Early On The Hottest <br className="max-lg:hidden"/> Opportunities In Crypto - <br />
            <span className="gradText !uppercase">The UNILABS Launchpad</span>
          </h2>
        </SlideInOnScroll>
        <div className="flex items-center w-full mt-16 gap-11 max-lg:flex-col">
          <div className="w-1/2 h-full max-lg:w-full flex items-center justify-center">
            <FadeInOnScroll>
              <Image
                src={"/webp/phone.webp"}
                alt="phone"
                width={800}
                height={800}
              />
            </FadeInOnScroll>
          </div>

          <div className="w-1/2 pl-11 max-lg:w-full max-lg:pl-0">
            <FadeInOnScroll>
              <p className="text-white text-[24px] font-normal max-lg:text-xl">
                At Unilabs, we believe in a future where every investor can
                seize the potential of high-growth crypto innovations. Our
                AI-powered Launchpad uses real-time market data and machine
                learning to uncover projects with standout fundamentals—even
                before they skyrocket in popularity. With over $30M in Assets
                Under Management and a dedicated global community, Unilabs
                offers direct, early-stage access to blockchain disruptors.
              </p>
            </FadeInOnScroll>

            <div className="border-l-[5px] border-accent mt-[35px] max-w-[488px] py-1.5  text-[#DBDBDB]">
              <FadeInOnScroll>
                <cite className=" pl-10 block  text-[#DBDBDB] text-[18px]">
                  “Before Unilabs, I felt overwhelmed by crypto volatility. Now,
                  their AI insights empower me to act fast on groundbreaking
                  projects.”
                </cite>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <p className="text-[18px] font-bold  text-[#DBDBDB] pl-10 mt-[15px]">
                  - Jenna A., Early Adopter
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1]">
          <Blur />
        </div>
      </div>
    </div>
    </div>
  );
}
