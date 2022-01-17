import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import { Link } from 'react-router-dom';
import sb from '../sb.png';

const ProductList = ({ handleAddToCart }) => {
  const { products, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <>
      <Link to={'/cart'}>
        <img
          src={sb}
          alt="bag"
          height="30px"
          width="50px"
          className="mx-4 my-1 flex items-end ml-auto cursor-pointer"
        ></img>
      </Link>
      <div className="p-4 flex flex-wrap justify-center">
        {products.map((product) => {
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg p-3 m-3 bg-white"
              key={product.metadata.petsdeli.uid}
            >
              <div class="pb-2/3">
                <img
                  className="w-full object-cover"
                  src={product.image.src}
                  alt={product.image.alt}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
                  }}
                ></img>
              </div>
              <div className="px-6 py-4">
                <p className="font-bold text-l mb-2 flex justify-center">
                  {product.metadata.accentuate.mainTitle}
                </p>
              </div>
              <div className="text-gray-700 text-base justify-center flex">
                {product.metadata.accentuate.ribbonText1}
              </div>
              <div className="pt-2 pb-2 flex justify-center">
                <Link to={`/products/${product.id}`}>
                  <button className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md m-1">
                    View Details
                  </button>
                </Link>
                <Link to={'/cart'}>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md m-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
