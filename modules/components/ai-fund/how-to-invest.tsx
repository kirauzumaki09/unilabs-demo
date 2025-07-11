import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Signup from "@/assets/otherpages/signup.svg";
import Bag from "@/assets/otherpages/bag.svg";
import Portfolio from "@/assets/otherpages/portfolio.svg";
import Blur2 from "@/assets/otherpages/invest-blur2.svg";
import Blur from "@/assets/otherpages/invest-blur.svg";
import Piggy from "@/assets/otherpages/piggy.svg";
import Plant from "@/assets/otherpages/plant.svg";
import React from "react";
import { cn } from "@/modules/utils";
import HowLineVector from "@/assets/otherpages/how-line-vector.svg";


type investList={
  label: string;
  desc: string;
  icon: React.ReactNode;
}
interface InvestProps {
investdataList: investList[];
title: string;
}

export function HowToInvest({title,investdataList}: InvestProps) {
  return (
    <section className="section relative !pb-[170px] max-xl:!pb-[100px] max-lg:!pb-[80px] max-md:!pb-[60px]">
      <div className="container mx-auto flex flex-col relative z-50">
        <SlideInOnScroll>
          <h2 className="!leading-[1] uppercase font-extrabold mx-auto font-anybody text-[80px] max-lg:text-center max-lg:text-[60px] max-md:text-[40px] max-md:mb-3 max-sm:text-[30px] max-w-[774px] mb-[68px] leading-[1.2] lg:text-center text-white">
            {title}
          </h2>
        </SlideInOnScroll>
        <div className="absolute top-[20.5%]  opacity-40 left-[5.4%] w-full z-3 pointer-events-none ">
        <HowLineVector className="w-full " />
      </div>
        <div className="w-[75%] max-xl:w-[94%] max-xl:ml-[-10%] max-lg:ml-0 relative mt-[116px] mb-0 max-md:mb-[50px] max-lg:mt-[60px] max-md:mt-5  max-lg:flex-col gap-8 max-lg:flex max-lg:justify-cente max-lg:w-full max-lg:items-center">
          {investdataList.map((data, index) => (
            <div
              key={data.label}
              className={cn(
                "flex items-center max-lg:justify-center max-lg:gap-8 flex-col max-sm:w-full",
                {
                  "lg:flex-row-reverse": index % 2 === 1,
                  "lg:-ml-10": index % 2 === 1,
                }
              )}
            >
              <SlideInOnScroll delay={index * 0.1} className="overflow-visible max-sm:w-full">
                <div
                  className={cn(
                    "bg-white/10 px-12 min-w-[384px] py-10 border-b border-b-black/5 border-t rounded- rounded-xxl border-t-sec-border max-w-[380px] max-sm:min-w-0 max-sm:rounded-[16px] max-sm:p-5 max-sm:w-full w-full relative max-sm:max-w-full",
                    {
                      "lg:rounded-br-none": index === 0,
                      "lg:rounded-tr-none": index === investData.length - 1,
                      "lg:rounded-tl-none lg:rounded-bl-none": index % 2 === 1,
                      "lg:rounded-tr-none lg:rounded-br-none": index === 2,
                    }
                  )}
                >
                  <div className="absolute -top-4 right-5 z-50">
                    <span className="py-3 px-7 font-bold bg-gradient-to-r from-accent-foreground to-primary-foreground text-primary text-[14px] rounded-[5px] font-anybody ">
                      {data.label}
                    </span>
                  </div>
                  <div className="size-16 mb-5">{data.icon}</div>
                  <p className="text-[18px]  text-[#f0f0f0] max-w-[250px]">{data.desc}</p>
                </div>
              </SlideInOnScroll>
            </div>
          ))}
          <div className="absolute -top-37 h-[123%] left-[61.8%] max-lg:hidden pointer-events-none">
            <Vector1 />
          </div>
          <div className="absolute w-full right-0 top-[30%] max-lg:w-[45%] pointer-events-none">
            <Blur2 />
          </div>
          <div className="absolute w-full left-32 -top-32 max-lg:w-[65%] pointer-events-none">
            <Blur />
          </div>
        </div>
      </div>
    </section>
  );
}

