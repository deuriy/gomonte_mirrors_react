import { t } from 'i18next';
import Dropdown from 'react-bootstrap/Dropdown';

import { FilterMenuTrigger } from './FilterMenuTrigger';

const CheckboxList = ({ name, values, valueOffset = 0, defaultLabel, field, setFieldFunc, ...rest }) => {
  valueOffset = Number(valueOffset);

  function onChangeField(event) {
    let target = event.target;
    let value = Number(target.value);
    let checked = target.checked;

    if (checked) {
      setFieldFunc([...field, value]);
    } else {
      setFieldFunc(field.filter(item => item !== value));
    }
  }

  function getFieldLabel() {
    if (!field.length) return defaultLabel;

    return defaultLabel + ': ' + field.map(item => t(`${values[item - valueOffset]}`)).join(', ');
  }

  return (
    <Dropdown className="FilterElement Filter_item" {...rest}>
      <Dropdown.Toggle as={FilterMenuTrigger} className="FilterMenuTrigger">
        <span className='FilterMenuTrigger_labelText'>{getFieldLabel()}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown FilterElementDropdown-checkboxList">
        <div className="CheckboxList CheckboxList-filterElementDropdown">
          {
            values.map((item, idx) => (
              <div key={idx} className="Checkbox CheckboxList_item">
                <input className="Checkbox_input" type="checkbox" name={name} value={idx + valueOffset} id={`id_${name}_${idx + valueOffset}`} checked={field.includes(idx + valueOffset)} onChange={onChangeField} />
                <label className="Checkbox_label" htmlFor={`id_${name}_${idx + valueOffset}`}>{t(`${item}`)}</label>
              </div>
            ))
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { CheckboxList };