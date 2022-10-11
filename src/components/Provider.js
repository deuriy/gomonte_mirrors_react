import { createContext } from "react";

const LanguageContext = createContext({
  language: "me",
  setLanguage: () => { }
});

export { LanguageContext };