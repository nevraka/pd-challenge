import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/app.context';

const Cart = () => {
  const { cart } = useContext(AppContext);

  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <>
      <h1 className="text-center  m-5 md:mt-12 mb-4">Your Cart</h1>
      <div className="flex flex-wrap justify-center">
        <div>Total Payment: EUR{total.toFixed(2).toString()}</div>
        <div className="w-full bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 flex flex-col m-8 overflow-hidden ">
          <div className="flex flex-row justify-between font-bold text-l  m-20 md:text-m md:mt-12 mb-4">
            <div>Description</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>
          {cart.map((el) => {
            return (
              <div className="flex flex-row justify-between items-center m-10 md:mt-12">
                <div className="font-bold text-l md:text-l ">
                  <div>
                    {el.title} / {el.type}
                  </div>
                  <div className="w-full object-cover">
                    <img
                      src={el.image}
                      alt="key"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src =
                          'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
                      }}
                      height="30px"
                      width="50px"
                    ></img>
                  </div>
                </div>
                <div className="pr-20">{el.quantity}</div>
                <div>
                  {el.price * el.quantity.toFixed(2).toString()}
                  {el.currency}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
