import React from 'react';

import { Link } from 'react-router-dom';
import MultiClamp from 'react-multi-clamp';

import i18n from '../../../i18n';
import { STATIC_URL } from '../../../constants/main';
import classes from './styles.module.scss';

const monthsRu = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];
const monthsEn = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function MostPopularSmall({ data }) {
  const createdAt = new Date(data.createdAt);
  const monthIndex = createdAt.getMonth();
  const year = createdAt.getFullYear();

  let title = data?.title;
  let months = monthsEn;
  if (i18n.language === 'en') {
    title = data?.title || data?.titleRus;
  } else if (i18n.language === 'ru') {
    title = data?.titleRus || data?.title;
    months = monthsRu;
  }

  return (
    <Link to={`/cyprus/${data.id}`}>
      <article className={classes.MostPopularSmall}>
        <div className={classes.imageContainer}>
          <img src={STATIC_URL + data?.imagePath} height={162} alt="" />
        </div>
        <div className={classes.details}>
          <span className={classes.date}>
            {months[monthIndex]} {year}
          </span>
          <h1>
            <MultiClamp clamp={3}>{title}</MultiClamp>
          </h1>
        </div>
      </article>
    </Link>
  );
}
