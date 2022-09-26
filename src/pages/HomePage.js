import { Link } from 'react-router-dom';

import { Trans, useTranslation } from 'react-i18next';

import { Banner } from "../components/Banner";
import { FeaturedProperties } from "../components/FeaturedProperties";

import bannerBg from '../assets/img/budva-bg.webp';
import rentImage from '../assets/img/header-rent-icon-1.webp';

const HomePage = () => {
  const { t } = useTranslation();

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
                          <Link to="/rent">{t('services.rent.title')}</Link>
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <div className="row">
                          <div className="col-4">
                            <img className="Service_img" src={rentImage} alt={t('services.rent.title')} />
                          </div>
                          <div className="col-8">
                            <div className="Service_textWrapper">
                              <h3 className="Service_subTitle">
                                <Trans i18nKey="services.rent.subtitle">Comfortable apartments in <br />Montenegro</Trans>
                              </h3>
                              <div className="Service_description">
                                {t('services.rent.description')}
                              </div>
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
                      <Link to="/sale">{t('services.sale.title')}</Link>
                    </h2>
                    <div className="Service_description">{t('services.sale.description')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Services_buttons">
              <div className="row">
                <div className="col-6">
                  <Link className="BtnSuccess BtnSuccess-services BtnSuccess-rounded Services_btn Services_btn-rent" to="/rent">{t('services.rent.button')}</Link>
                </div>
                <div className="col-6">
                  <Link className="BtnSuccess BtnSuccess-services BtnSuccess-rounded Services_btn Services_btn-sale" to="/sale">{t('services.sale.button')}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="HeroSection Frontpage_heroSection hidden-lgPlus">
            <h1 className="HeroSection_title">{t('hero_section.title')}</h1>
            <div className="HeroSection_text">
              <p>{t('hero_section.description')}</p>
            </div>
          </div>
          <div className="Buttons Frontpage_buttons hidden-lgPlus">
            <Link className="BtnSuccessLight BtnSuccessLight-uppercase" to="/rent">{t('hero_section.buttons.rent')}</Link>
            <Link className="BtnSecondary BtnSecondary-uppercase" to="/sale">{t('hero_section.buttons.sale')}</Link>
          </div>
        </div>
        <FeaturedProperties title={t('best_offers.title')} showButton />
      </div >
    </main >
  );
}

export { HomePage };