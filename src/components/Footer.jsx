import { t } from 'i18next';
import { Link } from 'react-router-dom';

import paymentMethodsImage from '../assets/img/payment-methods.webp';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="FooterBlock Footer_menuBlock">
              <h3 className="FooterBlock_title">MonteSale</h3>
              <div className="SecondaryMenu">
                <ul className="SecondaryMenu_list">
                  <li className="SecondaryMenu_item">{t('footer.phone')}:<a className="SecondaryMenu_link" href="tel:+38267214405">+382 67 214 405</a></li>
                  <li className="SecondaryMenu_item">{t('footer.phone')}:<a className="SecondaryMenu_link" href="tel:+79036281146">+7 903 628 11 46</a></li>
                  <li className="SecondaryMenu_item"><a className="SecondaryMenu_link" href="mailto:777juli@mail.ru">777juli@mail.ru</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="FooterBlock Footer_menuBlock">
              <h3 className="FooterBlock_title">{t('footer.information')}</h3>
              <div className="SecondaryMenu">
                <ul className="SecondaryMenu_list">
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/rent">{t('menu.rent')}</Link>
                  </li>
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/sale">{t('menu.property')}</Link>
                  </li>
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/about">{t('menu.about')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-3">
            <div className="PaymentMethods FooterBlock Footer_paymentMethods">
              <h3 className="FooterBlock_title">{t('footer.payment_methods')}</h3>
              <div className="PaymentMethods_content">
                <img className="PaymentMethods_img" src={paymentMethodsImage} alt={t('footer.payment_methods')} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="Copyright">{t('footer.copyright')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };