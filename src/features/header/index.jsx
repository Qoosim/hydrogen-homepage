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
        <nav className="flex justify-between items-center pt-4 px-14 ">
          <a href="/">
            <img src={Logo} alt="Valiente Logo" className="" />
          </a>
          <ul className="flex items-center gap-8 text-lg text-[#fff]">
            <li className="whitespace-nowrap">About Us</li>
            <li className="whitespace-nowrap">Products</li>
            <li className="whitespace-nowrap">Why VAMCO</li>
            <li className="whitespace-nowrap">Insights</li>
            <li className="whitespace-nowrap">Resources</li>
            <li className="whitespace-nowrap">Contact Us</li>
          </ul>
          <div className="flex items-center justify-center gap-6">
            <button className="outline outline-1 outline-red-600 text-red-500 py-1.5 px-7 rounded-md whitespace-nowrap">
              Login
            </button>
            <button
              type="button"
              className="bg-red-500 text-white font-normal py-1.5 px-2.5 rounded-md whitespace-nowrap"
            >
              Create Account
            </button>
          </div>
        </nav>
        <div className="text-[3.7rem] mt-16 text-[#fff] font-semibold leading-tight px-14">
          <h1>
            Building Wealth, Securing Futures:
            <br />
            Companion Through Life
          </h1>
        </div>
        <div className="flex justify-between items-center gap-5 pl-14">
          <div className="flex flex-col gap-5 text-xs bg-[#35373c] w-[48%] p-8 rounded-lg text-slate-300 tracking-wide leading-5">
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
