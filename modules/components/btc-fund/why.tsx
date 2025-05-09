import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import Cube from "@/assets/otherpages/cube.svg";
import Blur from "@/assets/otherpages/why-blur.svg";

export function Why() {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8 relative px-14 max-lg:px-5">
        <FadeInOnScroll>
        <h2 className="font-bold font-anybody !leading-[1] text-[180px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[50px] uppercase whitespace-nowrap max-w-[867px] text-white leading-[163px]">
            Why Invest <br  /> in the 
            <br/> BTC
            <br  /> Fund?
          </h2>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
        <FadeInOnScroll className="lg:max-w-[489px] w-full">
             <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>
                  Optimized Liquidity and Market Adaptability
                </p>
              </div>
              <p  >
                With a blend of on-chain Bitcoin exposure and liquid staking
                strategies, the BTC Fund remains flexible across market cycles.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                 <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>
                      Yield Generation on Bitcoin Holdings
                    </p>
                  </div>
                  <p  >
                    Through staking solutions and yield-generating BTC
                    derivatives, investors can earn passive returns while
                    maintaining BTC exposure.
                  </p>
                </div>
              </FadeInOnScroll>
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                 <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>
                      Risk-Managed Approach
                    </p>
                  </div>
                  <p  >
                    The portfolio is actively monitored and rebalanced based on
                    volatility, liquidity demand, and BTC market trends.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[44%] -top-[54%]">
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                 <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>
                      Beyond Spot Bitcoin Holdings
                    </p>
                  </div>
                  <p >
                    The BTC Fund is not just about holding BTC. It integrates
                    yield-bearing and wrapped Bitcoin assets to create a more
                    efficient and optimized portfolio.
                  </p>
                </div>
              </FadeInOnScroll>
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
              <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>
                      Diversified Bitcoin-Based Asset Basket
                    </p>
                  </div>
                  <p >
                    The fund strategically holds a mix of native BTC, wrapped
                    BTC (WBTC, TBTC), and institutional-grade Bitcoin
                    derivatives.
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
