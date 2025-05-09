"use client";
import React from "react";
import AIFund from "@/assets/ai-fund.svg";
import Commodity from "@/assets/commodity.svg";
import TechFund from "@/assets/tech-fund.svg";
import Mining from "@/assets/mining.svg";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import Link from "next/link";

export default function Funds() {
  return (
    <div className="section">
      <div className="container mx-auto flex-col flex w-full px-14 max-lg:px-5 -mt-5">
        <SlideInOnScroll>
          <h2 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center text-white">
            Introducing Our
          </h2>
        </SlideInOnScroll>
        <SlideInOnScroll delay={0.2}>
          <h2 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center text-white mb-4">
            Specialized Funds
          </h2>
        </SlideInOnScroll>
        <div className="flex items-center justify-center">
          <FadeInOnScroll className="flex items-center justify-center max-w-[820px]">
            <p className="text-lg  max-md:max-w-full lg:text-center text-white">
            To accommodate diverse investor profiles and strategies, Unilabs presents four distinct fund options—each leveraging top-tier expertise and AI-driven insights
            </p>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll>
          <div className="mt-12 grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-[30px] max-lg:justify-items-center">
            {fundsData.map((fund) => (
              <div
                key={fund.label}
                className="bg-secondary backdrop-blur-3xl rounded-[30px] px-[38px] py-[55px] max-w-[630px] flex flex-col gap-[20px] max-lg:px-4 max-lg:py-6"
              >
                <div className="size-[100px] max-sm:size-[60px]">
                  {fund.icon}
                </div>
                <p className="font-anybody uppercase font-semibold gradText text-[36px] max-sm:text-3xl">
                  {fund.label}
                </p>
                <p className="text-[18px] leading-[2] font-normal max-sm:text-sm">{fund.description}</p>
                <Link
                  href={fund.path}
                  className="hover:underline text-accent-foreground hover:opacity-90 transition duration-300 ease-in-out"
                >
                  Learn more
                </Link> 
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}

const fundsData = [
  {
    label: "AI FUND",
    icon: <AIFund />,
    path: "/ai-fund",

    description:
      "Dive into the rapidly evolving world of Artificial Intelligence. This fund targets projects revolutionizing everything from machine learning platforms to AI-driven dApps, ensuring you’re aligned with innovations shaping tomorrow.",
  },
  {
    label: "BTC FUND",
    path: "/btc-fund",

    icon: <Commodity />,
    description:
      "Explore the bridge between traditional commodities and blockchain. By tokenizing valuable resources and investing in real-world assets, this fund offers a balanced approach—hedging against crypto volatility while benefiting from the speed and liquidity of digital markets.",
  },
  {
    label: "RWA FUND",
    path: "/rwa-fund",

    icon: <TechFund />,
    description:
      "Seize the most transformative web3, DeFi, and blockchain technologies. From layer-1 protocols to decentralized finance solutions, the Tech Fund positions you to capture the upward potential of groundbreaking tech as it reshapes global finance.",
  },
  {
    label: "MINING FUND",
    path: "/mining-fund",

    icon: <Mining />,
    description:
      "HGround your portfolio in a time-tested revenue source: cryptocurrency mining. Utilizing robust facilities and efficient mining hardware, this fund ensures reliable yields that help stabilize returns across market cycles.",
  },
];
