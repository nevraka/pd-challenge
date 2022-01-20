import { shallow } from 'enzyme';
import { Button, LinkButton } from './Button';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const component = shallow(
      <Button onClick={mockCallBack} disabled={false} text="ab" />
    );
    const button = component.find('button');
    expect(button.prop('disabled')).toBe(false);
    expect(button.text()).toBe('ab');

    button.simulate('click');
    expect(mockCallBack).toBeCalledTimes(1);
  });

  it('Test links', () => {
    const wrapper = shallow(<LinkButton link="http://example.com" />);
    const url = wrapper.prop('to');
    expect(url).toBe('http://example.com');
  });
});
