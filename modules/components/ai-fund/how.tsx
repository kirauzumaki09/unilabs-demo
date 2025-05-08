import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Blur2 from "@/assets/otherpages/how-blur-2.svg";
import Blur from "@/assets/otherpages/how-blur.svg";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import HowLineVector from  "@/assets/otherpages/how-line-vector.svg"

export function How() {
  return (
    <section className="relative pb-[170px]">

      <div className="absolute -top-[18.5%] left-[5.4%] w-full z-3 pointer-events-none">
        <HowLineVector className='w-full' />
      </div>

      <div className="absolute w-[35%] left-0 -top-[28%]">
        <Blur />
      </div>
      <div className="absolute w-[35%] max-sm:w-[65%] right-0 top-[25%] rotate-180">
        <Blur />
      </div>
      <div className="container mx-auto flex flex-col relative px-14 max-lg:px-5">
        <SlideInOnScroll>
          <h4 className="uppercase font-extrabold font-anybody text-[80px] max-w-[737px] mx-auto mb-[60px] max-lg:text-5xl max-sm:text-3xl lg:text-center leading-[1.1] text-white">
            How the AI Fund Works
          </h4>
        </SlideInOnScroll>
        <div className="flex gap-[30px] justify-center w-full items-center relative">
          <div className="absolute w-[75%] max-sm:w-full">
            <Blur2 />
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px]">
            {howData.map((data, index) => (
              <div key={data.title} className="how-card">
                <p className="how-card-head"> {data.title}</p>
                {data.sub && <p className="how-card-sub-head">{data.sub}</p>}
                <div className="list-wrap">
                  {data.label.map((item, index) =>
                    typeof item === "string" ? (
                      <p key={index}>{item}</p>
                    ) : (
                      <div key={index} className="list-item">
                        <div className="checkmark">
                          <Checkmark className="size-4 text-[#0FEDBE]" />
                        </div>

                        <p>
                          <span>
                            {item.pre}
                          </span>{" "}
                          {item.desc}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <p className="big-text">
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
    title: "Intelligent Asset Discovery",
    label: [
      "AI continuously scans the market, identifying early-stage blockchain projects integrating machine learning, AI trading, and smart contract automation.",
    ],
  },
  {
    title: "Data-Backed Investment Selection",
    sub: "Every project is evaluated based on:",
    label: [
      {
        pre: "AI Integration – ",
        desc: "Does the project genuinely utilize AI for innovation?",
      },
      {
        pre: "AI Integration – ",
        desc: "Does the project genuinely utilize AI for innovation?",
      },
      {
        pre: "Token Utility & Market Potential –",
        desc: "How does it create value in the AI and blockchain ecosystem?",
      },
      {
        pre: "Security & Smart Contract Auditing – ",
        desc: " Is the code secure and free from vulnerabilities?",
      },
    ],
  },
  {
    title: "Algorithmic Portfolio Allocation",
    label: [
      {
        pre: "",
        desc: "Capital is automatically deployed into a diversified selection of AI-integrated crypto assets.",
      },
      {
        pre: "",
        desc: "The portfolio adjusts dynamically based on real-time AI insights, sentiment analysis, and market trends.",
      },
    ],
  },
  {
    title: "Continuous Monitoring & Optimization",
    label: [
      {
        pre: "",
        desc: "AI tracks and rebalances the portfolio in real time, optimizing performance based on volatility, liquidity, and adoption trends.",
      },
      {
        pre: "",
        desc: "Investors can track fund performance via the Unilabs dashboard.",
      },
    ],
  },
];
