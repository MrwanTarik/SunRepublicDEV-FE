import React from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './styles.scss';
import classes from './styles.module.scss';

export default function PhoneInputComponent({
  name,
  label,
  placeholder,
  onBlur,
  setFieldValue,
  value,
}) {
  return (
    <div className={classes.PhoneInput}>
      <span className={classes.label}>{label}</span>
      <PhoneInput
        country="us"
        buttonClass="countryButton"
        inputClass="input"
        inputProps={{
          name,
        }}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        value={value}
        onChange={(phone) => setFieldValue(name, phone)}
      />
    </div>
  );
}
