import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

import { t } from 'i18next';

const MobileHeader = ({ setShowSidebar, setShowFilter }) => {
  const mobileHeaderRef = useRef(null);

  function scrollHandler() {
    if (window.pageYOffset > 82) {
      mobileHeaderRef.current.classList.add('MobileHeader-visible');
    } else {
      mobileHeaderRef.current.classList.remove('MobileHeader-visible');
    }
  }

  const handleShowFilter = () => {
    if (window.innerWidth < 1200) {
      setShowFilter(true);
    }
  };

  const handleShowSidebar = () => setShowSidebar(true);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className="MobileHeader hidden-xlPlus" ref={mobileHeaderRef}>
      <button className="MenuHamburger" type="button" onClick={handleShowSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button className="FilterButton" type="button" onClick={handleShowFilter}>
        <FontAwesomeIcon icon={faCog} />
        <span>{t('mobile_filter.label')}</span>
      </button>
    </div>
  );
}

export { MobileHeader };