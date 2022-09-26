import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import loadingImage from '../assets/img/realestate_loading.gif';
import { t } from 'i18next';

const truncate = (input, maxlength) => input.length > maxlength ? `${input.substring(0, maxlength)}...` : input;

function getBedroomsLabel(bedrooms_num) {
  let result = '';

  if (bedrooms_num % 10 === 1 && bedrooms_num !== 11) {
    result = `${bedrooms_num} спальня`;
  }
  else if ((bedrooms_num > 20 || bedrooms_num < 10) && (bedrooms_num % 10 === 2 || bedrooms_num % 10 === 3 || bedrooms_num % 10 === 4)) {
    result = `${bedrooms_num} спальни`;
  }
  else {
    result = `${bedrooms_num} спален`;
  }

  return result;
}

const PropertyCard = ({ data }) => {
  let price = data[`price_${data.department}`] !== null ? data[`price_${data.department}`] : '';
  let pricePerSquare = price / data.footage_indoor;
  let idPrefix = data.department === 'sale' ? 's' : 'r';

  return (
    <div className="PropertyCard">
      <div className="PropertyCard_label">{data.location.name}</div>
      <div className="PropertyCard_mediaWrapper">
        <Swiper modules={[Navigation, Lazy]} slidesPerView={1} navigation lazy className="PropertyMediaSwiper">
          {
            data.thumbs.map((thumb, index) => (
              <SwiperSlide key={index}>
                <Link className="PropertyMediaSwiper_wrapper" to={`/properties/${idPrefix + data.code}`}>
                  <img className="PropertyMediaSwiper_img swiper-lazy" src={loadingImage} data-src={thumb} alt="" />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="PropertyCard_textWrapper">
        {data.title
          ? <h3 className="PropertyCard_title">
            <Link to={`/properties/${idPrefix + data.code}`}>{data.title}</Link>
          </h3>
          : ''
        }

        {data.desc
          ? <div className="PropertyCard_description">
            <p>{truncate(data.desc, 200).split("\n").map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  {item}
                  <br />
                </React.Fragment>
              )
            })}
            </p>
          </div>
          : ''
        }
        <Link className="PropertyCard_moreLink" to={`/properties/${idPrefix + data.code}`}>{t('property_card.show')}</Link>
      </div>
      <div className="PropertyCardCharacteristics PropertyCard_characteristics">
        <div className="PropertyCardCharacteristic PropertyCardCharacteristic-location PropertyCardCharacteristics_item">
          <div className="PropertyCardCharacteristic_value">{data.location.name}</div>
        </div>
        <div className="PropertyCardCharacteristic PropertyCardCharacteristic-square PropertyCardCharacteristics_item">
          <div className="PropertyCardCharacteristic_value">{getBedroomsLabel(data.bedrooms_num)} - {data.footage_indoor} m<sup>2</sup></div>
        </div>
      </div>
      <div className="PropertyPrices PropertyCard_prices">
        {price
          ? <div className="PropertyPrice PropertyPrices_item">
            <div className="PropertyPrice_label">{t('property_card.price')}</div>
            <div className="PropertyPrice_value">€{price.toLocaleString()}</div>
          </div>
          : ''
        }

        {pricePerSquare
          ? <div className="PropertyPrice PropertyPrices_item">
            <div className="PropertyPrice_label">{t('property_card.per_square')}</div>
            <div className="PropertyPrice_value">€{pricePerSquare.toLocaleString()}</div>
          </div>
          : ''
        }
      </div>
      <div className="PropertyCard_id">ID {idPrefix === 's' ? 'S' : ''}{data.code}</div>
    </div>
  );
}

export { PropertyCard };