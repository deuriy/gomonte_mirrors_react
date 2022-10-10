import { useSearchParams } from 'react-router-dom';

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ params, currentPage = 1, totalPages = 1, setCurrentPage, setLoading, ...rest }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  function onClickHandler(value) {
    let pageNumber = Number(value);

    if (pageNumber < 1) {
      pageNumber = 1;
    }

    if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }

    setCurrentPage(pageNumber);

    setSearchParams({
      "estate_type": params.estateType,
      "cities": params.cities,
      "bedrooms_num": params.bedroomsNum,
      "price_min": params.priceMin,
      "price_max": params.priceMax,
      "footage_min": params.footageMin,
      "footage_max": params.footageMax,
      "current_page": pageNumber
    });
  }

  function createPaginationItems() {
    let paginationItems = [];

    for (let i = 0; i < totalPages; i++) {
      paginationItems.push(
        <li key={i} className={i === (currentPage - 1) ? 'Pagination_item Pagination_item-current' : 'Pagination_item'}>
          <button type="button" className="Pagination_btn" onClick={() => onClickHandler(i + 1)}>{i + 1}</button>
        </li>
      );
    }

    return paginationItems;
  }

  return (
    <div className="Pagination" {...rest}>
      <ul className="Pagination_list">
        <li className="Pagination_item">
          <button type="button" className="Pagination_prevBtn" onClick={() => onClickHandler(currentPage - 1)} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>
        {createPaginationItems()}
        <li className="Pagination_item">
          <button type="button" className="Pagination_nextBtn" onClick={() => onClickHandler(currentPage + 1)} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export { Pagination };