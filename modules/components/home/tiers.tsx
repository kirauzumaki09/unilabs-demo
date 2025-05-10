"use client";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Tiers() {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    // arrows: true,
    // autoplay: true,
   
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div suppressHydrationWarning className="tiersBG section">
      <div className="container mx-auto flex flex-col w-full px-14 max-lg:px-5 tiersSliderWrap">
        <div className="flex justify-between w-full items-start max-lg:flex-col">
          <SlideInOnScroll>
            <h2 className="uppercase font-extrabold max-md:hidden font-anybody text-[50px] max-lg:text-[40px] max-sm:text-4xl leading-[1] text-left text-white max-lg:mb-4">
              $UNIL - The <br /> Core of the <br /> Unilabs <br />
              <SlideInOnScroll>
                <span className="gradText !uppercase">Ecosystem</span>
              </SlideInOnScroll>
            </h2>
          </SlideInOnScroll>

          <h2 className=" hidden max-lg:block !uppercase font-extrabold font-anybody text-[50px] max-lg:text-[40px] max-sm:text-4xl leading-[1] text-left text-white max-lg:mb-4">
            $UNIL - The Core of the Unilabs
            <span className="gradText !uppercase"> Ecosystem</span>
          </h2>

          <div className="w-1/2 max-lg:w-full">
            <FadeInOnScroll>
              <h5 className="font-medium capitalize text-white text-[24px] max-lg:text-lg">
                To accommodate diverse investor profiles and strategies, Unilabs
                presents four distinct fund options—each leveraging top-tier
                expertise and AI-driven insights.
              </h5>
            </FadeInOnScroll>
            <SlideInOnScroll delay={0.2}>
              <p className="text-[18px] capitalize font-extralight mt-8 !text-[#DBDBDB]">
                By holding $UNIL and advancing through these tiers, you
                don&apos;t just invest—you actively shape the future of our
                AI-powered DeFi ecosystem while earning consistent returns along
                the way.
              </p>
            </SlideInOnScroll>
          </div>
        </div>

        {/* Slider Section */}
        <div className="lg:mt-[122px] mt-8 flex flex-row gap-8 max-lg:flex-col">
          <div className="min-w-[457px] mb-6 md:mb-0 max-md:w-full max-md:min-w-0">
            <p className="gradText capitalize !text-[28px] max-w-[400px] md:text-4xl sm:text-3xl font-semibold font-anybody">
              30% Fee Redistribution & Tiered Rewards
            </p>
            <p className="mt-5 capitalize text-lg font-normal w-[85%] max-md:w-full">
              To reward our community, 30% of total fees generated on the
              platform are redistributed to $UNIL holders via a five-tier
              system. The higher your presale entry, the greater your share of
              the fee pool.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="w-full relative">
              <Slider
                {...settings}
                className="w-full relative customSlidertier max-w-[1170px]"
              >
                {tiersData.map((tier) => (
                  <div key={tier.tier} className="">
                    <div className="max-w-[360px] max-sm:max-w-full w-full bg-secondary min-h-[340px] max-lg:h-[250px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[30px] py-[25px] px-[20px] rounded-[30px] flex flex-col gap-[20px]">
                      <div className="relative shadow-[inset_0px_2px_14px_#0FEDBE]  backdrop-blur-[60px] rounded-[60px] w-full min-w-[250px] max-md:min-w-0 h-[74px] max-lg:justify-center max-lg:h-[50px] flex items-center justify-center">
                        <span className="gradText relative z-[99] text-[24px] max-sm:text-[20px] font-bold flex items-center justify-center w-full h-full rounded-full  z-30 absolute top-0">
                          {tier.tier}
                        </span>
                      </div>

                      <p className="text-[14px] font-inter font-extralight text-[#ffffff] uppercase text-center">
                        {tier.label}
                      </p>
                      <p className="text-[14px] font-inter font-extralight text-[#ffffff] uppercase text-center">
                        {tier.label2}
                      </p>

                      <p className="text-[18px] font-inter font-normal text-[#DBDBDB] text-center">
                        {tier.why}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tiersData = [
  {
    tier: "TIER - 1 : The Sparrow",
    label: "Entry: 50,000 $UNIL tokens ",
    label2: "Reward Share: 0.1% of the total fee pool. ",
    why: "Why It Matters: A swift entry for those taking flight in the DeFi skies.",
  },
  {
    tier: "TIER - 2 : The Kestrel",
    label: "Entry: 1,00,000 $UNIL tokens ",
    label2: "Reward Share: 0.15% of the total fee pool. ",
    why: "Why It Matters: A keen reward for hovering over early opportunities.",
  },
  {
    tier: "TIER - 3 : The Hawk",
    label: "Entry: 2,00,000 $UNIL tokens ",
    label2: "Reward Share: 0.2% of the total fee pool. ",
    why: "Why It Matters: Recognition for sharp hunters stalking DeFi gains.",
  },
  {
    tier: "TIER - 4 : The Falcon",
    label: "Entry: 3,500,000 $UNIL tokens ",
    label2: "Reward Share: 0.3% of the total fee pool. ",
    why: "Why It Matters: A steady share for swift divers securing liquidity.",
  },
  {
    tier: "TIER - 5 : The Harrier",
    label: "Entry: 5,000,000 $UNIL tokens",
    label2: "Reward Share: 0.5% of the total fee pool. ",
    why: "Why It Matters: Rewards for agile predators dominating DeFi trades.",
  },
  {
    tier: "TIER - 6 : The Osprey",
    label: "Entry: 7,500,000 $UNIL tokens",
    label2: "Reward Share: 0.75% of the total fee pool. ",
    why: "Why It Matters: A strong share for those plunging into asset pools.",
  },
  {
    tier: "TIER - 7 : The Kite",
    label: "Entry: 10,000,000 $UNIL tokens",
    label2: "Reward Share: 1% of the total fee pool. ",
    why: "Why It Matters: Incentives for soaring high above the competition.",
  },
  {
    tier: "TIER - 8 : The Vulture",
    label: "Entry: 15,000,000 $UNIL tokens",
    label2: "Reward Share: 1.5% of the total fee pool. ",
    why: "Why It Matters: A bold reward for scavenging market inefficiencies.",
  },

  {
    tier: "TIER - 9 : The Owl",
    label: "Entry: 20,000,000 $UNIL tokens",
    label2: "Reward Share: 3% of the total fee pool. ",
    why: "Why It Matters: A wise share for silent rulers of the DeFi night.",
  },
  {
    tier: "TIER - 10 : The Eagle",
    label: "Entry: 30,000,000 $UNIL tokens",
    label2: "Reward Share: 5% of the total fee pool. ",
    why: "Why It Matters: Majestic rewards for eagles commanding the skies.",
  },
  {
    tier: "TIER - 11 : The Condor",
    label: "Entry: 40,000,000 $UNIL tokens",
    label2: "Reward Share: 7.5% of the total fee pool. ",
    why: "Why It Matters: Near-top rewards for condors soaring over the fund.",
  },
  {
    tier: "TIER - 12 : The Pheonix",
    label: "Entry: 50,000,000 $UNIL tokens",
    label2: "Reward Share: 10% of the total fee pool. ",
    why: "Why It Matters: The ultimate tier for phoenixes rising supreme in DeFi.",
  },
];
