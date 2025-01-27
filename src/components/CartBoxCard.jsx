import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { AddToCartContext } from "../MainLayout";
import toast from "react-hot-toast";

const CartBoxCard = ({ item, btnText, handleRemoveItem }) => {
  const { product_title, description, price, product_img } = item;
  const { addToCart, setAddToCart } = useContext(AddToCartContext);

  return (
    <div className="bg-white p-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-4 rounded-2xl">
      <figure className="h-[250px] md:h-[180px] sm:col-span-2 lg:col-span-1 border border-gray-200 rounded-2xl overflow-hidden">
        <img
          src={product_img}
          alt={product_title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="sm:col-span-3 lg:col-span-4 flex justify-between gap-4">
        <div className="space-y-3 overflow-hidden">
          <h2 className="text-2xl font-semibold text-[#09080F]">
            {product_title}
          </h2>
          <p className="w-full text-nowrap overflow-hidden text-ellipsis text-base text-[#09080F99]">
            {description}
          </p>
          <p className="text-lg font-medium text-[#09080FCC]">
            Price: ${price}
          </p>
          {btnText && (
            <button
              onClick={() => {
                handleRemoveItem(item);
                setAddToCart([...addToCart, item]);
                toast.success("Item Added to Cart!!");
              }}
              className="bg-[#9538E2] text-white text-base py-2 px-6 rounded-full"
            >
              {btnText}
            </button>
          )}
        </div>

        <button
          onClick={() => {
            handleRemoveItem(item);
            toast.error("Item Has Been Removed!!");
          }}
          className="inline-flex"
        >
          <RxCrossCircled className="text-[#FF0000] size-8" />
        </button>
      </div>
    </div>
  );
};

export default CartBoxCard;
