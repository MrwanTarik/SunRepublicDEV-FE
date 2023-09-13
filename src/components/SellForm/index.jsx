import React, { useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import thnxEn from '../../assets/images/thnxEN.png';
import thnxRu from '../../assets/images/thnxRU.png';
import thnxTr from '../../assets/images/thnxTR.png';
import { API_URL } from '../../constants/main';
import { t } from '../../i18n';
import Images from './Images';
import Button from '../Button';
import TextInput from '../TextInput';
import PhoneInput from '../PhoneInput';
import classes from './styles.module.scss';
import pathbt from '../../assets/images/pathbt.png';

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
  title: yup.string().trim().required('This field is required'),
});

export default function SellForm({ currentStep, setCurrentStep }) {
  const [images, setImages] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: () => {
      setCurrentStep(2);
    },
  });

  const sendForm = async () => {
    try {
      setIsFinished(true);
      const form = new FormData();

      form.append('name', formik.values.name);
      form.append('surname', formik.values.surname);
      form.append('phone', formik.values.phone);
      form.append('email', formik.values.email);
      form.append('title', formik.values.title);
      form.append('description', formik.values.description);

      images.forEach((image) => {
        form.append('file', image);
      });

      await axios.post(`${API_URL}/contact/sell`, form);
      formik.handleReset();
      setImages([]);
      setCurrentStep(1);
      setIsFinished(false);
      toast.success('Thank you for choosing us!');
      setIsFormSubmitted(true);
    } catch (error) {
      console.log();
    }
  };
  const handleGoBackToForm = () => {
    setIsFormSubmitted(false);
  };
  return (
    <>
      {isFormSubmitted ? (
        <div style={{ height: '100%' }} className={classes.successMessage}>
          {i18n.language === 'en' ? (
            <div style={{ height: '100%' }} className={classes.thankContainer}>
              <div>
                <img
                  width={'100%'}
                  src={thnxEn}
                  alt="Success Image for English"
                />
                <h6>
                  {' '}
                  We just received your message and will get in touch as soon as
                  possible.
                </h6>
              </div>
              <div>
                <Link onClick={handleGoBackToForm}>Go Back To Form</Link>
              </div>
            </div>
          ) : i18n.language === 'tr' ? (
            <div style={{ height: '100%' }} className={classes.thankContainer}>
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
                <Link onClick={handleGoBackToForm}>Forma Geri Dön</Link>
              </div>
            </div>
          ) : (
            <div style={{ height: '100%' }} className={classes.thankContainer}>
              <div>
                <img
                  width={'100%'}
                  src={thnxRu}
                  alt="Success Image for Russian"
                />
                <h6>
                  {' '}
                  Мы получили Ваше сообщение и свяжемся с Вами в ближайшее время
                </h6>
              </div>
              <div>
                <Link onClick={handleGoBackToForm}>Вернуться к Форме</Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <form
          className={classNames(
            classes.SellForm,
            currentStep === 2 && classes.secondStep
          )}
          onSubmit={formik.handleSubmit}
        >
          <div className={classes.steps}>
            <div
              className={classNames(
                classes.step,
                currentStep === 1 && classes.active,
                currentStep === 2 && classes.finished
              )}
            >
              1 {t('step')}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                padding: '0px 15px',
              }}
            >
              <img src={pathbt} alt="path" />
            </div>
            <div
              className={classNames(
                classes.step,
                currentStep === 2 && classes.active,
                isFinished && classes.finished
              )}
            >
              2 {t('step')}
            </div>
          </div>
          {currentStep === 1 && (
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
                    <div className={classes.error}>{formik.errors.name}</div>
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
                    <div className={classes.error}>{formik.errors.surname}</div>
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
                  <div className={classes.error}>{formik.errors.email}</div>
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
                  titleInputStyle={true}
                  label={t('TITLE')}
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.title && formik.touched.title && (
                  <div className={classes.error}>{formik.errors.title}</div>
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
                {formik.errors.description && formik.touched.description && (
                  <div className={classes.error}>
                    {formik.errors.description}
                  </div>
                )}
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className={classes.imagesContainer}>
              <Images images={images} setImages={setImages} />
            </div>
          )}
          <div className={classes.buttonContainer}>
            {currentStep === 1 && (
              <Button
                onClick={formik.handleSubmit}
                disabled={
                  !formik.isValid ||
                  Object.keys(formik.values).every(
                    (key) => formik.values[key] === ''
                  )
                }
              >
                {t('NEXT')}
              </Button>
            )}
            {currentStep === 2 && (
              <Button onClick={sendForm} disabled={images.length === 0}>
                {t('SEND')}
              </Button>
            )}
          </div>
          <ToastContainer />
        </form>
      )}
    </>
  );
}
