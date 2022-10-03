import { t } from 'i18next';

import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { useFilterSearchParams } from '../../hooks/useFilterSearchParams';

import { CheckboxList } from './CheckboxList';
import { NumberRange } from './NumberRange';
import { RadioBtnTabs } from './RadioBtnTabs';
import { RadioBtnsList } from './RadioBtnsList';

import { allCities } from '../../data/cities';
import { allDepartments } from '../../data/departments';
import { allEstateTypes } from '../../data/estate_types';
import { allBedroomsNum } from '../../data/bedrooms_num';

const Filter = ({ loadFunc = () => { } }) => {
  let params = useFilterSearchParams();

  let [department, setDepartment] = useState(params.department);
  let [disabledDepartment, setDisabledDepartment] = useState([]);
  let [estateType, setEstateType] = useState(params.estateType);
  let [cities, setCities] = useState(params.cities);
  let [priceMin, setPriceMin] = useState(params.priceMin);
  let [priceMax, setPriceMax] = useState(params.priceMax);
  let [bedroomsNum, setBedroomsNum] = useState(params.bedroomsNum);
  let [footageMin, setFootageMin] = useState(params.footageMin);
  let [footageMax, setFootageMax] = useState(params.footageMax);

  let navigate = useNavigate();

  function onChangeEstateTypes(event) {
    if (event.target.value === 'landplots') {
      setDisabledDepartment(['rent']);
      setDepartment('sale');
    } else {
      setDisabledDepartment([]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `/${department}`;
    let params = {
      "estate_type": estateType,
      "cities": cities,
      "price_min": priceMin,
      "price_max": priceMax,
      "bedrooms_num": bedroomsNum,
      "footage_min": footageMin,
      "footage_max": footageMax
    };

    navigate({
      pathname: url,
      search: `?${createSearchParams(params)}`
    });

    if (typeof loadFunc === 'function') {
      loadFunc();
    }
  }

  return (
    <form className="Filter hidden-xlMinus" onSubmit={handleSubmit}>
      <div className="Filter_items">
        <div className='Filter_top'>
          <RadioBtnTabs name="estate_type" values={allEstateTypes} field={estateType} setFieldFunc={setEstateType} onChangeFunc={onChangeEstateTypes} />
        </div>
        <div className='Filter_bottom'>
          <RadioBtnsList name="department" values={allDepartments} field={department} setFieldFunc={setDepartment} disabledValues={disabledDepartment} />

          <CheckboxList name="cities" values={allCities} valueOffset="1" defaultLabel={t('filter.cities.label')} field={cities} setFieldFunc={setCities} />

          <NumberRange nameFrom='footage_min' nameTo='footage_max' valueFrom={footageMin} valueTo={footageMax} labelFrom={t('filter.footage.min')} labelTo={t('filter.footage.max')} setValueFrom={setFootageMin} setValueTo={setFootageMax} label={t('filter.footage.label')} style={{ display: estateType === 'landplots' || estateType === 'commercial' ? '' : 'none' }} />

          <CheckboxList name="bedrooms_num" values={allBedroomsNum} defaultLabel={t('filter.bedrooms_number.label')} field={bedroomsNum} setFieldFunc={setBedroomsNum} style={{ display: estateType === 'flats' || estateType === 'houses' ? '' : 'none' }} />

          <NumberRange nameFrom='price_min' nameTo='price_max' valueFrom={priceMin} valueTo={priceMax} labelFrom={t('filter.price.min')} labelTo={t('filter.price.max')} setValueFrom={setPriceMin} setValueTo={setPriceMax} label={t('filter.price.label')} />
        </div>
      </div>
      <div className="Filter_actions">
        <button className="BtnInfo BtnInfo-search" type="submit">{t('filter.search')}</button>
      </div>
    </form>
  );
}

export { Filter };