import { useState, useEffect, useContext } from 'react';

import { PropertyCard } from './PropertyCard'

import { LanguageContext } from '../../chunks/Provider';
import { rpc } from '../../chunks/JsonRpc';

const SimilarProperties = ({ id, department, title }) => {
  let [properties, setProperties] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    rpc.exec("get_similar_properties", {
      "lang": language,
      "id": id,
      "department": department
    }).then(data => setProperties(data.result.records));
  }, [id, department, language]);

  return (
    <div className="PropertyCards PropertyCards-similar PropertyPage_PropertyCards">
      <div className="container">
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
                  <div className="col-12 col-md-6 col-xl-3 PropertyCards_col" key={property.code}>
                    <PropertyCard data={property} />
                  </div>
                ))
              }
            </div>
          </div>
          : ''
        }

      </div>
    </div>
  );
}

export { SimilarProperties };