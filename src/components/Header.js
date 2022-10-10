import { Logo } from './Logo';
import { MainMenu } from './MainMenu';
import { Phone } from './Phone';
import { LanguageSwitcher } from './LanguageSwitcher';

import { menu } from '../data/menu';

import logo from '../assets/img/logo.webp';

const Header = () => {

  return (
    <div className="Header">
      <div className="container">
        <div className="Header_wrapper">
          {/* <button className="MenuHamburger Header_menuHamburger hidden-xlPlus" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileSidebar" aria-controls="MobileSidebar">
            <i className="fa fa-bars"></i>
          </button> */}

          <Logo image={logo} />

          <MainMenu items={menu} />

          <Phone number="+382 67 214 405" />

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export { Header };