import React from 'react';

import { Link } from 'react-router-dom';
import MultiClamp from 'react-multi-clamp';
import striptags from 'striptags';

import i18n from '../../../i18n';
import { STATIC_URL } from '../../../constants/main';
import classes from './styles.module.scss';

export default function MostPopularBig({ data }) {
  let title = data?.title;
  let description = data?.textContent;
  if (i18n.language === 'en') {
    title = data?.title || data?.titleRus;
    description = data?.textContent || data?.textContentRus;
  } else if (i18n.language === 'ru') {
    title = data?.titleRus || data?.title;
    description = data?.textContentRus || data?.textContent;
  }

  return (
    <Link to={`/cyprus/${data.id}`}>
      <article className={classes.MostPopularBig}>
        <div className={classes.imageContainer}>
          <img src={STATIC_URL + data?.imagePath} alt="" height={393} />
        </div>
        <h1>
          <MultiClamp clamp={1}>{title}</MultiClamp>
        </h1>
        <MultiClamp clamp={3} className={classes.description}>
          {striptags(description)}
        </MultiClamp>
      </article>
    </Link>
  );
}
