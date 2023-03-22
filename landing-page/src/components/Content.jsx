import React from "react";
import plan from "../assets/svgs/plan.svg";
import line from "../assets/svgs/line.svg";
import video from "../assets/svgs/video.svg";
import plan1 from "../assets/svgs/plan1.svg";
import plan2 from "../assets/svgs/plan2.svg";
import plan3 from "../assets/svgs/plan3.svg";
import video2 from "../assets/svgs/video2.svg";
import plan4 from "../assets/svgs/plan4.svg";
import plan5 from "../assets/svgs/plan5.svg";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="sm:px-20 px-4 flex flex-col overflow-x-hidden">
      <div className="sm:pt-20 sm:pb-[50px] py-12 border-b border-solid border-[#FFFFFF]">
        <div className="flex sm:justify-between sm:flex-row flex-col-reverse">
          <div className="sm:w-[23%] w-full">
            <div className="py-10 sm:px-10 px-[11px] sm:mt-0 mt-[20px] relative rounded-3xl border border-solid border-[#FFFFFF] flex items-center sm:justify-center justify-end">
              <img
                className="w-[200px] h-[113px] sm:block hidden"
                src={plan}
                alt=""
              />
              <img
                className="w-[148px] h-[50px] pl-2 sm:hidden block"
                src={plan3}
                alt=""
              />
              <div className="bg-[#E72F23] text-[#FFFFFF] sm:py-4 sm:px-7 p-[10px] rounded-3xl absolute sm:top-[80%] sm:right-0 right-[46%] h-full sm:h-auto">
                <div className="flex justify-end items-center sm:pb-3 pb-2">
                  <p className="sm:text-lg text-base font-black pr-3">
                    {t("content.firemonitor-software")}
                  </p>
                  <i className="sm:text-4xl text-2xl bi bi-wifi"></i>
                </div>
                <div className="text-right">
                  <p className="sm:text-sm text-[10px] sm:leading-7 leading-6">
                    {t("content.firemonitor-software-description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[52%] w-full">
            <div
              dir="rtl"
              className="pb-8 pt-0 border-b border-solid border-[#FFFFFF] sm:leading-[70px] leading-[50px] text-[#FFFFFF] sm:text-4xl sm:font-medium text-2xl font-normal text-right"
            >
              <p>
                {t("content.hero-title")}
                <br className="hidden sm:block" />
                {t("content.hero-title-2")}
              </p>
            </div>
            <div className="pt-8 flex items-end flex-col">
              <div className="pb-8 flex flex-wrap">
                <button className="sm:h-[45px] h-[33px] sm:ml-4 ml-1 rounded-[80px] text-[#FFFFFF] sm:text-base text-[10px] font-normal border border-solid border-[#FFFFFF] pb-1 sm:px-6 px-[10px] mt-1">
                  {t("content.monitoring-sensors")}
                </button>
                <button className="sm:h-[45px] h-[33px] sm:ml-4 ml-1 rounded-[80px] text-[#FFFFFF] sm:text-base text-[10px] font-normal border border-solid border-[#FFFFFF] pb-1 sm:px-6 px-[10px] mt-1">
                  {t("content.immediate-notification-of-fire")}
                </button>
                <button className="sm:h-[45px] h-[33px] sm:ml-4 ml-1 rounded-[80px] text-[#FFFFFF] sm:text-base text-[10px] font-normal border border-solid border-[#FFFFFF] pb-1 sm:px-6 px-[10px] mt-1">
                  {t("content.smart-hardware")}
                </button>
              </div>
              <div className="w-full">
                <img src={line} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:justify-between sm:pt-[50px] sm:items-center">
          <div className="sm:w-[23%] w-full bg-[#FFF38C] p-4 flex justify-between text-[#222222] rounded-2xl sm:mt-0 mt-4">
            <i className="text-4xl font-bold pt-1 pl-1 bi bi-arrow-up-left"></i>
            <div className="text-right">
              <p className="sm:text-lg text-base font-black py-2">
                {t("content.firemonitor-order-registration")}
              </p>
              <p className="sm:text-sm text-[11px]">
                {t("content.firemonitor-order-registration-description")}
                <strong className="sm:text-sm text-[11px]">
                  {t("content.firemonitor-order-registration-description-2")}
                </strong>
              </p>
            </div>
          </div>
          <div className="sm:w-[55%] w-full flex justify-end items-center pt-8 sm:pt-0 text-right text-[#FFFFFF]">
            <p className="sm:text-sm text-[10px]">
              {t("content.intelligent-notification-system-description")}
            </p>
            <div className="border-l-2 text-[#FFFFFF] h-24 mx-8 sm:block hidden"></div>
            <div className="border-l-2 border-[#FFFFFF] h-10 mx-1 sm:hidden block"></div>
            <p className="sm:text-3xl text-xs sm:font-black font-bold">
              {t("content.intelligent-notification-system")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
        <div className="bg-[#FFFFFF0D] text-[#FFFFFF] my-[120px] sm:w-[800px] w-full flex sm:flex-row flex-col-reverse sm:rounded-[32px] rounded-xl">
          <div className="sm:w-1/2 w-full sm:h-auto h-2/3 sm:pb-6 sm:px-12 py-[23px] px-4 text-right flex justify-center items-end flex-col">
            <button className="sm:h-[42px] h-[25px] sm:rounded-[64px] rounded-3xl text-[#FFFFFF] sm:text-xs text-[9px] font-light border border-solid border-[#FFFFFF] sm:pb-1 px-6 sm:mb-4 mb-2">
              {t("content.firemonitor")}
            </button>
            <p className="sm:text-3xl text-sm sm:pl-4 font-black sm:pt-4 pt-1">
              {t("content.firemonitor-description")}
            </p>
          </div>
          <div className="sm:w-1/2 w-full h-1/3 sm:h-auto">
            <img className="w-full h-full sm:block hidden" src={video} alt="" />
            <img
              className="w-full h-full sm:hidden block"
              src={video2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sm:my-24  flex sm:flex-row flex-col-reverse sm:justify-between">
        <div className="sm:w-[750px] w-full text-[#222222] flex flex-col">
          <div className="w-full bg-[#FC5B5B] sm:rounded-2xl rounded-lg sm:p-10 p-3 sm:mb-6 mb-2">
            <p className="sm:text-3xl text-sm font-black text-center">
              {t(
                "content.immediate-online-notification-and-SMS-of-fire-danger"
              )}
            </p>
            <div className="flex justify-between">
              <button className="sm:h-[45px] h-[33px] sm:ml-4 rounded-[80px] text-[#222222] sm:text-base text-[10px] font-normal border-[0.1px] sm:border border-solid border-[#222222] pb-1 sm:px-6 px-[10px] sm:mt-10 mt-3">
                {t("content.order-firemonitor")}
              </button>
              <div className="flex flex-col justify-end">
                <p className="sm:text-sm text-[10px] text-[#222222] sm:pt-2 pt-2">
                  {t(
                    "content.immediate-online-notification-and-SMS-of-fire-danger-description"
                  )}
                </p>
                <p className="sm:text-sm text-[10px] text-[#222222] sm:pt-4 pt-2">
                  {t(
                    "content.immediate-online-notification-and-SMS-of-fire-danger-description"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="sm:w-[404px] w-[60%] bg-[#8388FF] sm:rounded-2xl rounded-lg sm:p-8 p-3 sm:mr-4 mr-2">
              <p className="sm:text-3xl text-sm font-black sm:text-center text-right">
                {t("content.direct-fire-department-access")}
              </p>
              <p className="sm:text-sm text-[10px] text-[#222222] text-right sm:pt-3 pt-1 sm:leading-9 leading-6">
                {t("content.direct-fire-department-access-description")}
              </p>
            </div>
            <div className="sm:w-[329px] w-[40%] bg-[#FFA05B] sm:rounded-2xl rounded-lg sm:p-8 p-3">
              <p className="sm:text-3xl text-sm font-black sm:text-center text-right">
                {t("content.monitoring-sensors")}
              </p>
              <p className="sm:text-sm text-[10px] text-[#222222] text-right sm:pt-3 pt-1 sm:leading-9 leading-6">
                {t("content.monitoring-sensors-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-[446px] w-full sm:pt-14 text-right text-[#FFFFFF]">
          <div className="flex justify-end">
            <div className="h-1 w-[65px] bg-[#FD190A]"></div>
          </div>
          <p className="sm:text-4xl text-[23px] font-black sm:py-6 pb-6 pt-4">
            {t("content.features-of-firemonitor")}
          </p>
          <p className="text-2xl font-medium pb-6 sm:block hidden">
            {t("content.features-of-firemonitor-description")}
          </p>
          <button className="h-[45px] ml-4 rounded-[80px] text-[#FFFFFF] text-base font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1 sm:inline hidden">
            {t("content.order-firemonitor")}
          </button>
        </div>
      </div>
      <div className="sm:my-24 sm:py-20 my-[120px] text-[#FFFFFF] text-right">
        <div className="flex justify-end">
          <div className="h-1 w-[65px] bg-[#FD190A]"></div>
        </div>
        <p className="sm:text-4xl text-[23px] font-black sm:py-6 pb-6 pt-4">
          {t("content.circuit-hardware-description")}
        </p>
        <div className="sm:mt-[150px] mt-8">
          <div className="-rotate-[8.5deg] w-[110vw] relative sm:-left-[105px] -left-[35px] sm:h-[230px] h-[207px] border-t-[2px] border-b-[2px] bg-[#FFFFFF03] border-[#FFFFFF1A] border-solid">
            <div className="flex rotate-[8.5deg] justify-center relative sm:left-20 left-12">
              <img className="mt-6 sm:block hidden" src={plan1} alt="" />
              <img
                className="relative right-[90px] top-8 sm:block hidden"
                src={plan2}
                alt=""
              />
              <img
                className="w-[320.6px] h-[145px] mt-10 sm:hidden block"
                src={plan4}
                alt=""
              />
              <img
                className="w-[87.84px] h-[85.44px] relative right-[122px] top-[37px] sm:hidden block"
                src={plan5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-4 flex sm:flex-row flex-col-reverse sm:justify-between sm:mt-24 mt-10">
          <div className="flex items-center justify-end sm:justify-start sm:mb-0 mb-[21px]">
            <div className="text-right">
              <p className="sm:text-base text-sm text-[#FFFFFF] font-black sm:pt-0 pb-1">
                {t("content.temperature-control-kit")}
              </p>
              <p className="sm:text-sm text-[10px] text-[#FFFFFF] sm:pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="sm:w-16 sm:h-16 w-12 h-12 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] sm:text-4xl text-lg font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-3")}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end sm:justify-start sm:mb-0 mb-[21px]">
            <div className="text-right">
              <p className="sm:text-base text-sm text-[#FFFFFF] font-black sm:pt-0 pb-1">
                {t("content.temperature-control-kit")}
              </p>
              <p className="sm:text-sm text-[10px] text-[#FFFFFF] sm:pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="sm:w-16 sm:h-16 w-12 h-12 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] sm:text-4xl text-lg font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-2")}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end sm:justify-start sm:mb-0 mb-[21px]">
            <div className="text-right">
              <p className="sm:text-base text-sm text-[#FFFFFF] font-black sm:pt-0 pb-1">
                {t("content.temperature-control-kit")}
              </p>
              <p className="sm:text-sm text-[10px] text-[#FFFFFF] sm:pt-3">
                {t("content.temperature-control-kit-description")}
              </p>
            </div>
            <div>
              <div className="sm:w-16 sm:h-16 w-12 h-12 border-2 border-solid border-[#FD190A] bg-[#FFFFFF33] text-[#FFFFFF] sm:text-4xl text-lg font-black rounded-[50%] flex justify-center items-center ml-[22px]">
                <p>{t("content.number-1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-24 sm:py-20 mb-[120px] text-[#FFFFFF] text-right relative">
        <div className="flex justify-end">
          <div className="h-1 w-[65px] bg-[#FD190A]"></div>
        </div>
        <p className="sm:text-4xl text-[23px] font-black sm:py-6 pb-6 pt-4">
          {t("content.firemonitor-tariffs")}
        </p>
        <div className="sm:mt-[100px] mt-10">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center relative">
            <div className="sm:h-[201px] h-[364px] w-[100vw] bg-[#FFFFFF0D] sm:-left-20 -left-4 absolute"></div>
            <div className="sm:w-[450px] w-[350px] bg-[#E72F23] sm:py-12 sm:px-[35px] p-6 text-right rounded-3xl sm:mr-8 mt-8 sm:mt-0 z-10">
              <div className="flex text-right justify-between items-center pt-2 sm:pb-10 pb-3">
                <i className="text-[#130F26] sm:text-3xl text-2xl pr-6 bi bi-star-fill"></i>
                <div className="flex">
                  <p className="sm:text-4xl text-2xl text-[#FFFFFF] font-bold">
                    ADVANCED
                  </p>
                  <p className="sm:text-4xl text-2xl text-[#FFFFFF] font-bold pl-1">
                    {t("content.model")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-[#FFFFFF] font-extrabold sm:block hidden">
                  {t("content.possibilities")}
                </p>
                <ul
                  dir="rtl"
                  className="pt-3 text-[#FFFFFF] sm:text-base text-xs font-medium sm:leading-9 leading-6 list-disc list-outside"
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
                <p
                  dir="rtl"
                  className="sm:text-4xl text-2xl text-[#FFFFFF] font-black sm:py-4 py-2"
                >
                  {t("content.model-advanced-price")}
                  {t("content.tomans")}
                </p>
                <button className="sm:h-[45px] h-[33px] rounded-[80px] text-[#FFFFFF] sm:text-base text-sm font-normal border border-solid border-[#FFFFFF] pb-1 sm:px-6 px-[10px] sm:mt-4 mt-2">
                  {t("content.Purchase-of-an-advanced-device")}
                </button>
              </div>
            </div>
            <div className="sm:w-[450px] w-[350px] bg-[#181818] sm:py-12 sm:px-[35px] p-6 text-right rounded-3xl z-10">
              <div className="flex text-right justify-between items-center pt-2 sm:pb-10 pb-3">
                <i className="text-[#FAFF00] sm:text-3xl text-2xl bi bi-star-fill"></i>
                <div className="flex">
                  <p className="sm:text-4xl text-2xl text-[#FD190A] font-bold">
                    {t("content.basic")}
                  </p>
                  <p className="sm:text-4xl text-2xl text-[#FFFFFF] font-bold pl-1">
                    {t("content.model")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-[#FFFFFF] font-extrabold sm:block hidden">
                  {t("content.possibilities")}
                </p>
                <ul
                  dir="rtl"
                  className="pt-3 text-[#FFFFFF] sm:text-base text-xs font-medium sm:leading-9 leading-6 list-disc list-outside"
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
                <p
                  dir="rtl"
                  className="sm:text-4xl text-2xl text-[#FFFFFF] font-black py-4"
                >
                  {t("content.model-basic-price")}
                  {t("content.tomans")}
                </p>
                <button className="sm:h-[45px] h-[33px] rounded-[80px] text-[#FFFFFF] sm:text-base text-sm font-normal border border-solid border-[#FFFFFF] pb-1 sm:px-6 px-[10px] sm:mt-4 mt-2">
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
