import Dropdown from 'react-bootstrap/Dropdown';

import { CustomToggle } from '../CustomToggle';

const NumberRange = ({ nameFrom = "min_number", nameTo = "max_number", valueFrom, valueTo, labelFrom, labelTo, setValueFrom, setValueTo, label, ...rest }) => {
  function onChangeValueFrom(event) {
    setValueFrom(event.target.value);
  }

  function onChangeValueTo(event) {
    setValueTo(event.target.value);
  }

  // console.log(rest);

  return (
    <Dropdown className="FilterElement Filter_item" {...rest}>
      <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{label}</Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
        <div className="FilterElementDropdown_fields">
          <input className="FormText" type="number" name={nameFrom} placeholder={labelFrom} min="0" value={valueFrom} onChange={onChangeValueFrom} />
          <input className="FormText" type="number" name={nameTo} placeholder={labelTo} min="0" value={valueTo} onChange={onChangeValueTo} />
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { NumberRange };