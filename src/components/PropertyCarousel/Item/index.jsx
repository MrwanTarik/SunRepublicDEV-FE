import React from 'react';

import { Link } from 'react-router-dom';

import classes from './styles.module.scss';
// import properyPlaceholder from '../../../assets/images/propertyPlaceholder.png';

export default function Item({ photo }) {
  return (
    <Link to="/buy" className={classes.Item}>
      <div className={classes.container}>
        <img src={photo.src} alt={photo.label} />
        <h1 className={classes['item-title']}>{photo.label}</h1>
      </div>
    </Link>
  );
}
