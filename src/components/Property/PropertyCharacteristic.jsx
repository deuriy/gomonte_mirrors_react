import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyCharacteristic = ({ icon, title, valueClass, ...props }) => {
  valueClass = valueClass !== "" ? " " + valueClass : "";

  return (
    <li className="PropertyCharacteristic PropertyCharacteristics_item">
      <FontAwesomeIcon icon={icon} />
      <span className="PropertyCharacteristic_title">{title}</span>
      <span className={"PropertyCharacteristic_value" + valueClass}>{props.children}</span>
    </li>
  );
}

export { PropertyCharacteristic };