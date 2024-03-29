import { useRef, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import thnxEn from '../../assets/images/thnxEN.png';
import thnxRu from '../../assets/images/thnxRU.png';
import thnxTr from '../../assets/images/thnxTR.png';
import PhoneInput from '../../components/PhoneInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import playButton from '../../assets/images/play-button.png';
import { API_URL } from '../../constants/main';
// import { useSearchParams, Link } from 'react-router-dom';
// import { UIContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import { t } from '../../i18n';
import i18n from '../../i18n';
import classes from './styles.module.scss';
import classNames from 'classnames';
import thirdSectionFirstImg from '../../assets/images/thirdSecFirst-img.png';
import thirdSectionSecondImg from '../../assets/images/thirdSecSecond-img.png';
import thirdSectionThirdImg from '../../assets/images/thirdSecThird-img.png';
import thirdSectionFourthImg from '../../assets/images/thirdSecForth-img.png';
import thirdSectionFifthImg from '../../assets/images/thirdSecFifth-img.png';
import thirdSectionSixthImg from '../../assets/images/thirdSecSex-img.png';
import forthSectionFirstImg from '../../assets/images/1.svg';
import forthSectionSecondImg from '../../assets/images/2.svg';
import forthSectionThirdImg from '../../assets/images/3.svg';
import forthSectionForthImg from '../../assets/images/4.svg';
import forthSectionFifthImg from '../../assets/images/5.svg';
import forthSectionSixthImg from '../../assets/images/6.svg';

import OfferCard from '../../components/OfferCard/OfferCard';
import ClientCard from '../../components/ClientCard/ClientCard';
import ConditionIcon from '../../assets/images/condition-icon.png';
import SwiperSlider from '../../components/SwiperSlider';
import seventhIcon1 from '../../assets/images/seventh-icon1.png';
import seventhIcon2 from '../../assets/images/seventh-icon2.png';
import sunRepublicImg from '../../assets/images/sun-republic-img.png';
import TeamImg from '../../assets/images/team-img.png';
const thirdSectionData = [
  {
    image: thirdSectionFirstImg,
    title: t('thirdSectionTitle1'),
    area: t('thirdSectionArea1'),
    price: t('thirdSectionPrice1'),
  },
  {
    image: thirdSectionSecondImg,
    title: t('thirdSectionTitle2'),
    area: t('thirdSectionArea2'),
    price: t('thirdSectionPrice2'),
  },
  {
    image: thirdSectionThirdImg,
    title: t('thirdSectionTitle3'),
    area: t('thirdSectionArea3'),
    price: t('thirdSectionPrice3'),
  },
  {
    image: thirdSectionFourthImg,
    title: t('thirdSectionTitle4'),
    area: t('thirdSectionArea4'),
    price: t('thirdSectionPrice4'),
  },
  {
    image: thirdSectionFifthImg,
    title: t('thirdSectionTitle5'),
    area: t('thirdSectionArea5'),
    price: t('thirdSectionPrice5'),
  },
  {
    image: thirdSectionSixthImg,
    title: t('thirdSectionTitle6'),
    area: t('thirdSectionArea6'),
    price: t('thirdSectionPrice6'),
  },
];
const forthSectionData = [
  {
    image: forthSectionFirstImg,
    title: t('forthSectionTitle1'),
    content: t('forthSectionContent1'),
    num: '01',
  },
  {
    image: forthSectionSecondImg,
    title: t('forthSectionTitle2'),
    content: t('forthSectionContent2'),
    num: '02',
  },
  {
    image: forthSectionThirdImg,
    title: t('forthSectionTitle3'),
    content: t('forthSectionContent3'),
    num: '03',
  },
  {
    image: forthSectionForthImg,
    title: t('forthSectionTitle4'),
    content: t('forthSectionContent4'),
    num: '04',
  },
  {
    image: forthSectionFifthImg,
    title: t('forthSectionTitle5'),
    content: t('forthSectionContent5'),
    num: '05',
  },
  {
    image: forthSectionSixthImg,
    title: t('forthSectionTitle6'),
    content: t('forthSectionContent6'),
    num: '06',
  },
];
const validationSchema = yup.object({
  name: yup.string().trim().required('This field is required'),
  phone: yup
    .string()
    .test('validatePhone', 'Phone number is not valid', (value) => {
      return new Promise((resolve) => {
        import('react-phone-number-input')
          .then(({ isValidPhoneNumber }) => {
            const isValidPhone = isValidPhoneNumber(`+${value}`);
            if (isValidPhone) {
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(() => {
            resolve(false);
          });
      });
    })
    .required('This field is required'),
  description: yup.string().trim().required('This field is required'),
});
const Form1 = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const containerRef = useRef();

  // const [searchParams] = useSearchParams();
  // const searchParam = searchParams.get('search');
  const sendMessage = async (values, { resetForm }) => {
    try {
      await axios.post(`${API_URL}/contact`, values);
      resetForm();
      setIsFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      description: '',
    },
    validationSchema,
    onSubmit: sendMessage,
  });
  // const navigate = useNavigate();
  const handleGoBackToForm = () => {
    setIsFormSubmitted(false);
  };
  return (
    <div className="w-full lg:w-[26.3%]">
      <div style={{ height: '100%' }} className={classes.forms}>
        {isFormSubmitted ? (
          <div style={{ height: '100%' }} className={classes.successMessage}>
            {i18n.language === 'en' ? (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxEn}
                    alt="Success Image for English"
                  />
                  <h6>
                    {' '}
                    We just received your message and will get in touch as soon
                    as possible.
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Go Back To Form
                  </Link>
                </div>
              </div>
            ) : i18n.language === 'tr' ? (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxTr}
                    alt="Success Image for Turkey"
                  />
                  <h6>
                    {' '}
                    Mesajınızı yeni aldık ve en kısa sürede sizinle iletişime
                    geçeceğiz
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Forma Geri Dön
                  </Link>
                </div>
              </div>
            ) : (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxRu}
                    alt="Success Image for Russian"
                  />
                  <h6>
                    {' '}
                    Мы получили Ваше сообщение и свяжемся с Вами в ближайшее
                    время
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Вернуться к Форме
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <div className={classes.inputs}>
              <div className={classes.nameContainer}>
                <div className="pb-[20px]">
                  <TextInput
                    placeholder={t('Name')}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="text-[red] font-medium text-[14px] ps-[5px] pt-[10px]">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="pb-[20px]">
                <PhoneInput
                  placeholder={t('Phone')}
                  name="phone"
                  value={formik.values.phone}
                  setFieldValue={formik.setFieldValue}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-[red] font-medium text-[14px] ps-[5px] pt-[10px]">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
              <div className={classes.textInputContainer}>
                <TextInput
                  name="description"
                  placeholder={t('comment')}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  descriptionInputStyle={true}
                />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                onClick={formik.handleSubmit}
                disabled={
                  !formik.isValid ||
                  Object.keys(formik.values).every(
                    (key) => formik.values[key] === ''
                  )
                }
              >
                {t('SEND')}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
const Form2 = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const containerRef = useRef();

  // const [searchParams] = useSearchParams();
  // const searchParam = searchParams.get('search');
  const sendMessage = async (values, { resetForm }) => {
    try {
      await axios.post(`${API_URL}/contact`, values);
      resetForm();
      setIsFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      description: '',
    },
    validationSchema,
    onSubmit: sendMessage,
  });
  // const navigate = useNavigate();
  const handleGoBackToForm = () => {
    setIsFormSubmitted(false);
  };
  return (
    <div className="w-full lg:w-[28%]">
      <div style={{ height: '100%' }} className={classes.forms}>
        {isFormSubmitted ? (
          <div style={{ height: '100%' }} className={classes.successMessage}>
            {i18n.language === 'en' ? (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxEn}
                    alt="Success Image for English"
                  />
                  <h6>
                    {' '}
                    We just received your message and will get in touch as soon
                    as possible.
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Go Back To Form
                  </Link>
                </div>
              </div>
            ) : i18n.language === 'tr' ? (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxTr}
                    alt="Success Image for Turkey"
                  />
                  <h6>
                    {' '}
                    Mesajınızı yeni aldık ve en kısa sürede sizinle iletişime
                    geçeceğiz
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Forma Geri Dön
                  </Link>
                </div>
              </div>
            ) : (
              <div
                style={{ height: '100%' }}
                className={classes.thankContainer}
              >
                <div>
                  <img
                    width={'100%'}
                    src={thnxRu}
                    alt="Success Image for Russian"
                  />
                  <h6>
                    {' '}
                    Мы получили Ваше сообщение и свяжемся с Вами в ближайшее
                    время
                  </h6>
                </div>
                <div>
                  <Link onClick={handleGoBackToForm} to={'/'}>
                    Вернуться к Форме
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <h2 className="text-white text-center text-[20px] font-extrabold max-w-[299px] mb-[20px]">
              {t('fifthSectionForm')}
            </h2>
            <div className={classes.inputs}>
              <div className={classes.nameContainer}>
                <div className="pb-[20px]">
                  <TextInput
                    placeholder={t('Name')}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="text-[red] font-medium text-[14px] ps-[5px] pt-[10px]">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="pb-[20px]">
                <PhoneInput
                  placeholder={t('Phone')}
                  name="phone"
                  value={formik.values.phone}
                  setFieldValue={formik.setFieldValue}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-[red] font-medium text-[14px] ps-[5px] pt-[10px]">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
              <div className={classes.textInputContainer}>
                <TextInput
                  name="description"
                  placeholder={t('comment')}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  descriptionInputStyle={true}
                />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                onClick={formik.handleSubmit}
                disabled={
                  !formik.isValid ||
                  Object.keys(formik.values).every(
                    (key) => formik.values[key] === ''
                  )
                }
              >
                {t('SEND')}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default function HomePage() {
  // const { searchTerm } = useContext(UIContext);
  const navigate = useNavigate();
  const handleCardClick = (buildingType) => {
    navigate('/buy', { state: { buildingType } });
  };
  return (
    <div className="bg-[#2b2724]">
      <div
        className={classNames(
          classes.hero,
          `flex flex-col gap-y-[60px] lg:gap-y-[65px] pt-[25px] md:pt-[40px] lg:pt-[65px] justify-between`
        )}
      >
        <div className="container flex flex-col lg:flex-row gap-x-0 lg:gap-x-[71px] gap-y-[30px] lg:gap-y-0 ">
          <div className="w-full lg:w-[68.5%] pt-[0] lg:pt-[26px]">
            <h1 className="text-[42px] lg:text-[95px] font-extrabold text-white leading-[42px] lg:leading-[95px]">
              <span className="text-[#F26E21] font-extrabold text-[42px]  lg:text-[95px] leading-[42px] lg:leading-[95px] ">
                SUN{' '}
              </span>
              REPUBLIC
            </h1>
            <p className="pt-[10px] lg:pt-[18px] text-[white] text-[24px] font-extrabold lg:text-[36px] leading-[30px] lg:leading-[46px] first-letter:capitalize">
              {t('heroHeader')}
            </p>
            <p className="text-white text-[18px] lg:text-[20px] font-bold leading-[25px] lg:leading-[28px] pt-[18px] lg:pt-[36px]">
              {t('heroPara')}
              <span className="text-[#F26E21]">{t('heroParaSpan')}</span>
            </p>
            <div className="pt-[28px] lg:pt-[31px] flex flex-col lg:flex-row gap-y-[18px] lg:gap-y-0 gap-x-0 lg:gap-x-[40px]">
              <div className="flex flex-row items-center gap-x-[9px] lg:gap-x-[12px]">
                <div
                  className={classNames(
                    classes.icon,
                    `w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full p-[10px] lg:p-[11px] flex flex-row items-center justify-center`
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_129)">
                      <path
                        d="M23.2242 17.5204C22.8592 17.3837 22.4731 17.3331 22.0896 17.3705C21.7753 16.4658 21.123 15.8225 20.2583 15.5804C19.2373 15.2944 18.0823 15.6167 17.3159 16.4014C17.1615 16.5595 17.1645 16.8127 17.3225 16.9671C17.4805 17.1215 17.7339 17.1184 17.8882 16.9604C18.9587 15.8644 20.9743 16.0117 21.4151 17.9154C21.4657 18.1339 21.686 18.2679 21.9031 18.2129C22.25 18.1249 22.6098 18.1445 22.9435 18.2695C23.0969 18.327 23.2 18.4772 23.2 18.6433V20.0074C23.2 20.2279 23.0205 20.4074 22.8 20.4074H1.1339C0.949796 20.4074 0.799997 20.2576 0.799997 20.0735V19.2212C0.799997 19.0371 0.949796 18.8873 1.1339 18.8873H19.5685C19.7894 18.8873 19.9685 18.7082 19.9685 18.4873C19.9685 18.2664 19.7894 18.0873 19.5685 18.0873H15.708V13.8472C15.708 13.6263 15.5289 13.4473 15.308 13.4473H12.0306C11.8097 13.4473 11.6306 13.6263 11.6306 13.8472V16.738C11.6306 16.9589 11.8097 17.138 12.0306 17.138C12.2515 17.138 12.4306 16.9589 12.4306 16.738V14.2472H14.908V18.0873H9.83706V16.2928H9.94511C10.166 16.2928 10.3451 16.1137 10.3451 15.8928C10.3451 15.6719 10.166 15.4928 9.94511 15.4928H4.51608C4.29518 15.4928 4.11608 15.6719 4.11608 15.8928C4.11608 16.1137 4.29518 16.2928 4.51608 16.2928H4.62413V18.0873H2.58869V8.30107L9.94216 3.66754L17.3015 8.43262V14.6896C17.3015 14.9105 17.4806 15.0896 17.7015 15.0896C17.9224 15.0896 18.1015 14.9105 18.1015 14.6896V11.9997L22.354 13.1532V15.3477C22.354 15.5686 22.5331 15.7477 22.754 15.7477C22.9749 15.7477 23.154 15.5686 23.154 15.3477V13.3702C23.5065 13.4658 23.5276 13.4768 23.6002 13.4768C23.7762 13.4768 23.9376 13.3596 23.9859 13.1815C24.0438 12.9682 23.9178 12.7485 23.7046 12.6907L18.1015 11.1708V8.95062L19.0167 9.54317C19.2022 9.66327 19.4498 9.61022 19.5698 9.42482C19.6899 9.23942 19.6369 8.99177 19.4515 8.87167L10.1625 2.8572C10.0318 2.77255 9.86371 2.7715 9.73191 2.8545L3.03069 7.07698C2.75674 6.81173 2.59839 6.44553 2.59839 6.05738C2.59839 5.00309 3.71353 4.31714 4.65253 4.78799C4.83458 4.87934 5.05623 4.81924 5.16718 4.64844C5.35838 4.35429 5.66653 4.16294 6.01252 4.12344C6.23202 4.09839 6.38962 3.90014 6.36457 3.68069C6.33952 3.46124 6.14147 3.30349 5.92182 3.32864C5.45028 3.38244 5.02083 3.60274 4.70353 3.94619C3.27949 3.48159 1.79839 4.54779 1.79839 6.05743C1.79839 6.59868 1.99549 7.11228 2.34164 7.51118L0.186749 8.86897C-0.151149 9.08187 -0.000650022 9.60747 0.400348 9.60747C0.473198 9.60747 0.546998 9.58757 0.613197 9.54587L1.78869 8.80517V18.0874H1.1339C0.508648 18.0873 0 18.596 0 19.2212V20.0735C0 20.6987 0.508648 21.2074 1.1339 21.2074H22.7999C23.4615 21.2074 23.9999 20.669 23.9999 20.0074V18.6433C23.9999 18.1455 23.6882 17.6943 23.2242 17.5204ZM5.42413 16.2929H9.03706V18.0874H5.42413V16.2929Z"
                        fill="white"
                      />
                      <path
                        d="M7.76907 7.10254C7.12852 7.10254 6.60742 7.62364 6.60742 8.26413V9.76023C6.60742 10.4008 7.12857 10.9218 7.76907 10.9218H11.8651C12.5057 10.9218 13.0267 10.4007 13.0267 9.76023V8.26413C13.0267 7.62359 12.5056 7.10254 11.8651 7.10254H7.76907ZM7.40737 9.76023V8.26413C7.40737 8.06474 7.56962 7.90254 7.76902 7.90254H9.41706V10.1219H7.76902C7.56967 10.1219 7.40737 9.95968 7.40737 9.76023ZM12.2267 8.26413V9.76023C12.2267 9.95963 12.0645 10.1218 11.8651 10.1218H10.2171V7.90249H11.8651C12.0645 7.90254 12.2267 8.06474 12.2267 8.26413Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_129">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white text-[16px] font-medium leading-[28px]">
                  {t('icon-content1')}
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-[9px] lg:gap-x-[12px]">
                <div
                  className={classNames(
                    classes.icon,
                    `w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full p-[10px] lg:p-[11px] flex flex-row items-center justify-center`
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_125)">
                      <path
                        d="M21.7221 13.1146C21.0537 12.4671 20.0428 12.3704 19.2637 12.8794L18.4679 13.3995C17.6451 12.4595 16.5139 11.8831 15.2738 11.7705V7.5788C17.1818 7.37825 18.6738 5.7602 18.6738 3.8C18.6738 1.7047 16.9691 0 14.8738 0C12.7785 0 11.0738 1.7047 11.0738 3.8C11.0738 4.92475 11.5681 5.98535 12.4297 6.7098C12.5989 6.85195 12.8512 6.83015 12.9933 6.66105C13.1355 6.49195 13.1136 6.23965 12.9445 6.09745C12.2641 5.5254 11.8738 4.688 11.8738 3.8C11.8738 2.1458 13.2196 0.8 14.8738 0.8C16.528 0.8 17.8738 2.1458 17.8738 3.8C17.8738 5.4542 16.528 6.8 14.8738 6.8C14.6529 6.8 14.4738 6.9791 14.4738 7.2V8.36305C14.0489 7.98215 13.4881 7.75 12.8738 7.75H12.0738C11.8529 7.75 11.6738 7.9291 11.6738 8.15V8.95C11.6738 9.83595 12.1591 10.6468 12.9404 11.066C13.1363 11.1711 13.3782 11.0961 13.482 10.9026C13.5865 10.708 13.5133 10.4655 13.3187 10.361C12.7975 10.0814 12.4738 9.54075 12.4738 8.95V8.55H12.8738C13.7561 8.55 14.4738 9.26775 14.4738 10.15V11.7633C13.8115 11.8113 13.1618 11.9945 12.5763 12.3012C12.3806 12.4037 12.305 12.6454 12.4075 12.8412C12.5101 13.0368 12.7519 13.1124 12.9475 13.0099C14.4997 12.1968 16.5052 12.4542 17.7902 13.8424L17.0123 14.3507C16.8274 14.4716 16.7754 14.7195 16.8963 14.9044C17.0171 15.0893 17.265 15.1412 17.4499 15.0204L19.7013 13.5492C20.1652 13.246 20.7673 13.3036 21.1654 13.6892C21.5615 14.073 21.6393 14.671 21.3547 15.1434L17.85 20.9597C17.2163 22.0113 16.0623 22.6017 14.8389 22.5005L7.12373 21.8627V16.8565C7.12373 16.6355 6.94463 16.4564 6.72373 16.4564C6.50283 16.4564 6.32373 16.6355 6.32373 16.8565V22.6947C6.32373 22.9733 6.09703 23.2 5.81843 23.2H2.97913C2.70053 23.2 2.47383 22.9733 2.47383 22.6947V14.4553C2.47383 14.1767 2.70053 13.95 2.97913 13.95H5.81848C6.09708 13.95 6.32378 14.1767 6.32378 14.4553C6.32378 15.1074 6.32368 15.0012 6.32433 15.0251C6.33098 15.2772 6.56748 15.4628 6.81693 15.4031C6.91418 15.3798 6.72128 15.4927 9.39713 13.7572C9.68668 13.5694 10.0646 13.5633 10.36 13.7416L15.2986 16.7218C15.6649 16.9429 15.8279 17.3962 15.686 17.7999C15.5351 18.2295 15.0856 18.4818 14.6401 18.3867L10.74 17.5541C10.5244 17.5081 10.3115 17.6458 10.2654 17.8618C10.2192 18.0779 10.357 18.2904 10.573 18.3365L14.4731 19.1691C15.3107 19.3479 16.1568 18.8735 16.4408 18.0651C16.7077 17.3057 16.4011 16.4528 15.712 16.0368L10.7734 13.0567C10.2175 12.7212 9.50648 12.7328 8.96183 13.0861L7.11243 14.2856C7.02888 13.6458 6.48073 13.15 5.81848 13.15H2.97913C2.25933 13.15 1.67383 13.7355 1.67383 14.4553V22.6947C1.67383 23.4144 2.25938 24 2.97913 24H5.81848C6.50708 24 7.12378 23.4562 7.12378 22.6654C7.12378 22.6654 14.9989 23.3118 15.111 23.3118C16.5118 23.3118 17.8022 22.5891 18.5352 21.3724L22.04 15.5562C22.518 14.763 22.3872 13.759 21.7221 13.1146Z"
                        fill="white"
                      />
                      <path
                        d="M14.8739 2.6999C15.4804 2.6999 15.9739 3.19335 15.9739 3.7999C15.9739 4.0208 16.153 4.1999 16.3739 4.1999C16.5948 4.1999 16.7739 4.0208 16.7739 3.7999C16.7739 2.75225 15.9215 1.8999 14.8739 1.8999C13.8262 1.8999 12.9739 2.75225 12.9739 3.7999C12.9739 4.84755 13.8262 5.6999 14.8739 5.6999C15.0948 5.6999 15.2739 5.5208 15.2739 5.2999C15.2739 5.079 15.0948 4.8999 14.8739 4.8999C14.2673 4.8999 13.7739 4.40645 13.7739 3.7999C13.7739 3.19335 14.2673 2.6999 14.8739 2.6999Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_125">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white text-[16px] font-medium leading-[28px]">
                  {t('icon-content2')}
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-[9px] lg:gap-x-[12px] mb-[30px] lg:mb-[0]">
                <div
                  className={classNames(
                    classes.icon,
                    `w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full p-[10px] lg:p-[11px] flex flex-row items-center justify-center`
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_114)">
                      <path
                        d="M22.6686 18.2138V15.2122C22.6686 14.5924 22.1566 14.0827 21.528 14.1197C21.3074 14.1326 21.1391 14.3218 21.152 14.5423C21.1649 14.7628 21.3547 14.9314 21.5746 14.9183C21.7324 14.9092 21.8685 15.04 21.8685 15.2122C21.8685 18.5668 21.8636 18.337 21.8795 18.4038C21.8437 20.4343 20.6425 22.2138 18.7984 22.953C18.396 23.1143 18.5028 23.0668 18.4472 23.089C18.0786 23.2367 17.6725 23.2367 17.3039 23.089L16.9646 22.9531C15.0923 22.2021 13.8825 20.3797 13.8825 18.3105V15.2122C13.8825 15.047 14.0125 14.9089 14.1764 14.9183C15.3429 14.9869 16.5278 14.7682 17.6249 14.2553C17.7842 14.1809 17.9669 14.1809 18.1262 14.2554C18.6976 14.5223 19.3472 14.715 19.6033 14.7581C19.7894 14.79 19.965 14.6872 20.0359 14.5252C20.0869 14.4096 20.07 15.2667 20.07 1.59995C20.07 0.717728 19.3523 0 18.47 0H2.92053C2.03831 0 1.32058 0.717728 1.32058 1.59995C1.32058 19.7749 1.31334 19.0346 1.33778 19.1154C1.35248 19.1638 1.37673 19.2108 1.41093 19.2526C1.42748 19.2728 6.03754 23.887 6.08309 23.9206C6.15028 23.9702 6.23098 23.9976 6.31423 23.9989C6.33503 23.9994 5.87634 23.9992 14.1815 23.9992C14.4024 23.9992 14.5815 23.8201 14.5815 23.5992C14.5815 23.3783 14.4024 23.1992 14.1815 23.1992H6.72037V19.9677C6.72037 19.2132 6.10653 18.5994 5.35201 18.5994H4.29459C4.0737 18.5994 3.8946 18.7785 3.8946 18.9994C3.8946 19.2202 4.0737 19.3993 4.29459 19.3993H5.35196C5.6654 19.3993 5.92034 19.6543 5.92034 19.9677V22.6335L2.12046 18.8336V1.59995C2.12046 1.15886 2.47935 0.799975 2.92043 0.799975H18.4699C18.911 0.799975 19.2699 1.15886 19.2699 1.59995V13.8426C18.9954 13.757 18.7261 13.6527 18.4648 13.5306C18.0903 13.3555 17.6606 13.3555 17.2861 13.5306C16.347 13.9695 15.2997 14.1828 14.223 14.1197C13.5931 14.0828 13.0824 14.5933 13.0824 15.2122V18.3105C13.0824 20.6418 14.4602 22.8111 16.6668 23.6957C17.0706 23.8575 17.3703 24 17.8754 24C18.3642 23.9999 18.6813 23.8618 19.096 23.6956C21.2987 22.8126 22.6802 20.6464 22.6802 18.3105C22.6803 18.2772 22.6762 18.2448 22.6686 18.2138Z"
                        fill="white"
                      />
                      <path
                        d="M19.187 17.5165L17.649 19.0546L16.8802 18.3956C16.7125 18.2519 16.46 18.2714 16.3162 18.439C16.1725 18.6067 16.192 18.8592 16.3596 19.003L17.4096 19.903C17.5686 20.0393 17.8053 20.0296 17.9527 19.8822L19.7527 18.0822C19.9089 17.926 19.9089 17.6728 19.7527 17.5165C19.5964 17.3604 19.3433 17.3604 19.187 17.5165Z"
                        fill="white"
                      />
                      <path
                        d="M17.77 8.79989C17.77 8.579 17.5909 8.3999 17.37 8.3999H3.87045C3.64955 8.3999 3.47046 8.579 3.47046 8.79989C3.47046 9.02078 3.64955 9.19988 3.87045 9.19988H17.37C17.5909 9.19988 17.77 9.02078 17.77 8.79989Z"
                        fill="white"
                      />
                      <path
                        d="M16.0702 4.99982C16.291 4.99982 16.4701 4.82073 16.4701 4.59983V3.59986C16.4701 2.93824 15.9318 2.3999 15.2702 2.3999H5.97047C5.30884 2.3999 4.77051 2.93824 4.77051 3.59986V5.5998C4.77051 6.26143 5.30884 6.79976 5.97047 6.79976H14.9008C15.1217 6.79976 15.3008 6.62067 15.3008 6.39978C15.3008 6.17888 15.1217 5.99979 14.9008 5.99979H5.97047C5.74993 5.99979 5.57048 5.82034 5.57048 5.5998V3.59986C5.57048 3.37932 5.74993 3.19988 5.97047 3.19988H15.2702C15.4907 3.19988 15.6702 3.37932 15.6702 3.59986V4.59983C15.6702 4.82073 15.8493 4.99982 16.0702 4.99982Z"
                        fill="white"
                      />
                      <path
                        d="M6.57041 11.3994H5.37045C5.14955 11.3994 4.97046 11.5785 4.97046 11.7994C4.97046 12.0203 5.14955 12.1994 5.37045 12.1994H6.57041C6.7913 12.1994 6.9704 12.0203 6.9704 11.7994C6.9704 11.5785 6.7913 11.3994 6.57041 11.3994Z"
                        fill="white"
                      />
                      <path
                        d="M6.57041 15.1997H5.37045C5.14955 15.1997 4.97046 15.3788 4.97046 15.5997C4.97046 15.8206 5.14955 15.9997 5.37045 15.9997H6.57041C6.7913 15.9997 6.9704 15.8206 6.9704 15.5997C6.9704 15.3788 6.7913 15.1997 6.57041 15.1997Z"
                        fill="white"
                      />
                      <path
                        d="M16.47 11.7994C16.47 11.5785 16.2909 11.3994 16.07 11.3994H8.8702C8.64931 11.3994 8.47021 11.5785 8.47021 11.7994C8.47021 12.0203 8.64931 12.1994 8.8702 12.1994H16.07C16.2909 12.1994 16.47 12.0203 16.47 11.7994Z"
                        fill="white"
                      />
                      <path
                        d="M12.0701 15.1997H8.8702C8.64931 15.1997 8.47021 15.3788 8.47021 15.5997C8.47021 15.8206 8.64931 15.9997 8.8702 15.9997H12.0701C12.291 15.9997 12.4701 15.8206 12.4701 15.5997C12.4701 15.3788 12.291 15.1997 12.0701 15.1997Z"
                        fill="white"
                      />
                      <path
                        d="M12.0701 18.9995H8.8702C8.64931 18.9995 8.47021 19.1786 8.47021 19.3995C8.47021 19.6204 8.64931 19.7995 8.8702 19.7995H12.0701C12.291 19.7995 12.4701 19.6204 12.4701 19.3995C12.4701 19.1786 12.291 18.9995 12.0701 18.9995Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_114">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white text-[16px] font-medium leading-[28px]">
                  {t('icon-content3')}
                </p>
              </div>
            </div>
          </div>

          <Form1 />
        </div>
        <div className="lg:border-t border-[rgba(255,255,255,0.4)]">
          <div className="flex flex-col lg:flex-row container ">
            <div className="lg:border-r flex-1 border-[rgba(255,255,255,0.4)] flex flex-col items-center lg:items-start lg:gap-y-[25px] gap-y-[20px] text-center lg:text-start ">
              <h2 className="text-[#fff] lg:pt-[38px] text-[40px] lg:text-[45px] font-extrabold leading-[40px] lg:leading-[45px] uppercase">
                10 +
              </h2>
              <p className="text-white text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start">
                {t('heroContent1')}
              </p>
              <p className="text-white lg:pb-[45px] text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start pe-[10px]">
                {t('heroContent11')}
              </p>
            </div>
            <div className="lg:border-r my-[50px] lg:my-0 flex-1 border-[rgba(255,255,255,0.4)] flex flex-col items-center lg:items-start lg:gap-y-[25px] gap-y-[20px] text-center lg:text-start lg:ps-[70px] xl:ps-[90px]">
              <h2 className="text-[#fff] lg:pt-[38px] text-[40px] lg:text-[45px] font-extrabold leading-[40px] lg:leading-[45px] uppercase">
                1300 +
              </h2>
              <p className="text-white text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start">
                {t('heroContent2')}
              </p>
              <p className="text-white lg:pb-[45px] text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start pe-[10px]">
                {t('heroContent22')}
              </p>
            </div>
            <div className=" flex-1 mb-[50px] lg:my-0 flex flex-col items-center lg:items-start lg:gap-y-[25px] gap-y-[20px] text-center lg:text-start lg:ps-[70px] xl:ps-[90px]">
              <h2 className="text-[#fff] lg:pt-[38px] text-[40px] lg:text-[45px] font-extrabold leading-[40px] lg:leading-[45px] uppercase">
                27 +{' '}
              </h2>
              <p className="text-white  text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start">
                {t('heroContent3')}
              </p>
              <p className="text-white lg:pb-[45px] text-[14px] lg:text-[16px] font-medium leading-[14px] lg:leading-[22px] lowercase text-center lg:text-start pe-[10px]">
                {t('heroContent33')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px] lg:pt-[90px] relative home-section-two">
        <div className="container flex flex-col lg:flex-row items-center lg:gap-x-[50px]">
          <div className="pt-0 lg:pt-[60px] w-full lg:w-[49.2%] relative z-[2]">
            <h2 className="text-[24px] lg:text-[40px] leading-[32px] lg:leading-[52px] font-extrabold text-white pb-[25px] lg:pb-[32px]">
              <span className="">
                {t('secondSectionSpan1')}{' '}
                <span className="text-[#F26E21] ">
                  {t('secondSectionSpan2')}
                </span>
              </span>{' '}
              {t('secondSectionHeader')}
            </h2>
            <p className="text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[28px] ">
              {t('secondSectionPara')}
            </p>
            <p className="text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[28px] ">
              {t('secondSectionParapart2')}
            </p>
            <div className="flex flex-col mt-0   lg:flex-row gap-x-0 lg:gap-x-[30px] gap-y-[25px] lg:gap-y-0 pt-[30px] lg:pt-[41px]">
              <div className="flex w-full lg:w-[50%] flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px]">
                <span className="text-[#F26E21] text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 1 )
                </span>
                <p className="text-white pt-[2px] text-[14px] font-normal leading-[21px]">
                  {t('secondSectionItem1')}
                </p>
              </div>
              <div className="flex w-full lg:w-[50%]  flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px]">
                <span className="text-[#F26E21] text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 2 )
                </span>
                <p className="text-white text-[14px] pt-[2px] font-normal leading-[21px]">
                  {t('secondSectionItem2')}
                </p>
              </div>
            </div>
            <div className="flex flex-col  lg:flex-row gap-x-0 lg:gap-x-[30px] gap-y-[25px]  lg:pt-[41px]">
              <div className="flex w-full lg:w-[50%] flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px] pt-[25px] lg:pt-0">
                <span className="text-[#F26E21] text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 3 )
                </span>
                <p className="text-white pt-[2px] text-[14px] font-normal leading-[21px]">
                  {t('secondSectionItem3')}
                </p>
              </div>
              <div className="flex w-full lg:w-[50%] flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px]">
                <span className="text-[#F26E21] text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 4 )
                </span>
                <p className="text-white pt-[2px] text-[14px] font-normal leading-[21px]">
                  {t('secondSectionItem4')}
                </p>
              </div>
            </div>
            <div className="flex flex-col  lg:flex-row gap-x-0 lg:gap-x-[30px] gap-y-[25px] lg:gap-y-0  lg:pt-[41px]">
              <div className="flex w-full lg:w-[50%] flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px] pt-[25px] lg:pt-0">
                <span className="text-[#F26E21] text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 5 )
                </span>
                <p className="text-white pt-[2px] text-[14px] font-normal leading-[21px]">
                  {t('secondSectionItem5')}
                </p>
              </div>
              <div className="flex w-full lg:w-[50%] flex-row border-b-[2px] border-opacity-[0.2] border-[#D9D9D9] gap-x-[10px] items-start lg:gap-x-[12px] pb-[16px] lg:pb-[12px]">
                <span className="text-[#F26E21]  text-[16px] font-bold leading-[23px] min-w-[32px]">
                  ( 6 )
                </span>
                <p className="text-white pt-[2px] text-[14px] font-normal leading-[21px]">
                  {t('secondSectionItem6')}
                </p>
              </div>
            </div>
            <Link
              className="text-[14px] text-center font-extrabold leading-[14px] uppercase flex justify-center items-center h-[60px] max-w-[299px] bg-[#F26E21] rounded-[45px] text-[white] mt-[40px] transition-all duration-300 ease-in-out hover:bg-[white] hover:text-[#f26E21]"
              to={'/'}
            >
              {t('secondSectionButton')}
            </Link>
          </div>
          <div className="w-full mt-[25px] lg:mt-0 lg:flex-1 h-[500px] rounded-[12px]">
            <iframe
              className="rounded-[12px]"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Dg3RvtFPUHY?si=YBf89Noo2XaKSeNO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <div
            className={classNames(
              classes.sectionTwoBg,
              `absolute sectionTwo-bg top-0 right-0 lg:w-[72.8%] bg-cover bg-no-repeat lg:h-[680px] mt-[90px] hidden lg:flex justify-center items-center z-[1]`
            )}
          >
            <img
              className="bg-cover cursor-pointer"
              src={playButton}
              alt="playButton"
            />
          </div> */}
          {/* <div
            className={classNames(
              classes.sectionTwoBg,
              'sectionTwo-bg bg-cover mt-[40px] h-[244px] bg-center bg-no-repeat flex lg:hidden items-center justify-center '
            )}
          >
            <img
              className="bg-cover cursor-pointer w-[100px] h-[100px]"
              src={playButton}
              alt="playButton"
            />
          </div> */}
        </div>
      </div>
      <div className="pt-[50px] lg:pt-[90px] ">
        <h2 className="text-center mb-[20px] lg:mb-[45px] text-[24px] lg:text-[40px] text-white font-extrabold leading-[32px]  lg:leading-[52px]">
          {t('thirdSectionHeader')}{' '}
          <span className="text-[#F26E21]">{t('thirdSectionSpan')}</span>
        </h2>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-0 sm:gap-x-[30px] gap-y-[20px] lg:gap-y-[30px]">
            {/* {thirdSectionData.map((item, index) => (
              <OfferCard item={item} key={index} />
            ))} */}
            <div
              onClick={() => handleCardClick('Villa')}
              buildingType="Villa"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionFirstImg}
                    alt={thirdSectionFirstImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle1')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea1')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice1')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleCardClick('Studio')}
              buildingType="Studio"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionSecondImg}
                    alt={thirdSectionSecondImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle2')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea2')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleCardClick('Two bedrooms')}
              buildingType="Two bedrooms"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionThirdImg}
                    alt={thirdSectionThirdImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle3')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea3')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleCardClick('Three bedrooms')}
              buildingType="Three bedrooms"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionFourthImg}
                    alt={thirdSectionFourthImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle4')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea4')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice4')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleCardClick('Four bedrooms')}
              buildingType="Four bedrooms"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionFifthImg}
                    alt={thirdSectionFifthImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle5')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea5')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice5')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleCardClick('Bungalow Townhouse')}
              buildingType="Bungalow Townhouse"
              className="col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer"
            >
              <div
                className={classNames(
                  classes.offerCard,
                  'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
                )}
              >
                <div className="h-[256px] overflow-hidden">
                  <img
                    src={thirdSectionSixthImg}
                    alt={thirdSectionSixthImg}
                    className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
                  />
                </div>
                <div className="">
                  <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
                    {t('thirdSectionTitle6')}
                  </h2>
                  <hr className="bg-white opacity-[0.4] h-[1px]" />
                  <div className="flex">
                    <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionArea6')}
                    </p>
                    <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
                      {t('thirdSectionPrice6')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px] lg:pt-[90px]">
        <div className="container">
          <h2 className="text-center mb-[20px] lg:mb-[45px] text-[24px] lg:text-[40px] text-white font-extrabold leading-[32px] max-w-[650px]  mx-auto   lg:leading-[52px]">
            {t('forthSectionHeader')}{' '}
            <span className="text-[#F26E21]">{t('forthSectionSpan')}</span>
          </h2>
          <div className="grid grid-cols-12 gap-x-0 sm:gap-x-[30px] gap-y-[20px] lg:gap-y-[30px]">
            {/* {forthSectionData.map((item, index) => (
              <ClientCard item={item} key={index} />
            ))} */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">01</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionFirstImg}
                  alt="forthSectionTitle1"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle1')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent1')}
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">02</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionSecondImg}
                  alt="forthSectionSecondImg"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle2')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent2')}
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">03</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionThirdImg}
                  alt="forthSectionThirdImg"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle3')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent3')}
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">04</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionForthImg}
                  alt="forthSectionForthImg"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle4')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent4')}
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">05</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionFifthImg}
                  alt="forthSectionFifthImg"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle5')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent5')}
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
              <div className="absolute top-[20px] right-[20px] ">06</div>
              <div className="container !pt-[32px] !pb-[40px]">
                <img
                  className="mx-auto pb-[20px]"
                  src={forthSectionSixthImg}
                  alt="forthSectionSixthImg"
                />
                <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
                  {t('forthSectionTitle6')}
                </h2>
                <p className="text-white mx-auto px-[20px] text-center text-[16px] font-normal leading-[23px]">
                  {t('forthSectionContent6')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          classes.fifthSection,
          'mt-[50px] lg:mt-[90px] pt-[36px] lg:pt-[65px] pb-[41px] lg:pb-[95px] '
        )}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-start items-center lg:justify-between">
            <div className="w-full lg:w-[60%] mt-0 lg:mt-[31px]">
              <h2 className="text-white text-[18px]  lg:text-[24px] font-bold leading-[26px] lg:leading-[52px]  ">
                {t('fifthSectionHeader1')}
              </h2>
              <h2 className="text-white text-[24px] mt-[10px] lg:mt-0 font-extrabold lg:text-[40px] leading-[32px] lg:leading-[52px] mb-[25px] lg:mb-[40px]">
                <span>
                  {t('fifthSectionHeader2')}
                  <span className="text-[#F26E21]">
                    {t('fifthSectionSpan')}
                  </span>
                </span>
                {t('fifthSectionHeader3')}
              </h2>
              <ul className=" m-0 p-0 pb-[40px] lg:pb-0">
                <li className="text-white text-[14px] font-normal leading-[23px] mb-[12px]">
                  {t('fifthSectionItem1')}
                </li>
                <li className="text-white text-[14px] font-normal leading-[23px] mb-[12px]">
                  {t('fifthSectionItem2')}
                </li>
                <li className="text-white text-[14px] font-normal leading-[23px] mb-[12px]">
                  {t('fifthSectionItem3')}
                </li>
                <li className="text-white text-[14px] font-normal leading-[23px] mb-[12px]">
                  {t('fifthSectionItem4')}
                </li>
              </ul>
            </div>
            <Form2 />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          classes.sixthSection,
          'pt-[50px] lg:pt-[90px] relative'
        )}
      >
        <div className="container flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40.3%]">
            3
            <h2 className="text-white text-[24px] lg:text-[40px] leading-[32px] lg:leading-[52px] font-extrabold pb-[20px] lg:pb-[40px]">
              {t('sixthSectionHeader')}{' '}
              <span className="text-[#F26E21]">{t('sixthSectionSpan')}</span>
            </h2>
            <div className="">
              <div className="flex  mb-[20px] lg:mb-[25px]">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionpara1')}
                  <span className="font-bold">{t('sixthSectionSpan1')}</span>
                </p>
              </div>
              <div className="flex  mb-[20px] lg:mb-[25px]">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionpara2')}
                  <span className="font-bold">{t('sixthSectionSpan2')}</span>
                </p>
              </div>
              <div className="flex  mb-[20px] lg:mb-[25px]">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionPara3')}
                  <span className="font-bold">{t('sixthSectionSpan3')}</span>
                </p>
              </div>
              <div className="flex  mb-[20px] lg:mb-[25px]">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionPara4')}
                  <span className="font-bold">{t('sixthSectionSpan4')}</span>
                </p>
              </div>
              <div className="flex  mb-[20px] lg:mb-[25px]">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionPara5')}
                  <span className="font-bold">{t('sixthSectionSpan5')}</span>
                </p>
              </div>
              <div className="flex ">
                <img
                  className="!w-[20px] !h-[2px] me-[15px] lg:me-[25px] mt-[7px]"
                  src={ConditionIcon}
                  alt="ConditionIcon"
                />
                <p className="text-white text-[14px]  lg:text-[16px] leading-[21px] lg:leading-[23px]">
                  {t('sixthSectionPara6')}
                  <span className="font-bold">{t('sixthSectionSpan6')}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:absolute right-0 top-0 pt-[40px] lg:pt-0 w-full lg:w-[55%]">
            <SwiperSlider />
          </div>
        </div>
      </div>
      <div className="pt-[50px] relative lg:pt-[160px]">
        <img
          src={sunRepublicImg}
          className="absolute left-[50%] translate-x-[-50%] w-full bottom-[-50px] lg:bottom-[-200px] "
        />
        <div className="container">
          <div className="flex  flex-col xl:flex-row justify-between items-center">
            <div className="w-full xl:w-[35.9%]">
              <h2 className="text-white text-[24px] xl:text-[40px] leading-[32px] xl:leading-[52px] font-extrabold">
                {t('sevenSectionHeader')}{' '}
                <span className="text-[#F26E21]">{t('sevenSectionSpan')}</span>
              </h2>
            </div>
            <div className="w-full pt-[25px] lg:pt-0 xl:w-[60%] flex flex-col xl:flex-row items-center xl:items-start">
              <div className={classes.circlur}>
                <div className="">
                  <img
                    className="mb-[25px] m-auto xl:mb-[35px]"
                    src={seventhIcon1}
                    alt="seventhIcon1"
                  />
                  <h2 className="text-white text-[18px] xl:text-[24px] font-bold leading-[24px] xl:leading-[32px] text-center mb-[15px] xl:mb-[25px]">
                    {t('sventhSectionIcon1')}
                  </h2>
                  <p className="text-[14px] leading-[21px] text-white xl:text-[16px] font-normal xl:leading-[23px] text-center">
                    {t('sventhSectionIcon2')}
                  </p>
                </div>
              </div>
              <div className={classes.circlur}>
                <div className="">
                  <img
                    className="mb-[25px] m-auto xl:mb-[35px]"
                    src={seventhIcon2}
                    alt="seventhIcon1"
                  />
                  <h2 className="text-white text-[18px] xl:text-[24px] font-bold leading-[24px] xl:leading-[32px] text-center mb-[15px] xl:mb-[25px]">
                    {t('sventhSectionIcon3')}
                  </h2>
                  <p className="text-[14px] leading-[21px] text-white xl:text-[16px] font-normal xl:leading-[23px] text-center">
                    {t('sventhSectionIcon4')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container !py-[50px] lg:py-[90px]">
        <img className="w-full object-cover" src={TeamImg} alt="TeamImg" />
      </div>
    </div>
  );
}
