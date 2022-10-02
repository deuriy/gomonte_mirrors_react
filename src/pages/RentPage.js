import i18n from "i18next";

import { Filter } from "../components/Filter";

const RentPage = () => {
  // let [properties, setProperties] = useState([]);
  console.log(i18n.language);

  // useEffect(() => {
  //   fetch('http://0.0.0.0:8000/rpc/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "jsonrpc": "2.0",
  //       "id": "fj45hsg",
  //       "method": "get_real_estate_properties",
  //       "params": {
  //         "lang": "en",
  //         "department": "sale",
  //         "estate_type": "flats",
  //         "count": 4
  //       }
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => setProperties(data.result.records));
  // }, []);

  return (
    <main className="Main">
      <div className="PropertiesPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="PageTitle PropertiesPage_title">Аренда</h1>
            </div>
          </div>
          <div className="row hidden-xlMinus">
            <div className="col-12">
              <div className="PropertiesPage_filterWrapper">
                <Filter />
              </div>
            </div>
            {/* <div className="PropertyCards PropertyCards-objectsPage">
              <div className="PropertyCards_items">
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                    <div className="ObjectCard">
                      <div className="ObjectCard_label">Будва</div>
                      <div className="ObjectCard_mediaWrapper">
                        <div className="swiper ObjectMediaSwiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/1.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/2.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/3.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/4.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/5.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/6.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/7.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/8.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/9.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/10.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/11.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/12.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/13.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/14.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                            <div className="swiper-slide"><a className="ObjectMediaSwiper_wrapper" href="/object.html"><img className="ObjectMediaSwiper_img swiper-lazy" data-src="/img/objects/15.webp">
                              <div className="swiper-lazy-preloader"></div></a></div>
                          </div>
                          <div className="swiper-button-prev ObjectMediaSwiper_prev"></div>
                          <div className="swiper-button-next ObjectMediaSwiper_next"></div>
                        </div>
                      </div>
                      <div className="ObjectCard_textWrapper">
                        <h3 className="ObjectCard_title"><a href="/object.html">Квартира с 1 спальней в Будве, район Розино</a></h3>
                        <div className="ObjectCard_description">
                          <p>Продажа Будва № S400 На продажу квартира с 1 спальней в новом доме, район Розино. Паркет.</p>
                        </div><a className="ObjectCard_moreLink" href="/object.html">показать</a>
                      </div>
                      <div className="ObjectCardCharacteristics ObjectCard_characteristics">
                        <div className="ObjectCardCharacteristic ObjectCardCharacteristic-location ObjectCardCharacteristics_item">
                          <div className="ObjectCardCharacteristic_value">Будва</div>
                        </div>
                        <div className="ObjectCardCharacteristic ObjectCardCharacteristic-square ObjectCardCharacteristics_item">
                          <div className="ObjectCardCharacteristic_value">1 спальня - 38 m<sup>2</sup></div>
                        </div>
                      </div>
                      <div className="ObjectPrices ObjectCard_prices">
                        <div className="ObjectPrice ObjectPrices_item">
                          <div className="ObjectPrice_label">Цена</div>
                          <div className="ObjectPrice_value">€65,000</div>
                        </div>
                        <div className="ObjectPrice ObjectPrices_item">
                          <div className="ObjectPrice_label">За квадрат</div>
                          <div className="ObjectPrice_value">€1,711</div>
                        </div>
                      </div>
                      <div className="ObjectCard_id">ID S400</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="PropertyCards_bottom">
                <div className="Pagination">
                  <ul className="Pagination_list">
                    <li className="Pagination_item"><a className="Pagination_prev" href="#"><i className="fa fa-angle-left"></i></a></li>
                    <li className="Pagination_item"><a className="Pagination_link Pagination_link-current" href="#">Страница 1</a></li>
                    <li className="Pagination_item"><a className="Pagination_link" href="#">2</a></li>
                    <li className="Pagination_item"><a className="Pagination_link" href="#">3</a></li>
                    <li className="Pagination_item"><a className="Pagination_next" href="#"><i className="fa fa-angle-right"></i></a></li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export { RentPage };