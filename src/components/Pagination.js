import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ currentPage = 1, totalPages = 1, onClickHandler = () => { }, ...rest }) => {
  function createPaginationItems() {
    let paginationItems = [];

    for (let i = 0; i < totalPages; i++) {
      let classes = i === (currentPage - 1) ? 'Pagination_item Pagination_item-current' : 'Pagination_item';

      let item = (
        <li key={i} className={classes}>
          <span className="Pagination_text" onClick={onClickHandler} data-value={i + 1}>{i + 1}</span>
        </li>
      );

      paginationItems.push(item);
    }

    return paginationItems;
  }


  return (
    <div className="Pagination" {...rest}>
      <ul className="Pagination_list">
        <li className="Pagination_item">
          <a className="Pagination_prev" href="#">
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {createPaginationItems()}
        <li className="Pagination_item">
          <a className="Pagination_next" href="#">
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Pagination };