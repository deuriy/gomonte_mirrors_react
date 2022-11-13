import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { PropertyCard } from './PropertyCard';
import { t } from 'i18next';

const FeaturedProperties = (props) => {
  console.log(process.env.REACT_APP_BACKEND_API_URL);

  let [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": "fj45hsg",
        "method": "get_featured_properties",
        "params": {
          "lang": "en",
          "department": "sale",
          "estate_type": 1,
          "count": 4
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProperties(data.result.records);
      });
  }, []);

  return (
    <div className="PropertyCards">
      <div className='container'>
        {props.title
          ? <div className="row">
            <div className="col-12">
              <h2 className="PropertyCards_title">{props.title}</h2>
            </div>
          </div>
          : ''
        }

        {properties.length
          ? <div className="PropertyCards_items">
            <div className="row">
              {
                properties.map(property => (
                  <div className='col-12 col-md-6 col-xl-3 PropertyCards_col' key={property.code}>
                    <PropertyCard data={property} />
                  </div>
                ))
              }
            </div>
          </div>
          : ''
        }

        {props.showButton
          ? <div className="PropertyCards_bottom">
            <Link className="BtnSuccess PropertyCards_btn" to="/rent">{t('best_offers.button')}</Link>
          </div>
          : ''
        }
      </div>
    </div>
  );
}

export { FeaturedProperties };