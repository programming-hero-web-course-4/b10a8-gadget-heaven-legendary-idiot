import { useLoaderData } from "react-router-dom";
import SideBarCategories from "../components/SideBarCategories";
import GadgetCards from "../components/GadgetCards";

const GadgetsHome = () => {
  const allProducts = useLoaderData();

  return (
    <div className="my-12 space-y-8">
      <h2 className="text-[#0B0B0B] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <SideBarCategories />
        <GadgetCards products={allProducts} />
      </div>
    </div>
  );
};

export default GadgetsHome;
