const LanguageSwitcher = () => {
  return (
    <div className="LanguageSwitcher Header_languageSwitcher dropdown hidden-xlMinus">
      <a className="Language LanguageSwitcher_toggle dropdown-toggle" href="#" role="button" id="languageSwitcherLink" data-bs-toggle="dropdown" aria-expanded="false">
        <img className="Language_icon" src="/img/lang/desktop/lang-ru.webp" />
        <span className="Language_text">Русский</span>
      </a>
      <ul className="LanguageSwitcher_list dropdown-menu" aria-labelledby="languageSwitcherLink">
        <li><a className="LanguageSwitcher_item dropdown-item" href="#"><img className="Language_icon" src="/img/lang/desktop/lang-me.webp" /><span className="Language_text">Crnogorski</span></a></li>
        <li><a className="LanguageSwitcher_item dropdown-item" href="#"><img className="Language_icon" src="/img/lang/desktop/lang-ru.webp" /><span className="Language_text">Русский</span></a></li>
        <li><a className="LanguageSwitcher_item dropdown-item" href="#"><img className="Language_icon" src="/img/lang/desktop/lang-en.webp" /><span className="Language_text">English</span></a></li>
        <li><a className="LanguageSwitcher_item dropdown-item" href="#"><img className="Language_icon" src="/img/lang/desktop/lang-tr.webp" /><span className="Language_text">Turkish</span></a></li>
      </ul>
    </div>
  );
}

export { LanguageSwitcher };