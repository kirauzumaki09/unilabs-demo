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

export function Overview() {
  return (
    <div className="max-sm:-mt-80 z-50">
      <div className="max-w-[1529px] mx-auto flex flex-col items-center justify-center gap-8 relative px-14 max-lg:px-5">
        <Title text="RWA Fund Overview" sub className="max-sm:text-4xl" />

        <div className="absolute w-[75%] left-[5%] top-[35%] -z-10">
          <OverviewVector />
        </div>
        <div className="absolute w-[55%] top-[35%] left-0 -z-20">
          <OverviewBlur />
        </div>
        <div className="absolute w-[85%] top-[45%] left-1/2 transform -translate-x-1/2 -z-10">
          <OverviewBlur2 />
        </div>
        <div className="flex items-center w-full mt-16 gap-11 max-lg:flex-col">
          <div className="w-1/2 h-full max-lg:w-full flex items-center justify-center">
            <FadeInOnScroll>
              <Image src={"/rwa.svg"} alt="phone" width={600} height={600} />
            </FadeInOnScroll>
          </div>
          <div className="w-1/2 pl-11 max-lg:w-full max-lg:pl-0">
            <FadeInOnScroll>
              <p className="text-muted text-base font-medium max-lg:text-xl max-w-[564px] max-lg:max-w-full">
                The Unilabs RWA Fund provides a structured gateway to tokenized
                real-world assets (RWAs), enabling investors to gain on-chain
                exposure to real estate, commodities, fixed-income markets, and
                institutional-grade yield products. By integrating blockchain
                technology with traditional asset classes, the RWA Fund offers a
                secure, liquid, and diversified approach to investing in
                tangible assets.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-muted text-base font-medium max-lg:text-xl my-6 max-w-[564px] max-lg:max-w-full">
                Tokenization is redefining asset ownership, making historically
                illiquid markets more accessible, efficient, and transparent.
                The Unilabs RWA Fund enables investors to participate in this
                financial transformation, capturing the benefits of on-chain
                real estate, yield-bearing structured products, and tokenized
                commodities.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-2-[50px] rounded-xxl w-[65%] max-lg:w-full relative z-50 border-t border-t-sec-border">
          {overviewdata.map((data, index) => (
            <FadeInOnScroll key={`label-${index}`} delay={index * 0.1}>
              <div
                className={cn(
                  "flex justify-between items-center border-b border-[#FFFFFF21] py-4 px-16 max-lg:px-5",
                  { "border-b-0": index === overviewdata.length - 1 }
                )}
              >
                <div className="flex items-center gap-4 max-sm:gap-2">
                  <Checkmark className="size-4 text-[#0FEDBE]" />
                  <p className="tinted text-lg max-sm:text-sm font-semibold font-anybody">
                    {data.title}
                  </p>
                </div>

                <p className="max-sm:text-sm">{data.label}</p>
              </div>
            </FadeInOnScroll>
          ))}
          <div className="left-1/2 -top-14 transform -translate-x-1/2 absolute z-50 size-28">
            <FadeInOnScroll>
              <Eth />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

const overviewdata = [
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
