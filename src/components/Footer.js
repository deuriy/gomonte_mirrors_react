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
                  <li className="SecondaryMenu_item">Телефон:<a className="SecondaryMenu_link" href="tel:+38267214405">+382 67 214 405</a></li>
                  <li className="SecondaryMenu_item">Телефон:<a className="SecondaryMenu_link" href="tel:+79036281146">+7 903 628 11 46</a></li>
                  <li className="SecondaryMenu_item"><a className="SecondaryMenu_link" href="mailto:777juli@mail.ru">777juli@mail.ru</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="FooterBlock Footer_menuBlock">
              <h3 className="FooterBlock_title">Информация</h3>
              <div className="SecondaryMenu">
                <ul className="SecondaryMenu_list">
                  {/* <li className="SecondaryMenu_item"><a className="SecondaryMenu_link" href="#">Посуточная</a></li>
                  <li className="SecondaryMenu_item"><a className="SecondaryMenu_link" href="#">Круглый год</a></li>
                  <li className="SecondaryMenu_item"><a className="SecondaryMenu_link" href="#">Всё лето</a></li> */}
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/rent">Аренда Жилья</Link>
                  </li>
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/sale">Недвижимость</Link>
                  </li>
                  <li className="SecondaryMenu_item">
                    <Link className="SecondaryMenu_link" to="/about">О нас</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-3">
            <div className="PaymentMethods FooterBlock Footer_paymentMethods">
              <h3 className="FooterBlock_title">Варианты оплаты</h3>
              <div className="PaymentMethods_content">
                <img className="PaymentMethods_img" src={paymentMethodsImage} alt="Payment Methods" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="Copyright">© 2020 MonteSale все права защищены</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };