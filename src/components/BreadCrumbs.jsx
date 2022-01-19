import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  return (
    <div className=" text-gray-500  w-full px-20 pt-20">
      <Link className="hover:underline mr-2" to={'/'}>
        Home
      </Link>
      {pathname !== '/' && <span>{pathname}</span>}
    </div>
  );
};

export default BreadCrumbs;
