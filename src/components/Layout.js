import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileSidebar } from './MobileSidebar';
import { MobileHeader } from './MobileHeader';
// import { MobileFilter } from './MobileFilter';

import logo from '../assets/img/logo.webp';

const Layout = () => {
  return (
    <>
      <MobileSidebar />
      <div className="Wrapper">
        <Header logo={logo} />
        <MobileHeader />
        {/* <MobileFilter /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };