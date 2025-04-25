"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/app/accordion";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import Section from "@/modules/app/section";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { Title } from "@/modules/app/title";
import { AccordionContent } from "@radix-ui/react-accordion";
import React from "react";

type FAQSectionProps = {
  data: {
    title: string;
    desc: string;
    list?: { pre: string; text: string }[];
  }[];
};
export function FAQ({ data }: FAQSectionProps) {
  return (
    <Section>
      <SlideInOnScroll>
        <Title
          text="Frequently"
          sub
          className="max-lg:text-6xl max-sm:text-[40px]"
        />
      </SlideInOnScroll>
      <SlideInOnScroll delay={0.2}>
        <Title
          text="Asked Questions"
          sub
          className="sm:!leading-[60px] max-lg:text-6xl max-sm:text-4xl"
        />
      </SlideInOnScroll>
      <div className="flex items-center justify-center w-full flex-col gap-2 mt-[50px] z-[1000]">
        <div className="w-full max-w-[800px] flex flex-col gap-2">
          {data.map((faq, index) => (
            <FadeInOnScroll key={faq.title} delay={index * 0.4}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="w-full z-50">
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="py-3">
                      <p>{faq.desc}</p>
                      {faq.list && (
                        <ul className="mt-3">
                          {faq.list.map((item, i) => (
                            <li key={i}>
                              <p className="font-semibold text-[#1CE0C8] pb-3">
                                {item.pre}{" "}
                                <span className="!text-[#DBDBDB] font-normal">
                                  {item.text}
                                </span>
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
