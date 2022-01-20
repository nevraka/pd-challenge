import { shallow, mount } from 'enzyme';
import ProductListItem from './ProductListItem';
import { BrowserRouter } from 'react-router-dom';

describe('ProductListItem', () => {
  const mockProducts = [
    {
      uid: 'uid',
      image: { src: 'http://example.com', alt: 'test' },
      metadata: {
        petsdeli: {
          uid: 'RAT3LYP',
        },
        accentuate: {
          mainTitle: 'title',
          ribbonText1: 'ribbon',
        },
      },
      variants: [
        {
          availableForSale: true,
          title: '2180g',
          priceV2: {
            currencyCode: 'EUR',
            amount: '29.99',
          },
        },
      ],
    },
  ];

  it('renders product', () => {
    const component = mount(
      <BrowserRouter>
        <ProductListItem product={mockProducts[0]} />
      </BrowserRouter>
    );
    expect(component.find('#mainTitle').text()).toBe(
      mockProducts[0].metadata.accentuate.mainTitle
    );
    expect(component.find('#ribbonText').text()).toBe(
      mockProducts[0].metadata.accentuate.ribbonText1
    );

    const img = component.find('img');
    expect(img.prop('src')).toBe(mockProducts[0].image.src);
  });

  it('renders variants', () => {
    const wrapper = shallow(<ProductListItem product={mockProducts[0]} />);
    expect(wrapper.find('.variant').text()).toBe(
      mockProducts[0].variants[0].title
    );
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const component = shallow(
      <ProductListItem
        product={mockProducts[0]}
        handleAddToCart={mockCallBack}
      />
    );
    component.find('input').simulate('click');
    component.find('Button').simulate('click');

    expect(mockCallBack).toBeCalledTimes(1);
  });
});
