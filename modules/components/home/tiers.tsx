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
  

    <div suppressHydrationWarning className="tiersBG section">
      <div className="container mx-auto flex flex-col w-full px-14 max-lg:px-5 tiersSliderWrap">
        <div className="flex justify-between w-full items-start max-lg:flex-col">
          <SlideInOnScroll>
            <h2 className="uppercase font-extrabold font-anybody text-[50px] max-lg:text-[40px] max-sm:text-4xl leading-[1] text-left text-white max-sm:mb-8">
              $UNIL - The <br /> Core of the <br /> Unilabs <br />
              <SlideInOnScroll>
                <span className="gradText">Ecosystem</span>
              </SlideInOnScroll>
            </h2>
          </SlideInOnScroll>

          <div className="w-1/2 max-lg:w-full">
            <FadeInOnScroll>
              <h5 className="font-medium text-white text-[24px] max-lg:text-lg">
                To accommodate diverse investor profiles and strategies, Unilabs
                presents four distinct fund options—each leveraging top-tier
                expertise and AI-driven insights.
              </h5>
            </FadeInOnScroll>
            <SlideInOnScroll delay={0.2}>
              <p className="text-[18px] font-extralight mt-8 !text-[#DBDBDB]">
                By holding $UNIL and advancing through these tiers, you
                don&apos;t just invest—you actively shape the future of our
                AI-powered DeFi ecosystem while earning consistent returns along
                the way.
              </p>
            </SlideInOnScroll>
          </div>
        </div>

        {/* Slider Section */}
        <div className="lg:mt-[122px] mt-8 flex flex-row gap-8">
          <div className="min-w-[457px] mb-6 md:mb-0">
            <p className="gradText !text-[28px] max-w-[400px] md:text-4xl sm:text-3xl font-semibold font-anybody">
              30% Fee Redistribution & Tiered Rewards
            </p>
            <p className="mt-5 text-lg font-normal w-[85%] max-md:w-full">
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
                      <div className="w-[360px] bg-secondary h-[300px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[30px] py-[25px] px-[20px] rounded-[30px] flex flex-col gap-[20px]">
                        <div className="relative w-full min-w-[250px] h-[74px] flex items-center justify-center">
                          <span className="gradText text-2xl font-bold flex items-center justify-center w-full h-[60px] rounded-full bg-[#202832] z-30 absolute top-0">
                            {tier.tier}
                          </span>
                          <Rectangle className="absolute inset-0 z-0" />
                        </div>

                        <p className="text-[14px] font-inter font-extralight text-[#ffffff] uppercase text-center">{tier.label}</p>
                       
                        <p className="text-[18px] font-inter font-normal text-[#DBDBDB] text-center">{tier.why}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

const tiersData = [
  {
    tier: "TIER - 1",
    label: "BASE ALLOCATION",
    why: "Foundational reward for early supporters at the entry level.",
  },
  {
    tier: "TIER - 2",
    label: "Elevated Returns",
    why: "Bigger fee share for moderate presale commitments.",
  },
  {
    tier: "TIER - 3",
    label: "Mid-Level Boost ",
    why: "Balanced approach that matches a higher investment with a larger return.",
  },
  {
    tier: "TIER - 4",
    label: "Entry: 3,500,000 $UNIL tokens ",
    why: "Why It Matters: A steady share for swift divers securing liquidity.",
  },
  {
    tier: "TIER - 5",
    label: "Entry: 5,000,000 $UNIL tokens",
    why: "Why It Matters: Rewards for agile predators dominating DeFi trades.",
  },
 
];

