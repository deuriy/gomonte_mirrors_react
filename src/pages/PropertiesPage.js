import i18n, { t } from 'i18next';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFilterSearchParams } from '../hooks/useFilterSearchParams';

import { Filter } from "../components/Filter";
import { PropertyCard } from "../components/PropertyCard";
import { Pagination } from '../components/Pagination';
import { NotFound } from '../components/NotFound';

const PropertiesPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let [properties, setProperties] = useState([]);
  let [currentPage, setCurrentPage] = useState(Number(searchParams.get('current_page')) || 1);
  // let [currentPage, setCurrentPage] = useState(2);
  let [totalPages, setTotalPages] = useState(1);
  // console.log(currentPage);
  console.log('Run!');

  // let currentPage = 1;
  // let totalPages = 1;

  let { department, estateType, cities, bedroomsNum, priceMin, priceMax, footageMin, footageMax } = useFilterSearchParams();
  let title = (department === 'rent') ? t('properties_pages.rent') : t('properties_pages.sale');

  // console.log(params);
  // console.log(properties);

  function loadProperties() {
    console.log(currentPage);
    // console.log(totalPages);

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
          "lang": i18n.language,
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
        // console.log(data);
        // currentPage = Number(data.result.pagination.current_page);
        // totalPages = Number(data.result.pagination.total_pages);
      })
      .catch(err => {
        console.warn(err);
      });
  }

  function onClickPaginationHandler(event) {
    setCurrentPage(Number(event.target.dataset.value));
    setSearchParams({
      "current_page": Number(event.target.dataset.value)
    });
  }

  useEffect(() => {
    loadProperties();
  }, [currentPage]);

  return (
    <main className="Main">
      <div className="PropertiesPage">
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
                <Filter loadFunc={loadProperties} />
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
                    <Pagination currentPage={currentPage} totalPages={totalPages} onClickHandler={onClickPaginationHandler} />
                  </div>
                ) : ''}
              </div>
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