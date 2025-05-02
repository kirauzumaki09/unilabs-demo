import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import Cube from "@/assets/otherpages/cube.svg";
import Blur from "@/assets/otherpages/why-blur.svg";

export function Why() {
  return (
    <section>
      <div className="max-w-[1529px] mx-auto flex flex-col gap-8 relative px-14 max-lg:px-5">
        <FadeInOnScroll>
          <h3 className="font-bold font-anybody text-[6.375rem] max-lg:text-5xl max-sm:text-3xl uppercase max-w-[867px] text-white lg:leading-[90px]">
            Why Invest <br className="max-lg:hidden" /> in the{" "}
            <br className="max-lg:hidden" /> BTC
            <br className="max-lg:hidden" /> Fund?
          </h3>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
          <FadeInOnScroll className="lg:max-w-[400px] w-full">
            <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8  border-b border-b-black/5 min-h-[220px]">
              <div className="flex items-center gap-4">
                <Checkmark className="size-4 text-[#0FEDBE]" />
                <p className="gradText text-lg font-semibold font-anybody">
                  Optimized Liquidity and Market Adaptability
                </p>
              </div>
              <p className="text-sm color-sec-text mt-5">
                With a blend of on-chain Bitcoin exposure and liquid staking
                strategies, the BTC Fund remains flexible across market cycles.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5  min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="gradText text-lg font-semibold font-anybody">
                      Yield Generation on Bitcoin Holdings
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    Through staking solutions and yield-generating BTC
                    derivatives, investors can earn passive returns while
                    maintaining BTC exposure.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 lg:max-w-[400px] border-b border-b-black/5 relative  min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="gradText text-lg font-semibold font-anybody">
                      Risk-Managed Approach
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    The portfolio is actively monitored and rebalanced based on
                    volatility, liquidity demand, and BTC market trends.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[44%] -top-[54%]">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5  min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="gradText text-lg font-semibold font-anybody">
                      Beyond Spot Bitcoin Holdings
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    The BTC Fund is not just about holding BTC. It integrates
                    yield-bearing and wrapped Bitcoin assets to create a more
                    efficient and optimized portfolio.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5 relative min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="gradText text-lg font-semibold font-anybody">
                      Diversified Bitcoin-Based Asset Basket
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
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
