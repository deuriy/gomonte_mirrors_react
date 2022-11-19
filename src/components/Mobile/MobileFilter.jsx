import Offcanvas from 'react-bootstrap/Offcanvas';

import { faBars, faTimesCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileFilter = ({ show, setShowFilter, setShowSidebar }) => {
  const handleCloseFilter = () => setShowFilter(false);
  const handleShowSidebar = () => {
    setShowFilter(false);
    setShowSidebar(true);
  };

  return (
    <Offcanvas className="MobileFilter" show={show} placement="top">
      <div className="MobileFilter_header">
        <button className="MenuHamburger MobileFilter_menuHamburger" type="button" onClick={handleShowSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button className="MobileFilter_closeBtn" type="button" onClick={handleCloseFilter}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
      <div className="MobileFilter_body">
        <form className="MobileFilter_form" action="#">
          <div className="MobileFilter_items">
            <div className="MobileFilter_item">
              <select className="Select" name="property_type">
                <option value="apartments">Квартиру</option>
                <option value="villa">Дом/Вилла</option>
                <option value="land">Земельный участок</option>
                <option value="commercial">Коммерческую нед.</option>
              </select>
            </div>
            <div className="MobileFilter_item">
              <div className="Switches">
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="radio" name="action_type" value="buy" id="buy" defaultChecked />
                  <label className="Switch_label" htmlFor="buy">Купить</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="radio" name="action_type" value="rent" id="rent" data-parent-radio="action_type" />
                  <label className="Switch_label" htmlFor="rent">Снять</label>
                </div>
              </div>
            </div>
            {/* <div className="MobileFilter_item" data-dependent-field="action_type">
              <div className="Switches">
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="radio" name="period" value="year" id="year" defaultChecked />
                  <label className="Switch_label" htmlFor="year">Год</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="radio" name="period" value="all_summer" id="all_summer" />
                  <label className="Switch_label" htmlFor="all_summer">Всё лето</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="radio" name="period" value="daily" id="daily" />
                  <label className="Switch_label" htmlFor="daily">Посуточно</label>
                </div>
              </div>
            </div> */}
            <div className="MobileFilter_item">
              <select className="Select" name="city">
                <option value="all">Все города</option>
                <option value="bar">Bar</option>
                <option value="becici">Becici</option>
                <option value="bigovo">Бигово</option>
                <option value="blizikuce">Blizikuce</option>
                <option value="budva">Budva</option>
                <option value="buljarica">Buljarica</option>
                <option value="dobrota">Доброта</option>
                <option value="drobni-pesak">Дробни песак</option>
                <option value="dzhenovichi">Дженовичи</option>
                <option value="herceg_novi">Herceg Novi</option>
                <option value="kamenovo">Kamenovo</option>
                <option value="kotor">Kotor</option>
                <option value="krashichi">Крашичи</option>
                <option value="krimovica">Krimovica</option>
                <option value="lastva">Lastva</option>
                <option value="lepetane">Лепетане</option>
                <option value="lushtica">Луштица</option>
                <option value="petrovac">Petrovac</option>
                <option value="podgorica">Podgorica</option>
                <option value="prchan">Прчан</option>
                <option value="przno-milocer">Przno-Milocer</option>
                <option value="radanovici">Radanovici</option>
                <option value="rafailovici">Rafailovici</option>
                <option value="rezevici">Rezevici</option>
                <option value="risan">Risan</option>
                <option value="seoce">Seoce</option>
                <option value="stoliv">Stoliv</option>
                <option value="sutomore">Sutomore</option>
                <option value="sveti-stefan">Sveti Stefan</option>
                <option value="tivat">Tivat</option>
                <option value="zabljak">Zabljak</option>
              </select>
            </div>
            <div className="MobileFilter_item MobileFilter_item-twoCol">
              <div className="MobileFilter_formTextWrapper">
                <input className="MobileFilter_formText" type="text" name="price_from" placeholder="Цена от" />
              </div>
              <div className="MobileFilter_formTextWrapper">
                <input className="MobileFilter_formText" type="text" name="price_to" placeholder="Цена до" />
              </div>
            </div>
            <div className="MobileFilter_item">
              <label className="MobileFilter_formLabel" htmlFor="bedrooms_number">Количество спален</label>
              <div className="Switches Switches-bedrooms">
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="checkbox" name="bedrooms_number" value="all" id="all" defaultChecked />
                  <label className="Switch_label" htmlFor="all">Все</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="checkbox" name="bedrooms_number" value="studio" id="studio" />
                  <label className="Switch_label" htmlFor="studio">Студия</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="checkbox" name="bedrooms_number" value="one" id="one" />
                  <label className="Switch_label" htmlFor="one">1</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="checkbox" name="bedrooms_number" value="two" id="two" />
                  <label className="Switch_label" htmlFor="two">2</label>
                </div>
                <div className="Switch Switches_item">
                  <input className="Switch_input" type="checkbox" name="bedrooms_number" value="three" id="three" />
                  <label className="Switch_label" htmlFor="three">3+</label>
                </div>
              </div>
            </div>
          </div>
          <div className="MobileFilter_actions">
            <button className="MobileFilter_btn" type="reset">Очистить</button>
            <button className="MobileFilter_btn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
              <span>Искать</span>
            </button>
          </div>
        </form>
      </div>
    </Offcanvas>
  );
}

export { MobileFilter };