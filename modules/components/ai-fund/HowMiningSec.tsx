import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Blur2 from "@/assets/otherpages/how-blur-2.svg";
import Blur from "@/assets/otherpages/how-blur.svg";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";
import HowLineVector from "@/assets/otherpages/how-line-vector.svg";

type HowItem =
  | {
      title: string;
      sub?: undefined;
      label: string[];
    }
  | {
      title: string;
      sub?: string;
      label: {
        pre: string;
        desc: string;
      }[];
    };

interface HowSectionProps {
  howdata: HowItem[];
  title: string;
}

export function HowMiningSec( {howdata,title}: HowSectionProps) {
  return (
    <section className="relative section pb-[170px]">
      <div className="absolute -top-[18.5%] left-[5.4%] w-full z-3 pointer-events-none">
        <HowLineVector className="w-full" />
      </div>

      <div className="absolute w-[35%] left-0 -top-[28%]">
        <Blur />
      </div>
      <div className="absolute w-[35%] max-sm:w-[65%] right-0 top-[25%] rotate-180">
        <Blur />
      </div>
      <div className="container mx-auto flex flex-col relative px-14 max-lg:px-5">
        <SlideInOnScroll>
          <h2 className="uppercase font-extrabold font-anybody text-[80px] max-w-[737px] mx-auto mb-[60px] max-lg:text-5xl max-sm:text-3xl lg:text-center leading-[1.1] text-white">
        {title}
          </h2>
        </SlideInOnScroll>
        <div className="flex gap-[30px] justify-center w-full items-center relative">
          <div className="absolute w-[75%] max-sm:w-full">
            <Blur2 />
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px]">
            {howdata.map((data, index) => (
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
                          <span>{item.pre}</span> {item.desc}
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

export const howDataList = [
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
export const BTChowData = [
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

export const RWAhowData = [
  {
    title: "Intelligent RWA Selection",
    label: [
      {
        pre: "",
        desc: "The fund carefully selects high-value tokenized real-world assets, focusing on on-chain real estate, yield-bearing debt markets, and tokenized commodities.",
      },
      {
        pre: "",
        desc: "Assets are evaluated for regulatory compliance, liquidity potential, and long-term yield performance.",
      },
    ],
  },
  {
    title: " Institutional-Grade Asset Allocation",
    sub: "Each RWA is assessed based on:",
    label: [
      {
        pre: "Asset Backing & Real-World Utility –",
        desc: "Does the token represent a legally recognized real-world asset?",
      },
      {
        pre: "Yield Potential & Market Demand –",
        desc: "Is the asset structured to provide stable and reliable returns?",
      },
      {
        pre: "Liquidity & Compliance – ",
        desc: "Does the asset offer on-chain liquidity while meeting regulatory standards?",
      },
    ],
  },
  {
    title: "Optimized Portfolio Balancing",
    label: [
      {
        pre: "",
        desc: "The fund allocates capital across different RWA categories to balance risk and maximize yield.",
      },
      {
        pre: "",
        desc: "Real-time adjustments are made based on interest rate trends, market demand, and asset liquidity.",
      },
      {
        pre: "",
        desc: "Token supply mechanics and halving cycles",
      },
    ],
  },
  {
    title: "Continuous Monitoring & Performance Adjustments",
    label: [
      {
        pre: "",
        desc: "The portfolio is actively managed to ensure optimal exposure to stable, income-generating RWAs.",
      },
      {
        pre: "",
        desc: "Investors can track fund performance, asset breakdowns, and yield generation through the Unilabs dashboard.",
      },
    ],
  },
];

