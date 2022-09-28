import React, { useState } from 'react';

import { t } from 'i18next';

import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dropdown from 'react-bootstrap/Dropdown';
import { createSearchParams, useNavigate } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button type="button" className='FilterMenuTrigger' ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <FontAwesomeIcon icon={faAngleDown} />
  </button>
));

const Filter = (props) => {
  let [actionType, setActionType] = useState("sale");
  let [propertyType, setPropertyType] = useState("residental");
  let [cities, setCities] = useState([]);
  let [priceFrom, setPriceFrom] = useState(0);
  let [priceTo, setPriceTo] = useState(50000);
  let [bedroomsTypes, setBedroomsTypes] = useState([]);
  let [propertyCode, setPropertyCode] = useState('');
  let navigate = useNavigate();

  const allCities = [
    {
      "value": "bar",
      "label": t('filter.cities.bar')
    },
    {
      "value": "bechichi",
      "label": t('filter.cities.bechichi')
    },
    {
      "value": "bigovo",
      "label": t('filter.cities.bigovo')
    },
    {
      "value": "bizikuce",
      "label": t('filter.cities.bizikuce')
    },
    {
      "value": "budva",
      "label": t('filter.cities.budva')
    },
    {
      "value": "buljarica",
      "label": t('filter.cities.buljarica')
    },
    {
      "value": "dobrota",
      "label": t('filter.cities.dobrota')
    },
    {
      "value": "drobni_pesak",
      "label": t('filter.cities.drobni_pesak')
    },
    {
      "value": "dzhenovichi",
      "label": t('filter.cities.dzhenovichi')
    },
    {
      "value": "herzeg_novi",
      "label": t('filter.cities.herzeg_novi')
    },
    {
      "value": "kamenovo",
      "label": t('filter.cities.kamenovo')
    },
    {
      "value": "kotor",
      "label": t('filter.cities.kotor')
    },
    {
      "value": "krashichi",
      "label": t('filter.cities.krashichi')
    },
    {
      "value": "krimovica",
      "label": t('filter.cities.krimovica')
    },
    {
      "value": "lastva",
      "label": t('filter.cities.lastva')
    },
    {
      "value": "lepetane",
      "label": t('filter.cities.lepetane')
    },
    {
      "value": "lushtica",
      "label": t('filter.cities.lushtica')
    },
    {
      "value": "petrovac",
      "label": t('filter.cities.petrovac')
    },
    {
      "value": "podgorica",
      "label": t('filter.cities.podgorica')
    },
    {
      "value": "prchan",
      "label": t('filter.cities.prchan')
    },
    {
      "value": "przhno_milocher",
      "label": t('filter.cities.przhno_milocher')
    },
    {
      "value": "radanovici",
      "label": t('filter.cities.radanovici')
    },
    {
      "value": "rafailovichi",
      "label": t('filter.cities.rafailovichi')
    },
    {
      "value": "rezhevichi",
      "label": t('filter.cities.rezhevichi')
    },
    {
      "value": "risan",
      "label": t('filter.cities.risan')
    },
    {
      "value": "stoliv",
      "label": t('filter.cities.stoliv')
    },
    {
      "value": "sutomore",
      "label": t('filter.cities.sutomore')
    },
    {
      "value": "sveti_stefan",
      "label": t('filter.cities.sveti_stefan')
    },
    {
      "value": "tivat",
      "label": t('filter.cities.tivat')
    },
    {
      "value": "ulcin",
      "label": t('filter.cities.ulcin')
    },
    {
      "value": "zhabliak",
      "label": t('filter.cities.zhabliak')
    }
  ];

  const allBedroomsTypes = [
    {
      "value": "studio",
      "label": t('filter.bedrooms_number.studio')
    },
    {
      "value": 'one',
      "label": '1 ' + t('filter.bedrooms_number.one')
    },
    {
      "value": 'two',
      "label": '2 ' + t('filter.bedrooms_number.plural')
    },
    {
      "value": 'three',
      "label": '3 ' + t('filter.bedrooms_number.plural')
    },
    {
      "value": 'more',
      "label": '4 ' + t('filter.bedrooms_number.more')
    }
  ];

  function onChangeActionType(event) {
    setActionType(event.target.value);
  }

  function onChangePropertyType(event) {
    setPropertyType(event.target.value);
  }

  function onChangeCities(event) {
    let target = event.target;
    let value = target.value;
    let checked = target.checked;

    if (checked) {
      setCities([...cities, value]);
    } else {
      setCities(cities.filter(item => item != value));
    }

    console.log(cities);
  }

  function onChangePriceFrom(event) {
    // console.log(event.target.value);
    setPriceFrom(event.target.value);
  }

  function onChangePriceTo(event) {
    // console.log(event.target.value);
    setPriceTo(event.target.value);
  }

  function onChangeBedroomsTypes(event) {
    console.log(bedroomsTypes);

    let target = event.target;
    let value = target.value;
    let checked = target.checked;

    if (checked) {
      setBedroomsTypes([...bedroomsTypes, value]);
    } else {
      setBedroomsTypes(bedroomsTypes.filter(item => item != value));
    }

    console.log(bedroomsTypes);
  }

  function onChangePropertyCode(event) {
    // console.log(event.target.value);
    setPropertyCode(event.target.value);
  }

  function onButtonClick(event) {
    let url = `/${actionType}`;
    let params = {
      "property_type": propertyType,
      "cities": cities,
      "price_from": priceFrom,
      "price_to": priceTo,
      "bedrooms_number": bedroomsTypes,
      "property_code": propertyCode
    };

    navigate({
      pathname: url,
      search: `?${createSearchParams(params)}`
    });
  }

  return (
    <div className="Filter hidden-xlMinus">
      <div className="Filter_items">
        <div className="FilterElement Filter_item">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{t('filter.action_type.buy')}</Dropdown.Toggle>
            <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
              <div className='RadioButtonList'>
                <div className="RadioButton RadioButtonList_item">
                  <input className="RadioButton_input" type="radio" name="action_type" value="sale" id="sale" checked={actionType === 'sale' ? true : false} onChange={onChangeActionType} />
                  <label className="RadioButton_label" htmlFor="sale">{t('filter.action_type.buy')}</label>
                </div>
                <div className="RadioButton RadioButtonList_item">
                  <input className="RadioButton_input" type="radio" name="action_type" value="rent" id="rent" checked={actionType === 'rent' ? true : false} onChange={onChangeActionType} />
                  <label className="RadioButton_label" htmlFor="rent">{t('filter.action_type.rent')}</label>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="FilterElement Filter_item">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{t('filter.property_type.residental_property')}</Dropdown.Toggle>
            <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown FilterElement_dropdown-propertyType">
              <div className="RadioButton">
                <input className="RadioButton_input" type="radio" name="property_type" value="residental" id="residental" checked={propertyType === 'residental' ? true : false} onChange={onChangePropertyType} />
                <label className="RadioButton_label" htmlFor="residental">{t('filter.property_type.residental_property')}</label>
                <div className="CheckboxList RadioButton_checkboxList">
                  <div className="Checkbox CheckboxList_item">
                    <input className="Checkbox_input" type="radio" name="residental_type" value="apartments" id="apartments" />
                    <label className="Checkbox_label" htmlFor="apartments">{t('filter.property_type.apartment')}</label>
                  </div>
                  <div className="Checkbox CheckboxList_item">
                    <input className="Checkbox_input" type="radio" name="residental_type" value="villa" id="villa" />
                    <label className="Checkbox_label" htmlFor="villa">{t('filter.property_type.house_or_villa')}</label>
                  </div>
                </div>
              </div>
              <div className="RadioButton">
                <input className="RadioButton_input" type="radio" name="property_type" value="land" id="land" checked={propertyType === 'land' ? true : false} onChange={onChangePropertyType} />
                <label className="RadioButton_label" htmlFor="land">{t('filter.property_type.land_plot')}</label>
              </div>
              <div className="RadioButton">
                <input className="RadioButton_input" type="radio" name="property_type" value="commercial" id="commercial" checked={propertyType === 'commercial' ? true : false} onChange={onChangePropertyType} />
                <label className="RadioButton_label" htmlFor="commercial">{t('filter.property_type.commercial')}</label>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="FilterElement Filter_item">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{t('filter.cities.label')}</Dropdown.Toggle>
            <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown FilterElementDropdown-checkboxList">
              <div className="CheckboxList CheckboxList-filterElementDropdown">
                {
                  allCities.map(item => (
                    <div key={item.value} className="Checkbox CheckboxList_item">
                      <input className="Checkbox_input" type="checkbox" name="property_city[]" value={item.value} id={item.value} checked={cities.includes(item.value)} onChange={onChangeCities} />
                      <label className="Checkbox_label" htmlFor={item.value}>{item.label}</label>
                    </div>
                  ))
                }
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="FilterElement Filter_item">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{t('filter.price.label')}</Dropdown.Toggle>
            <Dropdown.Menu className="FilterElementDropdown FilterElement_dropdown">
              <div className="FilterElementDropdown_fields">
                <input className="FormText" type="number" name="price_from" placeholder={t('filter.price.from')} min="0" value={priceFrom} onChange={onChangePriceFrom} />
                <input className="FormText" type="number" name="price_to" placeholder={t('filter.price.to')} min="0" value={priceTo} onChange={onChangePriceTo} />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="FilterElement Filter_item">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} className="FilterMenuTrigger">{t('filter.bedrooms_number.label')}</Dropdown.Toggle>
            <Dropdown.Menu className="FilterElementDropdown FilterElementDropdown-checkboxList FilterElement_dropdown">
              <div className="CheckboxList CheckboxList-filterElementDropdown">
                {
                  allBedroomsTypes.map(item => (
                    <div key={item.value} className="Checkbox CheckboxList_item">
                      <input className="Checkbox_input" type="checkbox" name="bedrooms_number[]" value={item.value} id={item.value} checked={bedroomsTypes.includes(item.value)} onChange={onChangeBedroomsTypes} />
                      <label className="Checkbox_label" htmlFor={item.value}>{item.label}</label>
                    </div>
                  ))
                }
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="FilterElement Filter_item">
          <input className="FilterElement_formText" type="number" name="property_code" placeholder={t('filter.property_code')} value={propertyCode} onChange={onChangePropertyCode} />
        </div>
      </div>
      <div className="Filter_actions">
        <button className="BtnInfo BtnInfo-search" type="button" onClick={onButtonClick}>
          <FontAwesomeIcon icon={faSearch} />
          <span>{t('filter.search')}</span>
        </button>
      </div>
    </div>
  );
}

export { Filter };