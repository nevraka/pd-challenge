import { Link } from 'react-router-dom';

export const LinkButton = ({ link, ...args }) => (
  <Link to={link}>
    <Button {...args} />
  </Link>
);

export const Button = ({ onClick, text, disabled, className }) => (
  <button disabled={disabled} className={className} onClick={onClick}>
    {text}
  </button>
);
