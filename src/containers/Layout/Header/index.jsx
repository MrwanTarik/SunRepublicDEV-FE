import { useState, useRef, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';

import Sidebar from './Sidebar';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import useSwitchLanguage from '../../../hooks/useSwitchLanguage';
import i18n, { t } from '../../../i18n';
import LogoHeader from '../../../assets/images/logoHeader.png';
import ToggleIcon from '../../../assets/images/toggle-icon.png';
import classes from './styles.module.scss';

export default function Header() {
  const [isLanguagesListVisible, setIsLanguagesListVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const changeLanguage = useSwitchLanguage();

  const languageSwitcherRef = useRef();

  useOnClickOutside(languageSwitcherRef, () =>
    setIsLanguagesListVisible(false)
  );
  useEffect(() => {
    if (isSidebarVisible) {
      // When the menu is open, prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // When the menu is closed, allow scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarVisible]); // Only re-run the effect if isMenuOpen changes
  return (
    <header
      className={classNames(
        classes.Header,
        i18n.language === 'ru' && classes.russian,
        isSidebarVisible && classes.sidebarVisible,
        `container`
      )}
    >
      <Link to="/" className={classes.link}>
        <img src={LogoHeader} alt="Logo" className={classes.logo} />
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
        <span>
          {i18n.language}

          <div
            className={classNames(
              classes.languagesList,
              `${
                isLanguagesListVisible
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              } `
            )}
          >
            <div
              onClick={() => {
                changeLanguage('ru');
              }}
            >
              RU
            </div>
            <div
              className={classes.secondLang}
              onClick={() => changeLanguage('en')}
            >
              EN
            </div>
            <div
              onClick={() => {
                changeLanguage('tr');
              }}
            >
              TR
            </div>
          </div>
        </span>
      </div>
      <div className={classes.menuButton}>
        <button
          type="button"
          onClick={() => setIsSidebarVisible((prev) => !prev)}
        >
          <img src={ToggleIcon} alt="Toggle" />
        </button>
      </div>
      <Sidebar
        show={isSidebarVisible}
        handleClose={() => setIsSidebarVisible(false)}
      />
    </header>
  );
}
