import { useLocation, useSearchParams } from 'react-router-dom';

const useFilterSearchParams = () => {
  let [searchParams] = useSearchParams();
  let location = useLocation();

  let pathname = location.pathname;

  let department = pathname.substring(1) || 'sale';
  let estateType = searchParams.get('estate_type') || 'flats';
  let cities = searchParams.getAll('cities') || [];
  let bedroomsNum = searchParams.getAll('bedrooms_num') || [];
  let priceMin = Number(searchParams.get('price_min')) || 100;
  let priceMax = Number(searchParams.get('price_max')) || 50000;
  let footageMin = Number(searchParams.get('footage_min')) || 0;
  let footageMax = Number(searchParams.get('footage_max')) || 0;

  // console.log(footageMin);

  cities = cities.map(item => Number(item));
  bedroomsNum = bedroomsNum.map(item => Number(item));

  return {
    department,
    estateType,
    cities,
    bedroomsNum,
    priceMin,
    priceMax,
    footageMin,
    footageMax
  };
}

export { useFilterSearchParams }; 