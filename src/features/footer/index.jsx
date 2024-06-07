import React from "react";
import Logo from "../../assets/valiente-logo.svg";
import TwitterLogo from "../../assets/twitter.svg";
import LinkedInLogo from "../../assets/linkedin.svg";
import FaceBookLogo from "../../assets/facebook.svg";
import InstagramLogo from "../../assets/instagram.svg";

export const Footer = () => {
  return (
    <>
      <section className="w-full h-full font-dmSans bg-[#150E0E] pb-[3rem]">
        <div className="px-8 lg:px-14">
          <div className="flex justify-between items-start">
            <div>
              <img src={Logo} alt="Valiente Logo" />
            </div>
            <div className="flex flex-col items-start gap-2 lg:gap-4">
              <h3 className="text-base text-[#fff] font-medium">Company</h3>
              <span className="text-sm text-slate-400">Products</span>
              <span className="text-sm text-slate-400">Business</span>
              <span className="text-sm text-slate-400">Investor Relations.</span>
            </div>
            <div className="flex flex-col items-start gap-2 lg:gap-4">
              <h3 className="text-base text-[#fff] font-medium">Career</h3>
              <span className="text-sm text-slate-400">Join Our Team</span>
              <span className="text-sm text-slate-400">Work Life Balance</span>
              <span className="text-sm text-slate-400">Growth and Development</span>
            </div>
            <div className="flex flex-col items-start gap-2 lg:gap-4">
              <h3 className="text-base text-[#fff] font-medium">Legal</h3>
              <span className="text-sm text-slate-400">Terms & Conditions</span>
              <span className="text-sm text-slate-400">Privacy</span>
              <span className="text-sm text-slate-400">Cookies</span>
              <span className="text-sm text-slate-400">FAQs</span>
            </div>
            <div className="flex flex-col items-start gap-2 lg:gap-4">
              <h3 className="text-base text-[#fff] font-medium">Get In Touch</h3>
              <span className="text-sm text-slate-400">2, Raymond Njoku Street, Ikoyi, Lagos</span>
              <span className="text-sm text-slate-400">0913-000-5503-5</span>
              <span className="text-sm text-slate-400">info@valientecapital.com</span>
              <ul className="flex items-center gap-4">
                <li className="cursor-pointer">
                  <img src={TwitterLogo} alt="Twitter Logo" />
                </li>
                <li className="cursor-pointer">
                  <img src={LinkedInLogo} alt="LinkedIn Logo" />
                </li>
                <li className="cursor-pointer">
                  <img src={FaceBookLogo} alt="Facebook Logo" />
                </li>
                <li className="cursor-pointer">
                  <img src={InstagramLogo} alt="Instagram Logo" />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[0.1rem] bg-gray-600 mt-[7rem] mb-[2.5rem]"></div>
          <p className="text-sm text-slate-400 text-center">{new Date().getFullYear()} © Valiente Asset Management Limited RC 1489623. All Right Reserved </p>
        </div>
      </section>
    </>
  );
};
