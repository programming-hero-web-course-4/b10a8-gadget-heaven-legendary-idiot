import { useContext, useEffect, useState } from "react";
import { AddToCartContext } from "../MainLayout";
import CartBoxCard from "../components/CartBoxCard";

const DisplayCart = () => {
  const { addToCart, setAddToCart } = useContext(AddToCartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    addToCart?.forEach((product) => {
      setTotalPrice((prev) => prev + product.price);
    });
  }, [addToCart]);
  return (
    <div className="my-8 space-y-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-[#0B0B0B]">Cart</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <h2 className="text-2xl font-bold text-[#0B0B0B]">
            Total Cost: ${totalPrice.toFixed(2)}
          </h2>
          <button className="border border-[#8332C5] text-base text-[#9538E2] py-2 px-6 rounded-full">
            Sort By Price
          </button>
          <button className="bg-[#9538E2] text-base text-white py-2 px-6 rounded-full">
            Purchase
          </button>
        </div>
      </div>
      {addToCart?.map((product, index) => (
        <CartBoxCard key={index} item={product} />
      ))}
    </div>
  );
};

export default DisplayCart;
