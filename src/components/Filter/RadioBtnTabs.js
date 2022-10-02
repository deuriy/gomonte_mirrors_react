const RadioBtnTabs = ({ name, values, field, setFieldFunc, ...rest }) => {
  function onChangeField(event) {
    setFieldFunc(event.target.value);
  }

  return (
    <div className='RadioBtnTabs' {...rest}>
      <ul className='RadioBtnTabs_list'>
        {
          Object.entries(values).map(item => (
            <li key={item[0]} className="RadioBtnTab RadioBtnTabs_item">
              <input className="RadioBtnTab_input" type="radio" name={name} value={item[0]} id={`${name}_${item[0]}`} checked={field === item[0] ? true : false} onChange={onChangeField} />
              <label className="RadioBtnTab_label" htmlFor={`${name}_${item[0]}`}>{item[1]}</label>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { RadioBtnTabs };