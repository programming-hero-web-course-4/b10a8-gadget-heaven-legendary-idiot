import { useLoaderData, useParams } from "react-router-dom";
import SideBarCategories from "../components/SideBarCategories";
import GadgetCards from "../components/GadgetCards";
import { useEffect, useState } from "react";

const GadgetsHome = () => {
  const allProducts = useLoaderData();
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === "all-products") {
      setFilteredProducts(allProducts);
    } else if (category === undefined) {
      setFilteredProducts([...allProducts].slice(0, 6));
    } else {
      const filtered = [...allProducts].filter(
        (product) => product.slug === category
      );
      setFilteredProducts(filtered);
    }
  }, [category, allProducts]);

  return (
    <div className="my-12 space-y-8">
      <h2 className="text-[#0B0B0B] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <SideBarCategories />
        <GadgetCards products={filteredProducts} />
      </div>
    </div>
  );
};

export default GadgetsHome;
