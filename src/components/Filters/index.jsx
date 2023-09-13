import React from 'react';

import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import i18n, { t } from '../../i18n';
import classes from './styles.module.scss';

export default function Filters({
  filtersRef,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minArea,
  setMinArea,
  maxArea,
  setMaxArea,
  hasPool,
  setHasPool,
  type,
  setType,
  region,
  setRegion,
  floorCount,
  setFloorCount,
  setSearchKey,
  ppid,
  setPpid,
}) {
  const changeNumberInputValue = (value, setter) => {
    const re = /^[0-9\b]+$/;

    if (value === '' || re.test(value)) {
      setter(value);
    }
  };

  const changePpidInputValue = (value, setter) => {
    setter(value);
  };

  return (
    <div className={classes.Filters} ref={filtersRef}>
      <div className={classes.col}>
        <Select
          label={t('Type')}
          placeholder={t('Any')}
          value={type}
          setValue={setType}
          options={[
            { label: t('Any'), value: '' },
            { label: t('Studio'), value: 'Studio' },
            { label: t('Onebedroom'), value: 'One bedroom' },
            { label: t('Twobedrooms'), value: 'Two bedrooms' },
            { label: t('Threebedrooms'), value: 'Three bedrooms' },
            { label: t('Fourbedrooms'), value: 'Four bedrooms' },
            { label: t('Villa'), value: 'Villa' },
            { label: t('BungalowTownhouse'), value: 'Bungalow Townhouse' },
          ]}
        />
        <Select
          label={t('Region')}
          placeholder={t('Any')}
          value={region}
          setValue={setRegion}
          options={[
            { label: t('Any'), value: '' },
            { label: t('Kyrenia'), value: 'Kyrenia' },
            { label: t('Nicosia'), value: 'Nicosia' },
            { label: t('Famagusta'), value: 'Famagusta' },
            { label: t('Iskele'), value: 'Iskele' },
          ]}
        />
      </div>
      <div
        style={{ minHeight: '184px', justifyContent: 'space-between' }}
        className={classes.col}
      >
        <div className={classes.shortSelects}>
          {/*    <Select
            label={t('Square Meter')}
            placeholder={t('Any')}
            value={area}
            setValue={setArea}
            options={[
              { label: t('Any'), value: '' },
              { label: 500, value: 500 },
            ]}
          /> */}
          <div className={classes.se}>{t('squareMeter')}</div>
          <div
            className={classes.inputsHolder}
            style={{ display: 'flex', gap: '12px' }}
          >
            <TextInput
              fs="18px"
              bg="white"
              placeholder={t('From')}
              value={minArea}
              onChange={(event) =>
                changeNumberInputValue(event.target.value, setMinArea)
              }
            />
            <TextInput
              fs="18px"
              bg="white"
              placeholder={t('To')}
              value={maxArea}
              onChange={(event) =>
                changeNumberInputValue(event.target.value, setMaxArea)
              }
            />
          </div>
        </div>
        <div className={classes.shortSelects}>
          <div className={classes.se}>{t('Price')}</div>

          <div
            className={classes.inputsHolder}
            style={{ display: 'flex', gap: '12px' }}
          >
            <TextInput
              fs="18px"
              bg="white"
              placeholder={t('From')}
              value={minPrice}
              onChange={(event) =>
                changeNumberInputValue(event.target.value, setMinPrice)
              }
            />
            <TextInput
              fs="18px"
              bg="white"
              placeholder={t('To')}
              value={maxPrice}
              onChange={(event) =>
                changeNumberInputValue(event.target.value, setMaxPrice)
              }
            />
          </div>
          {/* <Select
            label={t('Price')}
            placeholder={t('From')}
            value={minPrice}
            setValue={setMinPrice}
            options={[
              { label: '£50000', value: 50000 },
              { label: '£100000', value: 100000 },
              { label: '£150000', value: 150000 },
              { label: '£200000', value: 200000 },
              { label: '£250000', value: 250000 },
              { label: '£300000', value: 300000 },
              { label: '£350000', value: 350000 },
              { label: '£400000', value: 400000 },
              { label: '£450000', value: 450000 },
              { label: '£500000', value: 500000 },
            ]}
          />
          <Select
            label="&nbsp;"
            placeholder={t('To')}
            value={maxPrice}
            setValue={setMaxPrice}
            options={maxPriceOptions}
          /> */}
        </div>
      </div>
      <div className={classes.col}>
        <Select
          label={t('Bedrooms')}
          placeholder={t('Any')}
          value={bedrooms}
          setValue={setBedrooms}
          options={[
            { label: t('Any'), value: '' },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
          ]}
        />

        <Select
          label={t('Floor')}
          placeholder={t('Any')}
          value={floorCount}
          setValue={setFloorCount}
          options={[
            { label: t('Any'), value: '' },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
          ]}
        />
      </div>
      <div className={classes.col}>
        <Select
          label={t('Bathrooms')}
          placeholder={t('Any')}
          value={bathrooms}
          setValue={setBathrooms}
          options={[
            { label: t('Any'), value: '' },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
          ]}
        />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
          <TextInput
            fs="18px"
            bg="white"
            placeholder={t('PPID')}
            value={ppid}
            onChange={(event) =>
              changeNumberInputValue(event.target.value, setPpid)
            }
          />
          <div className={classes.buttonContainer}>
            <Button
              style={{
                fontFamily:
                  i18n.language === 'en' ? 'Smooch Sans' : 'sans-serif',
              }}
              onClick={() => setSearchKey(Math.random())}
            >
              {t('SEARCH')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
