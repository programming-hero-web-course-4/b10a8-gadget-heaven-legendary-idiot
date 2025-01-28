import { useContext, useEffect, useState } from "react";
import { AddToCartContext } from "../MainLayout";
import CartBoxCard from "../components/CartBoxCard";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import paymentIcon from "../assets/Group.png";
import toast from "react-hot-toast";

const DisplayCart = () => {
  const { addToCart, setAddToCart } = useContext(AddToCartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveItem = (itemToRemove) => {
    const newList = addToCart.filter(
      (product) => product.product_id !== itemToRemove.product_id
    );
    setAddToCart(newList);
  };
  // Sort By Price
  const handleDescendingSort = () => {
    const filtered = [...addToCart].sort((a, b) => b.price - a.price);
    setAddToCart(filtered);
  };
  // Update Total Price
  useEffect(() => {
    let oldTotal = 0;
    addToCart?.forEach((product) => {
      oldTotal += product.price;
    });
    setTotalPrice(oldTotal);
  }, [addToCart]);
  return (
    <div className="my-8 space-y-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-[#0B0B0B]">Cart</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <h2 className="text-2xl font-bold text-[#0B0B0B]">
            Total Cost: ${totalPrice.toFixed(2)}
          </h2>
          <button
            onClick={handleDescendingSort}
            className="border border-[#8332C5] text-base text-[#9538E2] py-2 px-6 rounded-full inline-flex items-center gap-2 hover:bg-[#8332C5] hover:text-white cursor-pointer"
          >
            <span> Sort By Price</span>
            <HiMiniBarsArrowDown className="size-5" />
          </button>
          <button
            onClick={() => {
              if (addToCart.length !== 0) {
                document.getElementById("paymentModal").showModal();
                // setAddToCart([]);
              } else {
                toast.error("Sorry!! Your Cart is Empty");
              }
            }}
            className="bg-[#9538E2] text-base text-white py-2 px-6 rounded-full hover:text-[#8332C5] hover:bg-white cursor-pointer border"
          >
            Purchase
          </button>
        </div>
      </div>
      {addToCart?.map((product, index) => (
        <CartBoxCard
          key={index}
          item={product}
          handleRemoveItem={handleRemoveItem}
        />
      ))}

      {/* Modal Here */}
      <dialog id="paymentModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-8 md:px-12">
          <div className="py-4 text-center mx-auto space-y-5 border-b border-[#09080F1A]">
            <img
              src={paymentIcon}
              alt="Verified Payment Logo"
              className="mx-auto"
            />
            <h2 className="text-2xl font-bold">Payment Successful</h2>
          </div>

          <div className="py-6 text-center space-y-4">
            <p className="text-[#09080F99]">Thanks for Purchasing</p>
            <p className="text-[#09080F99]">Total: ${totalPrice}</p>
            <form method="dialog">
              <button
                onClick={() => {
                  setAddToCart([]);
                }}
                className="btn block w-full rounded-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DisplayCart;
