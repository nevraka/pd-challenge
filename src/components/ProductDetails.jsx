import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import VariantDropdown from './VariantDropdown';

const ProductDetails = ({ handleAddToCart }) => {
  const { products, loading } = useContext(AppContext);
  const { productId } = useParams();

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

  const item = products.find((el) => el.id.toString() === productId);

  return (
    <div className="flex flex-wrap justify-center">
      <div className=" w-full bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 flex flex-col m-5 overflow-hidden ">
        <div className="font-bold text-xl text-center m-5 md:text-3xl md:mt-12 mb-4">
          {item.title}
        </div>
        <div className="px-3 py-1">
          <div className=" text-sm text-center mt-5 md:text-2xl ">
            {item.metadata.accentuate.subTitle}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-2">
          <div className="flex justify-center">
            <img
              className="object-cover rounded-t-lg md:w-30 md:rounded-none md:rounded-l-lg"
              src={item.image.src}
              alt={item.image.alt}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
              }}
              width="300px"
            ></img>
          </div>
          <div className="flex flex-row pl-6 pb-2 justify-center">
            <VariantDropdown item={item} />
            <div className="pt-2 sm:pt-1">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4  text-center transition-all duration-500 h-10 "
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="px-6 pt-4 pb-2">
              <ul>
                {item.tags.map((tag) => (
                  <li className="text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200 last:mr-0 mr-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
