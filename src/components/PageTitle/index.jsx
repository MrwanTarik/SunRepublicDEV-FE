import classNames from 'classnames';
import React from 'react';

import classes from './styles.module.scss';

export default function PageTitle({ title, about = 'Sun', aboutPage = false }) {
  return (
    <div className={classNames(classes.PageTitle, about && classes.about)}>
      <div className={classes.container}>
        {aboutPage ? (
          <h1 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {title}
            <span className={classes.accent} style={{ opacity: '0.8' }}>
              {' '}
              {about}
            </span>
          </h1>
        ) : (
          <h1 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {title}
            <span className={classes.accent}> {about}</span>
          </h1>
        )}
      </div>
    </div>
  );
}
