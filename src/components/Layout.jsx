import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { MobileHeader } from './Mobile/MobileHeader';
import { MobileFilter } from './Mobile/MobileFilter';

const Layout = () => {
  return (
    <>
      <div className="Wrapper">
        <Header />
        <MobileHeader />
        <MobileFilter />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export { Layout };