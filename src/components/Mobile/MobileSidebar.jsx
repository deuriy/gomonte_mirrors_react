import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileSidebar = () => {
  return (
    <>
      <button className="MenuHamburger Header_menuHamburger hidden-xlPlus" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileSidebar" aria-controls="MobileSidebar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="MobileSidebar offcanvas offcanvas-start" id="MobileSidebar">
        <button className="MobileSidebar_closeBtn" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          <FontAwesomeIcon icon={faTimes} />
        </button>

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
    </>
  );
}

export { MobileSidebar };