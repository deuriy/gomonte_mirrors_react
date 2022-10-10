import { Link } from "react-router-dom";

const MainMenu = ({ items }) => {
  return (
    <div className="MainMenu Header_mainMenu hidden-xlMinus">
      <ul className="MainMenu_menu">
        {
          items.map(item => (
            <li key={item["path"]} className="MainMenu_item">
              <Link className="MainMenu_link" to={item["path"]}>{item["text"]}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { MainMenu };