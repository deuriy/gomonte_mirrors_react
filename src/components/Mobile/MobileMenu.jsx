import { t } from "i18next";
import { Link } from "react-router-dom";

const MobileMenu = ({ items }) => {
  return (
    <div className="MobileMenu MobileSidebar_menu">
      <ul className="MobileMenu_menu">
        {
          items.map(item => (
            <li className="MobileMenu_item" key={item["path"]}>
              <Link className="MobileMenu_link" to={item["path"]}>{t(`${item["text"]}`)}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { MobileMenu };