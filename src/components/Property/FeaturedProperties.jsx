import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { PropertyCard } from './PropertyCard';
import { t } from 'i18next';

import { LanguageContext } from '../../chunks/Provider';
import { rpc } from '../../chunks/JsonRpc';

const FeaturedProperties = ({ title, showButton }) => {
  let [properties, setProperties] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    rpc.exec("get_featured_properties", {
      "lang": language,
      "department": "sale",
      "estate_type": 1,
      "count": 4
    }).then(data => setProperties(data.result.records));
  }, [language]);

  return (
    <div className="PropertyCards">
      <div className='container'>
        {title
          ? <div className="row">
            <div className="col-12">
              <h2 className="PropertyCards_title">{title}</h2>
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

        {showButton
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