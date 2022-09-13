const MobileHeader = () => {
  return (
    <div className="MobileHeader hidden-xlPlus">
      <button className="MenuHamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileSidebar" aria-controls="MobileSidebar">
        <i className="fa fa-bars"></i>
      </button>
      <a className="FilterLink" href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#MobileFilter" aria-controls="MobileFilter">
        <i className="fa fa-cog"></i><span>Фильтры</span>
      </a>
    </div>
  );
}

export { MobileHeader };