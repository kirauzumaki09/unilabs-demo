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
import Blur1 from "@/assets/footer-blur.svg";
import Blur2 from "@/assets/footer-blur2.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs/tab";

type FAQSectionProps = {
  data: {
    title: string;
    desc: string;
    list?: { pre: string; text: string }[];
  }[];
  notabs?: boolean;
};
export function FAQ({ data, notabs }: FAQSectionProps) {
  return (
    <div className="section faqBG overflow-visible relative z-10">
      <div className="container">
        <SlideInOnScroll>
          <Title
            text="Frequently"
            sub
            className=" !text-[80px] !leading-[1]  max-lg:!text-[60px] max-md:!text-[50px] max-sm:!text-[40px]"
          />
        </SlideInOnScroll>
        <SlideInOnScroll delay={0.2}>
          <Title
            text="Asked Questions"
            sub
            className=" !text-[80px] max-lg:!text-[60px] max-md:!text-[50px] max-sm:!text-[40px] !leading-[1]"
          />
        </SlideInOnScroll>
        <div className="flex items-center justify-center w-full flex-col gap-2 mt-[50px] z-[1000] max-w-[1236px] mx-auto ">
          {notabs ? (
            <div className="w-full max-w-[1236px] flex flex-col gap-2">
              {data.map((faq, index) => (
                <Accordion type="single" collapsible key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="w-full z-50"
                  >
                    <AccordionTrigger>{faq.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-[35px] pb-[40px] px-[45px] max-md:!p-3 text-[#DBDBDB] font-inter">
                        <p className="!font-normal text-[18px] max-md:text-[16px]">
                          {faq.desc}
                        </p>
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
              ))}
            </div>
          ) : (
            <Tabs
              defaultValue="general"
              className="w-full justify-center flex flex-col"
            >
              <TabsList className="mx-auto mb-5">
                <TabsTrigger value="general">
                  <p className="gradText  leading-[1] text-[24px] max-lg:text-[18px] max-md:text-[16px] font-anybody font-bold">
                    General
                  </p>
                </TabsTrigger>
                <TabsTrigger value="presale">
                  <p className="gradText  leading-[1] text-[24px] max-lg:text-[18px] max-md:text-[16px] font-anybody font-bold">
                    Presale
                  </p>
                </TabsTrigger>
                <TabsTrigger value="support">
                  <p className="gradText  leading-[1] text-[24px] max-lg:text-[18px] max-md:text-[16px] font-anybody font-bold">
                    Support
                  </p>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="w-full  flex flex-col gap-2">
                  {data.map((faq, index) => (
                    <FadeInOnScroll key={faq.title} delay={index * 0.4}>
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value={`item-${index}`}
                          className="w-full z-50"
                        >
                          <AccordionTrigger>{faq.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-[35px] pb-[40px] px-[45px] max-md:!p-3 text-[#DBDBDB] font-inter">
                              <p className="!font-normal text-[18px] max-md:text-[16px]">
                                {faq.desc}
                              </p>
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
              </TabsContent>
              <TabsContent value="presale">
                <div className="w-full max-w-[1236px] flex flex-col gap-2">
                  {data.map((faq, index) => (
                    <FadeInOnScroll key={faq.title} delay={index * 0.4}>
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value={`item-${index}`}
                          className="w-full z-50"
                        >
                          <AccordionTrigger>{faq.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-[35px] pb-[40px] px-[45px] max-md:!p-3 text-[#DBDBDB] font-inter">
                              <p className="!font-normal text-[18px] max-md:text-[16px]">
                                {faq.desc}
                              </p>
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
              </TabsContent>
              <TabsContent value="support">
                <div className="w-full max-w-[1236px] flex flex-col gap-2">
                  {data.map((faq, index) => (
                    <FadeInOnScroll key={faq.title} delay={index * 0.4}>
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value={`item-${index}`}
                          className="w-full z-50"
                        >
                          <AccordionTrigger>{faq.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-[35px] pb-[40px] px-[45px] max-md:!p-3 text-[#DBDBDB] font-inter">
                              <p className="!font-normal text-[18px] max-md:text-[16px]">
                                {faq.desc}
                              </p>
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
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
