import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Blur2 from "@/assets/otherpages/how-blur-2.svg";
import Blur from "@/assets/otherpages/how-blur.svg";
import React from "react";
import Checkmark from "@/assets/checkmark.svg";

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
            How the Mining Fund
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
                className="bg-white/10 relative overflow-hidden backdrop-blur-[50px] rounded-[50px] max-w-[550px] w-full p-11 border-b border-b-black/5 border-t border-t-sec-border min-h-[380px]"
              >
                <p className="gradText text-lg font-semibold font-anybody pb-8 w-[55%]">
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
                <p className="font-anybody text-white/5 text-[180px] top-[50%] font-extrabold absolute right-1">
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


