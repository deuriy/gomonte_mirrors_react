import { t } from "i18next";

const RadioBtnTabs = ({ name, values, field, setFieldFunc, onChangeFunc = () => { }, ...props }) => {
  function onChangeField(event) {
    setFieldFunc(event.target.value);

    if (typeof onChangeFunc === 'function') {
      onChangeFunc(event);
    }
  }

  return (
    <div className='RadioBtnTabs' {...props}>
      <ul className='RadioBtnTabs_list'>
        {
          Object.entries(values).map(item => (
            <li key={item[0]} className="RadioBtnTab RadioBtnTabs_item">
              <input className="RadioBtnTab_input" type="radio" name={name} value={item[0]} id={`${name}_${item[0]}`} checked={field === item[0] ? true : false} onChange={onChangeField} />
              <label className="RadioBtnTab_label" htmlFor={`${name}_${item[0]}`}>{t(`${item[1]}`)}</label>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { RadioBtnTabs };