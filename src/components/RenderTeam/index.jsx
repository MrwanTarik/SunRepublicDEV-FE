import React, { useState } from 'react';

import classNames from 'classnames';

import classes from './styles.module.scss';
import { t } from '../../i18n';

export default function RenderTeam({ img, name, email, jobTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpaque, setIsOpaque] = useState(false);

  const showContactInfo = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsOpaque(true);
    }, 10);
  };

  const hideContactInfo = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 400);
    setIsOpaque(false);
  };

  return (
    <li
      className={classes.RenderTeam}
      onMouseEnter={showContactInfo}
      onMouseLeave={hideContactInfo}
    >
      <div className={classes.photoContainer}>
        <img src={img} alt={name} />
      </div>
      {isHovered && (
        <div
          className={classNames(classes.contactInfo, {
            [classes.opaque]: isOpaque,
          })}
        >
          <h1>{t(name)}</h1>
          <p>
            {jobTitle}
            <br/>
            <a href={`mailto:${email}`}>{email}</a>
            {/* <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a> */}
          </p>
        </div>
      )}
    </li>
  );
}
