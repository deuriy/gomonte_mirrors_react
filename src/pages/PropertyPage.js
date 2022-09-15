import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { faCheck, faFlag, faTag, faClone, faBed, faBath, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SimilarProperties } from '../components/SimilarProperties';

const PropertyPage = () => {
  let [property, setProperty] = useState({});
  let { id } = useParams();
  let department = id[0] === 's' ? 'sale' : 'rent';

  id = id.substring(1);

  useEffect(() => {
    fetch('http://0.0.0.0:8000/rpc/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": "fj45hsg",
        "method": "get_property_by_id",
        "params": {
          "lang": "ru",
          "id": id,
          "department": department
        }
      })
    })
      .then(res => res.json())
      .then(data => setProperty(data.result));
  }, [department, id]);


  return (
    <main className='Main Main-propertyPage'>
      <div className="PropertyPage">
        {property.thumbs && property.thumbs[0]
          ? <div className="container PropertyPage_imgContainer">
            <img className="PropertyPage_img" src={property.thumbs[0]} alt={property.title} />
          </div>
          : ''
        }
        <div className="container">
          <div className="PropertyPage_btnWrapper">
            <Link className="BtnOutline" to={`/${department}`}>Больше материалов</Link>
          </div>
          <h1 className="PropertyPage_title">{property.title}</h1>
          <div className="Accordion PropertyPage_accordion">
            <div className="AccordionPanel Accordion_item">
              <h3 className="AccordionPanel_header">Расположение и стоимость</h3>
              <div className="AccordionPanel_body">
                <div className="PropertyCharacteristics">
                  <ul className="PropertyCharacteristics_list">
                    {property.code
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="PropertyCharacteristic_title">№</span>
                        <span className="PropertyCharacteristic_value">{property.code}</span>
                      </li>
                      : ''
                    }

                    {property.location && property.location.name
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faFlag} />
                        <span className="PropertyCharacteristic_title">Город:</span>
                        <span className="PropertyCharacteristic_value PropertyCharacteristic_value-city">{property.location.name}</span>
                      </li>
                      : ''
                    }

                    {property[`price_${department}`]
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faTag} />
                        <span className="PropertyCharacteristic_title">на год:</span>
                        <span className="PropertyCharacteristic_value PropertyCharacteristic_value-price">€ {property[`price_${department}`].toLocaleString()}</span>
                      </li>
                      : ''
                    }

                    {property.bedrooms_num
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faClone} />
                        <span className="PropertyCharacteristic_title">К-во комнат:</span>
                        <span className="PropertyCharacteristic_value">{property.bedrooms_num}</span>
                      </li>
                      : ''
                    }

                    {property.bedrooms_num
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faBed} />
                        <span className="PropertyCharacteristic_title">Спальни:</span>
                        <span className="PropertyCharacteristic_value">{property.bedrooms_num}</span>
                      </li>
                      : ''
                    }

                    {property.bathrooms_num
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faBath} />
                        <span className="PropertyCharacteristic_title">Санузлов:</span>
                        <span className="PropertyCharacteristic_value">{property.bathrooms_num}</span>
                      </li>
                      : ''
                    }

                  </ul>
                </div>
              </div>
            </div>
            <div className="AccordionPanel Accordion_item">
              <h3 className="AccordionPanel_header">Характеристики</h3>
              <div className="AccordionPanel_body">
                {property.facilities
                  ? <div className="PropertyCharacteristics">
                    <ul className="PropertyCharacteristics_list">
                      {
                        property.facilities.map(facility => (
                          <li key={facility["id"]} className="PropertyCharacteristic PropertyCharacteristics_item">
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span className="PropertyCharacteristic_value">{facility["name_ru"]}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  : ''
                }

              </div>
            </div>
            {property.desc
              ? <div className="AccordionPanel Accordion_item">
                <h3 className="AccordionPanel_header">Описание недвижимости</h3>
                <div className="AccordionPanel_body">
                  <div className="PropertyPage_description">
                    {
                      property.desc.split("\n").map((item, idx) => (
                        <React.Fragment key={idx}>
                          {item}
                          <br />
                        </React.Fragment>
                      ))
                    }
                  </div>
                </div>
              </div>
              : ''
            }

          </div>
        </div>
        <SimilarProperties id={id} title="Похожие Объекты" />
      </div>
    </main>
  );
}

export { PropertyPage };