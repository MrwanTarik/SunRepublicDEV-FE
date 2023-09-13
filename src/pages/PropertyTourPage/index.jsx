import React, { useRef } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';
import companyQuality from '../../assets/images/tours/companyQuality.svg';
import travelBeach from '../../assets/images/tours/travelBeach.svg';
import building from '../../assets/images/tours/building.svg';
import lawProtection from '../../assets/images/tours/lawProtection.svg';
import writePage from '../../assets/images/tours/writePage.png';
import magnifying from '../../assets/images/tours/magnifying.png';
import shield from '../../assets/images/tours/shield.png';
import palmTree from '../../assets/images/tours/palmTree.png';
import briefcase from '../../assets/images/tours/briefcase.png';
import plane from '../../assets/images/tours/plane.png';
import storecost from '../../assets/images/tours/store_cost.svg';
import teacher from '../../assets/images/tours/teacher.svg';
import cat from '../../assets/images/tours/cat.svg';
import Button from '../../components/Button';
// import RenderTeam from '../../components/RenderTeam';
import PhoneInput from '../../components/PhoneInput';
import TextInput from '../../components/TextInput';
// import { t } from '../../i18n';
// import PageTitle from '../../components/PageTitle';
// import randomPerson2 from '../../assets/images/about/random-person-2.jpg';
import instagramIcon from '../../assets/images/instagram.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import whatsAppIcon from '../../assets/images/whatsapp.svg';
import youtubeIcon from '../../assets/images/youtube.png';
import { API_URL } from '../../constants/main';
// import useResizeObserver from '../../hooks/useResizeObserver';

import { t } from '../../i18n';
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
});

export default function PropertyTourPage() {
  const sendMessage = async (values, { resetForm }) => {
    try {
      await axios.post(`${API_URL}/contact`, values);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      description: '',
    },
    validationSchema,
    onSubmit: sendMessage,
  });

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const formRef = useRef();
  const contactsRef = useRef();

  // const { height } = useResizeObserver(formRef);
  // const { height: contactsHeight } = useResizeObserver(contactsRef);
  const contentRef = useRef();
  return (
    <div className={classes.propertyTourPage}>
      <PageTitle title={t('Property-tours with')} />

      <div className={classes.container}>
        <div className={classNames(classes.content)} ref={contentRef}>
          <h1 className={classes.mainHeading}>
            {t("What's a property tour?")}
          </h1>
          <p>{t('About tour')}</p>
        </div>
        <section className={classes.content}>
          <div className={classes.features}>
            <img src={companyQuality} alt="company quality" />
            <div>
              <h3>{t('tour feature1')}</h3>
              <p>{t('tour feature desc1')}</p>
            </div>
          </div>
          <div className={classes.features}>
            <img src={travelBeach} alt="travel Beach" />
            <div>
              <h3>{t('tour feature2')}</h3>
              <p>{t('tour feature desc2')}</p>
            </div>
          </div>
          <div className={classes.features}>
            <img src={building} alt="building" />
            <div>
              <h3>{t('tour feature3')}</h3>
              <p>{t('tour feature desc3')}</p>
            </div>
          </div>
          <div className={classes.features}>
            <img src={lawProtection} alt="shield" />
            <div>
              <h3>{t('tour feature4')}</h3>
              <p>{t('tour feature desc4')}</p>
            </div>
          </div>
        </section>
        <section className={classes.content}>
          <h3 className={classes.whyus_heading}>{t('Why us')}</h3>
          <div className={classes.whyus}>
            <div className={classes.whyus__element}>
              <img src={writePage} alt="writePage" />
              <p>{t('whyus desc1')}</p>
            </div>
            <div className={classes.whyus__element}>
              <img src={magnifying} alt="magnifying glass" />
              <p>{t('whyus desc2')}</p>
            </div>
            <div className={classes.whyus__element}>
              <img src={shield} alt="shield" />
              <p>{t('whyus desc3')}</p>
            </div>
            <div className={classes.whyus__element}>
              <img src={palmTree} alt="palm tree" />
              <p>{t('whyus desc4')}</p>
            </div>
          </div>
        </section>
        <section className={classes.content}>
          <h3 className={classes.fullSupport_heading}>{t('tour support')}</h3>
          <div className={classes.fullSupport}>
            <div className={classes.fullSupport__element}>
              <img src={briefcase} alt="writePage" />
              <p>{t('tour support1')}</p>
            </div>
            <div className={classes.fullSupport__element}>
              <img src={storecost} alt="magnifying glass" />
              <p>{t('tour support2')}</p>
            </div>
            <div className={classes.fullSupport__element}>
              <img src={plane} alt="shield" />
              <p>{t('tour support3')}</p>
            </div>
            <div className={classes.fullSupport__element}>
              <img src={teacher} alt="palm tree" />
              <p>{t('tour support4')}</p>
            </div>
            <div className={classes.fullSupport__element}>
              <img src={writePage} alt="palm tree" />
              <p>{t('tour support5')}</p>
            </div>
            <div className={classes.fullSupport__element}>
              <img src={cat} alt="palm tree" />
              <p>{t('tour support6')}</p>
            </div>
          </div>
        </section>
        <div className={classes.ContactUsPage}>
          <div className={classes.forms}>
            <form
              className={classes.form}
              onSubmit={formik.handleSubmit}
              ref={formRef}
            >
              <h2>{t('MAKE A TOUR WITH US')}</h2>
              <div className={classes.inputs}>
                <div className={classes.textInputContainer}>
                  <TextInput
                    label={t('Name')}
                    name="name"
                    placeholder={t('Enter your Name')}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className={classes.error}>{formik.errors.name}</div>
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
                    <div className={classes.error}>{formik.errors.phone}</div>
                  )}
                </div>
                <div className={classes.textInputContainer}>
                  <TextInput
                    label={t('Email')}
                    name="email"
                    placeholder={t('Enter your Email')}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className={classes.error}>{formik.errors.email}</div>
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
                  />
                  {formik.errors.description && formik.touched.description && (
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
            <div className={classes.contactInfo} ref={contactsRef}>
              <h2>{t('CONTACT US')}</h2>
              <div className={classes.social}>
                <a
                  href="https://www.instagram.com/sunrepublic.vip/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/sunrepublic.vip/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a
                  href="https://wa.me/905338457788"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsAppIcon} alt="WhatsApp" />
                </a>
                <a
                  href="https://www.youtube.com/c/IrinDrealty"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </div>
              <div className={classes.phoneNumbers}>
                <a className={classes.phone} href="tel:+90 533 845 77 88">
                  +90 533 845 77 88
                </a>
                <a className={classes.phone} href="tel:+90 533 825 04 55">
                  +90 533 825 04 55
                </a>
                <a className={classes.phone} href="tel:+90 548 865 36 15">
                  +90 548 865 36 15
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
