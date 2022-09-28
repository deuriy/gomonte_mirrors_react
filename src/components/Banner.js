import { Filter } from "./Filter";

const Banner = (props) => {
  let bgImage = props.image || '';

  return (
    <div className="Banner hidden-mdMinus" style={{ backgroundImage: 'url(' + bgImage + ')' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Banner };