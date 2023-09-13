import React, { useState, useEffect } from 'react';

import classes from './styles.module.scss';

export default function StickyMenu({ children }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const watchWindowScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', watchWindowScroll);

    return () => {
      window.removeEventListener('scroll', watchWindowScroll);
    };
  });

  return (
    <aside
      className={classes.StickyMenu}
      style={{ top: scrollY < 560 ? 624 : scrollY + 64 }}
    >
      {children}
      <div className={classes.cover} />
    </aside>
  );
}
