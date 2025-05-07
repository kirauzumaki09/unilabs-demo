"use client";
import { cn } from "@/modules/utils";
import React from "react";
import Blur from "@/assets/blur2.svg";
import Vector from "@/assets/vector2.svg";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";

export function HowItWorks() {
  return (
    <div className="section">
      <div className="flex w-full relative max-sm:pb-40">
        <div className="container mx-auto flex-col flex w-full px-14 max-lg:px-5 relative z-10">
          <FadeInOnScroll>
            <h2 className="font-bold font-anybody text-[80px]  max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] max-lg:mb-3 max-lg:text-center uppercase max-w-[867px] text-white leading-[1]">
              how it <br className="max-lg:hidden" /> works
            </h2>
          </FadeInOnScroll>
          <div className="w-full relative utility-cards-wrapper lg:-mt-36 max-lg:flex flex-col gap-10">
            {steps.map((step, index) => (
              <FadeInOnScroll
                key={step.title}
                delay={index * 0.3}
                className="utility-card"
              >
                <div key={step.title} className={cn("max-w-[420px] max-lg:max-w-full")}>
                  <p className="text-[30px] text-white  max-lg:text-lg">
                    {step.label}
                  </p>
                  <h3 className="gradText text-4xl max-lg:text-3xl font-bold font-anybody">
                    {step.title}
                  </h3>
                  <p className="max-lg:text-[16px]">{step.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        <div className="absolute right-0 max-[1162px]:hidden">
          <Vector />
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    label: "Step 1",
    title: "AI-Driven Insights",
    description:
      "Our proprietary AI engine scans the crypto universe 24/7, filtering out noise and evaluating each project against a rigorous, data-backed checklist. By merging deep financial analysis with advanced machine learning, we pinpoint fresh opportunities to supercharge your portfolio.",
  },
  {
    label: "Step 2",
    title: "Launchpad Review",
    description:
      "Once high-potential projects are flagged, our team conducts intensive due diligence—analyzing tokenomics, technology, and the core teams behind each idea. This exhaustive vetting process ensures you only see the crème de la crème of upcoming DeFi, web3, and blockchain solutions.",
  },
  {
    label: "Step 3",
    title: "Consistent Profits With Transparency",
    description:
      "Through a blockchain-based profit-sharing model, your share of the gains is automatically distributed. Capital positions, staking yields, and arbitrage wins flow into one transparent profit pool. With Unilabs, you witness exactly how and where your funds are working to generate consistent returns.",
  },
];
