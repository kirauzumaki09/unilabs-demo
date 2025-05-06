"use client";
import Section from "@/modules/app/section";
import { Title } from "@/modules/app/title";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import Checkmark from "@/assets/checkmark.svg";
import { cn } from "@/modules/utils";
import Blur1 from '@/assets/blur5.svg'
import Blur2 from '@/assets/blur6.svg'
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";

// ✅ Roadmap Item Component
const RoadmapItem = React.forwardRef<
  HTMLDivElement,
  {
    roadmap: RoadmapData;
    index: number;
    setActiveIndex: (index: number) => void;
  }
>(({ roadmap, index, setActiveIndex }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  return (
    <motion.div
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        inViewRef(node);
      }}
      className="flex lg:mb-20 mb-[125px] gap-[325px] max-lg:flex-col max-lg:gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-right font-anybody text-[40px] max-lg:text-4xl mr-6 w-90 max-lg:w-full max-lg:text-left">
        <p className="text-white">{roadmap.label}</p>
        <p>{roadmap.title}</p>
      </div>
      <div className="ml-6 flex flex-col justify-center">
        <ul>
          {roadmap.description.map((item) => (
            <li key={item} className="mb-[20px] text-xl flex items-center gap-4">
              <Checkmark
                className={cn("size-5", { "text-[#0FEDBE]": inView })}
              />{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
});
RoadmapItem.displayName = "RoadmapItem";

// ✅ Main Roadmap Component
export function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const itemRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Update SVG height based on container height
  useEffect(() => {
    if (containerRef.current) {
      setSvgHeight(containerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setSvgHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update progress line
  useEffect(() => {
    if (svgHeight > 0) {
      controls.start({
        height: `${
          (activeIndex / (roadmapData.length - 1)) * (svgHeight - 100)
        }px`,
      });
    }
  }, [activeIndex, controls, svgHeight]);

  return (
    <div className="relative section roadmapBg">
      <SlideInOnScroll>
        <Title text="Roadmap" className="!text-[80px] max-lg:!text-[60px] max-md:!text-[50px] max-sm:!text-[40px] !uppercase" />
      </SlideInOnScroll>
      <div className="mt-20 flex items-center justify-center">
        <div className="relative flex" ref={containerRef}>
          {/* SVG Line */}
          <div className="absolute left-[48%] -translate-x-1/2 top-0 h-full max-lg:hidden">
            {svgHeight > 0 && (
              <RoadmapSVG
                progressControls={controls}
                activeIndex={activeIndex}
                height={svgHeight}
                itemRefs={itemRefs}
              />
            )}
          </div>

          {/* Roadmap Items */}
          <div>
            {roadmapData.map((roadmap, index) => {
              if (!itemRefs.current[index]) {
                // @ts-expect-error animation controls
                itemRefs.current[index] = React.createRef<HTMLDivElement>();
              }

              return (
                <RoadmapItem
                  key={index}
                  index={index}
                  roadmap={roadmap}
                  ref={itemRefs.current[index]}
                  setActiveIndex={setActiveIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    
    </div>
  );
}

// ✅ SVG Progress Line
export function RoadmapSVG({
  progressControls,
  activeIndex,
  height,
  itemRefs,
}: {
  progressControls: AnimationControls;
  activeIndex: number;
  height: number;
  itemRefs: React.RefObject<React.RefObject<HTMLDivElement>[]>;
}) {
  const [circlePositions, setCirclePositions] = useState<number[]>([]);

  // Calculate circle positions based on RoadmapItem positions
  useEffect(() => {
    const positions: number[] = [];
    if (itemRefs.current) {
      itemRefs.current.forEach((itemRef) => {
        if (itemRef && itemRef.current) {
          const itemRect = itemRef.current.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          positions.push(itemCenter);
        }
      });

      // Normalize positions relative to first item
      if (positions.length > 0) {
        const firstPos = positions[0];
        const normalizedPositions = positions.map((pos) => pos - firstPos + 50);
        setCirclePositions(normalizedPositions);
      }
    }
  }, [height, itemRefs]);

  return (
    <svg
      width="100"
      height={height}
      viewBox={`0 0 100 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: height }}
    >
      {/* Background line */}
      <rect
        x="45"
        y="50"
        width="10"
        height={height - 100}
        rx="5"
        fill="#1B1D20"
      />

      {/* Animated progress line */}
      <motion.rect
        x="45"
        y="50"
        width="10"
        height={0}
        rx="5"
        fill="url(#paint0_linear)"
        animate={progressControls}
        initial={{ height: 0 }}
      />

      {/* Circle markers at calculated positions */}
      {circlePositions.map((yPos, index) => (
        <circle
          key={index}
          cx="50"
          cy={yPos}
          r="25"
          fill={index <= activeIndex ? "#0FEDBE" : "#1B1D20"}
          className={index <= activeIndex ? "circleGlow" : ""}
        />
      ))}

      <defs>
        <linearGradient
          id="paint0_linear"
          x1="50"
          y1="50"
          x2="50"
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FEDBE" />
          <stop offset="1" stopColor="#3BBDD5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ✅ Roadmap Data
type RoadmapData = {
  label: string;
  title: string;
  description: string[];
};

const roadmapData: RoadmapData[] = [
  {
    label: "Phase 1:",
    title: "Building the Base",
    description: [
      "Public Whitepaper Launch",
      "Initial Presale Website Launch",
      "Smart Contract Development",
      "3rd Party Security Audit",
      "Initial Teambuilding",
      "Marketing Rollout",
    ],
  },
  {
    label: "Phase 2:",
    title: "Market Expansion",
    description: [
      "Community Expansion",
      "Visual Marketing Expansion",
      "Social Media Initiation",
      "Blockchain Development",
      "Technical Knowledge Base",
    ],
  },
  {
    label: "Phase 3:",
    title: "Mainstream Rollout",
    description: [
      "CoinMarketCap Listing",
      "Testnet Launch",
      "Wallet Application",
      "Influencer Onboarding",
      "Tier 3 CEX Listing",
    ],
  },
  {
    label: "Phase 4:",
    title: "Zerg Rush",
    description: [
      "Mainnet Launch",
      "Tier 1 and Tier 2 CEX Listing",
      "Physical Office Launch in 4 Locations",
      "Regulatory Approval in 12+ Regions",
    ],
  },
];
