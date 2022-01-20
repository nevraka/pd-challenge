import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import ProductListItem from '../components/ProductListItem';
import Loading from '../components/Loading';
import BreadCrumbs from '../components/BreadCrumbs';
import Error from '../components/Error';

const ProductList = ({ handleAddToCart }) => {
  const { products, loading, cart } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  if (!cart) {
    return <Error />;
  }

  return (
    <>
      <BreadCrumbs pageName="Products" />
      <div className="p-4 flex flex-wrap justify-center">
        {products.map((product, i) => (
          <ProductListItem
            product={product}
            handleAddToCart={handleAddToCart}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
