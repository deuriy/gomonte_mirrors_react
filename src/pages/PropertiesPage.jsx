import { t } from 'i18next';

import { useState, useEffect, useRef, useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { Filter } from "../components/Filter";
import { PropertyCard } from "../components/PropertyCard";
import { Pagination } from '../components/Pagination';
import { NoResults } from '../components/NoResults';

import { LanguageContext } from '../chunks/Provider';
import { rpc } from '../chunks/JsonRpc';

const PropertiesPage = () => {
  let [searchParams] = useSearchParams();

  let propertiesRef = useRef(null);

  let location = useLocation();
  let pathname = location.pathname;

  const { language } = useContext(LanguageContext);

  let department = pathname.substring(1) || 'sale';

  let estateType = Number(searchParams.get('estate_type')) || 1;
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
    document.title = `${process.env.REACT_APP_NAME} - ` + t(`services.${department}.title`);

    rpc.exec("get_real_estate_properties", {
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
    }).then(data => {
      setProperties(data.result.records);
      setCurrentPage(data.result.pagination.current_page);
      setTotalPages(data.result.pagination.total_pages);

      setLoading(true);
      propertiesRef.current.scrollIntoView();
    });

    // eslint-disable-next-line
  }, [isLoaded, department, language]);

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
              <NoResults />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export { PropertiesPage };