export const RWAinvestData = [
  {
    label: "Step 1",
    desc: "Sign up on Unilabs and access the AI Fund investment portal.",
    icon: <Signup />,
  },
  {
    label: "Step 2",
    desc: "Choose your investment amount (minimum $50 or crypto equivalent).",
    icon: <Bag />,
  },
  {
    label: "Step 3",
    desc: "Deposit funds via crypto or fiat payment options.",
    icon: <Piggy />,
  },
  {
    label: "Step 4",
    desc: "Your investment is automatically allocated and managed by smart contracts.",
    icon: <Plant />,
  },
  {
    label: "Step 5",
    desc: "Track your portfolio through the Unilabs dashboard.",
    icon: <Portfolio />,
  },
];

export const BTCinvestData = [
  {
    label: "Step 1",
    desc: "Sign up on Unilabs and access the AI Fund investment portal.",
    icon: <Signup />,
  },
  {
    label: "Step 2",
    desc: "Choose your investment amount (minimum $50 or crypto equivalent).",
    icon: <Bag />,
  },
  {
    label: "Step 3",
    desc: "Deposit funds via crypto or fiat payment options.",
    icon: <Piggy />,
  },
  {
    label: "Step 4",
    desc: "Your investment is automatically allocated and managed by smart contracts.",
    icon: <Plant />,
  },
  {
    label: "Step 5",
    desc: "Track your portfolio through the Unilabs dashboard.",
    icon: <Portfolio />,
  },
];

export const mininginvestData = [
  {
    label: "Step 1",
    desc: "Sign up on Unilabs and access the AI Fund investment portal.",
    icon: <Signup />,
  },
  {
    label: "Step 2",
    desc: "Choose your investment amount (minimum $50 or crypto equivalent).",
    icon: <Bag />,
  },
  {
    label: "Step 3",
    desc: "Deposit funds via crypto or fiat payment options.",
    icon: <Piggy />,
  },
  {
    label: "Step 4",
    desc: "Your investment is automatically allocated and managed by smart contracts.",
    icon: <Plant />,
  },
  {
    label: "Step 5",
    desc: "Track your portfolio through the Unilabs dashboard.",
    icon: <Portfolio />,
  },
];

export const investData = [
  {
    label: "Step 1",
    desc: "Sign up on Unilabs and access the AI Fund investment portal.",
    icon: <Signup />,
  },
  {
    label: "Step 2",
    desc: "Choose your investment amount (minimum $50 or crypto equivalent).",
    icon: <Bag />,
  },
  {
    label: "Step 3",
    desc: "Deposit funds via crypto or fiat payment options.",
    icon: <Piggy />,
  },
  {
    label: "Step 4",
    desc: "Let AI handle the rest – your investment is automatically allocated and managed by smart contracts.",
    icon: <Plant />,
  },
  {
    label: "Step 5",
    desc: "Track your portfolio through the Unilabs dashboard.",
    icon: <Portfolio />,
  },
];

function Vector1() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 103 1463"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="52.5"
        y1="53"
        x2="52.4999"
        y2="1463"
        stroke="url(#paint0_linear_17_2061)"
        strokeWidth="3"
      />
      <g filter="url(#filter0_f_17_2061)">
        <circle cx="51.5" cy="51.5" r="17.5" fill="#2EC6ED" />
      </g>
      <circle cx="51.5" cy="51.5" r="13.5" fill="#2EC6ED" />
      <g filter="url(#filter1_f_17_2061)">
        <circle cx="51.5" cy="51.5" r="12.5" fill="#00FFE2" />
      </g>
      <circle cx="51.5" cy="51.5" r="8.5" fill="white" />
      <defs>
        <filter
          id="filter0_f_17_2061"
          x="0"
          y="0"
          width="103"
          height="103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="17"
            result="effect1_foregroundBlur_17_2061"
          />
        </filter>
        <filter
          id="filter1_f_17_2061"
          x="34"
          y="34"
          width="35"
          height="35"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            result="effect1_foregroundBlur_17_2061"
          />
        </filter>
        <linearGradient
          id="paint0_linear_17_2061"
          x1="50.5"
          y1="53"
          x2="50.4999"
          y2="1463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2EC5ED" />
          <stop offset="1" stopColor="#1CE0C8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
