import ru from './locales/ru.json'
import en from './locales/en.json'
import me from './locales/me.json'
import tr from './locales/tr.json'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: ru
  },
  en: {
    translation: en
  },
  me: {
    translation: me
  },
  tr: {
    translation: tr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",

    interpolation: {
      escapeValue: false
    }
  });

export { i18n };