import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => toast.success('Logout Successful'))
      .catch((err) => {
        console.error(err);
        toast.error('Logout Failed');
      });
  };

  // Navigation Links
  const links = (
    <>
      <li className="font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'text-gray-800 hover:text-blue-600 duration-300'
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-medium">
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'text-gray-800 hover:text-blue-600 duration-300'
          }
        >
          Services
        </NavLink>
      </li>

      <li className="font-medium">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'text-gray-800 hover:text-blue-600 duration-300'
          }
        >
          About Us
        </NavLink>
      </li>

      <li className="font-medium">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'text-gray-800 hover:text-blue-600 duration-300'
          }
        >
          Contact
        </NavLink>
      </li>

      <li className="font-medium">
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'text-gray-800 hover:text-blue-600 duration-300'
          }
        >
          Support
        </NavLink>
      </li>

      {/* Private Route – only visible after login */}
      {user && (
        <li className="font-medium">
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold underline'
                : 'text-gray-800 hover:text-blue-600 duration-300'
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-3 px-0">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} className="btn btn-ghost text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-56 shadow space-y-2 p-3"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          WarmPaws
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{links}</ul>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative group">
              <img
                src={
                  user.photoURL ||
                  'https://i.ibb.co/VcY3rmXz/default-avatar.png'
                }
                referrerPolicy="no-referrer"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-blue-500 cursor-pointer object-cover"
              />

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-50">
                <p className="font-semibold text-gray-800">
                  {user.displayName || 'User'}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <hr className="my-2" />

                <button
                  onClick={handleSignOut}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-md text-sm font-medium transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 px-6 py-2 text-white rounded-3xl hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <ToastContainer theme="colored" autoClose={3000} />
    </header>
  );
};

export default Navbar;
