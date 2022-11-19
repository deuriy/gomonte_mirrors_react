import { i18n } from '../../i18n';

import { langs } from '../../data/langs';
import { LanguageContext } from '../../chunks/Provider';

import { useContext } from 'react';
import { useLocalStorage } from '../../hooks/use-localstorage';

const Langs = () => {
  const setActiveLang = useLocalStorage('language', 'me')[1];
  const { setLanguage } = useContext(LanguageContext);

  function setLang(lang) {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    setLanguage(lang);
  }

  return (
    <div className="Langs MobileSidebar_langs">
      <ul className="Langs_list">
        {
          Object.entries(langs).map(item => (
            <li key={item[0]} className="Langs_item">
              <button className="Langs_btn" type="button" onClick={() => setLang(item[0])}>
                <img className="Langs_icon" src={item[1]["iconMob"]} alt={item[1]["label"]} />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { Langs };