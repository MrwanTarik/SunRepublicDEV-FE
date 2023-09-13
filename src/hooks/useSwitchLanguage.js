import { useContext } from 'react';

import i18n from '../i18n';
import { UIContext } from '../context';

function useSwitchLanguage() {
  const { forceUpdate } = useContext(UIContext);
  return (language) => {
    i18n.changeLanguage(language, () => {
      localStorage.setItem('language', language);
      forceUpdate();
    });
  };
}

export default useSwitchLanguage;
