import { Link } from 'react-router-dom';

export default function Button({ children, link }) {
  return (
    <Link
      to={link}
      className="mt-4 w-40 rounded-lg border-1 border-2 border-primary py-3 px-6 font-sans text-xs text-center 
        font-bold uppercase text-primary transition-all hover:shadow-md hover:bg-secondary"
    >
      {children}
    </Link>
  );
}