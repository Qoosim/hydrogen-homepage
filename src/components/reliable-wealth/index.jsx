import React from "react";
import StructureProductIcon from "../../assets/structure-product-icon.svg";
import LiquidityManagIcon from "../../assets/liquidity-management.svg";
import WealthManagementIcon from "../../assets/wealth-management-icon.svg";
import MutualFunds from "../../assets/mutual-funds-icon.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import CrossBoxes from "../../assets/cross-boxes-for-gb.svg"
import ReliableImg from "../../assets/reliable-img.svg"
import TransCard from "../../assets/reliable-trans-card.svg"

const ReliableWealth = () => {
  return (
    <>
      <section className="relative w-full h-full font-dmSans bg-[#150E0E] pb-[7rem]">
        <div className="pl-14 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-24 lg:gap-0 pt-[2rem]">
          <div className="flex flex-col gap-7 w-[60%] lg:w-[42%] rounded-lg text-slate-300 tracking-wide leading-5">
            <h3 className="text-[#fff] text-[2rem] font-medium leading-[2.813rem]">
              Your Reliable Ally in the <br />Generation of Wealth.
            </h3>
            <div>
              <p className="text-[0.875rem] leading-[1.5rem]">
                We take a personalized approach to wealth creation, crafting
                strategies and solutions that are specifically tailored to your
                needs, risk tolerance, and timeline. We take a personalized
                approach to wealth creation, crafting strategies and solution.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img
                  src={StructureProductIcon}
                  alt="Structure Product Icon"
                  className=""
                />
                <span className="text-[0.875rem]">Structured Products</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={LiquidityManagIcon}
                  alt="Liquidity Management Icon"
                  className=""
                />
                <span className="text-[0.875rem]">Liquidity Management</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={WealthManagementIcon} alt="Wealth Management Icon" />
                <span className="text-[0.875rem]">Wealth Management</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={MutualFunds} alt="Mutual Funds Icon" />
                <span className="text-[0.875rem]">Mutual Funds – Collective Investment Schemes</span>
              </div>
            </div>
            <button className="flex items-center gap-1 py-1.5 px-4 mt-5 rounded-[0.25rem] bg-[#eb2228] w-fit">
              <span className="text-[#fff] text-sm">Start Investing</span>
              <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
          <div className="flex items-end self-end z-50">
            <img src={ReliableImg} alt="Reliable Logo" />
            <img src={TransCard} className="-ml-[5rem]" alt="Transaction Card" />
          </div>
        </div>
        <img src={CrossBoxes} className="flex justify-end w-[600px] absolute bottom-24 right-0 lg:top-0 lg:right-0 z-30" alt="Cross Boxes" />
      </section>
    </>
  );
};

export default ReliableWealth;
