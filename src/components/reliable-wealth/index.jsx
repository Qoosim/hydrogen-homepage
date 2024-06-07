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
      <section className="w-full h-full font-dmSans bg-[#150E0E] pb-[7rem]">
        <div className="px-14">
          <div className="flex flex-col gap-7 text-xs w-[48%] p-8 rounded-lg text-slate-300 tracking-wide leading-5">
            <h3 className="text-[#fff] text-[1.8rem] font-medium leading-10">
              Your Reliable Ally in the <br />Generation of Wealth.
            </h3>
            <div>
              <p>
                We take a personalized approach to wealth creation, crafting
                strategies and solutions that are specifically tailored to your
                needs, risk tolerance, and timeline.We take a personalized
                approach to wealth creation, crafting strategies and solution.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={StructureProductIcon}
                  alt="Structure Product Icon"
                  className=""
                />
                <span>Structured Products</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={LiquidityManagIcon}
                  alt="Liquidity Management Icon"
                  className=""
                />
                <span>Liquidity Management</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={WealthManagementIcon} alt="Wealth Management Icon" />
                <span>Wealth Management</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={MutualFunds} alt="Mutual Funds Icon" />
                <span>Mutual Funds – Collective Investment Schemes</span>
              </div>
            </div>
            <button className="flex items-center gap-1 py-1.5 px-4 rounded-md bg-[#eb2228] w-fit">
              <span className="text-[#fff] text-sm">Start Investing</span>
              <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
          <div>
            <img src="" alt="Cross" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReliableWealth;
