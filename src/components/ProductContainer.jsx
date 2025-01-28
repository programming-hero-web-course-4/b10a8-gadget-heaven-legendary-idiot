import { Rating } from "@mui/material";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { AddToCartContext, WishListContext } from "../MainLayout";
import { useContext } from "react";
import toast from "react-hot-toast";
const ProductContainer = ({ product }) => {
  const {
    product_id,
    product_title,
    description,
    product_img,
    category,
    slug,
    price,
    specifications,
    availability,
    rating,
  } = product;

  const { addToWishList, setAddToWishList } = useContext(WishListContext);
  const { addToCart, setAddToCart } = useContext(AddToCartContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 absolute top-52 md:top-44 bg-white w-11/12 sm:w-[85%] left-1/2 -translate-x-1/2 rounded-2xl">
      <figure className="h-[350px] sm:h-[500px] md:col-span-2 shadow-xs rounded-2xl overflow-clip">
        <img
          src={product_img}
          alt={product_title}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#09080F]">
          {product_title}
        </h2>
        <p className="text-base text-[#09080FCC] font-semibold">
          Price: ${price}
        </p>
        {availability ? (
          <div className="inline-block py-2 px-4 rounded-full bg-[#309c081a] border border-[#309C08] text-[#309C08]">
            In Stock
          </div>
        ) : (
          <div className="inline-block py-2 px-4 rounded-full bg-[#ff001910] border border-[#ff0000bd] text-[#ff0000]">
            Out of Stock
          </div>
        )}
        <p className="text-base text-[#09080F99]">{description}</p>
        <p className="text-base text-[#09080FCC] font-bold">Specification:</p>
        <ol className="list-decimal list-inside">
          {specifications?.map((spec, index) => (
            <li key={index} className="text-base text-[#09080F99]">
              {spec}
            </li>
          ))}
        </ol>
        <p className="text-base font-bold text-[#09080F]">Rating:</p>
        <div className="flex items-center gap-4">
          <Rating
            name="half-rating-read"
            value={parseFloat(rating)}
            defaultValue={0}
            precision={0.5}
            readOnly
          />
          <span className="bg-[#09080f0d] text-base font-normal px-4 py-1 rounded-full">
            {rating}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setAddToCart([...addToCart, product]);
              toast.success("Item Added to Cart!!");
            }}
            className="bg-[#9538E2] hover:bg-[#9538e2d7] border text-white rounded-full px-4 py-2 cursor-pointer flex items-center gap-2 text-lg font-semibold"
          >
            <span>Add To Cart</span>
            <IoCartOutline className="size-6" />
          </button>
          <button
            onClick={() => {
              setAddToWishList([...addToWishList, product]);
              toast.success("Item Added to Wishlist!!");
            }}
            className="rounded-full p-2 hover:bg-stone-300 cursor-pointer border border-[#0b0b0b26] font-bold"
          >
            <IoHeartOutline className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
