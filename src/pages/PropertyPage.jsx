import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { LanguageContext } from '../chunks/Provider';
import { rpc } from '../chunks/JsonRpc';

import Accordion from 'react-bootstrap/Accordion';

import { faCheck, faFlag, faTag, faClone, faBed, faBath, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SimilarProperties } from '../components/Property/SimilarProperties';
import { t } from 'i18next';
import { PropertyCharacteristic } from '../components/Property/PropertyCharacteristic';
import { allBedrooms } from '../data/bedrooms';

const PropertyPage = () => {
  const { language } = useContext(LanguageContext);

  let [property, setProperty] = useState({});
  let { id } = useParams();
  let department = id[0] === 's' ? 'sale' : 'rent';

  id = id.substring(1);

  useEffect(() => {
    rpc.exec("get_property_by_id", {
      "lang": language,
      "id": id,
      "department": department
    }).then(data => {
      setProperty(data.result);
      document.title = `${process.env.REACT_APP_NAME} - ${data.result.title}`;
    });
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
                    {
                      property.code !== undefined
                        ? <PropertyCharacteristic icon={faCheck} title="№">{property.code}</PropertyCharacteristic>
                        : ""
                    }

                    {
                      property.location !== undefined && property.location.name !== undefined
                        ? <PropertyCharacteristic icon={faFlag} title={t('property_page.city') + ':'}>{property.location.name}</PropertyCharacteristic>
                        : ""
                    }

                    {
                      property.price !== undefined
                        ? <PropertyCharacteristic icon={faTag} title={t('property_page.price_per_year') + ':'} valueClass="PropertyCharacteristic_value-price">€ {property["price_" + department].toLocaleString()}</PropertyCharacteristic>
                        : ""
                    }

                    {
                      property.bedrooms_num !== undefined
                        ? <PropertyCharacteristic icon={faClone} title={t('property_page.rooms_number') + ':'}>{property.bedrooms_num === 0 ? allBedrooms[0]["name_" + language] : property.bedrooms_num}</PropertyCharacteristic>
                        : ""
                    }

                    {
                      property.bedrooms_num !== undefined
                        ? <PropertyCharacteristic icon={faBed} title={t('property_page.bedrooms') + ':'}>{property.bedrooms_num}</PropertyCharacteristic>
                        : ""
                    }

                    {
                      property.bathrooms_num !== undefined
                        ? <PropertyCharacteristic icon={faBath} title={t('property_page.bathrooms') + ':'}>{property.bathrooms_num}</PropertyCharacteristic>
                        : ""
                    }

                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="AccordionPanel Accordion_item">
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
              ? <Accordion.Item eventKey="2" className="AccordionPanel Accordion_item">
                <Accordion.Header className='AccordionPanel_header'>{t('property_page.property_description')}</Accordion.Header>
                <Accordion.Body className="AccordionPanel_body">
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