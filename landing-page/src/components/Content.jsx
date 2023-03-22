import React from "react";
import plan from "../assets/svgs/plan.svg";
import line from "../assets/svgs/line.svg";
import video from "../assets/svgs/video.svg";
import plan1 from "../assets/svgs/plan1.svg";
import plan2 from "../assets/svgs/plan2.svg";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="px-20 pb-20 flex flex-col overflow-x-hidden">
      <div className="pt-20 pb-[50px] border-b border-solid border-[#FFFFFF]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="w-[23%]">
              <div className="py-10 px-10 relative rounded-3xl border border-solid border-[#FFFFFF] flex items-center justify-center">
                <img className="w-[200px]" src={plan} alt="" />
                <div className="bg-[#E72F23] text-[#FFFFFF] py-8 px-7 rounded-3xl absolute top-[80%]">
                  <div className="flex justify-end items-center pb-3">
                    <p className="text-lg font-black pr-3">
                      {t("content.firemonitor-software")}
                    </p>
                    <i className="text-4xl bi bi-wifi"></i>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {t("content.firemonitor-software-description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[52%]">
              <div
                dir="rtl"
                className="pb-8 border-b border-solid border-[#FFFFFF] leading-[70px] text-[#FFFFFF] text-4xl font-medium text-right"
              >
                <p>
                  {t("content.hero-title")}
                  <br />
                  {t("content.hero-title-2")}
                </p>
              </div>
              <div className="pt-8 flex items-end flex-col">
                <div className="pb-8 flex flex-wrap">
                  <button className="h-[45px] ml-4 rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
                    {t("content.monitoring-sensors")}
                  </button>
                  <button className="h-[45px] ml-4 rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
                    {t("content.immediate-notification-of-fire")}
                  </button>
                  <button className="h-[45px] ml-4 rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
                    {t("content.smart-hardware")}
                  </button>
                </div>
                <div className="w-full">
                  <img src={line} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-[50px] items-center">
            <div className="w-[23%] bg-[#FFF38C] p-4 flex justify-between text-[#222222] rounded-2xl">
              <i className="text-4xl font-bold pt-1 pl-1 bi bi-arrow-up-left"></i>
              <div className="text-right">
                <p className="text-lg font-black py-2">
                  {t("content.firemonitor-order-registration")}
                </p>
                <p className="text-sm">
                  {t("content.firemonitor-order-registration-description")}
                  <span className="font-semibold text-sm">
                    {t("content.firemonitor-order-registration-description-2")}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[55%] flex justify-end items-center text-right text-[#FFFFFF]">
              <p className="text-sm">
                {t("content.intelligent-notification-system-description")}
              </p>
              <div className="border-l-2 text-[#FFFFFF] h-24 mx-8"></div>
              <p className="text-3xl font-black">
                {t("content.intelligent-notification-system")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#FFFFFF0D] text-[#FFFFFF] my-[120px] w-[800px] flex rounded-[32px]">
          <div className="w-1/2 pb-6 px-12 text-right flex justify-center items-end flex-col">
            <button className="h-[42px] rounded-[64px] text-[#FFFFFF] text-xs font-light border border-solid border-[#FFFFFF] pb-1 px-6 mb-4">
              {t("content.firemonitor")}
            </button>
            <p className="text-3xl pl-4 font-black pt-4">
              {t("content.firemonitor-description")}
            </p>
          </div>
          <div className="w-1/2">
            <img src={video} alt="" />
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-between">
        <div className="w-[750px] text-[#222222] flex flex-col">
          <div className="w-full bg-[#FC5B5B] rounded-2xl p-10 mb-6">
            <p className="text-3xl font-black text-center">
              {t(
                "content.immediate-online-notification-and-SMS-of-fire-danger"
              )}
            </p>
            <div className="flex justify-between">
              <button className="h-[45px] ml-4 rounded-[80px] text-[#222222] text-base font-normal border border-solid border-[#222222] pb-1 px-6 mt-10">
                {t("content.order-firemonitor")}
              </button>
              <div className="flex flex-col justify-end">
                <p className="text-sm text-[#222222] pt-2">
                  {t(
                    "content.immediate-online-notification-and-SMS-of-fire-danger-description"
                  )}
                </p>
                <p className="text-sm text-[#222222] pt-4">
                  {t(
                    "content.immediate-online-notification-and-SMS-of-fire-danger-description"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[404px] bg-[#8388FF] rounded-2xl p-8 mr-4">
              <p className="text-3xl font-black text-center">
                {t("content.direct-fire-department-access")}
              </p>
              <p className="text-sm text-[#222222] text-right pt-3 leading-9">
                {t("content.direct-fire-department-access-description")}
              </p>
            </div>
            <div className="w-[329px] bg-[#FFA05B] rounded-2xl p-8">
              <p className="text-3xl font-black text-center">
                {t("content.monitoring-sensors")}
              </p>
              <p className="text-sm text-[#222222] text-right pt-3 leading-9">
                {t("content.monitoring-sensors-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[446px] pt-14 text-right text-[#FFFFFF]">
          <div className="flex justify-end">
            <div className="h-1 w-[65px] bg-[#FD190A]"></div>
          </div>
          <p className="text-4xl py-6">
            {t("content.features-of-firemonitor")}
          </p>
          <p className="text-2xl font-medium pb-6">
            {t("content.features-of-firemonitor-description")}
          </p>
          <button className="h-[45px] ml-4 rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
            {t("content.order-firemonitor")}
          </button>
        </div>
      </div>
      <div className="my-24 py-20 text-[#FFFFFF] text-right">
        <div className="flex justify-end">
          <div className="h-1 w-[65px] bg-[#FD190A]"></div>
        </div>
        <p className="text-4xl py-6">
          {t("content.circuit-hardware-description")}
        </p>
        <div className="mt-[150px]">
          <div className="-rotate-[8.5deg] w-[110vw] relative -left-[105px] h-[230px] border-t-[2px] border-b-[2px] bg-[#FFFFFF03] border-[#FFFFFF1A] border-solid">
            <div className="flex rotate-[8.5deg] justify-center relative left-20">
              <img className="pt-6" src={plan1} alt="" />
              <img className="relative right-[90px] top-8" src={plan2} alt="" />
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-between mt-24">
          <div className="flex">
            <div className="text-right">
              <p className="text-base text-[#FFFFFF] font-black">
                {t("content.temperature-control-kit")}
              </p>
              <p className="text-sm text-[#FFFFFF] pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] text-4xl font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-3")}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="text-right">
              <p className="text-base text-[#FFFFFF] font-black">
                {t("content.temperature-control-kit")}
              </p>
              <p className="text-sm text-[#FFFFFF] pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] text-4xl font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-2")}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="text-right">
              <p className="text-base text-[#FFFFFF] font-black">
                {t("content.temperature-control-kit")}
              </p>
              <p className="text-sm text-[#FFFFFF] pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] text-4xl font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24 py-20 text-[#FFFFFF] text-right relative">
        <div className="flex justify-end">
          <div className="h-1 w-[65px] bg-[#FD190A]"></div>
        </div>
        <p className="text-4xl py-6">{t("content.firemonitor-tariffs")}</p>
        <div className="mt-[100px]">
          <div className="flex justify-center items-center relative">
            <div className="h-[201px] w-[100vw] bg-[#FFFFFF0D] -left-20 absolute"></div>
            <div className="w-[450px] bg-[#E72F23] py-12 px-[35px] text-right rounded-3xl mr-8 z-10">
              <div className="flex text-right justify-between items-center pt-2 pb-10">
                <i className="text-[#130F26] text-3xl pr-6 bi bi-star-fill"></i>
                <p className="text-4xl text-[#FFFFFF] font-bold">ADVANCED</p>
                <p className="text-4xl text-[#FFFFFF] font-bold">
                  {t("content.model")}
                </p>
              </div>
              <div>
                <p className="text-lg text-[#FFFFFF] font-extrabold">
                  {t("content.possibilities")}
                </p>
                <ul
                  dir="rtl"
                  className="pt-3 text-[#FFFFFF] text-base font-medium leading-9 list-disc list-outside"
                >
                  <li>
                    <p>{t("content.possibilities-description-1")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-2")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-3")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-3")}</p>
                  </li>
                </ul>
                <p className="text-4xl text-[#FFFFFF] font-black py-4">
                  <span className="text-4xl text-[#FFFFFF] font-black">
                    260000
                  </span>
                  {t("content.tomans")}
                </p>
                <button className="h-[45px] rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-4">
                  {t("content.Purchase-of-an-advanced-device")}
                </button>
              </div>
            </div>
            <div className="w-[450px] bg-[#181818] py-12 px-[35px] text-right rounded-3xl z-10">
              <div className="flex text-right justify-between items-center pt-2 pb-10">
                <i className="text-[#FAFF00] text-3xl bi bi-star-fill"></i>
                <div className="flex">
                  <p className="text-4xl text-[#FD190A] font-bold px-6">
                    {t("content.basic")}
                  </p>
                  <p className="text-4xl text-[#FFFFFF] font-bold">
                    {t("content.model")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-[#FFFFFF] font-extrabold">
                  {t("content.possibilities")}
                </p>
                <ul
                  dir="rtl"
                  className="pt-3 text-[#FFFFFF] text-base font-medium leading-9 list-disc list-outside"
                >
                  <li>
                    <p>{t("content.possibilities-description-1")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-2")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-3")}</p>
                  </li>
                  <li>
                    <p>{t("content.possibilities-description-3")}</p>
                  </li>
                </ul>
                <p className="text-4xl text-[#FFFFFF] font-black py-4">
                  <span className="text-4xl text-[#FFFFFF] font-black">
                    {t("content.model-basic-price")}
                  </span>
                  {t("content.tomans")}
                </p>
                <button className="h-[45px] rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-4">
                  {t("content.Purchase-of-an-basic-device")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
