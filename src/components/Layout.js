import { i18n } from '../i18n';

import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileSidebar } from './MobileSidebar';
import { MobileHeader } from './MobileHeader';
// import { MobileFilter } from './MobileFilter';

import useLocalStorage from './../hooks/use-localstorage';

const Layout = () => {
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  console.log(language);

  const handleLanguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

  return (
    <>
      <MobileSidebar />
      <div className="Wrapper">
        <Header />
        <MobileHeader />
        {/* <MobileFilter /> */}
        <button onClick={handleLanguageChange}>Сменить язык</button>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };