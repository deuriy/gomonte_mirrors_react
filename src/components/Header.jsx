import { Logo } from './Logo';
import { MainMenu } from './MainMenu';
import { Phone } from './Phone';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileSidebar } from './Mobile/MobileSidebar';

import { menu } from '../data/menu';

import logo from '../assets/img/logo.webp';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header_wrapper">
          <MobileSidebar />

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