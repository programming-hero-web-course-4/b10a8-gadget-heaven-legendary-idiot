import { useEffect, useState } from "react";

const SideBarCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../public/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="lg:col-span-1 p-8 border border-[#09080F0D] shadow-xs rounded-2xl flex flex-wrap gap-4 md:flex-col h-fit">
      {categories.map((category) => {
        return (
          <button
            className="px-6 py-2 bg-[#09080f0d] text-lg text-[#09080F99] font-medium rounded-4xl"
            key={category.id}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default SideBarCategories;
