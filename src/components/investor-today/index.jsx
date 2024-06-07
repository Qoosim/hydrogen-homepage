import React from "react";
import ArrowRightRed from "../../assets/arrow-right-red.svg";

export const InvestorToday = () => {
  return (
    <>
      <section className="w-full h-full font-dmSans bg-[#130A0A] pb-[8rem]">
        <div className="px-14">
          <div className="bg-[#d23637] py-[3rem] px-[10rem] flex flex-col items-center gap-6 rounded-xl">
            <div className="flex flex-col items-center text-[#fff] font-medium text-[2.3rem] leading-[3rem]">
              <span>Join the family of investors today!</span>
              <span>and let's build your finance together!</span>
            </div>
            <p className="text-[#fff] text-sm text-center">
              Embark on your journey to financial success by signing up with
              VAMCO today. Our team is dedicated to guiding you every step of
              the way as you build a secure and prosperous future.{" "}
            </p>
            <div className="flex items-center gap-5 mt-[0.5rem]">
              <button
                type="button"
                className="flex items-center gap-1 bg-white py-1.5 px-4 rounded-md"
              >
                <span className="text-[#d23637] text-sm">Start Investing</span>
                <img src={ArrowRightRed} alt="Arrow Right Red" />
              </button>
              <button type="button" className="text-slate-100 text-sm outline outline-1 py-1.5 px-6 rounded-md">
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
