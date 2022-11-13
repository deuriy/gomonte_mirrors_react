import { useState, useEffect } from 'react';

import { PropertyCard } from './PropertyCard'

const SimilarProperties = (props) => {
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
        "method": "get_similar_properties",
        "params": {
          "lang": "en",
          "id": props.id,
          "department": props.department
        }
      })
    })
      .then(res => res.json())
      .then(data => setProperties(data.result.records));
  }, [props.id, props.department]);

  return (
    <div className="PropertyCards PropertyCards-similar PropertyPage_PropertyCards">
      <div className="container">
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