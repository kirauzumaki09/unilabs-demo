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
      <div className="absolute w-[75%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-sm:hidden">
        <Image
          src={"/rwa-hero.svg"}
          alt="hero-bg"
          width={1500}
          height={700}
          objectFit="cover"
          className=""
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
          src={
            "/webp/3d_hyperspace_background_with_warp_tunnel_effect_2_1x.webp"
          }
          alt="hero-bg"
          layout="fill"
          objectFit="cover z-40"
        />
        <Image
          src={"/webp/galaxy-2.webp"}
          alt="hero-bg"
          layout="fill"
          objectFit="cover"
          className="absolute z-40"
        />

        <Image
          src={"/Grid.svg"}
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
            <h1 className={titleStyles}>RWA Fund</h1>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-6xl`}>Tokenized Access</h1>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-6xl`}>to Real-World</h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold text-[7.5rem] max-lg:text-5xl max-md:text-4xl tinted leading-32 -my-2.5">
              Assets
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1 className={`-mt-8 text-base max-lg:text-sm w-[65%]`}>
              The RWA Fund by Unilabs provides institutional-grade exposure to
              tokenized real estate, commodities, and debt markets, bridging
              traditional finance and DeFi for diversified investing.
            </h1>
          </TitleAnim>
        </div>
      </div>
    </div>
  );
}
