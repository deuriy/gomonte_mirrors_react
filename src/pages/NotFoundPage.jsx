import { Link } from 'react-router-dom';

import { Trans, useTranslation } from 'react-i18next';
import { useEffect, useContext } from 'react';

import { LanguageContext } from '../chunks/Provider';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} - ${t('not_found.title')}`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div className="NotFound">
      <div className="NotFound_wrapper">
        <div className="NotFound_label">404</div>
        <h2 className="NotFound_title">{t('not_found.title')}</h2>
        <p className="NotFound_description">
          <Trans i18nKey="not_found.description">The page may have been moved or may not exist.<br className="NotFound_nonSmBr" />You can use the menu or return to the homepage</Trans>
        </p>
        <Link to="/" className="NotFound_btn BtnDanger">{t('not_found.go_home_page')}</Link>
      </div>
    </div>
  );
}

export { NotFoundPage };