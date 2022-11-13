import { t } from 'i18next';
import image from '../assets/img/budva-bg.webp';

const AboutPage = () => {
  return (
    <main className="Main Main-aboutPage">
      <div className="AboutPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="AboutPage_title">{process.env.REACT_APP_NAME}</h1>
            </div>
          </div>
          <div className="AboutPage_imgWrapper">
            <img className="AboutPage_img" src={image} alt="" />
          </div>
          <div className="AboutPage_mainWrapper">
            <div className="AboutPage_textWrapper">
              <h2 className="AboutPage_subTitle">{t('about_page.title')}</h2>
              <div className="AboutPage_text">
                <p>{t('about_page.text')}</p>
              </div>
            </div>
            <div className="Contacts AboutPage_contacts">
              <h4 className="Contacts_title">{t('about_page.phone')}</h4>
              <ul className="Contacts_list">
                <li className="Contacts_item">
                  <a className="Contacts_phone" href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a>
                </li>
                <li className="Contacts_item">
                  <a className="Contacts_phone" href={`tel:${process.env.REACT_APP_PHONE_2}`}>{process.env.REACT_APP_PHONE_2}</a>
                </li>
                <li className="Contacts_item">
                  <a className="Contacts_link" href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { AboutPage };