"use client";
import React from "react";
import HeroVector from "@/assets/hero-vector.svg";
import ETH from "@/assets/eth.svg";
import USDT from "@/assets/usdt.svg";
import { Progress } from "radix-ui";
import { motion } from "framer-motion";
import Button from "@/modules/app/button";
import Bag from "@/assets/bag.svg";
import Image from "next/image";
import { TitleAnim } from "@/modules/app/title-animation";
import { FadeIn } from "@/modules/app/fade-in";

export function Hero() {
  const progress = 70;

  const titleStyles =
    "font-anybody uppercase text-white font-extrabold text-[3.75rem] max-lg:text-3xl max-w-[80%] max-lg:max-w-full text-center leading-[140%] leading-0";

  return (
    <div className="relative max-[1550px]:min-h-[160vh] min-h-[140vh] max-sm:min-h-[200vh] w-full mt-14">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src={
            "/public/webp/3d_hyperspace_background_with_warp_tunnel_effect_2_1x.webp"
          }
          alt="hero-bg"
          width={2000}
          height={2000}
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#000000] opacity-50 z-20" />
      <div className="absolute inset-0 -z-10">
        <HeroVector />
      </div>

      {/* Text Content (Ensuring it's above everything) */}
      <div className="absolute inset-0 flex flex-col items-center z-50">
        <div className="flex flex-col items-center max-lg:px-4">
          <TitleAnim delay={0}>
            <h1 className={titleStyles}>
              The World&apos;s first <br />
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold text-[9.375rem] max-lg:text-6xl max-md:text-4xl tinted leading-32 -my-2.5">
              AI-Backed
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1
              className={`${titleStyles} -mt-8 text-[2.5rem] max-lg:text-3xl leading-[51px]`}
            >
              DeFi Asset Manager With Over $30M AUM
            </h1>
          </TitleAnim>
        </div>
        <div className="flex justify-between gap-10 mt-16 max-lg:mt-8 max-lg:flex-col px-3">
          <FadeIn delay={0}>
            <p className="max-w-[278px] max-lg:max-w-full max-lg:text-center">
              Unlock cutting-edge crypto opportunities with Unilabs—where
              Enterprise AI meets DeFi innovation. Our system tracks thousands
              of emerging projects, helping you invest early and confidently.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="max-w-[278px] max-lg:max-w-full lg:hidden max-lg:text-center">
              Experience next-level transparency, significant returns, and
              unparalleled access to ventures once reserved for institutional
              players.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border border-border rounded-[20px] bg-[#00060F7A] backdrop-blur-[90px] lg:px-[42px] px-4 py-[56px]">
              <div className="flex flex-col">
                <p className="font-medium text-[2rem] max-md:text-2xl">
                  Buy Now Before Price Rises
                </p>
                <div className="mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5">
                  <span className="flex flex-col gap-1">
                    <p className="text-base">Token Sold</p>
                    <p className="tinted text-[1.375rem] font-semibold">
                      15762004260
                    </p>
                  </span>
                  <span className="flex flex-col gap-1">
                    <p className="text-base">Current Token Price</p>
                    <p className="tinted text-[1.375rem] font-semibold">$0.9</p>
                  </span>
                </div>
              </div>

              <Progress.Root
                value={progress}
                className="ProgressRoot mt-8 overflow-hidden !w-full"
              >
                <motion.div
                  className="bg-gradient-to-r from-[#42BDDD] to-[#0FEDBE] h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                />
              </Progress.Root>

              <div className="flex flex-col mt-10 gap-[14px]">
                <div className="rounded-[11px] h-[70px] backdrop-blur-[60px] text-text bg-white/10 flex items-center px-[35px]">
                  <p>1 $UNI = $0.0228</p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="rounded-[11px] cursor-pointer gap-2.5 border border-transparent text-text justify-center hover:border-border transition duration-300 ease-in-out h-[70px] backdrop-blur-[60px] bg-white/10 flex items-center px-[35px] w-full">
                    <ETH /> <p>ETH</p>
                  </div>
                  <div className="rounded-[11px] h-[70px] cursor-pointer gap-2.5 border border-transparent text-text justify-center hover:border-border transition duration-300 ease-in-out backdrop-blur-[60px] bg-white/10 flex items-center px-[35px] w-full">
                    <USDT /> <p>USDT</p>
                  </div>
                </div>
                <div className="rounded-[11px] h-[70px] backdrop-blur-[60px] text-text bg-white/10 flex items-center px-[35px]">
                  <p>$UNI you receive</p>
                </div>
                <Button
                  onClick={() => {
                    window.open(
                      "https://buy.unilabs.finance",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Bag />
                  Buy Unil
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="max-w-[278px] max-lg:max-w-full max-lg:hidden">
              Experience next-level transparency, significant returns, and
              unparalleled access to ventures once reserved for institutional
              players.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
