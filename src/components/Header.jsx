import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import petsdelisvg from './petsdeli-logo.svg';
import sb from './sb.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="px-8 pt-4 flex flex-row items-center">
      <Link to={'/'}>
        <img src={petsdelisvg} alt="logo" className="flex" />
      </Link>
      <div className="w-full text-right relative pr-8 ">
        {/* TODO put cart into header */}
        <Link to={'/cart'} className="absolute right-12 z-0 top-0">
          {/* TODO import image directly */}
          <img src={sb} alt="bag" height="30px" width="50px" />
        </Link>
        <div className="absolute right-10 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {cart.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
