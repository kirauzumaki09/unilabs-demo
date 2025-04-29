"use client";
import React from "react";
import { motion } from "framer-motion";
import Sparkle from "@/assets/Sparkle.svg";
import Feature1 from "@/assets/feature-1.svg";
import Feature2 from "@/assets/feature-2.svg";
import Feature3 from "@/assets/feature-3.svg";
import Blur1 from "@/assets/feature-blur1.svg";
import Vector from "@/assets/feature-vector.svg";
// import Blur2 from "@/assets/feature-blur2.svg";
// import Blur3 from "@/assets/feature-blur2.svg";
import Image from "next/image";
import { Title } from "@/modules/app/title";
import { cn } from "@/modules/utils";
import { FadeIn } from "@/modules/app/fade-in";

export default function CoreFeatures() {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-[32px] w-full relative overflow-hidden">
        <FadeIn>
          <Image
            src={"/webp/photorealistic_galaxy_background_1_1x.webp"}
            alt="Background effect"
            fill
            className="object-cover"
            priority
          />
        </FadeIn>
        <div className="size-20 absolute z-30 top-[20%] left-[5%]">
          <FadeIn delay={0.2}>
            <ScalePulse>
              <Sparkle />
            </ScalePulse>
          </FadeIn>
        </div>
        <div className="size-20 absolute z-30 top-[10%] right-[10%]">
          <FadeIn delay={0.4}>
            <ScalePulse>
              <Sparkle />
            </ScalePulse>
          </FadeIn>
        </div>
        <div className="size-20 absolute z-30 top-[10%] right-[50%]">
          <FadeIn delay={0.6}>
            <ScalePulse>
              <Sparkle />
            </ScalePulse>
          </FadeIn>
        </div>
        <div className="absolute -top-20">
          <FadeIn delay={0.8}>
            <Blur1 />
          </FadeIn>
        </div>
        <div className="absolute inset-0">
          <Vector />
        </div>
        <div className="z-50 pt-16 flex items-center justify-center flex-col ">
          <div className="flex items-center gap-4 px-5 flex-wrap justify-center mb-[100px]">
            <FadeIn>
              <Title text="Core" sub className="lg:text-[110px] md:text-[75px] md:text-[75px]" />
            </FadeIn>
            <FadeIn>
              <Title text="unilabs" sub tinted className="lg:text-[110px] md:text-[75px] md:text-[75px]" />
            </FadeIn>
            <FadeIn>
              <Title text="features" sub className="lg:text-[110px] md:text-[75px] md:text-[75px]" />
            </FadeIn>
          </div>
          <div className="flex flex-col max-w-[1530px] mx-auto gap-16 w-full items-center justify-center px-10 max-lg:px-5 max-lg:mt-10 pb-[100px] coreFeatureCardWrap">
            {featuresData.map((feature, index) => (
              <FadeIn
                key={feature.title}
                delay={index * 0.4}
                className="w-full flex flex-col items-center justify-center"
              >
                <div
                  className={cn(
                    "bg-white/5 backdrop-blur-[25px]  lg:w-full w-full max-md:flex-col rounded-[40px] py-16 flex items-center px-10 max-md:px-5 border-t border-t-sec-border gap-20",
                    {
                      "flex-row-reverse": index % 2,
                    }
                  )}
                >
                  <div className="w-[35%] max-md:w-full">{feature.icon}</div>
                  <div className="flex-1 max-md:text-center max-md:w-full">
                    <p className="tinted font-semibold text-[36px] max-md:text-2xl mb-[20px] coreFeatureTitle">
                      {feature.title}
                    </p>
                    <p className="font-normal text-[18px] text-inter leading-[1.8] text-[#F0F0F0]">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const ScalePulse = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const featuresData = [
  {
    icon: <Feature1 />,
    title: "AI Market Pulse",
    description:
      "Unilabs’ Market Pulse relies on advanced AI to scout the market for opportunities. Use the Pulse for analysis on market trends, key token movements, and other pressing opportunities in the market. We’re constantly evaluating on-chain and off-chain data to deliver actionable insights and generate returns for your portfolio.",
  },
  {
    icon: <Feature2 />,
    title: "Early Access Scoring System (EASS)",
    description:
      "Our proprietary Early Access Scoring System ranks projects based on a combination of factors, including team credibility, use-case potential, tokenomics, and market sentiment. This dynamic scoring system simplifies decision-making by presenting clear, data-backed ratings for upcoming crypto projects, giving you the confidence to act quickly.",
  },
  {
    icon: <Feature3 />,
    title: "Meme-coin Identification Tool",
    description:
      "The most promising growth opportunities are found today in the memecoin segment. For high-risk investors, our risk allocation tool utilizes an advanced memecoin identification algorithm. We monitor liquidity, listing chances, and virality metrics to help you leverage growth from the most promising projects in the market.",
  },
];
