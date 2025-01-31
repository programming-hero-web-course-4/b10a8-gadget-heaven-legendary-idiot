import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { WishListContext } from "./../MainLayout";

const Navbar = ({ wishList, cartList }) => {
  const { pathname } = useLocation();
  const redirect = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-stone-600 font-semibold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-stone-600 font-semibold" : ""
          }
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-stone-600 font-semibold" : ""
          }
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-stone-600 font-semibold" : ""
          }
          to={"/faq"}
        >
          FAQ
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={
        pathname === "/"
          ? "navbar bg-[#9538E2] text-white"
          : "navbar bg-base-100"
      }
    >
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
            className={`menu menu-sm dropdown-content bg-base-900 rounded-box z-[1] mt-3 w-52 p-2 shadow-md text-lg font-medium ${
              pathname === "/" ? "bg-[#9538E2] text-white" : "bg-base-100"
            }`}
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="text-base font-medium sm:text-2xl sm:font-bold hover:bg-stone-100 hover:text-[#9538E2] p-2 rounded-lg text-nowrap"
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3 text-black">
        <button
          onClick={() => redirect("/dashboard/cart")}
          className="bg-stone-100 border border-stone-400 rounded-full p-2 hover:bg-stone-200 cursor-pointer relative"
        >
          <IoCartOutline className="size-5" />
          <sup className="absolute -top-2 -right-1 bg-base-200 px-1 text-sm rounded-2xl font-medium">
            {cartList.length === 0 ? "" : cartList.length}
          </sup>
        </button>
        <button
          onClick={() => redirect("/dashboard/wishlist")}
          className="bg-stone-100 border border-stone-400 rounded-full p-2 hover:bg-stone-200 cursor-pointer relative"
        >
          <IoHeartOutline className="size-5" />
          <sup className="absolute -top-2 -right-1 bg-base-200 px-1 text-sm rounded-2xl font-medium">
            {wishList.length === 0 ? "" : wishList.length}
          </sup>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
