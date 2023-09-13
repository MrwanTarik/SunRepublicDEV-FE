import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import MultiClamp from 'react-multi-clamp';

import i18n, { t } from '../../../i18n';
import Button from '../../Button';
import { STATIC_URL } from '../../../constants/main';
import classes from './styles.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import priceImg from '../../../assets/images/Price.png'
export default function Property({
  propertyWidth,
  propertyCount,
  propertyData,
}) {
  console.log(propertyData)
  const navigate = useNavigate();
  
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
      className={classes.Property}
      style={{
        width: propertyCount >= 0 ? propertyWidth : '', height : "100%"
      }}
    >
      <div className={classes.price}>
          <img src={priceImg} alt="" />
          <span>{price.toLocaleString('en-US')} £</span>
        </div>
      <header
        style={{
          position: 'relative',
          // top: isHovering ? '50px' : '0px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(`/property/${propertyData.id}`)}
      >
        
        <img src={`${STATIC_URL}${propertyData.Images?.[0]?.path}`} alt="" />
        <Button onClick={() => navigate(`/property/${propertyData.id}`)}>
          <p>
            <FiChevronLeft />
          </p>
          {t('DETAILS')}
        </Button>
      </header>
      <div
        className={classes.info}
        // style={{ marginTop: isHovering ? '278px' : '0px' }}
      >
        <h1>
          <MultiClamp clamp={2}>{title}</MultiClamp>
        </h1>
      </div>
    </div>
  );
}
