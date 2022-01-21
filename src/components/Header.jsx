import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import petsdelisvg from './petsdeli-logo.svg';
import sb from './sb.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useContext(AppContext);

  return (
    <header className="px-4 py-4 flex flex-row justify-between">
      <Link to={'/'}>
        <img src={petsdelisvg} alt="logo" className="flex" />
      </Link>
      <div className="relative place-self-center mr-1">
        <Link to={'/cart'} className="z-0">
          <img src={sb} alt="bag" height="25px" width="40px" />
          <div className="absolute -right-2 -top-2 inline-flex items-center justify-center px-2 py-1.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cart.length}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
