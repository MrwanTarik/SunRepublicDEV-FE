import React from 'react';
import BrsImage from '../../assets/images/brs.svg';
import WebinarImage from '../../assets/images/webinar-bg.png';
import { t } from '../../i18n';
import i18n from '../../i18n';
import webinarFirstIcon from '../../assets/images/webinar-first-icon.png';
import webinarSecondIcon from '../../assets/images/webinar-second-ico.png';
import webinarThreeIcon from '../../assets/images/webinar-third-ico.png';
import webinarFourthIcon from '../../assets/images/webinar-fourth-icon.png';
const Webinar = () => {
  return (
    <div>
      <div className="ds bg-cover bg-no-repeat ">
        <div className="container pt-[60px] lg:pt-[80px] ">
          <div className="flex flex-col lg:flex-row lg:items-end ">
            <div className="w-full lg:w-[45%] pb-[40px]  lg:pb-[77px]">
              <h2 className="text-[40px] pt-[50px] lg:pt-0 text-white font-extrabold">
                {t('webinarTextOne')}
              </h2>
              <h2 className="text-[24px] lg:text-[40px] text-white font-extrabold">
                {t('webinarTextTwo')}
              </h2>
              <p className="pt-[5px] text-[18px] lg:text-[20px] font-extrabold leading-[24px] lg:leading-[46px] text-[#F26E21] pb-[33px]">
                <span>{t('webinarSpan')}</span>
                {t('webinarParaOne')}
              </p>
              <div className="flex flex-col lg:flex-row">
                <div className="flex gap-x-[7px] items-center w-full lg:w-[50%]">
                  <img src={webinarFirstIcon} alt="webinarFirstIcon" />
                  <p className="text-white text-[14px] font-medium lg:text-[16px]">
                    {t('firstWebinarPara')}
                  </p>
                </div>
                <div className="flex gap-x-[7px] items-center w-full lg:w-[50%]">
                  <img src={webinarSecondIcon} alt="webinarFirstIcon" />
                  <p className="text-white text-[14px] font-medium lg:text-[16px]">
                    {t('secondWebinarPara')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-[50px] lg:flex-row">
                <div className="flex gap-x-[7px] items-center w-full lg:w-[50%]">
                  <img src={webinarThreeIcon} alt="webinarFirstIcon" />
                  <p className="text-white text-[14px] font-medium lg:text-[16px]">
                    {t('thirdWebinarPara')}
                  </p>
                </div>
                <div className="flex gap-x-[7px] items-center w-full lg:w-[50%]">
                  <img src={webinarFourthIcon} alt="webinarFirstIcon" />
                  <p className="text-white text-[14px] font-medium lg:text-[16px]">
                    {t('fourthWebinarPara')}
                  </p>
                </div>
              </div>
              <button
                className="text-white text-[14px] font-extrabold uppercase leading-[14px] h-[60px] w-[299px] bg-[#F26E21] rounded-[30px]"
                type="button"
              >
                {t('webinarButton')}
              </button>
            </div>
            <div className="pt-[50px] lg:w-[55%]  lg:pt-0">
              <img className='w-full' src={BrsImage} alt="BrsImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
