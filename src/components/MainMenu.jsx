import { t } from "i18next";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? 'MainMenu_link MainMenu_link-active' : 'MainMenu_link';

const MainMenu = ({ items }) => {
  return (
    <div className="MainMenu Header_mainMenu hidden-xlMinus">
      <ul className="MainMenu_menu">
        {
          items.map(item => (
            <li key={item["path"]} className="MainMenu_item">
              <NavLink className={activeLink} to={item["path"]}>{t(`${item["text"]}`)}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { MainMenu };