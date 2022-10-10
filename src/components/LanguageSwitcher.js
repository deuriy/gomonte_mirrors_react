import { i18n } from '../i18n';

import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from 'react';
import { LanguageSwitcherToggleBtn } from './LanguageSwitcherToggleBtn';

import { langs } from '../data/langs';

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState(i18n.language);

  function setLang(lang) {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  }

  return (
    <Dropdown className="LanguageSwitcher Header_languageSwitcher hidden-xlMinus" onSelect={setLang}>
      <Dropdown.Toggle as={LanguageSwitcherToggleBtn} className="Language LanguageSwitcher_toggle" id="languageSwitcherLink">
        <img className="Language_icon" src={langs[activeLang]['icon']} alt="" />
        <span className="Language_text">{langs[activeLang]['label']}</span>
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