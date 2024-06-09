import React from "react";
import ArrowRight from "../../assets/arrow-right.svg";

export const InvestmentCard = ({ cardInfo }) => {
  return (
    <article className="bg-[#2a2021] p-4 rounded-xl flex flex-col justify-between gap-10 h-full z-50">
      <div className="flex flex-col items-start gap-3">
        <img src={cardInfo.logo} alt="Card Logo" />
        <h3
          className={`${
            cardInfo.color === "red" ? "text-[#c03233]" : "text-[#cecbcb]"
          } text-[1.125rem] font-semibold whitespace-nowrap`}
        >
          {cardInfo.title}
        </h3>
        <p className="text-[#817d7d] text-[0.875rem]">{cardInfo.text}</p>
      </div>
      <button className="w-fit flex justify-center items-center gap-1 bg-[#342e2e] py-2 px-4 text-[#fff] text-[1rem] rounded-[0.25rem] mt-auto cursor-pointer z-50">
        <span className="whitespace-nowrap">Start Investing</span>
        <img src={ArrowRight} alt="Arrow Right" />
      </button>
    </article>
  );
};
