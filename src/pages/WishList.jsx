import { useContext } from "react";
import { WishListContext } from "../MainLayout";
import CartBoxCard from "../components/CartBoxCard";

const WishList = () => {
  const { addToWishList, setAddToWishList } = useContext(WishListContext);
  const handleRemoveItem = (itemToRemove) => {
    const newList = addToWishList.filter(
      (product) => product.product_id !== itemToRemove.product_id
    );
    setAddToWishList(newList);
  };
  return (
    <div className="my-8 space-y-5">
      <h2 className="text-2xl font-bold text-[#0B0B0B]">Wishlist</h2>
      {addToWishList?.map((product, index) => (
        <CartBoxCard
          key={index}
          item={product}
          btnText="Add To Cart"
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default WishList;
