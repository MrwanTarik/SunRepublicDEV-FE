import React from 'react';

import classes from './styles.module.scss';

export default function TextInput({
  name,
  label,
  placeholder,
  onBlur,
  onChange,
  value,
  titleInputStyle,
  descriptionInputStyle,
  bg,
  fs,
}) {
  const getInputClassNames = () => {
    if (titleInputStyle != undefined) {
      return classes.titleInputStyle;
    } else if (descriptionInputStyle != undefined) {
      return classes.descriptionInputStyle;
    }
  };
  return (
    <div className={classes.TextInput}>
      <span className={classes.label}>{label}</span>
      {descriptionInputStyle ? (
        <textarea
          style={{ resize: 'none' }}
          name={name}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          style={{ background: `${bg}`, fontSize: `${fs}` }}
          type="text"
          className={getInputClassNames()}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
