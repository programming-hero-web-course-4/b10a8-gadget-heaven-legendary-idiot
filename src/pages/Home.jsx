import { Outlet } from "react-router-dom";

import HomeBanner from "../components/HomeBanner";
import useDocumentTitle from "../utils/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Gadget Heaven");
  return (
    <>
      <HomeBanner />
      <Outlet />
    </>
  );
};

export default Home;
