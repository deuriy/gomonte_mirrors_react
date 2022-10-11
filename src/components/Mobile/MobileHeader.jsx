import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileHeader = () => {
  return (
    <div className="MobileHeader hidden-xlPlus">
      <button className="MenuHamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileSidebar" aria-controls="MobileSidebar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <a className="FilterLink" href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#MobileFilter" aria-controls="MobileFilter">
        <FontAwesomeIcon icon={faCog} />
        <span>Фильтры</span>
      </a>
    </div>
  );
}

export { MobileHeader };