import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { Title } from "@/modules/app/title";
import OverviewVector from "@/assets/otherpages/overview-vector.svg";
import OverviewBlur from "@/assets/otherpages/overview-blur.svg";
import OverviewBlur2 from "@/assets/otherpages/overview-blur2.svg";
import Eth from "@/assets/otherpages/Etherium-2 copy 1.svg";
import Checkmark from "@/assets/checkmark.svg";
import Image from "next/image";
import React from "react";
import { cn } from "@/modules/utils";
/* Rectangle 34624615 */

type IOverviewData={
  title:string;
  label:string;
}

export function Overview({title,children,image,overviewdata}: {title:string,children: React.ReactNode ,image:string,overviewdata:IOverviewData[]}) {
  return (
    <div className=" z-50 pb-[170px] pt-[31px] max-xl:pb-[100px] max-lg:pb-[80px] max-md:pb-[60px]">
      <div className="container mx-auto flex flex-col items-center justify-center relative px-14 max-lg:px-5">
        <Title text={title} sub className="text-[80px] !leading-[1] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[32px] " />

        <div className="absolute w-[100%] left-[-15%] top-[34%] -z-10">
          <OverviewVector className='w-full' />
        </div>
        <div className="absolute w-[55%] top-[35%] left-0 -z-20">
          <OverviewBlur />
        </div>
        <div className="absolute w-[85%] top-[45%] left-1/2 transform -translate-x-1/2 -z-10">
          <OverviewBlur2 />
        </div>
        <div className="flex  w-full mt-16 gap-1 max-lg:flex-col pb-[80px]" >
          <div className="w-1/2 h-full max-lg:w-full flex items-center justify-center">
            <FadeInOnScroll>
              <Image
                src={image}
                alt="phone"
                width={600}
                height={600}
              />
            </FadeInOnScroll>
          </div>
          <div className="w-1/2 pl-11 max-lg:w-full max-lg:pl-0 text-[18px]">
        {children}
          </div>
        </div>
        <div className="bg-white/7 backdrop-blur-[20px] rounded-[40px] max-w-[1070px] max-md:rounded-[16px]  w-full relative z-50 border-t border-t-sec-border">
          {overviewdata.map((data, index) => (
            <FadeInOnScroll key={`label-${index}`} delay={index * 0.1}>
              <div
                className={cn(
                  "flex justify-between items-center border-b border-[#FFFFFF21] py-5 px-[115px] max-lg:px-5 max-md:px-2",
                  { "border-b-0": index === overviewdata.length - 1 }
                )}
              >
                <div className="flex items-center gap-[17px] max-sm:gap-2">
                  <Checkmark className="size-6 text-[#0FEDBE]" />
                  <p className="gradText text-[20px] max-sm:text-sm font-semibold font-anybody">
                    {data.title}
                  </p>
                </div>

                <p className="max-sm:text-sm text-normal font-inter text-[18px] max-sm:text-right">{data.label}</p>
              </div>
            </FadeInOnScroll>
          ))}
          <div className="left-[33%] -top-14 transform -translate-x-1/2 absolute z-50 size-28">
            <FadeInOnScroll>
              <Eth />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export const AIoverviewdata = [
  {
    title: "Fund Name",
    label: "AI Fund",
  },
  {
    title: "Investment Focus",
    label: "AI-integrated blockchain projects",
  },
  {
    title: "Fund Type",
    label: "AI-driven digital asset fund",
  },
  {
    title: "Risk Level",
    label: "Moderate to High",
  },
  {
    title: "Allocation Strategy",
    label: "Algorithmic-based selection",
  },
  {
    title: "Liquidity",
    label: "Smart contract-managed",
  },
  {
    title: "Minimum Investment",
    label: "$50 or crypto equivalent",
  },
];

export const BTCoverviewdata = [
  {
    title: "Fund Name",
    label: "BTC Fund",
  },
  {
    title: "Investment Focus",
    label: "Bitcoin and BTC-based assets",
  },
  {
    title: "Fund Type",
    label: "Digital asset investment fund",
  },
  {
    title: "Risk Level",
    label: "Moderate",
  },
  {
    title: "Allocation Strategy",
    label: "Diversified BTC exposure",
  },
  {
    title: "Liquidity",
    label: "Smart contract-managed",
  },
  {
    title: "Minimum Investment",
    label: "$50 or crypto equivalent",
  },
];

export const RWAoverviewdata = [
  {
    title: "Fund Name",
    label: "RWA Fund",
  },
  {
    title: "Investment Focus",
    label: "Tokenized real-world assets (RWAs)",
  },
  {
    title: "Fund Type",
    label: "Digital asset investment fund",
  },
  {
    title: "Risk Level",
    label: "Moderate to High",
  },
  {
    title: "Allocation Strategy",
    label: "Diversified RWA exposure",
  },
  {
    title: "Liquidity",
    label: "Smart contract-managed",
  },
  {
    title: "Minimum Investment",
    label: "$50 or crypto equivalent",
  },
];

export const Minningoverviewdata = [
  {
    title: "Fund Name",
    label: "Mining Fund",
  },
  {
    title: "Investment Focus",
    label: "Proof-of-work blockchain assets",
  },
  {
    title: "Fund Type",
    label: "Digital asset investment fund",
  },
  {
    title: "Risk Level",
    label: "Moderate to High",
  },
  {
    title: "Allocation Strategy",
    label: "Diversified PoW asset basket",
  },
  {
    title: "Liquidity",
    label: "Smart contract-managed",
  },
  {
    title: "Minimum Investment",
    label: "$50 or crypto equivalent",
  },
];
