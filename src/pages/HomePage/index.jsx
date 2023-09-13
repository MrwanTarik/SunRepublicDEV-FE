import React, { useRef, useContext, useState } from 'react';
import axios from 'axios';

import { useFormik } from 'formik';
import * as yup from 'yup';
import thnxEn from '../../assets/images/thnxEN.png';
import thnxRu from '../../assets/images/thnxRU.png';
import thnxTr from '../../assets/images/thnxTR.png';
import PhoneInput from '../../components/PhoneInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { API_URL } from '../../constants/main';
import { useSearchParams, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import classNames from 'classnames';
import { UIContext } from '../../context';
import { t } from '../../i18n';
import i18n from '../../i18n';
// import SearchResults from '../../components/SearchResults';
// import PropetyCarousel from '../../components/PropertyCarousel';
// import Button from '../../components/Button';
// import Map from '../../components/Map';
import VillasImg from '../../assets/images/carouselImages/1+1iniskele.jpg';
import offerOne from '../../assets/images/offerTwo.jpg';
import offerTwo from '../../assets/images/offerThree.jpg';
import offerThree from '../../assets/images/offerFour.jpg';
import offerFour from '../../assets/images/offerFive.jpg';
import offerFive from '../../assets/images/offerSix.jpeg';

import presentationVideo from '../../assets/videos/presentation.mp4';
import classes from './styles.module.scss';
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
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email')
    .required('This field is required'),
  description: yup.string().trim().required('This field is required'),
  surname: yup.string().trim().required('This field is required'),
});

