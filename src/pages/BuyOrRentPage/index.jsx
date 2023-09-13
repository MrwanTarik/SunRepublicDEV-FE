import React, { useState, useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import PropertyListMobile from '../../components/PropertyListMobile';
import PropertyList from '../../components/PropertyList';
import Filters from '../../components/Filters';
import { t } from '../../i18n';
import classes from './styles.module.scss';
import i18n from '../../i18n';
export default function BuyOrRentPage({ currentPage }) {
  const [bedrooms, setBedrooms] = useState('');
  const [bedroomsRent, setBedroomsRent] = useState('');
  const [ppid, setPpid] = useState('');
  const [ppidRent, setPpidRent] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [bathroomsRent, setBathroomsRent] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [minPriceRent, setMinPriceRent] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [maxPriceRent, setMaxPriceRent] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');
  const [minAreaRent, setMinAreaRent] = useState('');
  const [maxAreaRent, setMaxAreaRent] = useState('');
  const [hasPool, setHasPool] = useState('');
  const [hasPoolRent, setHasPoolRent] = useState('');
  const [type, setType] = useState('');
  const [typeRent, setTypeRent] = useState('');
  const [region, setRegion] = useState('');
  const [regionRent, setRegionRent] = useState('');
  const [floorCount, setFloorCount] = useState('');
  const [floorCountRent, setFloorCountRent] = useState('');
  const [searchKey, setSearchKey] = useState(null);
  const [searchKeyRent, setSearchKeyRent] = useState(null);

  const filtersRef = useRef();
  const filtersRefRent = useRef();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const PropertyListComponent = isTabletOrMobile
    ? PropertyListMobile
    : PropertyList;

  return (
    <div className={classes.BuyOrRentPage}>
      <div
        className={
          currentPage === 'sell'
            ? classes.filtersContainer
            : classes.filtersContainerx
        }
      >
        <div>
          <h1>
            {i18n.language === 'tr' ? (
              <>
                <span>Sun</span>{' '}
                {currentPage === 'sell' ? t('Buy with') : t('Rent with')}
              </>
            ) : (
              <>
                {currentPage === 'rent' ? t('Rent with') : t('Buy with')}{' '}
                <span>Sun</span>
              </>
            )}
          </h1>
          {currentPage === 'sell' && (
            <Filters
              setSearchKey={setSearchKey}
              filtersRef={filtersRef}
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              ppid={ppid}
              setPpid={setPpid}
              bathrooms={bathrooms}
              setBathrooms={setBathrooms}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minArea={minArea}
              setMinArea={setMinArea}
              maxArea={maxArea}
              setMaxArea={setMaxArea}
              hasPool={hasPool}
              setHasPool={setHasPool}
              type={type}
              setType={setType}
              region={region}
              setRegion={setRegion}
              floorCount={floorCount}
              setFloorCount={setFloorCount}
            />
          )}
          {currentPage === 'rent' && (
            <Filters
              setSearchKey={setSearchKeyRent}
              filtersRef={filtersRefRent}
              ppid={ppidRent}
              setPpid={setPpidRent}
              bedrooms={bedroomsRent}
              setBedrooms={setBedroomsRent}
              bathrooms={bathroomsRent}
              setBathrooms={setBathroomsRent}
              minPrice={minPriceRent}
              setMinPrice={setMinPriceRent}
              maxPrice={maxPriceRent}
              setMaxPrice={setMaxPriceRent}
              minArea={minAreaRent}
              setMinArea={setMinAreaRent}
              maxArea={maxAreaRent}
              setMaxArea={setMaxAreaRent}
              hasPool={hasPoolRent}
              setHasPool={setHasPoolRent}
              type={typeRent}
              setType={setTypeRent}
              region={regionRent}
              setRegion={setRegionRent}
              floorCount={floorCountRent}
              setFloorCount={setFloorCountRent}
            />
          )}
        </div>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.propertyListContainer}>
          {currentPage === 'sell' && (
            <PropertyListComponent
              title={t('available')}
              titleTwo={t('properties')}
              filtersRef={filtersRef}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              minPrice={minPrice}
              maxPrice={maxPrice}
              ppid={ppid}
              minArea={minArea}
              maxArea={maxArea}
              hasPool={hasPool}
              type={type}
              region={region}
              floorCount={floorCount}
              searchKey={searchKey}
              queryName="property"
              action="sell"
              currentPage={currentPage}
            />
          )}
          {currentPage === 'rent' && (
            <PropertyListComponent
              title={t('Available options')}
              filtersRef={filtersRefRent}
              bedrooms={bedroomsRent}
              bathrooms={bathroomsRent}
              minPrice={minPriceRent}
              maxPrice={maxPriceRent}
              minArea={minAreaRent}
              maxArea={maxAreaRent}
              hasPool={hasPoolRent}
              type={typeRent}
              region={regionRent}
              floorCount={floorCountRent}
              searchKey={searchKeyRent}
              queryName="rentProperty"
              action="rent"
              ppid={ppidRent}
              currentPage={currentPage}
            />
          )}
        </div>
        <div className={classes.propertyListContainer}>
          <PropertyListComponent
            title={t('Added recently')}
            filtersRef={filtersRef}
            queryName={
              currentPage === 'rent' ? 'recentRentProperty' : 'recentProperty'
            }
            action={currentPage === 'rent' ? 'rent' : 'sell'}
            recent
          />
        </div>
      </div>
    </div>
  );
}
