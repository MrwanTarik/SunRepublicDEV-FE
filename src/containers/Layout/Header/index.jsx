import React, { useState, useRef } from 'react';

import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';

import Sidebar from './Sidebar';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import useSwitchLanguage from '../../../hooks/useSwitchLanguage';
import i18n, { t } from '../../../i18n';
import logoHeader from '../../../assets/images/logoHeader.png';
import russianFlag from '../../../assets/images/russia.svg';
import ukFlag from '../../../assets/images/uk.svg';
import trFlag from '../../../assets/images/turkeyFlag.svg.png'
import classes from './styles.module.scss';

export default function Header() {
  const [isLanguagesListVisible, setIsLanguagesListVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const changeLanguage = useSwitchLanguage();

  const languageSwitcherRef = useRef();

  useOnClickOutside(languageSwitcherRef, () =>
    setIsLanguagesListVisible(false)
  );

  return (
    <div className={classes.bzo}>
      <header
        className={classNames(
          classes.Header,
          i18n.language === 'ru' && classes.russian
        )}
      >
        <Link to="/" className={classes.link}>
          <img src={logoHeader} alt="Logo" className={classes.logo} />
        </Link>
        <div className={classes.container}>
          <nav className={classes.navigationMenu}>
            <ul>
              <li>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('HOME')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buy"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('BUY')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rent"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('RENT')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sell"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('SELL')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cyprus"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('CYPRUS')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('CONTACT')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {t('ABOUT')}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={classes.languageSwitcher}
          ref={languageSwitcherRef}
          onClick={() => setIsLanguagesListVisible((prevState) => !prevState)}
        >
          <span>{i18n.language}</span>
          {i18n.language === 'en' ? (
            <img src={ukFlag} alt="Flag of UK" />
          ) : i18n.language === 'ru' ? (
            <img src={russianFlag} alt="Flag of Russia" />
          ) : i18n.language === 'tr' ? (
            <img src={trFlag} alt="Flag of Turkey" />
          ) : null}

          {isLanguagesListVisible && (
            <div className={classes.languagesList}>
              <div
                onClick={() => {
                  changeLanguage('ru');
                }}
              >
                <img src={russianFlag} alt="Flag of Russia" />
                RU
              </div>
              <div onClick={() => changeLanguage('en')}>
                <img src={ukFlag} alt="Flag of UK" /> EN
              </div>
              <div onClick={() => {
                changeLanguage('tr');
              }}
              >
                <img src={trFlag} alt="Turkish Flag" /> TR
              </div>
            </div>
          )}
        </div>
        <div className={classes.menuButton}>
          <button type="button" onClick={() => setIsSidebarVisible(true)}>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5625 6.85938H18.8125C18.9156 6.85938 19 6.775 19 6.67188V5.35938C19 5.25625 18.9156 5.17188 18.8125 5.17188H7.5625C7.45937 5.17188 7.375 5.25625 7.375 5.35938V6.67188C7.375 6.775 7.45937 6.85938 7.5625 6.85938ZM7.375 11.6406C7.375 11.7437 7.45937 11.8281 7.5625 11.8281H18.8125C18.9156 11.8281 19 11.7437 19 11.6406V10.3281C19 10.225 18.9156 10.1406 18.8125 10.1406H7.5625C7.45937 10.1406 7.375 10.225 7.375 10.3281V11.6406ZM19.1875 0.25H0.8125C0.709375 0.25 0.625 0.334375 0.625 0.4375V1.75C0.625 1.85312 0.709375 1.9375 0.8125 1.9375H19.1875C19.2906 1.9375 19.375 1.85312 19.375 1.75V0.4375C19.375 0.334375 19.2906 0.25 19.1875 0.25ZM19.1875 15.0625H0.8125C0.709375 15.0625 0.625 15.1469 0.625 15.25V16.5625C0.625 16.6656 0.709375 16.75 0.8125 16.75H19.1875C19.2906 16.75 19.375 16.6656 19.375 16.5625V15.25C19.375 15.1469 19.2906 15.0625 19.1875 15.0625ZM0.704688 8.66172L4.36797 11.5469C4.50391 11.6547 4.70547 11.5586 4.70547 11.3852V5.61484C4.70547 5.44141 4.50625 5.34531 4.36797 5.45312L0.704688 8.33828C0.680055 8.35743 0.660123 8.38196 0.646412 8.40998C0.632701 8.43801 0.625574 8.4688 0.625574 8.5C0.625574 8.5312 0.632701 8.56199 0.646412 8.59002C0.660123 8.61804 0.680055 8.64257 0.704688 8.66172Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <Sidebar
          show={isSidebarVisible}
          handleClose={() => setIsSidebarVisible(false)}
        />
      </header>
    </div>
  );
}
