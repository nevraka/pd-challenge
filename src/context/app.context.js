import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const AppContext = createContext('');

const AppProviderWrapper = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const savedCart = localStorage.getItem('cart') ?? [];

    const getProductData = async () => {
      setLoading(true);
      setError(false);
      try {
        let response = await axios.get(`${API_URL}`);
        setProducts(response.data.products);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    getProductData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProviderWrapper };
