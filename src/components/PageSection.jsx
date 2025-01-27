import { NavLink } from "react-router-dom";

const PageSection = ({ title, description, btn1, btn2 }) => {
  return (
    <div className="bg-[#9538E2] text-center py-8 space-y-6">
      <h2 className="text-3xl font-bold text-white w-[85%] md:w-3/5 mx-auto">
        {title}
      </h2>
      <p className="text-base font-normal text-white w-[85%] md:w-3/5 mx-auto">
        {description}
      </p>
      <div className="flex items-center gap-4 justify-center">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            `border py-2 px-6 font-semibold rounded-full hover:bg-white hover:text-[#9538E2] ${
              isActive ? "bg-white text-[#9538E2]" : "border-white text-white"
            }`
          }
        >
          {btn1}
        </NavLink>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            `border py-2 px-6 font-semibold rounded-full hover:bg-white hover:text-[#9538E2] ${
              isActive ? "bg-white text-[#9538E2]" : "border-white text-white"
            }`
          }
        >
          {btn2}
        </NavLink>
      </div>
    </div>
  );
};

export default PageSection;
