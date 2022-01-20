import { useContext } from 'react';
import { AppContext } from './context/app.context';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const { cart, setCart } = useContext(AppContext);

  const navigate = useNavigate();

  const handleAddToCart = (product, variant) => {
    const foundItem = cart.find(
      (item) => item.productId === product.id && item.variantId === variant.id
    );
    if (foundItem) {
      foundItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          productId: product.id,
          title: product.metadata.accentuate.mainTitle,
          quantity: 1,
          variantId: variant.id,
          type: variant.title,
          price: variant.priceV2.amount,
          currency: variant.priceV2.currencyCode,
          image: variant.image.src,
        },
      ]);
    }
    navigate('/cart');
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={<ProductList handleAddToCart={handleAddToCart} />}
      />
      <Route
        pathname="product"
        path="/products/:productId"
        element={<ProductDetails handleAddToCart={handleAddToCart} />}
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
