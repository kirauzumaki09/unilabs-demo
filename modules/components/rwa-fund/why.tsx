import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import Cube from "@/assets/otherpages/cube.svg";
import Blur from "@/assets/otherpages/why-blur.svg";

export function Why() {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8 relative ">
        <FadeInOnScroll>
          <h2 className="font-bold font-anybody !leading-[1] text-[180px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[50px] uppercase whitespace-nowrap max-w-[867px] text-white leading-[163px]">
            Why Invest <br /> in the
            <br /> RWA
            <br /> Fund?
          </h2>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
          <FadeInOnScroll className="lg:max-w-[489px] w-full">
            <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>Transparent and Efficient Investment Model</p>
              </div>
              <p>
                The RWA Fund leverages blockchain-based ownership tracking,
                automated payouts, and smart contract execution.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Diversification Beyond Traditional Crypto</p>
                  </div>
                  <p>
                    By investing in yield-generating RWAs, the fund reduces
                    exposure to crypto volatility while maintaining on-chain
                    benefits.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Liquidity in Traditionally Illiquid Markets</p>
                  </div>
                  <p>
                    Through tokenization, assets such as real estate and
                    commodities become tradeable with improved liquidity
                    compared to traditional markets.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[51.5%] -top-[57%]">
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Tokenized Exposure to Real-World Assets</p>
                  </div>
                  <p>
                    The RWA Fund brings institutional-grade investments
                    on-chain, providing access to real estate, commodities, and
                    fixed-income markets.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Institutional-Grade Yield Products</p>
                  </div>
                  <p>
                    Gain access to debt markets, tokenized bonds, and structured
                    financial instruments that offer stable returns.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>

        <div className="size-12 absolute top-[45%] left-[20%] -z-50 max-lg:hidden">
          <FadeInOnScroll>
            <Cube />
          </FadeInOnScroll>
        </div>
        <div className="size-8 absolute top-[1%] right-[15%] -z-50">
          <FadeInOnScroll>
            <Cube />
          </FadeInOnScroll>
        </div>
        <div className="size-8 absolute top-[12%] left-[15%] -z-0">
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
