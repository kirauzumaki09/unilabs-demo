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
          <h2 className="font-bold font-anybody !leading-[1] text-[180px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[50px] uppercase whitespace-nowrap max-w-[867px] text-white leading-[163px]">
            Why Invest <br /> in the
            <br /> Mining
            <br /> Fund?
          </h2>
        </FadeInOnScroll>
        <div className="flex items-center gap-[30px] relative max-lg:flex-col">
        <FadeInOnScroll className="lg:max-w-[489px] w-full">
            <div className="whyfund-card">
              <div className="whyfund-head-wrap">
                <Checkmark className="checkmark" />
                <p>Algorithmically Managed & Optimized</p>
              </div>
              <p>
                Investments are actively rebalanced based on real-time network
                security, hash rate trends, and market performance.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="flex gap-[30px] relative w-full max-lg:flex-col">
            <div className="flex flex-col gap-7">
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />

                    <p>Capture Value from Mining Economics</p>
                  </div>
                  <p>
                    As network adoption, transaction fees, and hash rates grow,
                    PoW assets tend to appreciate. The fund strategically holds
                    high-value mining-backed cryptocurrencies.
                  </p>
                </div>
              </FadeInOnScroll>
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Long-Term Store of Value Exposure</p>
                  </div>
                  <p>
                    PoW networks are widely regarded as the most decentralized,
                    censorship-resistant, and durable blockchain
                    infrastructures.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-7 lg:absolute left-[44%] -top-[54%]">
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />

                    <p>Exposure to the Most Secure Blockchains</p>
                  </div>
                  <p>
                    The Mining Fund allocates capital across battle-tested PoW
                    assets like Bitcoin (BTC), Litecoin (LTC), Kaspa (KAS), and
                    other decentralized mining networks.
                  </p>
                </div>
              </FadeInOnScroll>
            <FadeInOnScroll className="lg:max-w-[489px] w-full">
                <div className="whyfund-card">
                  <div className="whyfund-head-wrap">
                    <Checkmark className="checkmark" />
                    <p>Diversified Portfolio of PoW Assets</p>
                  </div>
                  <p>
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
