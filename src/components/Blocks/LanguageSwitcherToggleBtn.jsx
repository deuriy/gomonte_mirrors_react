import React from 'react';

const LanguageSwitcherToggleBtn = React.forwardRef(({ children, onClick }, ref) => (
  <button type="button" className='Language LanguageSwitcher_toggle' ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));

export { LanguageSwitcherToggleBtn };