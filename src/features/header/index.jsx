import React from "react";
import Logo from "../../assets/valiente-logo.svg";
import BgImage from "../../assets/headline-bg.svg";
import HeadlineImage from "../../assets/headline-img.svg";
import StructureProductIcon from "../../assets/structure-product-icon.svg";
import LiquidityManagIcon from "../../assets/liquidity-management.svg";
import WealthManagementIcon from "../../assets/wealth-management-icon.svg";
import MutualFunds from "../../assets/mutual-funds-icon.svg";

export const Headline = () => {
  const styles = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <header
        className="relative w-full h-full font-dmSans bg-[#342e31]"
        style={styles}
      >
        <nav className="flex justify-between items-center gap-4 pt-4 px-14 ">
          <a href="/">
            <img src={Logo} alt="Valiente Logo" className="" />
          </a>
          <ul className="flex items-center gap-5 lg:gap-8 text-sm lg:text-lg text-[#fff]">
            <li className="whitespace-nowrap cursor-pointer">About Us</li>
            <li className="whitespace-nowrap cursor-pointer">Products</li>
            <li className="whitespace-nowrap cursor-pointer">Why VAMCO</li>
            <li className="whitespace-nowrap cursor-pointer">Insights</li>
            <li className="whitespace-nowrap cursor-pointer">Resources</li>
            <li className="whitespace-nowrap cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex items-center justify-center gap-6">
            <button className="outline outline-1 outline-red-600 text-red-500 py-1 px-5 lg:py-1.5 lg:px-7 text-sm lg:text-base rounded-md whitespace-nowrap">
              Login
            </button>
            <button
              type="button"
              className="flex justify-center items-center bg-red-500 text-white font-normal py-1 px-2 lg:py-1.5 lg:px-2.5 text-sm lg:text-base rounded-md whitespace-nowrap"
            >
              Create Account
            </button>
          </div>
        </nav>
        <div className="text-[2.5rem] lg:text-[3.7rem] mt-16 text-[#fff] font-semibold leading-tight px-14">
          <h1>
            Building Wealth, Securing Futures:
            <br />
            Companion Through Life
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 pl-14">
          <div className="flex flex-col gap-5 text-xs bg-[#35373c] w-[70%] lg:w-[48%] p-8 rounded-lg text-slate-300 tracking-wide leading-5 mt-[5rem] lg:mt-0">
            <div>
              <p>
                Valiente Asset Management Company (VAMCO) is an innovative,
                proactive and clientcentered asset management firm, incorporated
                in Nigeria, and licensed by the Securities & Exchange Commission
                (SEC) as a Fund/Portfolio Manager to offer the following broad
                products and services:
              </p>
            </div>
            <div className="flex flex-col gap-2">
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
            <div>
              <p>
                We offer diverse asset management solutions to our diverse range
                of clients: retail, institutional and HNI clients through our
                expertise in Portfolio/Fund Management and Investment Advisory
                Services.
              </p>
            </div>
          </div>
          <div>
            <img src={HeadlineImage} alt="Headline" />
          </div>
        </div>
      </header>
    </>
  );
};
