"use client";
import React from "react";
import Image from "next/image";
import { TitleAnim } from "@/modules/app/title-animation";
import bannerImage from "@/assets/fund-1-banner-image.png";


interface FundHeroProps{
  subTitle:string;
  heading1:string;
  heading2:string;
  description?:string;
  bg?:string;
}

export function Hero({heading1,heading2,subTitle,description,bg}: FundHeroProps) {
  const titleStyles =
    "font-anybody uppercase text-white font-extrabold text-[30px] max-lg:text-3xl max-w-[80%] max-lg:max-w-full text-center leading-[140%] leading-0 ";

  return (
    <div className={`relative min-h-[1150px] max-lg:min-h-screen  w-full ${bg}`}>
    
      <div className="flex flex-col items-center z-[100] relative pt-[170px]">
        <div className="flex flex-col items-center max-lg:px-4 pt-[37px ]   max-md:max-w-full">
          <TitleAnim delay={0}>
            <span className={`${titleStyles} inline-flex !leading-[1]`}>{subTitle}</span>
          </TitleAnim>
          <TitleAnim delay={0}>
            <h1 className={`${titleStyles} text-[80px] max-lg:text-[60px] !max-w-[1220px] max-md:!max-w-full max-md:text-[50px] max-sm:text-[32px] max-w-full !leading-[1]`}>
              {heading1}
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody !leading-[1] !uppercase font-extrabold text-[160px]  max-lg:text-[100px] max-md:text-[80px] max-sm:text-[60px] gradText !leading-[1] ">
             {heading2}
            </h1>
          </TitleAnim>
  
          <TitleAnim delay={0.4}>
            <p className={`text-white text-[18px] max-w-[930px] max-md:max-w-full `}>
            {description}
            </p>
          </TitleAnim>
        </div>
      </div>
    </div>
  );
}
