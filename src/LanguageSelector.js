// src/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('cs')}>Čeština</button>
      {/* Další tlačítka pro další jazyky, pokud potřebuješ */}
    </div>
  );
};

export default LanguageSelector;
