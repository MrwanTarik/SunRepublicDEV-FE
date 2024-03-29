import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { useQuery } from 'react-query';
import i18n from '../../i18n';
import Property from './Property';
import useResizeObserver from '../../hooks/useResizeObserver';
import PropertyService from '../../services/PropertyService';
import classes from './styles.module.scss';

export default function PropertyList({
  buildType,
  title,
  filtersRef,
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
  ppid,
}) {
  const [page, setPage] = useState(0);
  // console.log(buildingType);
  const { width } = useResizeObserver(filtersRef);

  const propertyWidth = (width - 40) / 3;

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
      ppid,
      searchTerm,
    })
  );

  useEffect(() => {
    if (
      searchKey &&
      queryName !== 'recentProperty' &&
      queryName !== 'recentRentProperty'
    ) {
      refetch();
      setPage(0);
    }
  }, [queryName, refetch, searchKey]);

  useEffect(() => {
    if (searchTerm) {
      refetch();
      setPage(0);
    }
  }, [refetch, searchTerm, queryName]);

  return (
    <div
      className={classes.PropertyList}
      style={{ width: data?.rows.length >= 3 ? width : '' }}
    >
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
      <div className={classes.listContainer}>
        {page > 0 && (
          <button
            type="button"
            className={classNames(classes.previous, classes.arrowButton)}
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-6.19888e-05 11.0001C-6.19888e-05 10.7443 0.0976877 10.4883 0.292937 10.2931L10.2929 0.293063C10.6837 -0.0976875 11.3164 -0.0976875 11.7069 0.293063C12.0974 0.683812 12.0977 1.31656 11.7069 1.70706L2.41394 11.0001L11.7069 20.2931C12.0977 20.6838 12.0977 21.3166 11.7069 21.7071C11.3162 22.0976 10.6834 22.0978 10.2929 21.7071L0.292937 11.7071C0.0976877 11.5118 -6.19888e-05 11.2558 -6.19888e-05 11.0001Z"
                fill="black"
              />
            </svg>
          </button>
        )}
        <ul className={classes.list}>
          <div
            className={classes.inner}
            style={{ marginLeft: page * -width - 20 * page }}
          >
            {data &&
              data?.rows.map((property) => {
                if (window.location.pathname.split('/')[2] === property.id)
                  return false;
                if (!buildType || property.buildingType === buildType) {
                  // Only render the <li> element if the condition is true
                  return (
                    <li key={property.id}>
                      <Property
                        isFetching={isFetching}
                        propertyData={property}
                        propertyWidth={propertyWidth}
                        propertyCount={data?.rows?.length}
                      />
                    </li>
                  );
                }
              })}
          </div>
        </ul>
        {(page + 1) * 3 < data?.count && (
          <button
            type="button"
            className={classes.arrowButton}
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 10.9999C12.0001 11.2557 11.9023 11.5117 11.7071 11.7069L1.70706 21.7069C1.31631 22.0977 0.683563 22.0977 0.293063 21.7069C-0.0974375 21.3162 -0.0976875 20.6834 0.293063 20.2929L9.58606 10.9999L0.293063 1.70694C-0.0976875 1.31619 -0.0976875 0.683435 0.293063 0.292936C0.683812 -0.0975628 1.31656 -0.0978146 1.70706 0.292936L11.7071 10.2929C11.9023 10.4882 12.0001 10.7442 12.0001 10.9999Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
