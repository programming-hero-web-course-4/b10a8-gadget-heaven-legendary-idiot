import { useContext } from "react";
import { WishListContext } from "../MainLayout";
import CartBoxCard from "../components/CartBoxCard";

const WishList = () => {
  const { addToWishList, setAddToWishList } = useContext(WishListContext);
  console.log(addToWishList);
  return (
    <div className="my-8 space-y-5">
      <h2 className="text-2xl font-bold text-[#0B0B0B]">Cart</h2>
      {addToWishList?.map((product, index) => (
        <CartBoxCard key={index} item={product} btn="Add To Cart" />
      ))}
    </div>
  );
};

export default WishList;
