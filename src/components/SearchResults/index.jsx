import React from 'react';

import { useMediaQuery } from 'react-responsive';

import { t } from '../../i18n';
import PropertyListMobile from '../PropertyListMobile';
import PropertyList from '../PropertyList';
import classes from './styles.module.scss';

export default function SearchResults({ searchTerm, containerRef }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const PropertyListComponent = isTabletOrMobile
    ? PropertyListMobile
    : PropertyList;

  return (
    <div className={classes.SearchResults}>
      <div className={classes.propertyListContainer}>
        <PropertyListComponent
          title={t('For sale')}
          filtersRef={containerRef}
          searchTerm={searchTerm}
          queryName="searchSell"
          action="sell"
        />
      </div>
      <div className={classes.propertyListContainer}>
        <PropertyListComponent
          title={t('For rent')}
          filtersRef={containerRef}
          queryName="searchRent"
          searchTerm={searchTerm}
          action="rent"
        />
      </div>
    </div>
  );
}
