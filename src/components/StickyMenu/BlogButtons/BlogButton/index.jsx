import React, { useState } from 'react';
import classNames from 'classnames';
import classes from './styles.module.scss';

export default function BlogButton({ image, title, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={classNames(classes.BlogButton, {
        [classes.hovered]: isHovered,
      })}
      onClick={() =>
        document.getElementById(title).scrollIntoView({ behavior: 'smooth' })
      }
    >
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </span>
      <div className={classes.buttonContainer}>
        <div
          className={isActive ? classes.activeButton : classes.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={image}
            alt={title}
            className={isActive ? classes.active : classes.notActive}
          />
        </div>
      </div>
    </li>
  );
}
