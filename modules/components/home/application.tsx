"use client";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import CoreOfferingImage from "@/assets/core-offering-image.svg";
import Image from "next/image";
import React from "react";

export function Application() {
  return (
    <section className="min-h-screen">
      <div className="max-w-[1529px] mx-auto flex-col flex w-full px-14 max-lg:px-5">
        <>
          <SlideInOnScroll>
            <h3 className="text-[9.375rem] max-lg:text-6xl max-sm:text-4xl font-extrabold font-anybody uppercase tinted lg:leading-[120px]">
              The UNILABS
            </h3>
          </SlideInOnScroll>
          <SlideInOnScroll delay={0.2}>
            <h4 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-6xl max-sm:text-3xl text-right max-lg:text-left text-white">
              Application Range
            </h4>
          </SlideInOnScroll>
          <SlideInOnScroll delay={0.4}>
            <h4 className="uppercase font-extrabold font-anybody text-7xl text-center max-lg:text-6xl max-sm:text-3xl max-lg:text-left text-white">
              Our Core Offerings
            </h4>
          </SlideInOnScroll>
        </>
        <div className="flex items-center justify-around max-lg:flex-col max-lg:mt-12 max-lg:gap-16 gap-8">
          <FadeInOnScroll>
            <p className="text-5xl font-anybody text-right max-w-[422px] max-lg:max-w-full max-lg:text-3xl text-white max-lg:text-center mb-4">
              AI-Powered Portfolio Management
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <div className="flex items-center justify-center px-4">
              <p className="text-lg text-left max-w-[422px] lg:hidden max-lg:max-w-[75%] max-sm:max-w-full max-lg:text-center">
                Rely on our AI tool to find the crypto world&apos;s hidden gems
                and consistently rebalance your portfolio. Rather than
                guesswork, you get a data-driven approach that adapts to
                real-time market shifts, safeguarding your interests while
                pursuing maximal returns.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2} className="my-8 max-lg:my-4">
            {/* <CoreOfferingImage /> */}
            <Image
              src={"/webp/Group 1707488889.png"}
              alt="computer"
              width={500}
              height={500}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="text-lg text-left max-w-[422px] hidden lg:block px-4">
              Rely on our AI tool to find the crypto world&apos;s hidden gems
              and consistently rebalance your portfolio. Rather than guesswork,
              you get a data-driven approach that adapts to real-time market
              shifts, safeguarding your interests while pursuing maximal
              returns.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
