import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-black border-b border-[#E50914] py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#E50914] font-['Roboto']">
          Araceli Entertainment
        </Link>
        <ul className="flex gap-8 items-center font-['Roboto'] text-sm md:text-base">
          <li>
            <Link to="/" className="text-white hover:text-[#E50914] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-[#E50914] transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white hover:text-[#E50914] transition-colors">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-[#E50914] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
