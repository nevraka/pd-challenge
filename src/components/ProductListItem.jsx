import { LinkButton, Button } from './Button';
import { useState } from 'react';
import cx from 'classnames';

const ProductListItem = ({ product, handleAddToCart }) => {
  const [variant, setVariant] = useState(null);

  return (
    <div
      className="relative max-w-sm overflow-hidden p-3"
      key={product.metadata.petsdeli.uid}
    >
      <div className="flex flex-col rounded shadow-lg h-full">
        <img
          className="w-full"
          src={product.image.src}
          alt={product.image.alt}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
          }}
        />
        <div className="px-6 py-4">
          <h2 id="mainTitle" className="font-bold text-l flex justify-center">
            {product.metadata.accentuate.mainTitle}
          </h2>
          <p id="ribbonText" className="text-gray-700 text-center p-2">
            {product.metadata.accentuate.ribbonText1}
          </p>
        </div>
        <div className="flex flex-col w-full text-center py-2 px-16 flex-grow">
          {product.variants.map((vr, i) => (
            <div className="form-control flex flex-row" key={i}>
              <label className="cursor-pointer label">
                <input
                  type="radio"
                  name={'opt' + product.metadata.petsdeli.uid}
                  disabled={!vr.availableForSale}
                  checked={variant ? variant.id === vr.id : false}
                  className="radio cursor-pointer"
                  value={vr.id}
                  onChange={() => setVariant(vr)}
                />
                <span className="variant label-text pl-2">{vr.title}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center py-6">
          <LinkButton
            text="View Details"
            link={`/products/${product.id}`}
            className="bg-[#1a335b] hover:bg-blue-900  text-white font-bold py-2 px-4 rounded-md"
          />
          <Button
            text="Add to Cart"
            disabled={!variant}
            className={cx(
              'text-white font-bold py-2 px-4 ml-4 rounded-md',
              !variant
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#1a335b] hover:bg-blue-900'
            )}
            onClick={() => handleAddToCart(product, variant)}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductListItem;
