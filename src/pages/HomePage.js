import { Link } from 'react-router-dom';

import { Banner } from "../components/Banner";
import { FeaturedProperties } from "../components/FeaturedProperties";

import bannerBg from '../assets/img/budva-bg.webp';
import rentImage from '../assets/img/header-rent-icon-1.webp';

const HomePage = () => {
  return (
    <main className="Main">
      <Banner image={bannerBg} />
      <div className="Frontpage">
        <div className="container">
          <div className="Services Frontpage_services hidden-lgMinus">
            <div className="Services_items">
              <div className="row">
                <div className="col-6">
                  <div className="Service Services_item Services_item-rent">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="Service_title">
                          <Link to="/rent">Аренда</Link>
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      {/* <div className="col-4">
                        <div className="ServicesMenu Service_menu">
                          <ul className="ServicesMenu_list">
                            <li className="ServicesMenu_item"><a className="ServicesMenu_link" href="#">Посуточная аренда</a></li>
                            <li className="ServicesMenu_item"><a className="ServicesMenu_link" href="#">На круглый год</a></li>
                            <li className="ServicesMenu_item"><a className="ServicesMenu_link" href="#">Всё лето</a></li>
                          </ul>
                        </div>
                      </div> */}
                      <div className="col-8">
                        <div className="row">
                          <div className="col-4">
                            <img className="Service_img" src={rentImage} alt="Rent" />
                          </div>
                          <div className="col-8">
                            <div className="Service_textWrapper">
                              <h3 className="Service_subTitle">Комфортабельные апартаменты в <br />Черногории</h3>
                              <div className="Service_description">Для жизни и отдыха на берегу Адриатического моря</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="Service Services_item">
                    <h2 className="Service_title">
                      <Link to="/sale">Продажа</Link>
                    </h2>
                    <div className="Service_description">Только свежие и актуальные предложения по продаже недвижимости в Черногории с разными ценами на любой вкус. Профессиональный подход и юридическое сопровождение.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Services_buttons">
              <div className="row">
                <div className="col-6">
                  <Link className="BtnSuccess BtnSuccess-services BtnSuccess-rounded Services_btn Services_btn-rent" to="/rent">Все варианты аренды</Link>
                </div>
                <div className="col-6">
                  <Link className="BtnSuccess BtnSuccess-services BtnSuccess-rounded Services_btn Services_btn-sale" to="/sale">Все варианты продажи</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="HeroSection Frontpage_heroSection hidden-lgPlus">
            <h1 className="HeroSection_title">Аренда и продажа апартаментов и домов в Черногории</h1>
            <div className="HeroSection_text">
              <p>Лучшие предложения по продаже недвижимости в Черногориии с разными ценами на любой вкус. При покупке недвижимости в подарок вы получите Вид на жительство.</p>
            </div>
          </div>
          <div className="Buttons Frontpage_buttons hidden-lgPlus">
            <Link className="BtnSuccessLight BtnSuccessLight-uppercase" to="/rent">Арендовать</Link>
            <Link className="BtnSecondary BtnSecondary-uppercase" to="/sale">Купить</Link>
          </div>
          <FeaturedProperties title="Лучшие предложения" showButton />
        </div>
      </div>
    </main>
  );
}

export { HomePage };