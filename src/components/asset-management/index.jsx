import React from "react";
import ShadowLeftTop from "../../assets/shadow-left-top.svg";
import ShadowLeftBelow from "../../assets/shadow-left-below.svg";
import ShadowRight from "../../assets/shadow-right.svg";
import { investmentCardsData, assetInvestmentData } from "../../constants";
import { InvestmentCard } from "../investment-card";
import { AssetInvestmentCard } from "./_component/AssetInvestment.";

export const AssetManagement = () => {
  return (
    <>
      <section className="relative w-full h-full font-dmSans pb-[10rem] bg-[#150E0E]">
        {assetInvestmentData?.map((cardItem) => (
          <AssetInvestmentCard key={cardItem.id} cardInfo={cardItem} />
        ))}
        <div className="px-32 grid grid-cols-3 gap-8">
          {investmentCardsData?.map((cardItem) => (
            <InvestmentCard key={cardItem.id} cardInfo={cardItem} />
          ))}
        </div>
        <img
          src={ShadowLeftTop}
          className="size-[15rem] absolute top-[25rem] left-0"
          alt="Shadow Left Top"
        />
        <img
          src={ShadowLeftBelow}
          className="size-[17rem] absolute left-0 bottom-[5rem]"
          alt="Shadow Left Below"
        />
        <img
          src={ShadowRight}
          className="size-[17rem] absolute right-0 bottom-[5rem]"
          alt="Shadow Right"
        />
      </section>
    </>
  );
};
