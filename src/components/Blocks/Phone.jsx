import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Phone = ({ number }) => {
  return (
    <a className="Phone Header_phone" href={`tel:${number}`}>
      <FontAwesomeIcon icon={faPhone} className="hidden-xlMinus" />
      <span className="Phone_text">{number}</span>
    </a>
  );
}

export { Phone };