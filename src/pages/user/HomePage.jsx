import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import MenuCard from "../../components/MenuCard";
import { menuItems } from "../../data/menuData";

const HomePage = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    // <div className="px-4 py-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-1">Menu For Today</h2>
      <p className="text-gray-500 mb-4">{today}</p>

      {/* <div className="flex justify-end mb-4">
        <button className="text-gray-800 hover:text-black">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <MenuCard name={item.name} color={item.color} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


