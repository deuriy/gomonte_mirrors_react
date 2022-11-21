import { Logo } from '../Blocks/Logo';
import { MainMenu } from '../Blocks/MainMenu';
import { Phone } from '../Blocks/Phone';
import { LanguageSwitcher } from '../Blocks/LanguageSwitcher';

import { menu } from '../../data/menu';

import logo from '../../assets/img/logo.webp';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header_wrapper">
          <Logo image={logo} />

          <MainMenu items={menu} />

          <Phone number={process.env.REACT_APP_PHONE} />

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export { Header };