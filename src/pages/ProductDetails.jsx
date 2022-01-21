import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../context/app.context';
import { Button } from '../components/Button';
import VariantDropdown from '../components/VariantDropdown';
import Loading from '../components/Loading';
import BreadCrumbs from '../components/BreadCrumbs';
import Error from '../components/Error';
import cx from 'classnames';

const ProductDetails = ({ handleAddToCart }) => {
  const { products, loading } = useContext(AppContext);
  const [variant, setVariant] = useState(null);
  const { productId } = useParams();

  if (loading) {
    return <Loading />;
  }

  const product = products.find((el) => el.id.toString() === productId);

  if (!product) {
    return <Error message="Product not found!" />;
  }

  return (
    <>
      <BreadCrumbs pageName="Product Details" />
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-2 w-full bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 m-5 overflow-hidden ">
          <h1 className="col-span-2 font-bold text-xl text-center m-5 md:text-3xl md:mt-12 mb-4">
            {product.title}
          </h1>
          <div className="col-span-2 md:col-span-1">
            <h2 className="px-3 py-1 text-sm text-center mt-5 md:text-xl ">
              {product.metadata.accentuate.subTitle}
            </h2>
            <div className="flex justify-center">
              <img
                className="object-cover rounded-t-lg md:w-30 md:rounded-none md:rounded-l-lg"
                src={product.image.src}
                alt={product.image.alt}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
                }}
                width="300px"
              ></img>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-row px-2 py-8 justify-center ">
              <VariantDropdown
                product={product}
                variant={variant}
                onSelect={(vr) => setVariant(vr)}
              />
              <div className="pt-2 sm:pt-1">
                <Button
                  disabled={!variant}
                  className={cx(
                    'text-white hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4  text-center transition-all duration-500 h-10',
                    !variant
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#1a335b] cursor-pointer'
                  )}
                  onClick={() => handleAddToCart(product, variant)}
                  text="Add to Cart"
                />
              </div>
            </div>
            <ul className="px-6 py-8">
              {product.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200 last:mr-0 mr-1 mb-1"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
