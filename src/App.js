import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AboutPage } from './pages/AboutPage';
import { PropertyPage } from './pages/PropertyPage';

import { Layout } from './components/Layout';

import { useLocalStorage } from './hooks/use-localstorage';
import { LanguageContext } from './chunks/Provider';

import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

function App() {
  const [activeLang] = useLocalStorage('language', 'ru');
  const [language, setLanguage] = useState(activeLang);
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='rent' element={<PropertiesPage />} />
          <Route path='sale' element={<PropertiesPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='properties/:id' element={<PropertyPage />} />
        </Route>
      </Routes>
    </LanguageContext.Provider>
  );
}

export { App };
