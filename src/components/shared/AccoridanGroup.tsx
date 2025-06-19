"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Or your custom icons

const accordionData = [
  {
    title: "Shipping and Returns",
    content:
      "You may return unused, undamaged, unwashed merchandise (hang tag must still be attached to item) within 30 days of purchase for an exchange, refund or store credit, minus shipping, restocking and handling charges of 10% per item being returned.",
  },
  {
    title: "Product Care",
    content:
      "For best results, machine wash cold with like colors and tumble dry low. Do not bleach.",
  },
  {
    title: "Size & Fit",
    content:
      "Our products are true to size. If you are between sizes, we recommend sizing up.",
  },
];

export default function AccordionGroup() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open the first by default

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-t py-[16px]">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-[24px] cursor-pointer font-semibold text-[#1c2e36]">
                {item.title}
              </p>
              {isOpen ? <Minus /> : <Plus />}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="py-[12px] text-[14px] text-[#161515]">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
