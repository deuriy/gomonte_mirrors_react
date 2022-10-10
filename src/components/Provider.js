import { createContext } from "react";

const LanguageContext = createContext({
  language: "ru",
  setLanguage: () => { }
});

export { LanguageContext };