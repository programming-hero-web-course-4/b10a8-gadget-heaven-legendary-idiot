import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="lg:col-span-1 p-8 border border-[#09080F0D] shadow-xs rounded-2xl flex flex-wrap gap-4 md:flex-col h-fit">
      {categories.map((category) => {
        return (
          <NavLink
            to={`/${category.slug}`}
            className={({ isActive }) =>
              `px-6 py-2 text-lg font-medium rounded-4xl ${
                isActive
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080f0d] text-[#09080F99]"
              }`
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBarCategories;
