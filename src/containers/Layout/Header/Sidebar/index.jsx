import classNames from 'classnames';
import React from 'react';

import { NavLink } from 'react-router-dom';

import { t } from '../../../../i18n';
import classes from './styles.module.scss';

export default function Sidebar({ show, handleClose }) {
  return (
    <>
      <div className={classNames(classes.Sidebar, show && classes.show)}>
        <nav className={classes.navigationMenu}>
          <ul>
            <li>
              <NavLink
                end
                to="/"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {t('HOME')}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
        className={classNames(classes.backdrop, show && classes.show)}
        onClick={handleClose}
      />
    </>
  );
}
