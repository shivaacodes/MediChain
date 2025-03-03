"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const marqueeItems = [
  { text: "Exclusive Travel Deals", img: "/avatars/1.png" },
  { text: "AI-Powered Recommendations", img: "/avatars/2.png" },
  { text: "Sell Your Unused Tickets", img: "/avatars/3.png" },
  { text: "Find the Best Offers", img: "/avatars/4.png" },
  { text: "Secure Transactions", img: "/avatars/5.png" },
];

export default function MarqueeSection() {
  return (
    <div className="w-full py-6 bg-transparent">
      <Marquee className="text-lg font-semibold text-black">
        {marqueeItems.map((item, index) => (
          <div key={index} className="mx-6 flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={item.img} alt={item.text} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <span>{item.text}</span>
          </div>
        ))}
      </Marquee>

      <Marquee reverse className="text-lg font-semibold text-black mt-4">
        {marqueeItems.map((item, index) => (
          <div key={index} className="mx-6 flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={item.img} alt={item.text} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <span>{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
