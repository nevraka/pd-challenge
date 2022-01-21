import cx from 'classnames';

const VariantDropdown = ({ product, variant, onSelect }) => {
  return (
    <div className="dropdown relative inline-block text-l pt-2 px-4 sm:pt-1">
      <button className="dropdown-toogle bg-[#ff5768] font-l py-2 px-4 rounded-lg flex leading-tight items-center text-sm text-center whitespace-nowrap text-white h-10 ">
        <span className="mr-1">
          {variant
            ? `${variant.title} - ${variant.priceV2.amount}${variant.priceV2.currencyCode}`
            : 'Select Size'}
        </span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="dropdown-menu absolute min-w-max hidden bg-white text-base py-2 list-none text-left rounded-lg shadow-lg cursor-pointer m-0 border-none">
        {product.variants.map((vr) => {
          return (
            <div>
              <li
                className={cx(
                  'dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100',
                  { disabled: !vr.availableForSale }
                )}
                onClick={() => onSelect(vr)}
              >
                {vr.title} - {Number(vr.priceV2.amount)}
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
