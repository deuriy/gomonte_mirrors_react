const Checkbox = ({ id, name, selectedValues, onChangeField, ...props }) => {
  return (
    <div className="Checkbox CheckboxList_item">
      <input className="Checkbox_input" type="checkbox" name={name} value={id} id={`id_${name}_${id}`} checked={selectedValues.includes(id)} onChange={onChangeField} />
      <label className="Checkbox_label" htmlFor={`id_${name}_${id}`}>{props.children}</label>
    </div>
  );
}

export { Checkbox };