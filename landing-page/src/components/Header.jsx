import React from "react";
import brand from "../assets/svgs/brand.svg";

const Header = () => {
  return (
    <div className="flex mx-20 py-6 justify-between items-center border-b border-solid border-[#FFFFFFCC]">
      <button className="h-[54px] rounded-[64px] text-white text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
        ورود به پنل
      </button>
      <img className="w-[45.94px] h-[54px]" src={brand} alt="" />
      <button className="h-[54px] rounded-[64px] text-white text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
        سفارش فایرمانیتور
      </button>
    </div>
  );
};

export default Header;
