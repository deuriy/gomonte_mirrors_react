import { t } from 'i18next';
import Dropdown from 'react-bootstrap/Dropdown';

import { FilterMenuTrigger } from './FilterMenuTrigger';

const RadioBtnsList = ({ name, values, field, setFieldFunc, disabledValues = [], ...props }) => {
  function onChangeField(event) {
    setFieldFunc(event.target.value);
  }

  return (
    <Dropdown className="FilterElement Filter_item" {...props}>
      <Dropdown.Toggle as={FilterMenuTrigger} className="FilterMenuTrigger">{t(`${values[field]}`)}</Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
        <div className='RadioButtonList'>
          {
            Object.entries(values).map(item => (
              <div key={item[0]} className="RadioButton RadioButtonList_item">
                <input className="RadioButton_input" type="radio" name={name} value={item[0]} id={`id_${name}_${item[0]}`} checked={field === item[0] ? true : false} onChange={onChangeField} disabled={disabledValues.includes(item[0])} />
                <label className="RadioButton_label" htmlFor={`id_${name}_${item[0]}`} disabled={disabledValues.includes(item[0])}>{t(`${item[1]}`)}</label>
              </div>
            ))
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { RadioBtnsList };