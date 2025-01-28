import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";

import Home from "../pages/Home";
import GadgetsHome from "../pages/GadgetsHome";
import ProductPage from "../pages/ProductPage";
import Dashboard from "../pages/Dashboard";
import DisplayCart from "../pages/DisplayCart";
import WishList from "../pages/WishList";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <GadgetsHome />,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/:category",
            element: <GadgetsHome />,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/categories/:category",
        element: <p>Will Load Item Later</p>,
      },
      {
        path: "/statistics",
        element: <p>Will Load Statistics Later</p>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/cart",
            element: <DisplayCart />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/:slug/:item",
        element: <ProductPage />,
        loader: () => fetch("../gadgets.json"),
      },
    ],
  },
]);

export default routes;
