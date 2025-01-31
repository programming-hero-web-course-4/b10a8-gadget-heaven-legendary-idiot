import { Outlet } from "react-router-dom";
import PageSection from "../components/PageSection";
import useDocumentTitle from "./../utils/useDocumentTitle";

const Dashboard = () => {
  useDocumentTitle("Dashboard - Gadget Heaven");
  return (
    <div className="mb-8">
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
