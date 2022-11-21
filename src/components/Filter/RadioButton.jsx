const RadioButton = ({ id, name, selectedValue, disabledValues, onChangeField, ...props }) => {
  return (
    <div className="RadioButton RadioButtonList_item">
      <input className="RadioButton_input" type="radio" name={name} value={id} id={`id_${name}_${id}`} checked={selectedValue === id ? true : false} onChange={onChangeField} disabled={disabledValues.includes(id)} />
      <label className="RadioButton_label" htmlFor={`id_${name}_${id}`} disabled={disabledValues.includes(id)}>{props.children}</label>
    </div>
  );
}

export { RadioButton };