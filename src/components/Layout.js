import { i18n } from '../i18n';

import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileSidebar } from './MobileSidebar';
import { MobileHeader } from './MobileHeader';
// import { MobileFilter } from './MobileFilter';

import { useLocalStorage } from './../hooks/use-localstorage';
import { LanguageContext } from './Provider';

const Layout = () => {
  // const [activeLang, setActiveLang] = useLocalStorage('language', 'ru');
  // const [language, setLanguage] = useState(activeLang);
  // const value = { language, setLanguage };

  // // console.log(language);
  // console.log('Component change!');

  // useEffect(() => {
  //   console.log('Current language', language);
  // }, [language]);

  // const handleLanguageChange = (lang) => {
  //   if (language === 'en') {
  //     i18n.changeLanguage('ru');
  //     setLanguage('ru');
  //   } else if (language === 'ru') {
  //     i18n.changeLanguage('en');
  //     setLanguage('en');
  //   }
  // };

  return (
    <>
      <MobileSidebar />
      <div className="Wrapper">
        <Header />
        <MobileHeader />
        {/* <MobileFilter /> */}
        {/* <button onClick={handleLanguageChange}>Сменить язык</button> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };