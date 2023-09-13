import i18n from 'i18next';
import en from './en.json';
import ru from './ru.json';
import tr from './tr.json'
i18n.init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    tr: {
      translation: tr,
    },
    // Add another translations here
    // and to /i18next-parser.config.js
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

// USAGE:
// import { t } from '../i18n'
// const translated = t('Some en text');
export const t = (...args) => i18n.t(...args);

export default i18n;
