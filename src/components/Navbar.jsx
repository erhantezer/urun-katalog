import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        className="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        />
      </svg>
    </button>
    <div
      className="collapse navbar-collapse flex-grow items-center"
      id="navbarSupportedContent1"
    >
      <Link className="text-xl text-white  font-semibold ml-8 bg-cyan-600 p-2 rounded-full pl-4 pr-4" to="#">
        Piton<span className="text-cyan-200">Shop</span>
      </Link>
      {/* Left links */}

      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className="flex items-center relative">
      {/* Icon */}


      <div className="dropdown relative mr-4">
        <Link
          className="dropdown-toggle flex items-center hidden-arrow"
          to="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            className="rounded-full"
            style={{ height: 25, width: 25 }}
            alt=""
            loading="lazy"
          />
        </Link>
        <ul
          className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="#"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="#"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="#"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* Right elements */}
  </div>
</nav>

    )
};

export default Navbar;
