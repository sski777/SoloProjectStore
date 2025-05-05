import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/phoenixlogo.png"
          alt="Phoenix Logo"
          className="w-8 h-8"
        />
        <span className="text-2xl font-bold">Phoenix</span>
      </Link>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>

          {!isAuthenticated ? (
            <li>
              <button
                onClick={() => loginWithRedirect()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Log In
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-orange-500 underline"
                >
                  Profile
                </Link>
              </li>
              <li>
                 <Link to='/cart' className="hover:text-orange-500 underline">
                  Cart
                 </Link>
              </li>
              <li>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
