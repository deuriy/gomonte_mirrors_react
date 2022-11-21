import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { FilterMenuTrigger } from './FilterMenuTrigger';
import { RadioButton } from './RadioButton';

import { LanguageContext } from '../../chunks/Provider';

const RadioBtnsList = ({ name, data, selectedValue, setFieldFunc, disabledValues = [], ...props }) => {
  console.log(data);
  const { language } = useContext(LanguageContext);

  function onChangeField(event) {
    setFieldFunc(event.target.value);
  }

  function getFieldLabel() {
    return data
      .filter(item => selectedValue.includes(item.id))
      .map(item => item["name_" + language]);
  }

  return (
    <Dropdown className="FilterElement Filter_item" {...props}>
      <Dropdown.Toggle as={FilterMenuTrigger} className="FilterMenuTrigger">{getFieldLabel()}</Dropdown.Toggle>
      <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
        <div className="RadioButtonList">
          {
            data.map(item => (
              <React.Fragment key={item.id}>
                <RadioButton id={item.id} name={name} selectedValue={selectedValue} disabledValues={disabledValues} onChangeField={onChangeField}>{item[`name_${language}`]}</RadioButton>
              </React.Fragment>
            ))
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { RadioBtnsList };