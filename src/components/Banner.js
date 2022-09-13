const Banner = (props) => {
  let bgImage = props.image || '';

  return (
    <div className="Banner hidden-mdMinus" style={{ backgroundImage: 'url(' + bgImage + ')' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Filter Banner_filter hidden-xlMinus">
              <div className="Filter_items">
                <div className="FilterElement Filter_item">
                  <div className="dropdown"><a className="dropdown-toggle FilterMenuTrigger" href="#" data-bs-toggle="dropdown" aria-expanded="false">Купить</a>
                    <ul className="dropdown-menu FilterElementDropdown FilterElement_dropdown">
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="RadioButton">
                          <input className="RadioButton_input" type="radio" name="action_type" value="buy_property" id="buy_property" defaultChecked />
                          <label className="RadioButton_label" htmlFor="buy_property">Купить</label>
                        </div>
                      </li>
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="RadioButton">
                          <input className="RadioButton_input" type="radio" name="action_type" value="rent_property" id="rent_property" />
                          <label className="RadioButton_label" htmlFor="rent_property">Снять</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="FilterElement Filter_item">
                  <div className="dropdown"><a className="dropdown-toggle FilterMenuTrigger" href="#" data-bs-toggle="dropdown" aria-expanded="false">Жилая недвижимость</a>
                    <ul className="dropdown-menu FilterElementDropdown FilterElement_dropdown FilterElement_dropdown-propertyType">
                      <li className="dropdown-item FilterElementDropdown_item FilterElementDropdown_item-hasChild">
                        <div className="RadioButton">
                          <input className="RadioButton_input" type="radio" name="property_type" value="residental" id="residental" defaultChecked />
                          <label className="RadioButton_label" htmlFor="residental">Жилая недвижимость</label>
                          <div className="CheckboxList RadioButton_checkboxList">
                            <div className="Checkbox CheckboxList_item">
                              <input className="Checkbox_input" type="radio" name="residental_type" value="apartments" id="apartments" defaultChecked />
                              <label className="Checkbox_label" htmlFor="apartments">Квартира</label>
                            </div>
                            <div className="Checkbox CheckboxList_item">
                              <input className="Checkbox_input" type="radio" name="residental_type" value="villa" id="villa" />
                              <label className="Checkbox_label" htmlFor="villa">Дом/Вилла</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="RadioButton">
                          <input className="RadioButton_input" type="radio" name="property_type" value="land" id="land" />
                          <label className="RadioButton_label" htmlFor="land">Земельный участок</label>
                        </div>
                      </li>
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="RadioButton">
                          <input className="RadioButton_input" type="radio" name="property_type" value="commercial_premise" id="commercial_premise" />
                          <label className="RadioButton_label" htmlFor="commercial_premise">Коммерческая</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="FilterElement Filter_item">
                  <div className="dropdown"><a className="dropdown-toggle FilterMenuTrigger" href="#" data-bs-toggle="dropdown" aria-expanded="false">Город</a>
                    <ul className="dropdown-menu FilterElementDropdown FilterElement_dropdown FilterElementDropdown-checkboxList">
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="CheckboxList CheckboxList-filterElementDropdown">
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="bar" id="bar" defaultChecked />
                            <label className="Checkbox_label" htmlFor="bar">Бар</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="bechichi" id="bechichi" />
                            <label className="Checkbox_label" htmlFor="bechichi">Бечичи</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="bigovo" id="bigovo" />
                            <label className="Checkbox_label" htmlFor="bigovo">Бигово</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="bizikuce" id="bizikuce" />
                            <label className="Checkbox_label" htmlFor="bizikuce">Bizikuce</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="budva" id="budva" />
                            <label className="Checkbox_label" htmlFor="budva">Будва</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="buljarica" id="buljarica" />
                            <label className="Checkbox_label" htmlFor="buljarica">Buljarica</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="dobrota" id="dobrota" />
                            <label className="Checkbox_label" htmlFor="dobrota">Доброта</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="drobni_pesak" id="drobni_pesak" />
                            <label className="Checkbox_label" htmlFor="drobni_pesak">Дробни песак</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="dzhenovichi" id="dzhenovichi" />
                            <label className="Checkbox_label" htmlFor="dzhenovichi">Дженовичи</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="herzeg_novi" id="herzeg_novi" />
                            <label className="Checkbox_label" htmlFor="herzeg_novi">Херцег Нови</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="kamenovo" id="kamenovo" />
                            <label className="Checkbox_label" htmlFor="kamenovo">Kamenovo</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="kotor" id="kotor" />
                            <label className="Checkbox_label" htmlFor="kotor">Котор</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="krashichi" id="krashichi" />
                            <label className="Checkbox_label" htmlFor="krashichi">Крашичи</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="krimovica" id="krimovica" />
                            <label className="Checkbox_label" htmlFor="krimovica">Кримовица</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="lastva" id="lastva" />
                            <label className="Checkbox_label" htmlFor="lastva">Ластва</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="lepetane" id="lepetane" />
                            <label className="Checkbox_label" htmlFor="lepetane">Лепетане</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="lushtica" id="lushtica" />
                            <label className="Checkbox_label" htmlFor="lushtica">Луштица</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="petrovac" id="petrovac" />
                            <label className="Checkbox_label" htmlFor="petrovac">Петровац</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="podgorica" id="podgorica" />
                            <label className="Checkbox_label" htmlFor="podgorica">Подгорица</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="prchan" id="prchan" />
                            <label className="Checkbox_label" htmlFor="prchan">Прчан</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="przhno_milocher" id="przhno_milocher" />
                            <label className="Checkbox_label" htmlFor="przhno_milocher">Пржно-Милочер</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="radanovici" id="radanovici" />
                            <label className="Checkbox_label" htmlFor="radanovici">Radanovici</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="rafailovichi" id="rafailovichi" />
                            <label className="Checkbox_label" htmlFor="rafailovichi">Рафаиловичи</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="rezhevichi" id="rezhevichi" />
                            <label className="Checkbox_label" htmlFor="rezhevichi">Режевичи</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="risan" id="risan" />
                            <label className="Checkbox_label" htmlFor="risan">Рисан</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="stoliv" id="stoliv" />
                            <label className="Checkbox_label" htmlFor="stoliv">Stoliv</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="sutomore" id="sutomore" />
                            <label className="Checkbox_label" htmlFor="sutomore">Sutomore</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="sveti_stefan" id="sveti_stefan" />
                            <label className="Checkbox_label" htmlFor="sveti_stefan">Свети Стефан</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="tivat" id="tivat" />
                            <label className="Checkbox_label" htmlFor="tivat">Тиват</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="ulcin" id="ulcin" />
                            <label className="Checkbox_label" htmlFor="ulcin">Ульцин</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_city[]" value="zhabliak" id="zhabliak" />
                            <label className="Checkbox_label" htmlFor="zhabliak">Жабляк</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="FilterElement Filter_item">
                  <div className="dropdown"><a className="dropdown-toggle FilterMenuTrigger" href="#" data-bs-toggle="dropdown" aria-expanded="false">Цена</a>
                    <ul className="dropdown-menu FilterElementDropdown FilterElement_dropdown">
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="FilterElementDropdown_fields">
                          <input className="FormText" type="number" name="price_from" placeholder="Цена от" min="0" />
                          <input className="FormText" type="number" name="price_to" placeholder="Цена до" min="0" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="FilterElement Filter_item">
                  <div className="dropdown"><a className="dropdown-toggle FilterMenuTrigger" href="#" data-bs-toggle="dropdown" aria-expanded="false">К-во спален</a>
                    <ul className="dropdown-menu FilterElementDropdown FilterElementDropdown-checkboxList FilterElement_dropdown">
                      <li className="dropdown-item FilterElementDropdown_item">
                        <div className="CheckboxList CheckboxList-filterElementDropdown">
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_bedrooms_number[]" value="0" id="0" />
                            <label className="Checkbox_label" htmlFor="0">Студия</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_bedrooms_number[]" value="1" id="1" />
                            <label className="Checkbox_label" htmlFor="1">1 спальня</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_bedrooms_number[]" value="2" id="2" />
                            <label className="Checkbox_label" htmlFor="2">2 спальни</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_bedrooms_number[]" value="3" id="3" />
                            <label className="Checkbox_label" htmlFor="3">3 спальни</label>
                          </div>
                          <div className="Checkbox CheckboxList_item">
                            <input className="Checkbox_input" type="checkbox" name="property_bedrooms_number[]" value="4" id="4" />
                            <label className="Checkbox_label" htmlFor="4">4 и более</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="FilterElement Filter_item">
                  <input className="FilterElement_formText" type="text" name="property_number" placeholder="Код объекта" />
                </div>
              </div>
              <div className="Filter_actions">
                <button className="BtnInfo BtnInfo-search" type="submit">Поиск</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Banner };