export default function HomePage() {
  const { searchTerm } = useContext(UIContext);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const containerRef = useRef();

  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search');
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
      surname: '',
      email: '',
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
    <div className={classes.HomePage}>
      <div className={classes.searchContainer}>
        <div className={classes.container} ref={containerRef}>
          <div className={classes.leftPart}>
            <h1>
              {i18n.language === 'tr' ? (
                <>
                  <span>Sun</span> {t('Buy with')}
                </>
              ) : (
                <>
                  {t('Buy with')} <span>Sun</span>
                </>
              )}
            </h1>
            <div className={classes.text}>
              <div className={classes.background} />
              <p className={classes.hidden}>{t('homePageHeaderText')}</p>
              <p className={classes.visible}>{t('homePageHeaderText')}</p>
            </div>
            <div className={classes.dial}>
              <Link to={`tel:${t('Dial')}`}>{t('Dial')}</Link>
              <p>
                {' '}
                <FiChevronLeft
                  style={{ color: 'ef9725', fontSize: '30px', height: '26px' }}
                />{' '}
                <span>{t('Have Questions')}</span>
              </p>
            </div>
          </div>
          <div className={classes.rightBox}>
            <div style={{ height: '100%' }} className={classes.forms}>
              {isFormSubmitted ? (
                <div
                  style={{ height: '100%' }}
                  className={classes.successMessage}
                >
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
                          We just received your message and will get in touch as
                          soon as possible.
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
                          Mesajınızı yeni aldık ve en kısa sürede sizinle
                          iletişime geçeceğiz
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
                          Мы получили Ваше сообщение и свяжемся с Вами в
                          ближайшее время
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
                      <div className={classes.nameInput}>
                        <TextInput
                          label={t('Name')}
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name && (
                          <div className={classes.error}>
                            {formik.errors.name}
                          </div>
                        )}
                      </div>
                      <div className={classes.surnameInput}>
                        <TextInput
                          label={t('surname')}
                          name="surname"
                          value={formik.values.surname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.surname && formik.touched.surname && (
                          <div className={classes.error}>
                            {formik.errors.surname}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={classes.textInputContainer}>
                      <TextInput
                        label={t('Email')}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className={classes.error}>
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className={classes.textInputContainer}>
                      <PhoneInput
                        label={t('Phone')}
                        name="phone"
                        placeholder=""
                        value={formik.values.phone}
                        setFieldValue={formik.setFieldValue}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.phone && formik.touched.phone && (
                        <div className={classes.error}>
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>
                    <div className={classes.textInputContainer}>
                      <TextInput
                        label={t('Description')}
                        name="description"
                        placeholder={t('Tell more')}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        descriptionInputStyle={true}
                      />
                      {formik.errors.description &&
                        formik.touched.description && (
                          <div className={classes.error}>
                            {formik.errors.description}
                          </div>
                        )}
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
        </div>
      </div>
      <div className={classes.info}>
        <Link to={'/property-tour'}>
          <h1 className={classNames(classes.gr)}>
            {i18n.language === 'tr' ? (
              <p>{t('Special Offer')}</p>
            ) : (
              <p>{t('Special Offer')}</p>
            )}
          </h1>
        </Link>

        <div
          className={classNames(
            classes.container,
            searchParam && searchTerm && classes.propertyList
          )}
        >
          <div className={classes.description}>
            {i18n.language === 'tr' ? (
              <>
                <h2>
                  <span>{t('Property Tour')}</span> {t('Book The')}
                </h2>
              </>
            ) : (
              <h2>
                {t('Book The')} <span>{t('Property Tour')}</span> {t('Now')}
              </h2>
            )}

            <p>{t('aboutTour')}</p>
            <ul>
              <li>
                <div className={classes.icon} />
                {t('Individual approach to each client')}
              </li>
              <li>
                <div className={classes.icon} />
                {t('Meetings with developers')}
              </li>
              <li>
                <div className={classes.icon} />
                {t(`Cultural insight into the island's culture`)}
              </li>
            </ul>
          </div>
          <div className={classes.videoContainer}>
            <video src={presentationVideo} className={classes.video} controls />
            <p>
              <Link to={'/contact-us'}>{t('Bookanow!')}</Link>
            </p>
          </div>
        </div>

        <div className={classes.whatWeOffer}>
          <div className={classes.containerx}>
            <h2>{t('What We Offer')}</h2>
            <Link to={'./buy'}>
              <div className={classes.offers}>
                <div className={classes.first}>
                  <img src={VillasImg} alt="" />
                  <div className={classes.title}>{t('VILLAS')}</div>
                </div>
                <div className={classes.second}>
                  <div className={`${classes.item} ${classes.mb}`}>
                    <img src={offerOne} alt="" />
                    <div className={classes.title}>{t('STUDIO APART')}</div>
                  </div>
                  <div className={`${classes.item} ${classes.mb}`}>
                    <img src={offerTwo} alt="" />
                    <div className={classes.title}>{t('1+1 APARTMENT')}</div>
                  </div>
                  <div className={classes.item}>
                    <img src={offerThree} alt="" />
                    <div className={classes.title}>{t('2+1 APARTMENT')}</div>
                  </div>
                  <div className={classes.item}>
                    <img src={offerFour} alt="" />
                    <div className={classes.title}>{t('3+1 APARTMENT')}</div>
                  </div>
                </div>
                <div className={classes.third}>
                  <img src={offerFive} alt="PENTHOUSE" />
                  <div className={classes.title}>{t('PENTHOUSE')}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.about}>
          <h2>{t('A Little About Us')}</h2>
          <ul>
            <li>
              <div className={`${classes.first} ${classes.icon}`} />
              <div>
                <h3>{t('International Team')}</h3>
                <p>{t('About International Team')}</p>
              </div>
            </li>
            <li>
              <div className={`${classes.second} ${classes.icon}`} />
              <div>
                <h3>{t('Selling Lands')}</h3>
                <p>{t('About Selling Lands')}</p>
              </div>
            </li>
            <li>
              <div className={`${classes.third} ${classes.icon}`} />
              <div>
                <h3>{t('Achieved')}</h3>
                <p>{t('About Achieved')}</p>
              </div>
            </li>
            <li>
              <div className={`${classes.fourth} ${classes.icon}`} />
              <div>
                <h3>{t('Around The World')}</h3>
                <p>{t('About Around The World')}</p>
              </div>
            </li>
            <li>
              <div className={`${classes.fifth} ${classes.icon}`} />
              <div>
                <h3>{t('Developers')}</h3>
                <p>{t('About Developers')}</p>
              </div>
            </li>
            <li>
              <div className={`${classes.sixth} ${classes.icon}`} />
              <div>
                <h3>{t('Satisfaction')}</h3>
                <p>{t('About Satisfaction')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div />
    </div>
  );
}
