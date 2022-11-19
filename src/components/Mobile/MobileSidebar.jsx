import Offcanvas from 'react-bootstrap/Offcanvas';

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Langs } from './Langs';
import { MobileMenu } from './MobileMenu';

import { menu } from '../../data/menu';

const MobileSidebar = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="MenuHamburger Header_menuHamburger hidden-xlPlus" type="button" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Offcanvas className="MobileSidebar" show={show} onHide={handleClose}>
        <button className="MobileSidebar_closeBtn" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <Langs />

        <MobileMenu items={menu} />
      </Offcanvas>
    </>
  );
}

export { MobileSidebar };