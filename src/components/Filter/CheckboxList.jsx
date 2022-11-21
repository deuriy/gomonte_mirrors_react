import Dropdown from 'react-bootstrap/Dropdown';

import { FilterMenuTrigger } from './FilterMenuTrigger';

import { Checkbox } from './Checkbox';
import React, { useContext } from 'react';
import { LanguageContext } from '../../chunks/Provider';

const CheckboxList = ({ name, data, defaultLabel, selectedValues, setFieldFunc, ...props }) => {
  const { language } = useContext(LanguageContext);

  function onChangeField(event) {
    let target = event.target;
    let value = Number(target.value);
    let checked = target.checked;

    if (checked) {
      setFieldFunc([...selectedValues, value]);
    } else {
      setFieldFunc(selectedValues.filter(item => item !== value));
    }
  }

  function getFieldLabel() {
    if (!selectedValues.length) return defaultLabel;

    return defaultLabel + ': ' + data
      .filter(item => selectedValues.includes(item.id))
      .map(item => item["name_" + language])
      .join(', ');
  }

  return (
    <Dropdown className="FilterElement Filter_item" {...props}>
      <Dropdown.Toggle as={FilterMenuTrigger} className="FilterMenuTrigger">
        <span className='FilterMenuTrigger_labelText'>{getFieldLabel()}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown FilterElementDropdown-checkboxList">
        <div className="CheckboxList CheckboxList-filterElementDropdown">
          {
            data.map(item => (
              <React.Fragment key={item.id}>
                <Checkbox id={item.id} name={name} selectedValues={selectedValues} onChangeField={onChangeField}>{item[`name_${language}`]}</Checkbox>
              </React.Fragment>
            ))
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { CheckboxList };