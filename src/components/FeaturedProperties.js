import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ObjectCard } from '../components/ObjectCard';

const FeaturedProperties = (props) => {
  let [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://0.0.0.0:8000/rpc/', {
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
          "estate_type": "flats",
          "count": 4
        }
      })
    })
      .then(res => res.json())
      .then(data => setProperties(data.result.records));
  }, []);

  let title = '';
  if (props.title) {
    title = <div className="row">
      <div className="col-12">
        <h2 className="ObjectCards_title">{props.title}</h2>
      </div>
    </div>;
  }

  let button = '';
  if (props.showButton) {
    button = <div className="ObjectCards_bottom">
      <Link className="BtnSuccess ObjectCards_btn" to="/rent">Показать все</Link>
    </div>;
  }

  return (
    <div className="ObjectCards Frontpage_objectCards">
      {title}
      <div className="ObjectCards_items">
        <div className="row">
          {
            properties.map(property => (
              <div className='col-12 col-md-6 col-xl-3 ObjectCards_col' key={property.code}>
                <ObjectCard data={property} />
              </div>
            ))
          }
        </div>
      </div>
      {button}
    </div>
  );
}

export { FeaturedProperties };