import { i18n } from '../i18n';

import Dropdown from 'react-bootstrap/Dropdown';

import { useContext } from 'react';
import { LanguageSwitcherToggleBtn } from './LanguageSwitcherToggleBtn';

import { LanguageContext } from './Provider';

import { useLocalStorage } from './../hooks/use-localstorage';

import { langs } from '../data/langs';

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useLocalStorage('language', 'ru');
  const { language, setLanguage } = useContext(LanguageContext);

  function setLang(lang) {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    setLanguage(lang);
  }

  return (
    <Dropdown className="LanguageSwitcher Header_languageSwitcher hidden-xlMinus" onSelect={setLang}>
      <Dropdown.Toggle as={LanguageSwitcherToggleBtn} className="Language LanguageSwitcher_toggle" id="languageSwitcherLink">
        <img className="Language_icon" src={langs[language]['icon']} alt="" />
        <span className="Language_text">{langs[language]['label']}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="LanguageSwitcher_list">
        {
          Object.entries(langs).map(item => (
            <Dropdown.Item key={item[0]} className="LanguageSwitcher_item" eventKey={item[0]}>
              <img className="Language_icon" src={item[1]["icon"]} alt="" />
              <span className="Language_text">{item[1]["label"]}</span>
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { LanguageSwitcher };