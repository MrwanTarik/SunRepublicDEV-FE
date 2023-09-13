import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import classes from './styles.module.scss';
import whatsAppLogo from '../../assets/images/whatappico.svg';
export default function Layout({ children }) {
  return (
    <div className={classes.Layout}>
      <div>
        <Link
          to={
            'https://api.whatsapp.com/send/?phone=905338457788&text&type=phone_number&app_absent=0'
          }
        >
          {' '}
          <img className={classes.whatsAppImg} src={whatsAppLogo} alt="" />
        </Link>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
