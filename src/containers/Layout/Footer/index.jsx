/* eslint-disable no-alert */
import { Link } from 'react-router-dom';
import { t } from '../../../i18n';
import classes from './styles.module.scss';
import instaIcon from '../../../assets/images/insta-icon.png';
import youtubeIcon from '../../../assets/images/youtube-icon.png';
import facebookIcon from '../../../assets/images/facebook-icon.png';
import whatsApp from '../../../assets/images/whatsapp-icon.png';
export default function Footer() {
  return (
    <div className="bg-footer bg-cover bg-no-repeat bg-center py-[36px] lg:py-[60px]">
      <div className="container">
        <div className="flex flex-col gap-y-[20px] justify-between items-center lg:flex-row ">
          <div className="w-full text-center sm:text-start sm:w-[48%] lg:w-[30.8%]">
            <h2 className="text-[24px] pb-[15px] lg:pb-[24px] lg:text-[40px] leading-[32px] lg:leading-[52px] text-white">
              {t('footerHeader')}
              <span className="text-[#F26E21]">{t('footerSpan')}</span>
            </h2>
            <p className="text-white text-[16px] leading-[23px]">
              {t('footerPara')}
            </p>
          </div>
          <div className="w-full sm:w-[48%] lg:w-[30.8%] flex flex-col items-center text-start ">
            <p className="text-white text-[16px] leading-[23px] font-bold">
              Serap Nedim Apt. No: 1
            </p>
            <p className="text-white text-[16px] leading-[23px] font-bold mb-[32px] lg:mb-[22px]">
              Samsun Bulvari Iskele, 9985
            </p>

            <p className="text-white text-[16px] leading-[23px] font-bold mb-[32px] lg:mb-[22px]">
              +90 533 845 7788
            </p>
          </div>
          <div className="w-full sm:w-[48%] lg:w-[30.8%]">
            <div className="flex gap-x-0 sm:gap-x-[15px] justify-center">
              <Link className="flex justify-center" to="/">
                <img src={instaIcon} alt="" />
              </Link>
              <Link className="flex justify-center" to="/">
                <img src={facebookIcon} alt="" />
              </Link>
              <Link className="flex justify-center" to="/">
                <img src={youtubeIcon} alt="" />
              </Link>
              <Link className="flex justify-center" to="/">
                <img src={whatsApp} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
