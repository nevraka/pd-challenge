import { Link } from 'react-router-dom';

export const LinkButton = ({ link = undefined, ...args }) => (
  <Link to={link}>
    <Button {...args} />
  </Link>
);

export const Button = ({ onClick, text, disabled }) => (
  <button
    disabled={disabled}
    className="bg-[#1a335b] hover:bg-blue-900  text-white font-bold py-2 px-4 rounded-md"
    onClick={onClick}
  >
    {text}
  </button>
);
