"use client";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import Rectangle from "@/assets/Rectangle.svg";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import Chevron from "@/assets/chevron.svg";

export function Tiers() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= (tiersData.length || 0) - 1;

  function SamplePrevArrow(props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }) {
    if (isAtStart) return null;
    return (
      <div
        className={`${props.className} cursor-pointer`}
        style={{
          ...props.style,
          top: "50%",
          left: "-10px",
          width: "36px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
        onClick={props.onClick}
      >
        <div className="bg-gradient-to-l from-transparent text-white to-black/75 w-16 h-[100%] flex items-center justify-center">
          <Chevron className="size-6 transform rotate-90 text-[#04EEE2]" />
        </div>
      </div>
    );
  }

  function SampleNextArrow(props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }) {
    if (isAtEnd) return null;
    return (
      <div
        className={`${props.className} cursor-pointer`}
        style={{
          ...props.style,
          top: "50%",
          left: "97.5%",
          width: "36px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 1000,
          transform: "translateY(-50%)",
          pointerEvents: "auto",
        }}
        onClick={props.onClick}
      >
        <div className="bg-gradient-to-r from-transparent text-white to-black/75 w-16 h-[100%] flex items-center justify-center">
          <Chevron className="size-6 transform -rotate-90 text-[#04EEE2]" />
        </div>
      </div>
    );
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    draggable: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
        },
      },
    ],
  };

  return (
    <section suppressHydrationWarning>
      <div className="max-w-[1529px] mx-auto flex flex-col w-full px-14 max-lg:px-5 tiers">
        <div className="flex justify-between w-full items-start max-lg:flex-col">
          <SlideInOnScroll>
            <h4 className="uppercase font-extrabold font-anybody text-[4.5625rem] max-lg:text-5xl max-sm:text-4xl sm:leading-[90px] text-left text-white max-sm:mb-8">
              $UNIL - The <br /> Core of the <br /> Unilabs <br />
              <SlideInOnScroll>
                <span className="tinted">Ecosystem</span>
              </SlideInOnScroll>
            </h4>
          </SlideInOnScroll>

          <div className="w-1/2 max-lg:w-full">
            <FadeInOnScroll>
              <h5 className="font-medium text-muted text-[2rem] max-lg:text-lg">
                To accommodate diverse investor profiles and strategies, Unilabs
                presents four distinct fund options—each leveraging top-tier
                expertise and AI-driven insights.
              </h5>
            </FadeInOnScroll>
            <SlideInOnScroll delay={0.2}>
              <p className="text-lg font-extralight mt-10">
                By holding $UNIL and advancing through these tiers, you
                don&apos;t just invest—you actively shape the future of our
                AI-powered DeFi ecosystem while earning consistent returns along
                the way.
              </p>
            </SlideInOnScroll>
          </div>
        </div>

        {/* Slider Section */}
        <div className="lg:mt-[122px] mt-8 flex flex-col gap-6">
          <div className="md:min-w-[35%] mb-6 md:mb-0">
            <p className="tinted text-4xl font-semibold">
              30% Fee Redistribution & Tiered Rewards
            </p>
            <p className="mt-5 text-lg font-normal w-[50%] max-md:w-full">
              To reward our community, 30% of total fees generated on the
              platform are redistributed to $UNIL holders via a five-tier
              system. The higher your presale entry, the greater your share of
              the fee pool.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="w-full relative">
              {isMounted && (
                <Slider {...settings} className="w-full relative">
                  {tiersData.map((tier) => (
                    <div key={tier.tier} className="px-3">
                      <div className="w-[300px] bg-secondary h-[350px] bg-gradient-to-r from-[#000000]/25 to-[#54708F]/60 via-75% p-4 border-t border-t-[#54708F] rounded-[30px] flex flex-col gap-8">
                        <div className="relative w-full min-w-[250px] h-[72px] flex items-center justify-center">
                          <span className="tinted text-2xl font-bold flex items-center justify-center w-full h-[60px] rounded-full bg-[#202832] z-30 absolute top-0">
                            {tier.tier}
                          </span>
                          <Rectangle className="absolute inset-0 z-0" />
                        </div>

                        <p className="text-sm text-center">{tier.label}</p>
                        <p className="text-lg text-center">
                          {tier.description}
                        </p>
                        <p className="text-lg text-center">{tier.why}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const tiersData = [
  {
    tier: "Tier 1: The Sparrow",
    label: "Entry: 500,000 $UNIL tokens",
    description: "Reward Share: 0.1% of the total fee pool.",
    why: "Why It Matters: A swift entry for those taking flight in the DeFi skies.",
  },
  {
    tier: "Tier 2: The Kestrel",
    label: "Entry: 1,000,000 $UNIL tokens",
    description: "Reward Share: 0.15% of the total fee pool.",
    why: "Why It Matters: A keen reward for hovering over early opportunities.",
  },
  {
    tier: "Tier 3: The Hawk",
    label: "Entry: 2,000,000 $UNIL tokens ",
    description: "Reward Share: 0.2% of the total fee pool.",
    why: "Why It Matters: Recognition for sharp hunters stalking DeFi gains.",
  },
  {
    tier: "Tier 4: The Falcon",
    label: "Entry: 3,500,000 $UNIL tokens ",
    description: "Reward Share: 0.3% of the total fee pool.",
    why: "Why It Matters: A steady share for swift divers securing liquidity.",
  },
  {
    tier: "Tier 5: The Harrier",
    label: "Entry: 5,000,000 $UNIL tokens",
    description: "Reward Share: 0.5% of the total fee pool.",
    why: "Why It Matters: Rewards for agile predators dominating DeFi trades.",
  },
  {
    tier: "Tier 6: The Osprey",
    label: "Entry: 7,500,000 $UNIL tokens",
    description: "Reward Share: 0.75% of the total fee pool.",
    why: "Why It Matters: A strong share for those plunging into asset pools.",
  },
  {
    tier: "Tier 7: The Kite",
    label: "Entry: 10,000,000 $UNIL tokens",
    description: "Reward Share: 1% of the total fee pool.",
    why: "Why It Matters: Incentives for soaring high above the competition.",
  },
  {
    tier: "Tier 8: The Vulture",
    label: "Entry: 15,000,000 $UNIL tokens",
    description: "Reward Share: 1.5% of the total fee pool.",
    why: "Why It Matters: A bold reward for scavenging market inefficiencies.",
  },
  {
    tier: "Tier 9: The Owl",
    label: "Entry: 20,000,000 $UNIL tokens",
    description: "Reward Share: 3% of the total fee pool.",
    why: "Why It Matters: A wise share for silent rulers of the DeFi night.",
  },
  {
    tier: "Tier 10: The Eagle",
    label: "Entry: 30,000,000 $UNIL tokens",
    description: "Reward Share: 5% of the total fee pool.",
    why: "Why It Matters: Majestic rewards for eagles commanding the skies.",
  },
  {
    tier: "Tier 11: The Condor",
    label: "Entry: 40,000,000 $UNIL tokens",
    description: "Reward Share: 7.5% of the total fee pool.",
    why: "Why It Matters: Near-top rewards for condors soaring over the fund.",
  },
  {
    tier: "Tier 12: The Phoenix",
    label: "Entry: 50,000,000 $UNIL tokens",
    description: "Reward Share: 10% of the total fee pool.",
    why: "Why It Matters: The ultimate tier for phoenixes rising supreme in DeFi.",
  },
];

