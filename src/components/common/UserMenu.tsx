import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserMenuProps {
  user: {
    username: string;
    role?: string;
    [key: string]: any;
  };
  menus: {
    id: number | string;
    name: string;
    path: string;
  }[];
}

export default function UserMenu({ user, menus }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("menus");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          w-10 h-10 rounded-full bg-gradient-to-br 
          from-purple-500 to-blue-500 text-white 
          flex items-center justify-center font-semibold shadow-md
          hover:scale-105 transition
        "
      >
        {user.username?.charAt(0).toUpperCase()}
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-3 w-48 bg-white rounded-xl border 
            shadow-lg p-2 animate-fade-in
          "
        >
          <p className="px-3 py-2 text-gray-700 font-semibold border-b">
            {user.username}
          </p>

          {menus?.map((m: any) => (
            <Link
              key={m.id}
              to={m.path}
              className="block px-3 py-2 hover:bg-gray-100 rounded-lg text-sm"
            >
              {m.name}
            </Link>
          ))}

          <button
            onClick={logout}
            className="text-left w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
