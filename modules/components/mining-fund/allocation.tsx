import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Ecosystem from "@/assets/otherpages/ecosystem.svg";
import Digger from "@/assets/otherpages/mining-digger.svg";
import MachineLearning from "@/assets/otherpages/machilne-learning.svg";
import Blur2 from "@/assets/otherpages/allocation-blur2.svg";
import Blur from "@/assets/otherpages/allocation-blur.svg";
import Fee from "@/assets/otherpages/fee.svg";
import React from "react";
import Button from "@/modules/app/button";

export function Allocation() {
  return (
    <section className="relative">
      <div className="max-w-[1529px] mx-auto flex flex-col gap-8 relative px-14 max-lg:px-5">
        <SlideInOnScroll>
          <h4 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center text-white">
            Fund allocation
          </h4>
        </SlideInOnScroll>
        <SlideInOnScroll delay={0.2}>
          <h4 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center text-white -mt-3 leading-[90px]">
            Strategy
          </h4>
        </SlideInOnScroll>
        <div className="flex items-center justify-center">
          <FadeInOnScroll className="flex items-center justify-center">
            <p className="text-lg w-full max-md:w-full lg:text-center text-sec-text -mt-12">
              The Mining Fund strategically diversifies across key PoW
              blockchain categories:
            </p>
          </FadeInOnScroll>
        </div>
        <div className="flex gap-[30px] justify-center w-full items-center relative flex-col">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-[30px]">
            {allocationData.map((data, index) => (
              <FadeInOnScroll key={data.label} delay={index * 0.2}>
                <div className="bg-white/10 relative overflow-hidden gap-4 backdrop-blur-[50px] rounded-[50px] max-w-[550px] w-full p-11 border-b border-b-black/5 border-t border-t-sec-border min-h-[380px] flex items-center justify-center flex-col max-h-[350px]">
                  <p className="gradText text-lg font-semibold font-anybody pb-4 w-[95%] text-center">
                    {data.label}
                  </p>
                  <div className="flex items-center justify-center w-full">
                    <div className="size-20">{data.icon}</div>
                  </div>
                  <p className="text-center text-[#F8F8F8]">{data.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <Button>
            Invest Now
          </Button>
          <div className="absolute w-[95%] left-0 -z-10">
            <Blur />
          </div>
        </div>
      </div>
      <div className="absolute w-[65%] right-0 top-0">
        <Blur2 />
      </div>
    </section>
  );
}

const allocationData = [
  {
    label: "Core PoW Networks",
    desc: "Direct investment in Bitcoin (BTC), Litecoin (LTC), and other leading mining-backed assets.",
    icon: <MachineLearning />,
  },
  {
    label: "Emerging PoW Ecosystems",
    desc: "Select allocation in newer, high-growth PoW chains like Kaspa (KAS), Ergo (ERG), and Nervos (CKB).",
    icon: <Ecosystem />,
  },
  {
    label: "Mining Infrastructure Tokens",
    desc: "Exposure to assets that power the mining economy, such as decentralized computing resources and energy-efficient mining networks.",
    icon: <Digger />,
  },
  {
    label: "Hash Rate & Fee-Based Assets",
    desc: "Investments in projects that benefit from increased network transaction fees and security incentives.",
    icon: <Fee />,
  },
];
