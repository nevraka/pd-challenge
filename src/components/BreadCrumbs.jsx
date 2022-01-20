import { Link } from 'react-router-dom';

const BreadCrumbs = ({ pageName }) => {
  return (
    <div className=" text-gray-500  w-full px-10 pt-10">
      <Link className="hover:underline mr-2" to={'/'}>
        Home
      </Link>
      {pageName && <span>{`/ ${pageName}`}</span>}
    </div>
  );
};

export default BreadCrumbs;
