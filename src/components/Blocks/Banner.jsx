import { Filter } from "../Filter";

const Banner = ({ image }) => {
  let bgImage = image || '';

  let params = {
    estateType: 1,
    cities: [],
    bedroomsNum: [],
    priceMin: 100,
    priceMax: 50000,
    footageMin: 0,
    footageMax: 50000,
    currentPage: 1
  };

  return (
    <div className="Banner hidden-mdMinus" style={{ backgroundImage: 'url(' + bgImage + ')' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Filter params={params} departmentValue="sale" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Banner };