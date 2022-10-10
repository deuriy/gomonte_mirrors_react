import i18n, { t } from 'i18next';

import { useState, useEffect, useRef, useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { Filter } from "../components/Filter";
import { PropertyCard } from "../components/PropertyCard";
import { Pagination } from '../components/Pagination';
import { NotFound } from '../components/NotFound';

import { LanguageContext } from '../components/Provider';

const PropertiesPage = () => {
  let [searchParams] = useSearchParams();

  let propertiesRef = useRef(null);

  let location = useLocation();
  let pathname = location.pathname;

  // let lang = i18n.language;
  // console.log(lang);

  const { language, setLanguage } = useContext(LanguageContext);

  let department = pathname.substring(1) || 'sale';

  let estateType = searchParams.get('estate_type') || 'flats';
  let cities = searchParams.getAll('cities') || [];
  let bedroomsNum = searchParams.getAll('bedrooms_num') || [];
  let priceMin = Number(searchParams.get('price_min')) || 100;
  let priceMax = Number(searchParams.get('price_max')) || 50000;
  let footageMin = Number(searchParams.get('footage_min')) || 0;
  let footageMax = Number(searchParams.get('footage_max')) || 50000;

  cities = cities.map(item => Number(item));
  bedroomsNum = bedroomsNum.map(item => Number(item));

  let [properties, setProperties] = useState([]);
  let [currentPage, setCurrentPage] = useState(Number(searchParams.get('current_page')) || 1);
  let [totalPages, setTotalPages] = useState(1);
  let [isLoaded, setLoading] = useState(false);

  let params = {
    estateType,
    cities,
    bedroomsNum,
    priceMin,
    priceMax,
    footageMin,
    footageMax,
    currentPage
  };

  let title = (department === 'rent') ? t('properties_pages.rent') : t('properties_pages.sale');

  useEffect(() => {
    loadProperties();
    console.log('language');
  }, [isLoaded, department, language]);

  function loadProperties() {
    fetch('http://0.0.0.0:8000/rpc/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": "fj45hsg",
        "method": "get_real_estate_properties",
        "params": {
          "lang": language,
          "department": department,
          "estate_type": estateType,
          "cities": cities,
          "bedrooms_num": bedroomsNum,
          "price_min": priceMin,
          "price_max": priceMax,
          "footage_from": footageMin,
          "footage_to": footageMax,
          "page": currentPage
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        setProperties(data.result.records);
        setCurrentPage(data.result.pagination.current_page);
        setTotalPages(data.result.pagination.total_pages);

        setLoading(true);
        propertiesRef.current.scrollIntoView();
      })
      .catch(err => {
        console.warn(err);
      });
  }

  return (
    <main className="Main">
      <div className="PropertiesPage" ref={propertiesRef}>
        <div className="container">
          {title && (
            <div className="row">
              <div className="col-12">
                <h1 className="PageTitle PropertiesPage_title">{title}</h1>
              </div>
            </div>
          )}
          <div className="row hidden-xlMinus">
            <div className="col-12">
              <div className="PropertiesPage_filterWrapper">
                <Filter params={params} setCurrentPage={setCurrentPage} departmentValue={department} setLoading={setLoading} />
              </div>
            </div>
            {properties.length ? (
              <div className="PropertyCards PropertyCards-objectsPage">
                <div className="PropertyCards_items">
                  <div className="row">
                    {
                      properties.map(property => (
                        <div key={property.code} className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                          <PropertyCard data={property} />
                        </div>
                      ))
                    }
                  </div>
                </div>
                {totalPages > 1 ? (
                  <div className="PropertyCards_bottom">
                    <Pagination params={params} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} setLoading={setLoading} />
                  </div>
                ) : ''}
              </div>
            ) : !isLoaded ? (
              <div>Loading data...</div>
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export { PropertiesPage };