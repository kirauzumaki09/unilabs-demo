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
          src={"/bg-coins2.svg"}
          alt="hero-bg"
          width={1500}
          height={700}
          objectFit="cover"
          className=""
        />
      </div>
      <div className="absolute w-[75%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-sm:hidden flex justify-center">
        <Image
          src={"/webp/image_98_4x.webp"}
          alt="hero-Grid"
          width={300}
          height={300}
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
          src={
            "/webp/3d_hyperspace_background_with_warp_tunnel_effect_2_1x.webp"
          }
          alt="hero-bg"
          width={2000}
          height={2000}
          objectFit="cover z-40"
        />
        <Image
          src={"/webp/digital_art_moon_wallpaper_1_1x.webp"}
          alt="hero-bg"
          width={2000}
          height={2000}
          objectFit="cover"
          className="absolute z-40"
        />

        <Image
          src={"/Grid.svg"}
          alt="hero-Grid"
          width={2000}
          height={2000}
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
            <h1 className={titleStyles}>Mining Fund Unilabs</h1>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-4xl`}>
              Powering the Future of
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold text-[6.25rem] max-lg:text-5xl max-md:text-4xl gradText leading-32 -my-2.5">
              Pow Assets
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1 className={`-mt-8 text-base max-lg:text-sm w-[65%]`}>
              The Mining Fund by Unilabs offers strategic exposure to a
              diversified basket of proof-of-work blockchain assets, ensuring
              long-term value capture from decentralized mining ecosystems.
            </h1>
          </TitleAnim>
        </div>
      </div>
    </div>
  );
}
