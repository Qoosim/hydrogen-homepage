import React from "react";
import ArrowRightRed from "../../assets/arrow-right-red.svg";

export const InvestorToday = () => {
  return (
    <>
      <section className="w-full h-full font-dmSans bg-[#130A0A] pb-[10rem]">
        <div className="px-14">
          <div className="bg-gradient-to-r from-red-600 to-red-900 py-[4rem] lg:px-[7rem] flex flex-col items-center gap-7 rounded-3xl">
            <div className="flex flex-col items-center text-[#fff] font-medium text-[1.8rem] lg:text-[2.5rem] leading-[3rem]">
              <span>Join the family of investors today!</span>
              <span>and let's build your finance together!</span>
            </div>
            <p className="text-[#fff] text-[1rem] text-center">
              Embark on your journey to financial success by signing up with
              VAMCO today. Our team is dedicated to guiding you every step of
              the way as you build a secure and prosperous future.{" "}
            </p>
            <div className="flex justify-center space-x-5 mt-[0.5rem]">
              <button
                type="button"
                className="flex justify-center items-center gap-1 bg-white py-1.5 px-4 rounded-[0.25rem]"
              >
                <span className="text-red-600 text-sm">Start Investing</span>
                <img src={ArrowRightRed} alt="Arrow Right Red" />
              </button>
              <button type="button" className="flex justify-center items-center text-slate-100 text-sm outline outline-1 py-1.5 px-5 rounded-[0.25rem]">
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
