import { useParams } from 'react-router-dom';

const ObjectPage = () => {
  let { id } = useParams();
  // console.log(id);

  return (
    <p>Object {id} page</p>
  );
}

export { ObjectPage };