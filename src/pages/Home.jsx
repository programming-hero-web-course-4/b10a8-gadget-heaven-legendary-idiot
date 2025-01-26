import { Outlet } from "react-router-dom";

import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Outlet />
    </>
  );
};

export default Home;
