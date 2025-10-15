// src/components/TabList.jsx
const tabs = ["Dashboard", "Menu", "Orders"];

const TabList = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex w-full justify-between space-x-4 overflow-x-auto">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-4 whitespace-nowrap text-sm font-medium ${
            activeTab === tab
              ? "bg-gray-100 rounded-md border-blue-500 font-bold"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabList;
