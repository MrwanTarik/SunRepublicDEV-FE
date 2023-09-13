import React from 'react';

import { t } from '../../../i18n';

import iskele from '../../../assets/images/aside/iskele.jpg';
import famagusta from '../../../assets/images/aside/famagusta.jpg';
import kyrenia from '../../../assets/images/aside/kyrenia.jpg';
import nicosia from '../../../assets/images/aside/nicosia.jpg';
import Button from './BlogButton';
import classes from './styles.module.scss';

export default function BlogButtons({ activeRef }) {
  const buttons = [
    { title: t('Northern Cyprus'), image: iskele },
    { title: t('Famagusta'), image: famagusta },
    { title: t('Kyrenia'), image: kyrenia },
    { title: t('Nicosia'), image: nicosia },
  ];
  return (
    <ul className={classes.BlogButtons}>
      {buttons.map((button) => {
        let active = false;
        activeRef.forEach((el) => {
          if (el.name === button.title) active = el.isActiveRef;
        });
        return (
          <Button
            title={button.title}
            image={button.image}
            key={button.title}
            isActive={active}
          />
        );
      })}
    </ul>
  );
}
