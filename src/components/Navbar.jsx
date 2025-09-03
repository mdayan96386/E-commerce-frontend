import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import { ShoppingCart, Home, History, Store, Menu, X } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
    setMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/shop", label: "Shop", icon: <Store size={18} /> },
    { path: "/cart", label: "Cart", icon: <ShoppingCart size={18} /> },
    { path: "/history", label: "History", icon: <History size={18} /> },
  ];

  return (
    <nav className="bg-blue-900 text-white">
      <div className="flex justify-between items-center py-3 px-6">
        <Link to="/" className="text-xl font-black">
          ElectroShop
        </Link>

         {/* Desktop Links */}
        {user && (
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-semibold transition ${
                    location.pathname === link.path
                      ? "text-lime-400 bg-white"
                      : "text-white hover:text-lime-400"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:block">
          {!user ? (
            <>
              <Link
                className="py-1 px-3 rounded-md bg-lime-500 text-sm font-bold mx-1 hover:bg-lime-600"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="py-1 px-3 rounded-md bg-lime-500 text-sm font-bold mx-1 hover:bg-lime-600"
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="py-1 px-3 rounded-md bg-red-500 text-sm font-bold mx-1 hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 p-4 space-y-4">
          {user ? (
            <>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center space-x-2 py-2 px-3 rounded-md text-sm font-semibold transition ${
                        location.pathname === link.path
                          ? "text-lime-400 bg-white"
                          : "text-white hover:text-lime-400"
                      }`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleLogOut}
                className="w-full mt-4 py-2 px-3 rounded-md bg-red-500 text-sm font-bold hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                onClick={() => setMenuOpen(false)}
                className="block w-full py-2 px-3 rounded-md bg-lime-500 text-sm font-bold text-center hover:bg-lime-600"
                to="/login"
              >
                Login
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="block w-full py-2 px-3 rounded-md bg-lime-500 text-sm font-bold text-center hover:bg-lime-600"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
