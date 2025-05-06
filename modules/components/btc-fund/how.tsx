import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Blur2 from "@/assets/otherpages/how-blur-2.svg";
import Blur from "@/assets/otherpages/how-blur.svg";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import { cn } from "@/modules/utils";

export function How() {
  return (
    <section className="relative">
      <div className="absolute w-[35%] left-0 -top-[28%]">
        <Blur />
      </div>
      <div className="absolute w-[35%] max-sm:w-[65%] right-0 top-[25%] rotate-180">
        <Blur />
      </div>
      <div className="max-w-[1529px] mx-auto flex flex-col gap-8 relative px-14 max-lg:px-5">
        <SlideInOnScroll>
          <h4 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center leading-[100%] text-white">
            How the BTC Fund
          </h4>
        </SlideInOnScroll>
        <SlideInOnScroll delay={0.2}>
          <h4 className="uppercase font-extrabold font-anybody text-7xl max-lg:text-5xl max-sm:text-3xl lg:text-center text-white -mt-3 leading-[90px]">
            Works
          </h4>
        </SlideInOnScroll>
        <div className="flex gap-[30px] justify-center w-full items-center relative">
          <div className="absolute w-[75%] max-sm:w-full">
            <Blur2 />
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px]">
            {howData.map((data, index) => (
              <div
                key={data.title}
                className={`bg-white/10 relative overflow-hidden backdrop-blur-[50px] rounded-[50px] ${
                  index === howData.length - 1
                    ? "col-span-2 max-md:col-span-1 w-full min-h-[250px]"
                    : "max-w-[550px] min-h-[380px]"
                } w-full p-11 border-b border-b-black/5 border-t border-t-sec-border`}
              >
                <p className="gradText text-lg font-semibold font-anybody pb-8 w-[55%] max-lg:w-full">
                  {data.title}
                </p>
                {data.sub && <p className="pb-5">{data.sub}</p>}
                <div className="flex flex-col gap-3">
                  {data.label.map((item, index) =>
                    typeof item === "string" ? (
                      <p key={index}>{item}</p>
                    ) : (
                      <div key={index} className="flex items-start gap-2">
                        <div className="min-w-5">
                          <Checkmark className="size-4 text-[#0FEDBE]" />
                        </div>

                        <p>
                          <span className="font-bold text-secondary-foreground">
                            {item.pre}
                          </span>{" "}
                          {item.desc}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <p
                  className={cn(
                    "font-anybody text-white/5 text-[180px] top-[50%] font-extrabold absolute right-1",
                    {
                      "top-[20%]": index === howData.length - 1,
                    }
                  )}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const howData = [
  {
    title: "Strategic Bitcoin Allocation",
    label: [
      {
        pre: "",
        desc: "The BTC Fund maintains a core Bitcoin position while incorporating yield-generating BTC assets to optimize returns.",
      },
      {
        pre: "",
        desc: "The fund actively tracks liquidity trends, derivatives market performance, and institutional adoption to ensure dynamic exposure.",
      },
    ],
  },
  {
    title: "Intelligent Asset Selection",
    sub: "Each BTC-related asset is evaluated based on:",
    label: [
      {
        pre: "Liquidity & Security –",
        desc: "Does the asset maintain strong market depth and institutional-grade security?",
      },
      {
        pre: "Yield Potential – ",
        desc: "Can it generate sustainable BTC-denominated yield through liquid staking or derivatives strategies?",
      },
      {
        pre: "Market Integration –",
        desc: "Does it align with long-term Bitcoin adoption and investment trends?",
      },
    ],
  },
  {
    title: "Data-Driven Investment Allocation",
    sub: "Each PoW asset is evaluated based on:",
    label: [
      {
        pre: "Security & Network Strength – ",
        desc: "How decentralized and resistant to attacks is the blockchain?",
      },
      {
        pre: "Mining Profitability & Hash Rate Trends –",
        desc: "Is mining activity growing, and is the network economically sustainable?",
      },
      {
        pre: "Adoption & Utility – ",
        desc: "Does the asset have strong transaction volume and use cases?",
      },
    ],
  },
  {
    title: "Optimized Portfolio Balancing",
    label: [
      {
        pre: "",
        desc: "Capital is dynamically allocated across BTC categories based on market conditions, demand for yield, and macroeconomic trends.",
      },
      {
        pre: "",
        desc: "The fund balances between spot BTC holdings, derivatives, and liquid staking solutions to capture value while reducing downside risk.",
      },
    ],
  },
  {
    title: "Continuous Monitoring & Adjustments",
    label: [
      {
        pre: "",
        desc: "Capital is dynamically allocated across BTC categories based on market conditions, demand for yield, and macroeconomic trends.",
      },
    ],
  },
];
