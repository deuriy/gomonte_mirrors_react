import i18n, { t } from 'i18next';

import { useState, useEffect } from 'react';

import { useFilterSearchParams } from '../hooks/useFilterSearchParams';

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Filter } from "../components/Filter";
import { PropertyCard } from "../components/PropertyCard";
import { NotFound } from '../components/NotFound';

const PropertiesPage = () => {
  let [properties, setProperties] = useState([]);
  let [page, setPage] = useState(1);

  let params = useFilterSearchParams();
  let title = params.department === 'rent' ? t('properties_pages.rent') : t('properties_pages.sale');

  // console.log(params);
  // console.log(properties);

  useEffect(() => {
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
          "department": params.department,
          "estate_type": params.estateType,
          "cities": params.cities,
          "bedrooms_num": params.bedroomsNum,
          "price_min": params.priceMin,
          "price_max": params.priceMax,
          "footage_from": params.footageMin,
          "footage_to": params.footageMax,
          "page": page
        }
      })
    })
      .then(res => res.json())
      .then(data => setProperties(data.result.records))
      .catch(err => {
        console.warn(err);
      });
  });

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
                <Filter />
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
                {properties.length > 12 ? (
                  <div className="PropertyCards_bottom">
                    <div className="Pagination">
                      <ul className="Pagination_list">
                        <li className="Pagination_item">
                          <a className="Pagination_prev" href="#">
                            <FontAwesomeIcon icon={faAngleLeft} />
                          </a>
                        </li>
                        <li className="Pagination_item Pagination_item-current">
                          <a className="Pagination_link" href="#">1</a>
                        </li>
                        <li className="Pagination_item">
                          <a className="Pagination_link" href="#">2</a>
                        </li>
                        <li className="Pagination_item">
                          <a className="Pagination_link" href="#">3</a>
                        </li>
                        <li className="Pagination_item">
                          <a className="Pagination_next" href="#">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </a>
                        </li>
                      </ul>
                    </div>
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