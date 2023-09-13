import React from 'react';

import { Link } from 'react-router-dom';
import MultiClamp from 'react-multi-clamp';

import i18n from '../../../i18n';
import { STATIC_URL } from '../../../constants/main';
import classes from './styles.module.scss';

export default function Regular({ data, postWidth, postsCount }) {
  let title = data?.title;
  if (i18n.language === 'en') {
    title = data?.title || data?.titleRus;
  } else if (i18n.language === 'ru') {
    title = data?.titleRus || data?.title;
  }

  return (
    <Link to={`/cyprus/${data.id}`}>
      <article
        className={classes.Regular}
        style={{ width: postsCount >= 3 ? postWidth : '' }}
      >
        <div className={classes.imageContainer}>
          <img src={STATIC_URL + data?.imagePath} height={277} alt="" />
        </div>
        <h1>
          <MultiClamp clamp={3}>{title}</MultiClamp>
        </h1>
      </article>
    </Link>
  );
}
