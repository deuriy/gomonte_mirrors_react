import Dropdown from 'react-bootstrap/Dropdown';

import { CustomToggle } from '../CustomToggle';

const RadiobtnsList = ({ name, values, field, setFieldFunc, ...rest }) => {
  function onChangeField(event) {
    setFieldFunc(event.target.value);
  }

  return (
    <Dropdown className="FilterElement Filter_item" {...rest}>
      <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{values[field]}</Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
        <div className='RadioButtonList'>
          {
            Object.entries(values).map(item => (
              <div key={item[0]} className="RadioButton RadioButtonList_item">
                <input className="RadioButton_input" type="radio" name={name} value={item[0]} id={`id_${name}_${item[0]}`} checked={field === item[0] ? true : false} onChange={onChangeField} />
                <label className="RadioButton_label" htmlFor={`id_${name}_${item[0]}`}>{item[1]}</label>
              </div>
            ))
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { RadiobtnsList };