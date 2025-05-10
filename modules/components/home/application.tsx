"use client";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import CoreOfferingImage from "@/assets/core-offering-image.svg";
import Image from "next/image";
import React from "react";

export function Application() {
  return (
    <div className="appRangeBG section">

    <div className=" pb-[0px] !pb-[0px]">
      <div className="container mx-auto flex-col flex w-full px-14 max-lg:px-5">
        <div className="mb-[60px] max-lg:mb-3">
          <SlideInOnScroll>
            <h2 className="text-[80px] max-lg:text-[60px] max-md:text-[50px] max-lg:mr-0 max-lg:text-center max-sm:text-[32px] !uppercase text-center mr-50  font-extrabold font-anybody uppercase gradText leading-[1]">
              The UNILABS
            </h2>
          </SlideInOnScroll>
          <SlideInOnScroll delay={0.2}>
            <h2 className="!uppercase font-extrabold font-anybody  max-lg:mr-0 text-center max-lg:text-center  text-[50px] max-lg:text-[40px] max-sm:text-3xl  max-lg:text-left text-white leading-[1]">
              Application Range
            </h2>
          </SlideInOnScroll>
          <SlideInOnScroll delay={0.4}>
            <h2 className="!uppercase font-extrabold font-anybody text-center max-lg:mr-0 max-lg:text-center  text-[50px] mr-50 max-lg:text-[40px] max-sm:text-3xl  text-white releative z-10 leading-[1]">
              Our Core Offerings
            </h2>
          </SlideInOnScroll>
        </div>
        <div className="flex items-center justify-around max-lg:flex-col max-lg:mt-12 max-lg:gap-4 gap-8  relative z-20">
          <FadeInOnScroll>
            <p className="text-[56px] !leading-[1.2] font-anybody text-right max-w-[422px] max-lg:max-w-full max-lg:text-3xl text-white max-lg:text-center mb-4 max:lg:!mb-0">
              AI-Powered Portfolio Management
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <div className="flex items-center justify-center">
              <p className="text-lg text-left max-w-[383px] lg:hidden  max-lg:text-center">
                Rely on our AI tool to find the crypto world&apos;s hidden gems
                and consistently rebalance your portfolio. Rather than
                guesswork, you get a data-driven approach that adapts to
                real-time market shifts, safeguarding your interests while
                pursuing maximal returns.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2} className=" relative z-20">
            {/* <CoreOfferingImage /> */}
            <Image
              src={"/webp/applicationImage.png"}
              alt="computer"
              width={500}
              height={500}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="text-lg text-left max-w-[388px] hidden lg:block px-4">
              Rely on our AI tool to find the crypto world&apos;s hidden gems
              and consistently rebalance your portfolio. Rather than guesswork,
              you get a data-driven approach that adapts to real-time market
              shifts, safeguarding your interests while pursuing maximal
              returns.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
    </div>
  );
}
