import { Link } from "react-router-dom";

const Logo = ({ image, title = "Homepage", alt = "Logo", path = "/" }) => {
  return (
    <div className="Logo Header_logo">
      <Link className="Logo_link" to={path} title={title}>
        <img className="Logo_img" src={image} alt={alt} />
      </Link>
    </div>
  );
}

export { Logo };