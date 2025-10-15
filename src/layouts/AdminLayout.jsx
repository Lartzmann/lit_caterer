// src/layouts/AdminLayout.jsx
import { useState } from "react";
import TabList from "../components/TabList";
import DashboardTab from "../pages/admin/AdminDashboard";
import MenuTab from "../pages/admin/MenuTab";
import OrdersTab from "../pages/admin/OrdersTab";
import { Bell, User, Search } from "lucide-react";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardTab />;
      case "Menu":
        return <MenuTab />;
      case "Orders":
        return <OrdersTab />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
        <div className="flex gap-4">
          {/* <img src="/assets/icons/notification.svg" alt="Notifications" className="w-6 h-6" />
          <img src="/assets/icons/profile.svg" alt="Profile" className="w-6 h-6" /> */}
        <Bell className="w-5 h-5 text-black" />
        <User className="w-5 h-5 text-black" />  
        </div>
      </header>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 py-2 rounded border border-gray-300"
          />
          <span className="absolute top-2.5 left-3 text-gray-400">
            <Search className="w-5 h-5 text-black" />
          </span>
        </div>
      </div>

      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminLayout;
