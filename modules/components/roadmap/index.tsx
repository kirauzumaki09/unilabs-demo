"use client";
import { FadeIn } from "@/modules/app/fade-in";
import { Title } from "@/modules/app/title";
import { TitleAnim } from "@/modules/app/title-animation";
import Vector from "@/assets/roadmap-vector.svg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/modules/utils";
import Checkmark from "@/assets/checkmark.svg";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RoadmapBlur1 from "@/assets/roadmap-blur.svg";
import RoadmapBlur2 from "@/assets/roadmap-blur2.svg";
import RoadmapBlur3 from "@/assets/roadmap-blur3.svg";

export function RoadmapPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Initialize itemRefs correctly
  const itemRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (itemRefs.current.length !== roadmapData.length) {
    // @ts-expect-error animation control
    itemRefs.current = Array(roadmapData.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>());
  }

  // Update SVG height based on container height
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setSvgHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
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
    <div className="w-full min-h-screen relative">
      <div className="w-full h-screen absolute overflow-hidden">
        <FadeIn delay={0}>
          <Image
            src="/webp/3d_abstract_space_background_with_wireframe_landscape_1_1x.webp"
            alt="Background effect"
            fill
            className="absolute inset-0"
            priority
          />
        </FadeIn>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center max-lg:px-4 z-40 relative pt-32 max-md:pt-28 max-w-[1529px] mx-auto overflow-hidden">
        <FadeIn delay={0.6} className="w-full">
          <Vector className="absolute inset-0 -z-30" />
        </FadeIn>
        <div className="flex items-center gap-4 mb-[40px]">
          <TitleAnim delay={0.2}>
            <Title text="Unilabs" sub tinted className="lg:text-[110px] md:text-[75px] md:text-[75px]" />
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <Title text="Roadmap" sub className="lg:text-[110px] md:text-[75px] md:text-[75px]" />
          </TitleAnim>
        </div>

        <div
          ref={containerRef}
          className="relative w-full flex items-center justify-center flex-col "
        >
          <div className="absolute left-[25%] w-[50%] -top-0 roadmapFilterOne ">
            {/* <RoadmapBlur2 /> */}
          </div>
          <div className="absolute left-0 -bottom-[-10%] w-[40%] roadmapFilterTwo ">
            {/* <RoadmapBlur1 /> */}
          </div>
          <div className="absolute -right-0 -bottom-[-10%] w-[40%] roadmapFilterThree">
            {/* <RoadmapBlur3 /> */}
          </div>
          <div
            style={{ top: itemRefs.current[0]?.current?.offsetTop ?? 0 }}
            className="absolute left-[45%] top-0 max-md:hidden"
          >
            {svgHeight > 0 && (
              <RoadmapSVG
                progressControls={controls}
                activeIndex={activeIndex}
                height={svgHeight}
                itemRefs={itemRefs}
              />
            )}
          </div>

          <>
            {roadmapData.map((roadmap, index) => (
              <RoadmapItem
                key={index}
                index={index}
                roadmap={roadmap}
                ref={itemRefs.current[index]}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

const RoadmapItem = React.forwardRef<
  HTMLDivElement,
  {
    roadmap: (typeof roadmapData)[0];
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
      className="flex flex-col gap-40 w-[70%] max-lg:w-full mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        key={roadmap.label}
        className={cn(
          "flex w-full justify-between gap-[150px] max-md:flex-col max-md:gap-12",
          {
            "flex-row-reverse": index % 2,
          }
        )}
      >
        <div
          className={cn("flex justify-end w-full max-md:justify-start", {
            "flex justify-start": index % 2,
          })}
        >
          <div className={cn("font-anybody max-w-[260px] ", {})}>
            <span className="py-3 px-7 bg-gradient-to-r from-accent-foreground to-primary-foreground text-[23px] text-primary rounded-xl font-anybody font-semibold">
              {roadmap.label}
            </span>
            <div className="mt-5">
              <span className="flex items-end gap-2.5">
                <p className="text-3xl leading-[28px]">{roadmap.title}</p>
                <p className="text-xs">({roadmap.date})</p>
              </span>
              <p className="text-lg tinted font-semibold">{roadmap.sub}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-[40px] backdrop-blur-[50px] border-sec-border p-8 max-w-[450px] max-lg:max-w-full w-full flex flex-col gap-4">
          {roadmap.description.map((desc) => (
            <div key={desc.pre} className="text-sm flex items-start gap-1.5">
              <div className="min-w-4 mt-1">
                <Checkmark
                  className={cn("size-3", { "text-[#0FEDBE]": inView })}
                  //  "text-[#0FEDBE]": inView
                />
              </div>

              <p className="text-secondary-foreground">
                {desc.pre}
                <span className="text-[#F8F8F8]">{desc.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
RoadmapItem.displayName = "RoadmapItem";

function RoadmapSVG({
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
  const CIRCLE_SIZE = 30; // Adjust this based on your needs

  useEffect(() => {
    // Calculate positions for all milestone circles
    const calculatePositions = () => {
      const positions = itemRefs.current.map((ref) =>
        ref?.current ? ref.current.offsetTop : 0
      );
      setCirclePositions(positions);
    };

    calculatePositions();

    // Recalculate on resize
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [height, itemRefs]);

  // Initial setup for progress control - only to first circle
  useEffect(() => {
    if (circlePositions.length > 0) {
      // On initial load, only animate to the first circle position
      progressControls.set({
        height: `${circlePositions[0] - 50}px`,
      });
    }
  }, [circlePositions, progressControls]);

  // Handle subsequent animations based on activeIndex
  useEffect(() => {
    if (circlePositions.length > 0 && activeIndex > 0) {
      // Animate to the current active circle position
      progressControls.start({
        height: `${circlePositions[activeIndex] - 50}px`,
        transition: { duration: 0.5 },
      });
    }
  }, [activeIndex, circlePositions, progressControls]);

  // Center point for the SVG
  const centerX = 50;

  return (
    <svg width="100" height={height} viewBox={`0 0 100 ${height}`} fill="none">
      {/* Background Line */}
      <rect
        x="45"
        y="50"
        width="10"
        height={height - 100}
        rx="5"
        fill="#FFFFFF1A"
      />

      {/* Animated Progress Line */}
      {circlePositions.length > 0 && (
        <motion.rect
          x="45"
          y="50"
          width="10"
          height="0" // Start with zero height
          rx="5"
          fill="#0FEDBE"
          animate={progressControls}
        />
      )}

      {/* Custom Milestone Circles */}
      {circlePositions.map((yPos, index) => (
        <g
          key={index}
          transform={`translate(${centerX - CIRCLE_SIZE / 2}, ${
            yPos - CIRCLE_SIZE / 2
          })`}
        >
          {/* Use the provided SVG circle design */}
          <g filter="url(#filter0_f_milestone_${index})">
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={CIRCLE_SIZE / 2}
              fill={index <= activeIndex ? "#2EC6ED" : "#1B1D20"}
            />
          </g>
          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={CIRCLE_SIZE * 0.4}
            fill={index <= activeIndex ? "#2EC6ED" : "#1B1D20"}
          />
          <g filter="url(#filter1_f_milestone_${index})">
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={CIRCLE_SIZE * 0.35}
              fill={index <= activeIndex ? "#00FFE2" : "#1B1D20"}
            />
          </g>
          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={CIRCLE_SIZE * 0.25}
            fill={index <= activeIndex ? "white" : "#1B1D20"}
          />
        </g>
      ))}

      {/* SVG Filters */}
      <defs>
        {circlePositions.map((_, index) => (
          <React.Fragment key={`filter-${index}`}>
            <filter
              id={`filter0_f_milestone_${index}`}
              x="0"
              y="0"
              width="100"
              height="100"
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
                stdDeviation="10"
                result="effect1_foregroundBlur_milestone_${index}"
              />
            </filter>
            <filter
              id={`filter1_f_milestone_${index}`}
              x="0"
              y="0"
              width="100"
              height="100"
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
                result="effect1_foregroundBlur_milestone_${index}"
              />
            </filter>
          </React.Fragment>
        ))}
      </defs>
    </svg>
  );
}

const roadmapData = [
  {
    label: "Phase 01",
    title: "Genesis",
    date: "Nov 2024 - Mar 2025",
    sub: "Laying the Foundation for Innovation",
    description: [
      {
        pre: "Platform Launch:",
        text: "Deploy the core Unilabs platform with foundational AI features, including project scoring and opportunity identification.",
      },
      {
        pre: "Smart Contract Auditing Tool:",
        text: "Introduce the automated smart contract auditing feature to vet projects.",
      },
      {
        pre: "Token Presale and Distribution:",
        text: "Launch the token presale at $0.01 and distribute tokens to early investors.",
      },
      {
        pre: "AI Integration with Market Pulse:",
        text: "Deploy the first version of the AI-powered Market Pulse for real-time trend analysis.",
      },
      {
        pre: "Community Building:",
        text: "Launch the Unilabs community hub for onboarding, investor education, and early adopter engagement.",
      },
    ],
  },
  {
    label: "Phase 02",
    title: "Ascent",
    date: "Apr 2025 - Jul 2025",
    sub: "Scaling the Ecosystem",
    description: [
      {
        pre: "Portfolio Risk Management Engine:",
        text: "Introduce the AI-powered risk management tool to balance investments and manage market volatility.",
      },
      {
        pre: "Enhanced On-Chain Monitoring:",
        text: "Implement real-time blockchain monitoring with automated alert notifications.",
      },
      {
        pre: "Dynamic AI Governance Protocol:",
        text: "Launch a beta version of decentralized decision-making for project partnerships and token launches.",
      },
      {
        pre: "Early Access Scoring System (EASS) V2:",
        text: "Upgrade the EASS with additional AI parameters for tokenomics and social sentiment analysis.",
      },
      {
        pre: "Partnership Development:",
        text: "Secure partnerships with emerging blockchain projects to provide exclusive investment opportunities.",
      },
    ],
  },
  {
    label: "Phase 03",
    title: "Apex",
    date: "Aug 2025 - Nov 2025",
    sub: "Driving Innovation and Adoption",
    description: [
      {
        pre: "Decentralized Investment Pools:",
        text: "Launch the community-driven investment pool feature to enable collective investments in vetted projects.",
      },
      {
        pre: "Tokenomics Analyzer:",
        text: "Roll out the in-depth tokenomics evaluation tool to assess project sustainability and long-term viability.",
      },
      {
        pre: "AI Scalability Upgrade: ",
        text: "Optimize AI algorithms to analyze larger datasets for improved accuracy and predictive capabilities.",
      },
      {
        pre: "Unilabs Mobile App: ",
        text: "Release the mobile application for seamless user experience and on-the-go investment tracking.",
      },
      {
        pre: "Global Outreach Campaign:",
        text: "Execute marketing initiatives to expand Unilabs’ reach into international markets.",
      },
    ],
  },
];
