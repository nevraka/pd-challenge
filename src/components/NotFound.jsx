import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-24">
        <div>
          <h1 className="text-2xl font-medium"> Page not found!</h1>
        </div>
        <img src="/image/notfound.png" alt="404" className="w-96 pt-24"></img>
        <Link to={'/'}>
          <div className="py-8 text-l font-medium underline">Home Page</div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
