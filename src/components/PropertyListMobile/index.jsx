import React, { useState, useEffect, useRef } from 'react';

import { useQuery } from 'react-query';
import i18n from '../../i18n';
import classNames from 'classnames';
import Property from './Property';
import PropertyService from '../../services/PropertyService';
import classes from './styles.module.scss';

export default function PropertyListMobile({
  title,
  searchKey,
  queryName,
  bedrooms,
  bathrooms,
  minPrice,
  maxPrice,
  minArea,
  maxArea,
  hasPool,
  type,
  region,
  floorCount,
  recent,
  action,
  searchTerm,
  titleTwo,
   ppid
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(5);

  const { data, refetch, isFetching } = useQuery(queryName, () =>
    PropertyService.getPropertyList({
      recent,
      bedrooms,
      bathrooms,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      hasPool,
      type,
      region,
      floorCount,
      action,
      searchTerm,
      ppid,
    })
  );

  const listContainerRef = useRef();

  useEffect(() => {
    if (
      searchKey &&
      queryName !== 'recentProperty' &&
      queryName !== 'recentRentProperty'
    ) {
      refetch();
      listContainerRef.current.scrollLeft = 0;
    }
  }, [queryName, refetch, searchKey]);

  useEffect(() => {
    if (searchTerm) {
      refetch();
    }
  }, [refetch, searchTerm, queryName]);

  useEffect(() => {
    const listContainer = listContainerRef.current;

    const switchPage = (event) => {
      const pageToWidth = event.target.scrollWidth / pageCount;

      const { scrollLeft } = event.target;

      setCurrentPage(Math.round(scrollLeft / pageToWidth));
    };

    listContainer.addEventListener('scroll', switchPage);

    return () => {
      if (listContainer.removeEnventListener) {
        listContainer.removeEnventListener('scroll', switchPage);
      }
    };
  }, [pageCount]);

  useEffect(() => {
    const pageNumber = Math.round(
      listContainerRef.current?.scrollWidth /
        listContainerRef.current?.clientWidth
    );
    setPageCount(pageNumber < 5 ? pageNumber : 5);
  }, [data]);

  return (
    <div className={classes.PropertyListMobile}>
      {title && (
        <h2>
          {i18n.language === 'tr' ? (
            <>
              <span style={{ marginRight: '15px' }}>{titleTwo}</span> {title}
            </>
          ) : (
            <>
              {title} <span>{titleTwo}</span>
            </>
          )}
        </h2>
      )}
      <div className={classes.listContainer} ref={listContainerRef}>
        <ul className={classes.list}>
          <div className={classes.inner}>
            {data &&
              data?.rows.map((property) => {
                return (
                  <li key={property.id}>
                    <Property isFetching={isFetching} propertyData={property} />
                  </li>
                );
              })}
          </div>
        </ul>
      </div>
      {data?.rows?.length ? (
        <div className={classes.pagination}>
          <div
            className={classNames(
              classes.page,
              currentPage === 0 && classes.active
            )}
          />
          {pageCount > 1 ? (
            <div
              className={classNames(
                classes.page,
                currentPage === 1 && classes.active
              )}
            />
          ) : null}
          {pageCount > 2 ? (
            <div
              className={classNames(
                classes.page,
                currentPage === 2 && classes.active
              )}
            />
          ) : null}
          {pageCount > 3 ? (
            <div
              className={classNames(
                classes.page,
                currentPage === 3 && classes.active
              )}
            />
          ) : null}
          {pageCount > 4 ? (
            <div
              className={classNames(
                classes.page,
                currentPage === 4 && classes.active
              )}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
