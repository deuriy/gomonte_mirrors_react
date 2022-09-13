import { Link } from 'react-router-dom';
import { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import loadingImage from '../assets/img/realestate_loading.gif';

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

const ObjectCard = ({ data }) => {
  let price = data[`price_${data.department}`] !== null ? data[`price_${data.department}`] : '';
  let pricePerSquare = price / data.footage_indoor;
  let idPrefix = data.department === 'sale' ? 'S' : '';

  return (
    <div className="ObjectCard">
      <div className="ObjectCard_label">{data.location.name}</div>
      <div className="ObjectCard_mediaWrapper">
        <Swiper modules={[Navigation, Lazy]} slidesPerView={1} navigation lazy className="ObjectMediaSwiper">
          {
            data.thumbs.map((thumb, index) => (
              <SwiperSlide key={index}>
                <Link className="ObjectMediaSwiper_wrapper" to={`/object/${data.code}`}>
                  <img className="ObjectMediaSwiper_img swiper-lazy" src={loadingImage} data-src={thumb} alt="" />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="ObjectCard_textWrapper">
        {data.title
          ? <h3 className="ObjectCard_title">
            <Link to="/object/">{data.title}</Link>
          </h3>
          : ''
        }

        {data.desc
          ? <div className="ObjectCard_description">
            <p>{truncate(data.desc, 150)}</p>
          </div>
          : ''
        }
        <Link className="ObjectCard_moreLink" to={`/object/${data.code}`}>показать</Link>
      </div>
      <div className="ObjectCardCharacteristics ObjectCard_characteristics">
        <div className="ObjectCardCharacteristic ObjectCardCharacteristic-location ObjectCardCharacteristics_item">
          <div className="ObjectCardCharacteristic_value">{data.location.name}</div>
        </div>
        <div className="ObjectCardCharacteristic ObjectCardCharacteristic-square ObjectCardCharacteristics_item">
          <div className="ObjectCardCharacteristic_value">{getBedroomsLabel(data.bedrooms_num)} - {data.footage_indoor} m<sup>2</sup></div>
        </div>
      </div>
      <div className="ObjectPrices ObjectCard_prices">
        {price
          ? <div className="ObjectPrice ObjectPrices_item">
            <div className="ObjectPrice_label">Цена</div>
            <div className="ObjectPrice_value">€{price.toLocaleString()}</div>
          </div>
          : ''
        }

        {pricePerSquare
          ? <div className="ObjectPrice ObjectPrices_item">
            <div className="ObjectPrice_label">За квадрат</div>
            <div className="ObjectPrice_value">€{pricePerSquare.toLocaleString()}</div>
          </div>
          : ''
        }
      </div>
      <div className="ObjectCard_id">ID {idPrefix + data.code}</div>
    </div>
  );
}

export { ObjectCard };