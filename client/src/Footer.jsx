import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Phoenix</h3>
          <p className="text-gray-400 text-sm">Your transformation starts here.</p>
        </div>
        <div className="space-x-4">
          <Link to="#" className="hover:text-orange-500">Facebook</Link>
          <Link to="#" className="hover:text-orange-500">Instagram</Link>
          <Link to="#" className="hover:text-orange-500">Twitter</Link>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 Phoenix Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
