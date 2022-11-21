import { t } from 'i18next';

const NoResults = () => {
  return (
    <div className="NoResults PropertiesPage_noResults">
      <h3 className="NoResults_title">{t('no_results.title')}</h3>
      <div className="NoResults_descrption">{t('no_results.description')}</div>
    </div>
  );
}

export { NoResults };