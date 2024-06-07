import React from "react";
import { shorten } from "../../helper";

export const FeaturedNewsCard = ({ cardInfo }) => {
  return (
    <article className="flex flex-col items-start gap-3 w-full">
      <img src={cardInfo.img} className="w-full" alt="Feature News Icon" />
      <span className="text-[#dad8d8] font-medium">{cardInfo.title}</span>
      <p className="text-[#9a9796] text-sm">
        {cardInfo.text.length > 24 ? shorten(cardInfo.text, 24) : cardInfo.text}
      </p>
    </article>
  );
};
