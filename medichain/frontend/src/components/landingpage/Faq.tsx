"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is MediChain?",
    answer:
      "MediChain is a blockchain-based platform ensuring the authenticity and transparency of pharmaceutical supply chains, preventing counterfeit drugs.",
  },
  {
    question: "How does MediChain ensure medication authenticity?",
    answer:
      "We use blockchain to track each transaction in the supply chain, from manufacturers to pharmacies, ensuring tamper-proof records.",
  },
  {
    question: "Who can use MediChain?",
    answer:
      "Pharmaceutical manufacturers, distributors, pharmacies, and even patients can access verified medication information.",
  },
  {
    question: "Is my data secure on MediChain?",
    answer:
      "Yes, MediChain leverages blockchain encryption, ensuring data integrity, security, and transparency without compromising privacy.",
  },
];

export default function Faq() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-black">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="bg-transparent transition-all"
          >
            <AccordionTrigger className="text-lg font-semibold text-black px-4 py-3">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-black text-md px-6 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
