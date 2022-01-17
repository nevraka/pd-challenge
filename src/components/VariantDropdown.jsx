import { useState } from 'react';

const VariantDropdown = ({ item }) => {
  const [variant, setVariant] = useState(null);

  const selectVariant = (v) => {
    setVariant(v);
  };

  return (
    <div className="dropdown inline-block relative text-l pt-2 px-4">
      <button className="bg-rose-500 font-l py-2 px-4 rounded inline-flex items-center text-sm text-center text-white">
        <span className="mr-1">Select Size </span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-sm cursor-pointer">
        {item.variants.map((vr) => {
          return (
            <div>
              <li
                className="bg-gray-200 hover:bg-gray-400 font-l py-2 px-4 block whitespace-no-wrap "
                onClick={() => selectVariant(vr)}
              >
                {vr.title}- {Number(vr.priceV2.amount)}
                {vr.priceV2.currencyCode}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default VariantDropdown;
