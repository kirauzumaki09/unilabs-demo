/* -------------------------------------------------------------------------- */
/* Imports                                                                  
/* -------------------------------------------------------------------------- */

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Plus from "@/assets/plus-e.svg";
import { cn } from "@/modules/utils";

/* -------------------------------------------------------------------------- */
/* Extends                                                                   
/* -------------------------------------------------------------------------- */

const Accordion = AccordionPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Accordion - Item                                                           
/* -------------------------------------------------------------------------- */

type AccordionItemElement = React.ElementRef<typeof AccordionPrimitive.Item>;
type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

const ITEM_NAME = "AccordionItem";

const AccordionItem = React.forwardRef<
  AccordionItemElement,
  AccordionItemProps
>((props, ref) => {
  const { className, ...itemProps } = props;

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        "rounded-[30px] !bg-[#FFFFFF1A] data-[state=open]:border-border  duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90",
        className
      )}
      {...itemProps}
    />
  );
});

AccordionItem.displayName = ITEM_NAME;

/* -------------------------------------------------------------------------- */
/* Accordion - Trigger
/* -------------------------------------------------------------------------- */

type AccordionTriggerElement = React.ElementRef<
  typeof AccordionPrimitive.Trigger
>;
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  chevronClass?: string;
};

const TRIGGER_NAME = "AccordionTrigger";

const AccordionTrigger = React.forwardRef<
  AccordionTriggerElement,
  AccordionTriggerProps
>((props, ref) => {
  const { className, children, chevronClass, ...triggerProps } = props;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex  !cursor-pointer flex-1 sm:items-center justify-between text-[24px] font-semibold max-sm:text-sm !font-inter  py-[38px] px-[45px]  border-b border-b-transparent data-[state=open]:border-b-border  transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#1CE0C8]",
          className
        )}
        {...triggerProps}
      >
        {children}
        <Plus className={cn("h-4 w-4", chevronClass)} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = TRIGGER_NAME;

/* -------------------------------------------------------------------------- */
/* Accordion - Content
/* -------------------------------------------------------------------------- */

type AccordionContentElement = React.ElementRef<
  typeof AccordionPrimitive.Content
>;
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

const CONTENT_NAME = "AccordionContent";

const AccordionContent = React.forwardRef<
  AccordionContentElement,
  AccordionContentProps
>((props, ref) => {
  const { className, children, ...contentProps } = props;

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden font-normal data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down  text-pry-text ",
        className
      )}
      {...contentProps}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = CONTENT_NAME;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
