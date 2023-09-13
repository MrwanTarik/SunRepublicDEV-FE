import React, { useRef, useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useMediaQuery } from 'react-responsive';
import i18n from '../../i18n';
// import Map from '../../components/Map';
import * as employee from '../../assets/images/agents_photos/index';
import Button from '../../components/Button';
import RenderTeam from '../../components/RenderTeam';
import PhoneInput from '../../components/PhoneInput';
import TextInput from '../../components/TextInput';
import thnxEn from '../../assets/images/thnxEN.png';
import thnxRu from '../../assets/images/thnxRU.png';
import thnxTr from '../../assets/images/thnxTR.png';
import { t } from '../../i18n';
import PageTitle from '../../components/PageTitle';
import instagramIcon from '../../assets/images/instaContact.png';
import facebookIcon from '../../assets/images/facebookContact.png';
import whatsAppIcon from '../../assets/images/whatsappContact.png';
import youtubeIcon from '../../assets/images/youtubeContact.png';
import location from '../../assets/images/Location.png';
import imgplaceholder from '../../assets/images/imgplaceholder.png';
import { API_URL } from '../../constants/main';
import { Link } from 'react-router-dom';
import useResizeObserver from '../../hooks/useResizeObserver';
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

export default function ContactUsPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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
  const handleGoBackToForm = () => {
    setIsFormSubmitted(false);
  };
  return (
    <>
      <div className={classes.ContactUsPage}>
        <div className={classes.container}>
          <div className={classes.leftBox}>
            <h1>
              {i18n.language === 'tr' ? (
                <>
                  <span>{t('Sun')}</span> {t('getInTouchWith')}
                </>
              ) : (
                <>
                  {t('getInTouchWith')} <span>{t('Sun')}</span>
                </>
              )}
            </h1>
            <p>{t('contactParagraph')}</p>
            <div className={classes.contactSocials}>
              <Link
                target="_blank"
                to={'https://www.instagram.com/sunrepublic.vip/'}
              >
                <img src={instagramIcon} alt="insta icon" />
              </Link>
              <Link
                target="_blank"
                to={'https://www.youtube.com/c/IrinDrealty'}
              >
                <img src={youtubeIcon} alt="youtube icon" />
              </Link>
              <Link
                target="_blank"
                to={'https://www.facebook.com/sunrepublic.vip/'}
              >
                <img src={facebookIcon} alt="facebook icon" />
              </Link>
              <Link target="_blank" to={'https://wa.me/905338457788'}>
                <img src={whatsAppIcon} alt="what app icon" />
              </Link>
            </div>
            <div className={classes.contactAddress}>
              <div>
                <Link to={'https://goo.gl/maps/ashk3pAkFaVs3TSx9'}>
                  <img src={location} alt="location" />
                </Link>
              </div>
              <div>
                <p>Serap Nedim Apt. No: 1</p>
                <p>Samsun Bulvari Iskele, 9985</p>
              </div>
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
                        <Link onClick={handleGoBackToForm}>
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
                        <Link onClick={handleGoBackToForm}>Forma Geri Dön</Link>
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
                        <Link onClick={handleGoBackToForm}>
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
      <div className={classes.container}>
        <div className={classes.team}>
          <div className={classes.contactH}>
            <div>
              <h2>{t('Mangers')}</h2>
            </div>
          </div>
          <ul>
            <RenderTeam
              name={t('Tural Aliyev')}
              email="tural@sunrepublic.vip"
              img={employee.tural}
              jobTitle={t('TuralJobTitle')}
            />
            <RenderTeam
              name={t('Mamed Gafarov')}
              email="mamed@sunrepublic.vip"
              img={employee.mamed}
              jobTitle={t('mamdJobTitle')}
            />
            <RenderTeam
              name={t('Andrii Yakimets')}
              email="andrew@sunrepublic.vip"
              img={employee.andrii}
              jobTitle={t('andriiJobTitle')}
            />
            <RenderTeam
              name={t('Shakhin Aliyev')}
              email="shakhin@sunrepublic.vip"
              img={employee.shahin}
              jobTitle={t('shahinJobTitle')}
            />
            <RenderTeam
              name={t('Mehmet Bayram')}
              email="mehmet@sunrepublic.vip"
              img={employee.Mehmet}
              jobTitle={t('MehmetJobTitle')}
            />
            <RenderTeam
              name={t('Elmar Hasanov')}
              email="elmar@sunrepublic.vip"
              jobTitle={t('elmarJobTitle')}
              img={employee.elmar}
            />

            <RenderTeam
              name={t('Nargiz Ibragimova')}
              email="sabina@sunrepublic.vip"
              jobTitle={t('nagizJobTitle')}
              img={employee.nargiz}
            />

            <RenderTeam
              name={t('Shahin Hasanov')}
              email="shahin.hasanov@sunrepublic.vip"
              jobTitle={t('shahinHJobTitle')}
              img={employee.shahinH}
            />
            <RenderTeam
              name={t('Senan Aliev')}
              email="senan@sunrepublic.vip"
              jobTitle={t('SenanJobTitle')}
              img={employee.senan}
            />
            <RenderTeam
              name={t('Kristina Kloster')}
              email="kristina@sunrepublic.vip"
              jobTitle={t('kristinJobTitle')}
              img={employee.kristin}
            />

            <RenderTeam
              name={t('Kseniia Petrova')}
              email="kseniia.petrova@sunrepublic.vip"
              jobTitle={t('kseniiainJobTitle')}
              img={employee.kesina}
            />

            <RenderTeam
              name={t('Aydin Aliyev')}
              email="aydin@sunrepublic.vip"
              jobTitle={t('AydininJobTitle')}
              img={employee.Aiyden}
            />
            <RenderTeam
              name={t('Rasim Karimov')}
              email="rasim@sunrepublic.vip"
              jobTitle={t('rassiminJobTitle')}
              img={employee.Rassim}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
