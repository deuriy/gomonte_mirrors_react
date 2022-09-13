import { Link } from 'react-router-dom';

const MobileSidebar = () => {
  return (
    <div className="MobileSidebar offcanvas offcanvas-start" id="MobileSidebar">
      <button className="MobileSidebar_closeBtn" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="fa fa-times"></i>
      </button>
      <div className="Langs MobileSidebar_langs">
        <ul className="Langs_list">
          <li className="Langs_item"><a className="Langs_link" href="#"><img className="Langs_icon" src="/img/lang/gb.webp" /></a></li>
          <li className="Langs_item"><a className="Langs_link" href="#"><img className="Langs_icon" src="/img/lang/mne.webp" /></a></li>
          <li className="Langs_item"><a className="Langs_link" href="#"><img className="Langs_icon" src="/img/lang/ru.webp" /></a></li>
          <li className="Langs_item"><a className="Langs_link" href="#"><img className="Langs_icon" src="/img/lang/tr.webp" /></a></li>
        </ul>
      </div>
      <div className="MobileMenu MobileSidebar_menu">
        <ul className="MobileMenu_menu">
          <li className="MobileMenu_item MobileMenu_item-parent">
            <Link className="MobileMenu_link" to="/rent">Аренда Жилья</Link>
          </li>
          <li className="MobileMenu_item">
            <Link className="MobileMenu_link" to="/sale">Недвижимость</Link>
          </li>
          <li className="MobileMenu_item">
            <Link className="MobileMenu_link" to="/contacts">О нас</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { MobileSidebar };