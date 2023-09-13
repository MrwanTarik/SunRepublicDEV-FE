import React from 'react';

import { useNavigate } from 'react-router-dom';
import MultiClamp from 'react-multi-clamp';

import i18n, { t } from '../../../i18n';
import { STATIC_URL } from '../../../constants/main';
import classes from './styles.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import priceImg from '../../../assets/images/Price.png'

export default function Property({ propertyData }) {
  const navigate = useNavigate();
  console.log(propertyData)
  let { title } = propertyData;
  let { description } = propertyData;
  let { price } = propertyData;
  if (i18n.language === 'en') {
    title = propertyData.title || propertyData.titleRus;
    description = propertyData.description || propertyData.descriptionRus;
  } else if (i18n.language === 'ru') {
    title = propertyData.titleRus || propertyData.title;
    description = propertyData.descriptionRus || propertyData.description;
  } else {
    title = propertyData.titleTurkey || propertyData.title;
    description = propertyData.descriptionTurkey || propertyData.description;
  }

  return (
    <div
      style={{height:"100%"}}
      className={classes.Property}
      onClick={() => navigate(`/property/${propertyData.id}`)}
    >
      <div className={classes.price}>
          <img src={priceImg} alt="" />
          <span>{price.toLocaleString('en-US')} £</span>
        </div>
      <header
        style={{
          position: 'relative',
          // backgroundImage: `url(${STATIC_URL}${propertyData.Images?.[0]?.path})`,
        }}
      >
        
        <img src={`${STATIC_URL}${propertyData.Images?.[0]?.path}`} alt="" />
        <button
          type="button"
          onClick={() => navigate(`/property/${propertyData.id}`)}
        >
          <p>
            <FiChevronLeft />
          </p>
          {t('DETAILS')}
        </button>
      </header>
      <div className={classes.info}>
        <h1 className={classes.propertyTitle}>
          <MultiClamp clamp={2}>{title}</MultiClamp>
        </h1>
      </div>
    </div>
  );
}
