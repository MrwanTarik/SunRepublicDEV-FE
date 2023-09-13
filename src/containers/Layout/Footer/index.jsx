/* eslint-disable no-alert */
import React from 'react';

import { Link } from 'react-router-dom';
// import classNames from 'classnames';

import { t } from '../../../i18n';
import classes from './styles.module.scss';
import instaImage from '../../../assets/images/insta.png';
import faceImage from '../../../assets/images/facebook.png';
import logo from '../../../assets/images/logoHeader.png';
import youtube from '../../../assets/images/youtube.png';
import whatsApp from '../../../assets/images/whatsapp.png';

export default function Footer() {
  return (
    <>
      <div className={classes.bzoTwo}>
        <footer className={classes.Footer}>
          <div className={classes.container}>
            <div className={classes.firstFooterSection}>
              <ul className={classes.linksHolder}>
                <li>
                  <Link to="/buy">{t('BUY')}</Link>
                </li>
                <li>
                  <Link to="/rent">{t('RENT')}</Link>
                </li>
                <li>
                  <Link to="/sell">{t('SELL')}</Link>
                </li>
                <li>
                  <Link to="/cyprus">{t('CYPRUS')}</Link>
                </li>
                <li>
                  <Link to="/contact-us">{t('CONTACT')}</Link>
                </li>
                <li>
                  <Link to="/about">{t('ABOUT')}</Link>
                </li>
              </ul>
            </div>
            <div className={classes.SecondFooterSection}>
              <div className={classes.socialLinks}>
                <div className={classes.instaFace}>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    to="https://www.instagram.com/sunrepublic.vip/"
                  >
                    <img
                      width="30px"
                      height="30px"
                      src={instaImage}
                      alt="insta"
                    />
                  </Link>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    to="https://www.facebook.com/sunrepublic.vip/"
                  >
                    <img
                      width="30px"
                      height="30px"
                      src={faceImage}
                      alt="face"
                    />
                  </Link>
                </div>
                <div className={classes.logo}>
                  <img height="64px" width="149px" src={logo} alt="logo" />
                </div>
                <div className={classes.ytWt}>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    to="https://wa.me/905338457788"
                  >
                    <img
                      width="30px"
                      height="30px"
                      src={whatsApp}
                      alt="whats"
                    />
                  </Link>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    to="https://www.youtube.com/c/IrinDrealty"
                  >
                    <img width="30px" height="30px" src={youtube} alt="yt" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.ThirdFooterSection}>
              <div className={classes.info}>
                <div className={classes.location}>
                  <p>
                    {t('location')} {t('locationContent')}
                  </p>
                </div>
                <div className={classes.number}>
                  <Link href="tel:+90 533 845 7788">
                    {' '}
                    {t('number')}+90 533 845 7788
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className={classes.rightResrved}>
        <div className={classes.rightContainer}>
          <p>{t('allResrved')}</p>
          <p>{t('powered')}</p>
        </div>
      </div>
    </>
  );
}
