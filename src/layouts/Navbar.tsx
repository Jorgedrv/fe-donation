import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import UserMenu from "../components/common/UserMenu";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const menus = JSON.parse(localStorage.getItem("menus") || "[]");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/30 shadow-[0_1px_3px_rgba(0,0,0,0.07)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-xl w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/campaigns">Campaigns</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              {!user && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 animate-fade-in">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/campaigns">
            Campaigns
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <UserMenu user={user} menus={menus} />
          ) : (
            <>
              <Link
                to="/login"
                className="hidden md:block text-gray-700 hover:text-primary transition font-medium"
              >
                Log in
              </Link>
            </>
          )}

          <Button
            size="md"
            variant="soft"
            color="primary"
            className="hidden md:inline-flex shadow-sm hover:shadow-md transition-all px-6 py-2"
            as={Link}
            to="/campaigns"
          >
            Donate
          </Button>
        </div>
      </div>
    </nav>
  );
}
