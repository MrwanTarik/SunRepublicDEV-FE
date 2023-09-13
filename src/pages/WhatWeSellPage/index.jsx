import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import BlogButtons from '../../components/StickyMenu/BlogButtons/BlogButton';
import { t } from '../../i18n';
import i18n from '../../i18n';
import StickyMenu from '../../components/StickyMenu';
import { STATIC_URL } from '../../constants/main';
import classes from './styles.module.scss';
import { useSearchParams, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { UIContext } from '../../context';
import northenCyprus from '../../assets/images/northencyprus.png';
import nicosia from '../../assets/images/nicosia.png';
import Kyrenia from '../../assets/images/Kyrenia.png';
import Famagusta from '../../assets/images/Famagusta.png';
import SearchResults from '../../components/SearchResults';
import PropetyCarousel from '../../components/PropertyCarousel';
import Button from '../../components/Button';
import Map from '../../components/Map';
import nourthencyprusslide from '../../assets/images/nourthencyprusslid.png';
import nicosiaslide from '../../assets/images/nacosiaslide.jpg';
import kyreniaslide from '../../assets/images/Kyrenia.jpg';
import famagustaslide from '../../assets/images/Famagustaslide.jpg';

export default function WhatWeSellPage() {
  const [activeLink, setActiveLink] = useState('');

  const handleClic = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: document.getElementById('nourthenCyprus').scrollTop,
      behavior: 'smooth',
    });
  };
  return (
    <div style={{ background: '#efefef', padding: '0 0 100px 0' }}>
      <div className={classes.WhatWeSellPage}>
        <div className={classes.searchContainer}>
          <div className={classes.container}>
            <div
              className={classes.sliderImgs}
              style={{ position: 'fixed', right: '0px', top: '120px' }}
            >
              <div
                style={{
                  background: activeLink === 'nourthenCyprus' ? '#4d4d4d' : '',
                }}
              >
                <a
                  href="#nourthenCyprus"
                  className={
                    activeLink === 'nourthenCyprus' ? classes.active : ''
                  }
                  onClick={() => handleClic('nourthenCyprus')}
                >
                  {t('northenCyprus')}
                </a>
              </div>
              <div
                style={{
                  background: activeLink === 'nicosia' ? '#4d4d4d' : '',
                }}
              >
                <a
                  href="#nicosia"
                  className={activeLink === 'nicosia' ? classes.active : ''}
                  onClick={() => handleClic('nicosia')}
                >
                  {t('nocosiaHeader')}
                </a>
              </div>
              <div
                style={{
                  background: activeLink === 'Kyrenia' ? '#4d4d4d' : '',
                }}
              >
                <a
                  href="#Kyrenia"
                  className={activeLink === 'Kyrenia' ? classes.active : ''}
                  onClick={() => handleClic('Kyrenia')}
                >
                  {t('KyreniaHeader')}
                </a>
              </div>
              <div
                style={{
                  background: activeLink === 'Famagusta' ? '#4d4d4d' : '',
                }}
              >
                <a
                  href="#Famagusta"
                  className={activeLink === 'Famagusta' ? classes.active : ''}
                  onClick={() => handleClic('Famagusta')}
                >
                  {t('FamagustaHeader')}
                </a>
              </div>
            </div>
            <h1>
              {i18n.language === 'tr' ? (
                <>
                  <span>Sun</span> {t('exploreWith')}
                </>
              ) : (
                <>
                  {t('exploreWith')} <span>Sun</span>
                </>
              )}
            </h1>
            <div className={classes.text}>
              <p className={classes.visible}>{t('exploreHeader')}</p>
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
      <div className={classes.about}>
        <h2>{t('Why North Cyprus')}</h2>
        <ul>
          <li>
            <div className={`${classes.first} ${classes.icon}`} />
            <div>
              <h3>{t('Climate')}</h3>
              <p>{t('ClimateContent')}</p>
            </div>
          </li>
          <li>
            <div className={`${classes.second} ${classes.icon}`} />
            <div>
              <h3>{t('ResidencePermit')}</h3>
              <p>{t('ResidencePermitContent')}</p>
            </div>
          </li>
          <li>
            <div className={`${classes.third} ${classes.icon}`} />
            <div>
              <h3>{t('SafetyLowCrime')}</h3>
              <p>{t('SafetyLowCrimeContent')}</p>
            </div>
          </li>
          <li>
            <div className={`${classes.fourth} ${classes.icon}`} />
            <div>
              <h3>{t('RisingInvestment')}</h3>
              <p>{t('RisingInvestmentContent')}</p>
            </div>
          </li>
          <li>
            <div className={`${classes.fifth} ${classes.icon}`} />
            <div>
              <h3>{t('DisclosureIncome')}</h3>
              <p>{t('DisclosureIncomeContent')}</p>
            </div>
          </li>
          <li>
            <div className={`${classes.sixth} ${classes.icon}`} />
            <div>
              <h3>{t('EverybodyWelcome')}</h3>
              <p>{t('EverybodyWelcomeContent')}</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="nourthenCyprus" className={classes.northenCyprus}>
        <div className={classes.container}>
          <div className={classes.northenCyprusContent}>
            <div>
              <h2>{t('northenCyprus')}</h2>
            </div>
            <p>
              <span></span>
              {t('northenCyprusContentOne')}
            </p>
            <p>
              <span></span>
              {t('northenCyprusContentTwo')}
            </p>
          </div>
          <div className={classes.northenCyprusImages}>
            <img src={northenCyprus} alt="northenCyprus" />
          </div>
        </div>
      </div>
      <div id="nicosia" className={classes.nicosia}>
        <div className={classes.container}>
          <div className={classes.nicosiaImg}>
            <img src={nicosia} alt="nicosiaImg" />
          </div>
          <div className={classes.nicosiaContent}>
            <h2>{t('nocosiaHeader')}</h2>
            <p>{t('nocosiaContentOne')}</p>
            <p>{t('nocosiaContentTwo')}</p>
            <p>{t('nocosiaContentThree')}</p>
          </div>
        </div>
      </div>
      <div id="Kyrenia" className={classes.Kyrenia}>
        <div className={classes.container}>
          <div className={classes.KyreniaContent}>
            <h2>{t('KyreniaHeader')}</h2>
            <p>{t('KyreniaContentOne')}</p>
            <p>{t('KyreniaContentTwo')}</p>
            <p>{t('KyreniaContentThree')}</p>
            <p>{t('KyreniaContentFour')}</p>
            <p>{t('KyreniaContentFifth')}</p>
          </div>
          <div className={classes.KyreniaImg}>
            <img src={Kyrenia} alt="KyreniaImg" />
          </div>
        </div>
      </div>
      <div id="Famagusta" className={classes.Famagusta}>
        <div className={classes.container}>
          <div className={classes.FamagustaImg}>
            <img src={Famagusta} alt="FamagustaImg" />
          </div>
          <div className={classes.FamagustaContent}>
            <h2>{t('FamagustaHeader')}</h2>
            <p>{t('FamagustaContentOne')}</p>
            <p>{t('FamagustaContentTwo')}</p>
            <p>{t('FamagustaContentThree')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
