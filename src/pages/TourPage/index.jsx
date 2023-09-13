import React from 'react';
import classes from './styles.module.scss';
import { t } from '../../i18n';
import propertyImage from '../../assets/images/PropertyPage.jpg';
function TourPage() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.propertyHolder}>
          <div className={classes.left}>
            <h1>{t('propertyTour')}</h1>
            <p>{t('propertyTourContentOne')}</p>
            <p>{t('propertyTourContentTwo')}</p>
          </div>
          <div className={classes.right}>
            <img width={"100%"} src={propertyImage} alt="propertyImage" />
          </div>
        </div>
        <div className={classes.topic}>
          <h2>{t('whatisorientation')}</h2>
          <p>{t('whatisorientationContentOne')}</p>
        </div>
        <div className={classes.topic}>
          <h2>{t('whatGoesOnStudy')}</h2>
          <p>{t('whatGoesOnStudyContent')}</p>
        </div>
        <div className={classes.topic}>
          <h2>{t('whatKindHolidays')}</h2>
          <p>{t('whatKindHolidaysContent')}</p>
        </div>
        <div className={classes.last}>
        <h2>{t('averageProperty')}</h2>
        <h2>{t('whatToKnowMore')}</h2>
        </div>
      </div>
    </div>
  );
}

export default TourPage;
