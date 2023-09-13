import classNames from 'classnames';
import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';
import classes from './styles.module.scss';
import { t } from '../../i18n';
import i18n from '../../i18n';
const SellForm = React.lazy(() => import('../../components/SellForm'));

export default function SellPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      className={classNames(
        classes.SellPage,
        currentStep === 2 && classes.secondStep
      )}
    >
      <div className={classes.container}>
        <div className={classes.leftBox}>
          <h1>
            {i18n.language === 'tr' ? (
              <>
                <span>{t('Sun')}</span> {t('Sell with')}
              </>
            ) : (
              <>
                {t('Sell with')} <span>{t('Sun')}</span>
              </>
            )}
          </h1>
          <p>{t('FirstPara SellPage')}</p>
          {i18n.language === 'tr' ? <p></p> : <p>{t('SecondPara SellPage')}</p>}
          <div className={classes.dial}>
            <Link to={`tel:${t('Dial')}`}>{t('Dial')}</Link>
            <p>
              {' '}
              <FiChevronUp
                style={{ color: 'ef9725', fontSize: '30px', height: '26px' }}
              />{' '}
              <span>{t('Have Questions')}</span>
            </p>
          </div>
        </div>
        <div className={classes.rightBox}>
          <Suspense fallback={<div>Loading...</div>}>
            <SellForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </Suspense>
        </div>
      </div>

      <div className={classes.emptySpace} />
    </div>
  );
}
