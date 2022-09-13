import { useParams } from 'react-router-dom';

const PropertyPage = () => {
  let { id } = useParams();

  return (
    <main className='Main Main-propertyPage'>
      <div className="PropertyPage">
        <div className="container PropertyPage_imgContainer">
          <img className="PropertyPage_img" src="/img/property.webp" alt="Квартира с 2 спальнями в Будве, неделеко от моря, Адок, паркинг в гараже" /></div>
        <div className="container">
          <div className="PropertyPage_btnWrapper">
            <a className="BtnOutline" href="#">Больше материалов</a>
          </div>
          <h1 className="PropertyPage_title">Квартира с 2 спальнями в Будве, неделеко от моря, Адок, паркинг в гараже №1300</h1>
          <div className="Accordion PropertyPage_accordion">
            <div className="AccordionPanel Accordion_item">
              <h3 className="AccordionPanel_header" id="ObjectLocationHeader" data-bs-toggle="collapse" data-bs-target="#ObjectLocationBody" aria-expanded="true" aria-controls="ObjectLocationBody">Расположение и стоимость</h3>
              <div className="AccordionPanel_body accordion-collapse collapse show" id="ObjectLocationBody" aria-labelledby="ObjectLocationHeader">
                <div className="PropertyCharacteristics">
                  <ul className="PropertyCharacteristics_list">
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-check"></i><span className="PropertyCharacteristic_title">№</span><span className="PropertyCharacteristic_value">1300</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-flag"></i><span className="PropertyCharacteristic_title">Город:</span><a className="PropertyCharacteristic_value PropertyCharacteristic_value-city" href="#">Будва</a></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-tag"></i><span className="PropertyCharacteristic_title">на год:</span><span className="PropertyCharacteristic_value PropertyCharacteristic_value-price">€ 400</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-clone"></i><span className="PropertyCharacteristic_title">К-во комнат:</span><span className="PropertyCharacteristic_value">3</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-bed"></i><span className="PropertyCharacteristic_title">Спальни:</span><span className="PropertyCharacteristic_value">2</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-bath"></i><span className="PropertyCharacteristic_title">Санузлов:</span><span className="PropertyCharacteristic_value">2</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="AccordionPanel Accordion_item">
              <h3 className="AccordionPanel_header" id="PropertyCharacteristicsHeader" data-bs-toggle="collapse" data-bs-target="#PropertyCharacteristicsBody" aria-expanded="true" aria-controls="PropertyCharacteristicsBody">Характеристики</h3>
              <div className="AccordionPanel_body accordion-collapse collapse show" id="PropertyCharacteristicsBody" aria-labelledby="PropertyCharacteristicsHeader">
                <div className="PropertyCharacteristics">
                  <ul className="PropertyCharacteristics_list">
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Кухня</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Интернет</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">ТВ</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Стиральная машина</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Кондиционер</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Фен</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Гладильная доска</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Бесплатная Парковка</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Wi-Fi</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Отопление</span></li>
                    <li className="PropertyCharacteristic PropertyCharacteristics_item"><i className="fa fa-angle-right"></i><span className="PropertyCharacteristic_value">Терраса</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="AccordionPanel Accordion_item">
              <h3 className="AccordionPanel_header" id="ObjectDescriptionHeader" data-bs-toggle="collapse" data-bs-target="#ObjectDescriptionBody" aria-expanded="true" aria-controls="ObjectDescriptionBody">Описание недвижимости</h3>
              <div className="AccordionPanel_body accordion-collapse collapse show" id="ObjectDescriptionBody" aria-labelledby="ObjectDescriptionHeader">
                <div className="PropertyPage_description">
                  <p>Квартира с 2 спальнями в Будве, неделеко от моря, Адок, паркинг в гараже</p>
                  <p>Аренда Будва № 1300 Сдается квартира с 2 спальнями на круглый год недалеко от моря, район Адок, 2 этаж. Паркет. Две большие террасы, одна застекленная. Два санузла, есть ванна. парковка в гараже.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="PropertyCards PropertyCards-similar PropertyPage_PropertyCards">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="PropertyCards_title">Похожие Объекты</h2>
            </div>
          </div>
          <div className="PropertyCards_items">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                <div className="PropertyCard">
                  <div className="PropertyCard_label">Будва</div>
                  <div className="PropertyCard_mediaWrapper">
                    <div className="swiper PropertyMediaSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/1.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/3.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/4.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/5.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/6.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/7.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/8.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/9.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/10.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/11.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/12.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/13.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/14.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/15.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                      </div>
                      <div className="swiper-button-prev PropertyMediaSwiper_prev"></div>
                      <div className="swiper-button-next PropertyMediaSwiper_next"></div>
                    </div>
                  </div>
                  <div className="PropertyCard_textWrapper">
                    <h3 className="PropertyCard_title"><a href="/object.html">Квартира с 1 спальней в Будве, район Розино</a></h3>
                    <div className="PropertyCard_description">
                      <p>Продажа Будва № S400 На продажу квартира с 1 спальней в новом доме, район Розино. Паркет.</p>
                    </div><a className="PropertyCard_moreLink" href="/object.html">показать</a>
                  </div>
                  <div className="PropertyCardCharacteristics PropertyCard_characteristics">
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-location PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">Будва</div>
                    </div>
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-square PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">1 спальня - 38 m<sup>2</sup></div>
                    </div>
                  </div>
                  <div className="PropertyPrices PropertyCard_prices">
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">Цена</div>
                      <div className="PropertyPrice_value">€65,000</div>
                    </div>
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">За квадрат</div>
                      <div className="PropertyPrice_value">€1,711</div>
                    </div>
                  </div>
                  <div className="PropertyCard_id">ID S400</div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                <div className="PropertyCard">
                  <div className="PropertyCard_label">Будва</div>
                  <div className="PropertyCard_mediaWrapper">
                    <div className="swiper PropertyMediaSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="PropertyMediaSwiper_wrapper PropertyMediaSwiper_wrapper-video">
                            <div className="Video"><iframe width="560" height="315" src="https://www.youtube.com/embed/9SdtcQGH2C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                          </div>
                        </div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_1.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_2.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_3.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_4.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_5.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_6.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_7.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_8.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_9.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_10.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_11.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_12.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_13.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_14.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_15.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_16.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_17.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_18.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_19.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_20.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_21.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_22.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_23.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_24.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_25.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                      </div>
                      <div className="swiper-button-prev PropertyMediaSwiper_prev"></div>
                      <div className="swiper-button-next PropertyMediaSwiper_next"></div>
                    </div>
                  </div>
                  <div className="PropertyCard_textWrapper">
                    <h3 className="PropertyCard_title"><a href="/object.html">Вилла люкс в Будве с видом на море и c бассейном</a></h3>
                    <div className="PropertyCard_description">
                      <p>Продажа Вилла в Будве № S304 На продажу шикарная 3-х этажная вилла с панорамным видом на</p>
                    </div><a className="PropertyCard_moreLink" href="/object.html">показать</a>
                  </div>
                  <div className="PropertyCardCharacteristics PropertyCard_characteristics">
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-location PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">Будва</div>
                    </div>
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-square PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">4 спальни - 38 m<sup>2</sup></div>
                    </div>
                  </div>
                  <div className="PropertyPrices PropertyCard_prices">
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">Цена</div>
                      <div className="PropertyPrice_value">€1,600,000</div>
                    </div>
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">За квадрат</div>
                      <div className="PropertyPrice_value">€4,507</div>
                    </div>
                  </div>
                  <div className="PropertyCard_id">ID S304</div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                <div className="PropertyCard">
                  <div className="PropertyCard_label">Будва</div>
                  <div className="PropertyCard_mediaWrapper">
                    <div className="swiper PropertyMediaSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/1.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/3.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/4.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/5.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/6.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/7.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/8.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/9.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/10.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/11.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/12.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/13.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/14.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/15.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                      </div>
                      <div className="swiper-button-prev PropertyMediaSwiper_prev"></div>
                      <div className="swiper-button-next PropertyMediaSwiper_next"></div>
                    </div>
                  </div>
                  <div className="PropertyCard_textWrapper">
                    <h3 className="PropertyCard_title"><a href="/object.html">Квартира с 1 спальней в Будве, район Розино</a></h3>
                    <div className="PropertyCard_description">
                      <p>Продажа Будва № S400 На продажу квартира с 1 спальней в новом доме, район Розино. Паркет.</p>
                    </div><a className="PropertyCard_moreLink" href="/object.html">показать</a>
                  </div>
                  <div className="PropertyCardCharacteristics PropertyCard_characteristics">
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-location PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">Будва</div>
                    </div>
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-square PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">1 спальня - 38 m<sup>2</sup></div>
                    </div>
                  </div>
                  <div className="PropertyPrices PropertyCard_prices">
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">Цена</div>
                      <div className="PropertyPrice_value">€65,000</div>
                    </div>
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">За квадрат</div>
                      <div className="PropertyPrice_value">€1,711</div>
                    </div>
                  </div>
                  <div className="PropertyCard_id">ID S400</div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 PropertyCards_col">
                <div className="PropertyCard">
                  <div className="PropertyCard_label">Будва</div>
                  <div className="PropertyCard_mediaWrapper">
                    <div className="swiper PropertyMediaSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="PropertyMediaSwiper_wrapper PropertyMediaSwiper_wrapper-video">
                            <div className="Video"><iframe width="560" height="315" src="https://www.youtube.com/embed/9SdtcQGH2C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                          </div>
                        </div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_1.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_2.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_3.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_4.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_5.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_6.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_7.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_8.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_9.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_10.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_11.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_12.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_13.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_14.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_15.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_16.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_17.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_18.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_19.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_20.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_21.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_22.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_23.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_24.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                        <div className="swiper-slide"><a className="PropertyMediaSwiper_wrapper" href="/object.html"><img className="PropertyMediaSwiper_img swiper-lazy" data-src="/img/objects/2_25.webp">
                          <div className="swiper-lazy-preloader"></div></a></div>
                      </div>
                      <div className="swiper-button-prev PropertyMediaSwiper_prev"></div>
                      <div className="swiper-button-next PropertyMediaSwiper_next"></div>
                    </div>
                  </div>
                  <div className="PropertyCard_textWrapper">
                    <h3 className="PropertyCard_title"><a href="/object.html">Вилла люкс в Будве с видом на море и c бассейном</a></h3>
                    <div className="PropertyCard_description">
                      <p>Продажа Вилла в Будве № S304 На продажу шикарная 3-х этажная вилла с панорамным видом на</p>
                    </div><a className="PropertyCard_moreLink" href="/object.html">показать</a>
                  </div>
                  <div className="PropertyCardCharacteristics PropertyCard_characteristics">
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-location PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">Будва</div>
                    </div>
                    <div className="PropertyCardCharacteristic PropertyCardCharacteristic-square PropertyCardCharacteristics_item">
                      <div className="PropertyCardCharacteristic_value">4 спальни - 38 m<sup>2</sup></div>
                    </div>
                  </div>
                  <div className="PropertyPrices PropertyCard_prices">
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">Цена</div>
                      <div className="PropertyPrice_value">€1,600,000</div>
                    </div>
                    <div className="PropertyPrice PropertyPrices_item">
                      <div className="PropertyPrice_label">За квадрат</div>
                      <div className="PropertyPrice_value">€4,507</div>
                    </div>
                  </div>
                  <div className="PropertyCard_id">ID S304</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </main>
  );
}

export { PropertyPage };