"use client";
import React from "react";
import Image from "next/image";
import { TitleAnim } from "@/modules/app/title-animation";
import bannerImage from "@/assets/fund-1-banner-image.png";


export function Hero() {
  const titleStyles =
    "font-anybody uppercase text-white font-extrabold text-[30px] max-lg:text-3xl max-w-[80%] max-lg:max-w-full text-center leading-[140%] leading-0 ";

  return (
    <div className="relative h-screen w-full aiFundBg">
      {/* Text Content (Ensuring it's above everything) */}
      <div className="absolute inset-0 flex flex-col items-center z-[1000] mt-20">
        <div className="flex flex-col items-center max-lg:px-4 pt-[37px]">
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} leading-[1]`}>AI Fund Unilabs</h1>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-[80px] max-w-full leading-[1]`}>
              Investing in the Future of
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody !uppercase font-extrabold text-[160px] gradText leading-[1] ">
              AI & Crypto
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1 className={`text-base text-[18px] max-w-[65%]`}>
              The AI Fund by Unilabs offers algorithm-driven exposure to
              high-growth AI-powered blockchain projects. Invest in the future
              of AI-integrated decentralized finance.
            </h1>
          </TitleAnim>
        </div>
      </div>
    </div>
  );
}
