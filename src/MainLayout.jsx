import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
export const WishListContext = createContext(null);
export const AddToCartContext = createContext(null);

const MainLayout = () => {
  const [addToWishList, setAddToWishList] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  return (
    <div className="w-11/12 m-auto">
      <Toaster />
      <Navbar wishList={addToWishList} cartList={addToCart} />
      <WishListContext.Provider value={{ addToWishList, setAddToWishList }}>
        <AddToCartContext.Provider value={{ addToCart, setAddToCart }}>
          <Outlet />
        </AddToCartContext.Provider>
      </WishListContext.Provider>
      <Footer />
    </div>
  );
};

export default MainLayout;
