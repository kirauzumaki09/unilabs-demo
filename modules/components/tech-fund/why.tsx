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
            <br className="max-lg:hidden" /> rwa
            <br className="max-lg:hidden" /> Fund?
          </h3>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
          <FadeInOnScroll className="lg:max-w-[400px] w-full">
            <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8  border-b border-b-black/5 min-h-[220px]">
              <div className="flex items-center gap-4">
                <Checkmark className="size-4 text-[#0FEDBE]" />
                <p className="tinted text-lg font-semibold font-anybody">
                  Transparent and Efficient Investment Model
                </p>
              </div>
              <p className="text-sm color-sec-text mt-5">
                The RWA Fund leverages blockchain-based ownership tracking,
                automated payouts, and smart contract execution.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5 min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Diversification Beyond Traditional Crypto
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    By investing in yield-generating RWAs, the fund reduces
                    exposure to crypto volatility while maintaining on-chain
                    benefits.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 lg:max-w-[400px] border-b border-b-black/5 relative min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Liquidity in Traditionally Illiquid Markets
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    Through tokenization, assets such as real estate and
                    commodities become tradeable with improved liquidity
                    compared to traditional markets.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[44%] -top-[54%]">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5 min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Tokenized Exposure to Real-World Assets
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    The RWA Fund brings institutional-grade investments
                    on-chain, providing access to real estate, commodities, and
                    fixed-income markets.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5 relative min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Institutional-Grade Yield Products
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
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
