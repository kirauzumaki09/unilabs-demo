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
            <br className="max-lg:hidden" /> Mining
            <br className="max-lg:hidden" /> Fund?
          </h3>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
          <FadeInOnScroll className="lg:max-w-[400px] w-full">
            <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8  border-b border-b-black/5">
              <div className="flex items-center gap-4">
                <Checkmark className="size-4 text-[#0FEDBE]" />
                <p className="tinted text-lg font-semibold font-anybody">
                  Algorithmically Managed & Optimized
                </p>
              </div>
              <p className="text-sm color-sec-text mt-5">
                Investments are actively rebalanced based on real-time network
                security, hash rate trends, and market performance.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Capture Value from Mining Economics
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    As network adoption, transaction fees, and hash rates grow,
                    PoW assets tend to appreciate. The fund strategically holds
                    high-value mining-backed cryptocurrencies.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 lg:max-w-[400px] border-b border-b-black/5 relative">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Long-Term Store of Value Exposure
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    PoW networks are widely regarded as the most decentralized,
                    censorship-resistant, and durable blockchain
                    infrastructures.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[44%] -top-[54%]">
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Exposure to the Most Secure Blockchains
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    The Mining Fund allocates capital across battle-tested PoW
                    assets like Bitcoin (BTC), Litecoin (LTC), Kaspa (KAS), and
                    other decentralized mining networks.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll className="lg:max-w-[400px] w-full">
                <div className="bg-white/5 rounded-xxl border-t border-t-sec-border px-7 py-8 border-b border-b-black/5 relative min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <Checkmark className="size-4 text-[#0FEDBE]" />
                    <p className="tinted text-lg font-semibold font-anybody">
                      Diversified Portfolio of PoW Assets
                    </p>
                  </div>
                  <p className="text-sm color-sec-text mt-5">
                    The fund provides access to a basket of PoW-driven digital
                    assets, mitigating single-asset risk.
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
