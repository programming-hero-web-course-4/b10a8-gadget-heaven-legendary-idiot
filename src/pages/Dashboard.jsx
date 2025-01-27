import { Outlet } from "react-router-dom";
import PageSection from "../components/PageSection";

const Dashboard = () => {
  return (
    <div>
      <PageSection
        title="Dashboard"
        description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        btn1="Cart"
        btn2="Wishlist"
      />
      <Outlet />
    </div>
  );
};

export default Dashboard;
