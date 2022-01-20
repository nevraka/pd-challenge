import { LinkButton } from './Button';
import { useState } from 'react';

const ProductListItem = ({ product, handleAddToCart }) => {
  const [variant, setVariant] = useState(null);

  return (
    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg px-4 pt-4 pb-16 m-3 bg-white"
      key={product.metadata.petsdeli.uid}
    >
      <img
        className="w-full"
        src={product.image.src}
        alt={product.image.alt}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            'https://cdn.shopify.com/s/files/1/2509/4858/products/PetsDeli_TroFu_Hund-Sensitiv-2.jpg?v=1552633118';
        }}
      />
      <div className="px-6 py-4">
        <p className="font-bold text-l flex justify-center">
          {product.metadata.accentuate.mainTitle}
        </p>
      </div>
      <div className="text-gray-700 text-center mb-2">
        {product.metadata.accentuate.ribbonText1}
      </div>
      <div className="w-full text-center py-2 px-16">
        {product.variants.map((vr, i) => (
          <div className="form-control flex flex-row" key={i}>
            <label className="cursor-pointer label">
              <input
                type="radio"
                name="opt"
                checked={variant && variant.id === vr.id}
                className="radio cursor-pointer"
                value={vr.id}
                onChange={() => setVariant(vr)}
              />
            </label>
            <span className="label-text pl-2">{vr.title}</span>
          </div>
        ))}
      </div>
      <div className="absolute w-full bottom-6 flex space-x-4 justify-center">
        <LinkButton
          text="View Details"
          link={`/products/${product.id}`}
          onClick={() => handleAddToCart(product, variant)}
        />
        <LinkButton
          text="Add to Cart"
          link={'/cart'}
          disabled={!variant}
          onClick={() => handleAddToCart(product, variant)}
        />
      </div>
    </div>
  );
};
export default ProductListItem;
