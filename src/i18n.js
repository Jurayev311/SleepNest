import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTrasnlate from '../public/locales/uz.json'
import enTrasnlate from '../public/locales/en.json'
import ruTrasnlate from '../public/locales/ru.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: true,
    resources: {
      uz: { translation: uzTrasnlate },
      en: { translation: enTrasnlate },
      ru: { translation: ruTrasnlate }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
