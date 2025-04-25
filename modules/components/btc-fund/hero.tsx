"use client";
import React from "react";
import HeroVector from "@/assets/hero-other-vector.svg";
import Image from "next/image";
import Blur1 from "@/assets/otherpages/hero-blur1.svg";
import Blur2 from "@/assets/otherpages/hero-blur2.svg";
import { TitleAnim } from "@/modules/app/title-animation";

export function Hero() {
  const titleStyles =
    "font-anybody uppercase text-white font-extrabold text-3xl max-lg:text-3xl max-w-[80%] max-lg:max-w-full text-center leading-[140%] leading-0";

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 z-[40] max-sm:hidden">
        <Image
          src={"/cyberpunk.svg"}
          alt="hero-bg"
          width={500}
          height={500}
          objectFit="cover"
          className=""
        />
      </div>
      <div className="absolute w-full border left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-50 max-sm:hidden flex justify-center">
        <Image
          src={"/layerBlur.svg"}
          alt="hero-Grid"
          layout="fill"
          objectFit="cover"
          className="absolute z-40"
        />
      </div>
      <div className="absolute w-[40%] top-[5%] z-50">
        <Blur1 />
      </div>
      <div className="absolute w-[30%] top-0 right-0 z-50">
        <Blur2 />
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src={"/webp/2151611174_1_1x.webp"}
          alt="hero-bg"
          layout="fill"
          objectFit="cover"
          className="absolute z-40"
        />

        <Image
          src={"/webp/overlay.webp"}
          alt="hero-Grid"
          layout="fill"
          objectFit="cover"
          className="absolute z-40"
        />
      </div>
      <div className="absolute h-80 w-full bg-gradient-to-t from-[#000000] to-transparent opacity-65 z-20 -bottom-32" />
      <div className="absolute top-0 w-full -z-10">
        <HeroVector />
      </div>

      {/* Text Content (Ensuring it's above everything) */}
      <div className="absolute inset-0 flex flex-col items-center z-[1000] mt-20">
        <div className="flex flex-col items-center max-lg:px-4">
          <TitleAnim delay={0}>
            <h1 className={titleStyles}>BTC Fund Unilabs</h1>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-4xl`}>Optimized Bitcoin</h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold text-[6.25rem] max-lg:text-5xl max-md:text-4xl tinted leading-32 -my-2.5">
              Exposure
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1
              className={`-mt-8 text-base max-lg:text-sm w-[65%] max-lg:w-full`}
            >
              The BTC Fund by Unilabs offers diversified exposure to Bitcoin,
              wrapped BTC, yield-bearing BTC derivatives, and liquid staking
              solutions for enhanced returns in all market conditions.
            </h1>
          </TitleAnim>
        </div>
      </div>
    </div>
  );
}
