// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Připojení knihovny initReactI18next
  .init({
    resources: {
      en: {
        translation: {
          welcome_message: 'Welcome to the Metal Stamping Tutorial',
          view_welcome_message: 'View the welcome message',
          learn_about_metal_stamping: 'Learn about Metal Stamping',
          english: 'English',
          czech: 'Čeština',
          spanish: 'Español',
          russian: 'Русский',
          japanese: '日本語',
          chinese: '中文',
          french: 'Français',
          german: 'Deutsch',
        },
      },
      // Další jazyky zde přidej dle potřeby
    },
    lng: 'en', // Výchozí jazyk
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React už provádí escape
    },
  });

export default i18n;
