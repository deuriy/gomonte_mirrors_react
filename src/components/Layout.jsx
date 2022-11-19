import { Outlet } from 'react-router-dom';

import { useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileSidebar } from './Mobile/MobileSidebar';
// import { MobileHeader } from './Mobile/MobileHeader';
// import { MobileFilter } from './Mobile/MobileFilter';

const Layout = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <MobileSidebar show={showSidebar} setShow={setShowSidebar} />
      <div className="Wrapper">
        <Header />
        {/* <MobileHeader setShowSidebar={setShowSidebar} setShowFilter={setShowFilter} />
        {
          window.innerWidth < 1200 && <MobileFilter show={showFilter} setShowFilter={setShowFilter} setShowSidebar={setShowSidebar} />
        } */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };