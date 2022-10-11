import React from 'react';

const FilterMenuTrigger = React.forwardRef(({ children, onClick }, ref) => (
  <button type="button" className='FilterMenuTrigger' ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));

export { FilterMenuTrigger };