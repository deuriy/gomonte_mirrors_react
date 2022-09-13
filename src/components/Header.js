import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';

const Header = (props) => {
  let logo = props.logo || '';

  return (
    <div className="Header">
      <div className="container">
        <div className="Header_wrapper">
          <button className="MenuHamburger Header_menuHamburger hidden-xlPlus" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileSidebar" aria-controls="MobileSidebar"><i className="fa fa-bars"></i></button>
          <div className="Logo Header_logo">
            <Link className="Logo_link" to="/" title="Homepage">
              <img className="Logo_img" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="MainMenu Header_mainMenu hidden-xlMinus">
            <ul className="MainMenu_menu">
              <li className="MainMenu_item MainMenu_item-parent">
                <Link className="MainMenu_link" to="/rent">Аренда Жилья</Link>
              </li>
              <li className="MainMenu_item">
                <Link className="MainMenu_link" to="/sale">Недвижимость</Link>
              </li>
              <li className="MainMenu_item">
                <Link className="MainMenu_link" to="/about">О Нас</Link>
              </li>
            </ul>
          </div>
          <a className="Phone Header_phone" href="tel:+38267214405">
            <i className="fa fa-phone hidden-xlMinus"></i>
            <span className="Phone_text">+382 67 214 405</span>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export { Header };