import React from "react";
import VamconCardImg from "../../assets/vamco-card-img.svg";
import VamcomCardIcon from "../../assets/vamco-card-icon.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import VamcoTopRightLogo from "../../assets/vamco-top-right-logo.svg"

export const VamcoCardImg = () => {

  return (
    <section className="w-full h-full font-dmSans pb-[3rem] bg-[#130A0A]">
      <div className="px-14">
        <div className="relative bg-[#451a1d] text-[#fff] p-5 rounded-lg flex justify-between gap-10 lg:gap-28">
          <div>
            <img
              src={VamconCardImg}
              alt="Vamcom Large Logo"
              className="w-[1000px]"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <img src={VamcomCardIcon} alt="Vamco Small Logo" />
            <div className="flex flex-col items-start gap-2">
              <p className="text-[#d3c8c9] text-xs lg:text-[1.125rem] leading-[1.75rem]">
                VAMCO offers a wide range of investment solutions across asset
                classes including cash, fixed income and equities on both a
                pooled and segregated basis. We oversee and manage the assets of
                High Net Worth Individual (HNIs) investors and corporate
                organizations.{" "}
              </p>
              <button typeof="button" className="flex items-center gap-2 text-[#d3c8c9]">
                <span className="text-xs lg:text-[1rem]">Learn More</span>
                <img src={ArrowRight} alt="Arrow Right" />
              </button>
            </div>
          </div>
          <img src={VamcoTopRightLogo} className="absolute top-0 right-0" alt="Vamco Top Logo" />
        </div>
      </div>
    </section>
  );
};
