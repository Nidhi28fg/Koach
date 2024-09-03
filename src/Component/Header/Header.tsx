import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Userpic from "../UserImage.jpg";


export default function Header() {
  return (
    <header className="shadow   
 sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">   

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Userpic}
              className="mr-4 h-16"
              alt="Logo"
            />
          </Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-medium hover:text-orange-600"
                  : "text-gray-500 hover:text-gray-700 font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-medium hover:text-orange-600"
                  : "text-gray-500 hover:text-gray-700 font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-medium hover:text-orange-600"
                  : "text-gray-500 hover:text-gray-700 font-medium"
              }
            >
              Contact
            </NavLink>
          {/* Login and Get Started Buttons */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600   
 hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}