import { Filter } from "./Filter";

const Banner = (props) => {
  let bgImage = props.image || '';

  let params = {
    estateType: "flats",
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
            <Filter params={params} departmentValue='rent' />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Banner };