import React from 'react';

import classNames from 'classnames';

import classes from './styles.module.scss';

export default function Button({ children, onClick, style, disabled }) {
  return (
    <button
      type="button"
      className={classNames(classes.Button, disabled && classes.disabled)}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
