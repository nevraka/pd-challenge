import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import ProductListItem from '../components/ProductListItem';
import Loading from '../components/Loading';
import BreadCrumbs from '../components/BreadCrumbs';
import Error from '../components/Error';

const ProductList = ({ handleAddToCart }) => {
  const { products, loading } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  if (!products) {
    return <Error message="No products retrieved!" />;
  }

  return (
    <>
      <BreadCrumbs pageName="Products" />
      <h2 className="p-4 flex flex-wrap justify-center">
        {products.map((product, i) => (
          <ProductListItem
            product={product}
            handleAddToCart={handleAddToCart}
            key={i}
          />
        ))}
      </h2>
    </>
  );
};

export default ProductList;
