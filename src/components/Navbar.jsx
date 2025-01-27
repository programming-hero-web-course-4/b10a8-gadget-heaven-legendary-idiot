import { Link, NavLink } from "react-router-dom";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#9538E2] font-bold" : ""
          }
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#9538E2] font-bold" : ""
          }
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="p-2 hover:bg-stone-300 rounded-md lg:hidden"
          >
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-medium"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="text-base font-medium sm:text-2xl sm:font-bold hover:bg-stone-200 p-2 rounded-lg text-nowrap"
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="bg-stone-100 border-1 rounded-full p-2 hover:bg-amber-200 cursor-pointer">
          <IoCartOutline className="size-5" />
        </button>
        <button className="bg-stone-100 border-1 rounded-full p-2 hover:bg-amber-200 cursor-pointer">
          <IoHeartOutline className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
