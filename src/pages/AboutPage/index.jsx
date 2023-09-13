import React, { useRef } from 'react';

import { useQuery } from 'react-query';
import classNames from 'classnames';
import i18n from '../../i18n';
import { t } from '../../i18n';
import useResizeObserver from '../../hooks/useResizeObserver';
import BlogPostsService from '../../services/BlogPostsService';
import FAQ from '../../components/FAQ';
import PageTitle from '../../components/PageTitle';
import classes from './styles.module.scss';
import Regular from '../../components/BlogCards/Regular';
import { useSearchParams, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import northenCyprus from '../../assets/images/northencyprus.png';

export default function AboutPage() {
  return (
    <div className={classes.AboutPage}>
      <div className={classes.WhatWeSellPage}>
        <div className={classes.searchContainer}>
          <div className={classes.container}>
            <h1>
              {i18n.language === 'tr' ? (
                <>
                  <span>Sun</span> {t('aboutHeader')}
                </>
              ) : (
                <>
                  {t('aboutHeader')} <span>Sun</span>
                </>
              )}
            </h1>
            <div className={classes.text}>
              <p className={classes.visible}>{t('exploreAbout')}</p>
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
        </div>
      </div>
      <div id="nourthenCyprus" className={classes.northenCyprus}>
        <div className={classes.container}>
          <div className={classes.northenCyprusContent}>
            <div>
              <h2>
                {i18n.language === 'tr' ? (
                  <>
                    <span style={{marginRight:"8px"}}>{t('sunRebublicH')}</span> {t('ABOUTw')}
                  </>
                ) : (
                  <>
                    {t('ABOUTw')}
                    <span>{t('sunRebublicH')}</span>
                  </>
                )}
              </h2>
            </div>
            <ul>
              <li>
                <div className={classes.icon} />
                {t('AboutFirstul')}
              </li>
              <li>
                <div className={classes.icon} />
                {t('AboutSecondul')}
              </li>
              <li>
                <div className={classes.icon} />
                {t(`AboutThirdul`)}
              </li>
              <li>
                <div className={classes.icon} />
                {t(`AboutFourthul`)}
              </li>
            </ul>
          </div>
          <div className={classes.northenCyprusImages}>
            <img src={northenCyprus} alt="northenCyprus" />
          </div>
        </div>
      </div>
      <div className={classes.serviceWeProvide}>
        <div className={classes.container}>
          <div className={classes.serviceHeader}>
            <div className={classes.zr}>
              <span></span>
              <h2>{t('providedService')}</h2>
              <span></span>
            </div>
            <div className={classes.about}>
              <ul>
                <li>
                  <div className={`${classes.first} ${classes.icon}`} />
                  <div>
                    <h3>{t('PropertyTour')}</h3>
                    <p>{t('PropertyTourPara')}</p>
                  </div>
                </li>
                <li>
                  <div className={`${classes.second} ${classes.icon}`} />
                  <div>
                    <h3>{t('AboutLandSale')}</h3>
                    <p>{t('SellingLandsPara')}</p>
                  </div>
                </li>
                <li>
                  <div className={`${classes.third} ${classes.icon}`} />
                  <div>
                    <h3>{t('AboutAchieved')}</h3>
                    <p>{t('ArchievedPara')}</p>
                  </div>
                </li>
                <li>
                  <div className={`${classes.fourth} ${classes.icon}`} />
                  <div>
                    <h3>{t('AboutAroundTheWorld')}</h3>
                    <p>{t('AroundTheWorldPara')}</p>
                  </div>
                </li>
                <li>
                  <div className={`${classes.fifth} ${classes.icon}`} />
                  <div>
                    <h3>{t('AboutDevelopers')}</h3>
                    <p>{t('DevelopersPara')}</p>
                  </div>
                </li>
                <li>
                  <div className={`${classes.sixth} ${classes.icon}`} />
                  <div>
                    <h3>{t('SatisficationAbout')}</h3>
                    <p>{t('SatisfactionPara')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.askedQuestions}>
        <div className={classes.container}>
          <h2>{t('AskedQuestion')}</h2>
          <FAQ />
        </div>
      </div>
    </div>
  );
}
