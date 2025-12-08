import { Link } from "react-router-dom";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

export default function Navbar() {
  return (
    <nav className="navbar bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 px-6">
      <div className="navbar-start">
        {/* MOBILE MENU BUTTON */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-box w-52 z-[100]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Log in</Link></li>
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
      </div>

      {/* CENTER — DESKTOP LINKS */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/campaigns">Campaigns</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end flex items-center gap-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-primary font-medium hidden md:block"
        >
          Log in
        </Link>

        <Button
          size="md"
          color="primary"
          as={Link}
          to="/donate"
        >
          Donate
        </Button>
      </div>
    </nav>
  );
}
