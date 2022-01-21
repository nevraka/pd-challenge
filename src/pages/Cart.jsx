import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import BreadCrumbs from '../components/BreadCrumbs';
import { LinkButton } from '../components/Button';

const Cart = () => {
  const { cart } = useContext(AppContext);

  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const formattedTotal = total.toFixed(2).toString();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center mt-14 ">
        <h1 className="text-2xl">The cart is empty!</h1>
        <LinkButton className="underline" link="/" text="Continue shopping" />
      </div>
    );
  }

  return (
    <>
      <BreadCrumbs pageName="Cart" />
      <h1 className="text-center m-4 mt-5 md:mt-8 text-xl md:text-2xl">
        Your Cart
      </h1>
      <div className="flex flex-wrap justify-center text-xs md:text-base ">
        <div className="w-full bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 flex flex-col m-4 overflow-hidden ">
          <div className="w-full md:text-base mb-4 px-3">
            <div className="w-full flex">
              <div className="w-4/6">Description</div>
              <div className="w-1/6 text-center">Quantity</div>
              <div className="w-1/6 text-center">Price</div>
            </div>
            {cart.map((item) => {
              return (
                <div className="flex w-full flex-row py-4">
                  <div className="w-4/6">
                    <div className="flex items-center ">
                      <img
                        className="self-center mr-4 "
                        src={item.image}
                        alt="key"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
                        }}
                        height="30px"
                        width="50px"
                      />
                      {item.title} / {item.type}
                    </div>
                  </div>
                  <div className="w-1/6 text-center">{item.quantity}</div>
                  <div className="w-1/6 text-center">
                    {item.price * item.quantity.toFixed(2).toString()} &nbsp;
                    {item.currency}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="font-bold text-base md:text-lg ml-auto px-4 pb-4">{`Total Payment: EUR ${formattedTotal}`}</div>
      </div>
    </>
  );
};

export default Cart;
