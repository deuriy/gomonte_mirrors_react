import { t } from 'i18next';

const NotFound = () => {
  return (
    <div className="NotFound PropertiesPage_notFound">
      <h3 className="NotFound_title">{t('not_found.title')}</h3>
      <div className="NotFound_descrption">{t('not_found.description')}</div>
    </div>
  );
}

export { NotFound };