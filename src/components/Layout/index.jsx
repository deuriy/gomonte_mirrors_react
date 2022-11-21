import { Outlet } from 'react-router-dom';

import { useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileSidebar } from '../Mobile/MobileSidebar';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <MobileSidebar show={showSidebar} setShow={setShowSidebar} />
      <div className="Wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };