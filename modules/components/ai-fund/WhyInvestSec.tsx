import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import Cube from "@/assets/otherpages/cube.svg";
import Blur from "@/assets/otherpages/why-blur.svg";

export function WhyInvestSec() {
  return (
    <section className="pb-[170px] max-xl:pb-[100px] max-lg:pb-[80px] max-md:pb-[60px]">
      <div className="container mx-auto flex flex-col gap-8 relative px-[15px] max-lg:px-5">
        <FadeInOnScroll>
          <h2 className="font-bold font-anybody !leading-[1] relative z-[99] text-[180px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[50px] uppercase whitespace-nowrap max-w-[867px] text-white leading-[163px]">
            Why Invest <br /> in the AI
            <br /> Fund?
          </h2>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
          <FadeInOnScroll className="lg:max-w-[489px] w-full">
            <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>Automated Smart Contract Execution</p>
              </div>
              <p>
                Capital is deployed through secure, self-executing smart
                contracts, eliminating human bias and ensuring full
                transparency.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col -mt-[25px]">
            <div className="flex flex-col gap-7">
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>AI-Optimized Portfolio Management</p>
                  </div>
                  <p>
                    Your investments are automatically rebalanced using
                    real-time AI models that track market trends, liquidity, and
                    developer activity.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Dynamic Risk Management</p>
                  </div>
                  <p>
                    AI-driven market pulse tracking and real-time asset
                    reallocation optimize for long-term growth while mitigating
                    risks.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[51.5%] -top-[57%]">
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Early Access to AI-Powered Crypto Projects</p>
                  </div>
                  <p>
                    Get exposure to high-growth AI-driven DeFi, machine
                    learning, and autonomous smart contract platforms.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Data-Driven Investment Decisions</p>
                  </div>
                  <p>
                    Our proprietary AI algorithms scan thousands of blockchain
                    projects, analyzing tokenomics, adoption metrics, and
                    on-chain data to find the best opportunities.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>

        <div className="size-15 absolute top-[53%] left-[23%] -z-50 max-lg:hidden">
          <FadeInOnScroll>
            <Cube />
          </FadeInOnScroll>
        </div>
        <div className="size-10 absolute top-[1%] right-[0%] -z-50">
          <FadeInOnScroll>
            <Cube />
          </FadeInOnScroll>
        </div>
        <div className="size-13 absolute top-[30%] left-[15%] -z-0">
          <FadeInOnScroll>
            <Cube />
          </FadeInOnScroll>
        </div>
        <div className="absolute -z-10 w-[65%] -top-20 left-[15%]">
          <FadeInOnScroll>
            <Blur />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
