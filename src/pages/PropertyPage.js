import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { LanguageContext } from '../components/Provider';

import Accordion from 'react-bootstrap/Accordion';

import { faCheck, faFlag, faTag, faClone, faBed, faBath, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SimilarProperties } from '../components/SimilarProperties';
import { t } from 'i18next';

const PropertyPage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

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
          "lang": language,
          "id": id,
          "department": department
        }
      })
    })
      .then(res => res.json())
      .then(data => setProperty(data.result));
  }, [department, id, language]);

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
            <Link className="BtnOutline" to={`/${department}`}>{t('property_page.more_materials')}</Link>
          </div>
          <h1 className="PropertyPage_title">{property.title}</h1>
          <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen className='Accordion PropertyPage_accordion' flush>
            <Accordion.Item eventKey='0' className='AccordionPanel Accordion_item'>
              <Accordion.Header className='AccordionPanel_header'>{t('property_page.location_and_cost')}</Accordion.Header>
              <Accordion.Body className='AccordionPanel_body'>
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
                        <span className="PropertyCharacteristic_title">{t('property_page.city')}:</span>
                        <span className="PropertyCharacteristic_value PropertyCharacteristic_value-city">{property.location.name}</span>
                      </li>
                      : ''
                    }

                    {property[`price_${department}`]
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faTag} />
                        <span className="PropertyCharacteristic_title">{t('property_page.price_per_year')}:</span>
                        <span className="PropertyCharacteristic_value PropertyCharacteristic_value-price">€ {property[`price_${department}`].toLocaleString()}</span>
                      </li>
                      : ''
                    }

                    {property.bedrooms_num
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faClone} />
                        <span className="PropertyCharacteristic_title">{t('property_page.bedrooms_number')}:</span>
                        <span className="PropertyCharacteristic_value">{property.bedrooms_num}</span>
                      </li>
                      : ''
                    }

                    {property.bedrooms_num
                      ? (<li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faBed} />
                        <span className="PropertyCharacteristic_title">{t('property_page.bedrooms')}:</span>
                        <span className="PropertyCharacteristic_value">{property.bedrooms_num}</span>
                      </li>)
                      : ''
                    }

                    {property.bathrooms_num
                      ? <li className="PropertyCharacteristic PropertyCharacteristics_item">
                        <FontAwesomeIcon icon={faBath} />
                        <span className="PropertyCharacteristic_title">{t('property_page.bathrooms')}:</span>
                        <span className="PropertyCharacteristic_value">{property.bathrooms_num}</span>
                      </li>
                      : ''
                    }

                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='AccordionPanel Accordion_item'>
              <Accordion.Header className='AccordionPanel_header'>{t('property_page.characteristics')}</Accordion.Header>
              <Accordion.Body className='AccordionPanel_body'>
                {property.facilities
                  ? <div className="PropertyCharacteristics">
                    <ul className="PropertyCharacteristics_list">
                      {
                        property.facilities.map(facility => (
                          <li key={facility["id"]} className="PropertyCharacteristic PropertyCharacteristics_item">
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span className="PropertyCharacteristic_value">{facility[`name_${language}`]}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  : ''
                }

              </Accordion.Body>
            </Accordion.Item>
            {property.desc
              ? <Accordion.Item eventKey='2' className='AccordionPanel Accordion_item'>
                <Accordion.Header className='AccordionPanel_header'>{t('property_page.property_description')}</Accordion.Header>
                <Accordion.Body className='AccordionPanel_body'>
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
                </Accordion.Body>
              </Accordion.Item>
              : ''
            }

          </Accordion>
        </div>
        <SimilarProperties id={id} department={department} title={t('property_page.similar_objects')} />
      </div>
    </main>
  );
}

export { PropertyPage };