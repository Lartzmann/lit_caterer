import { Link } from 'react-router-dom'
import { menuItems } from "../../data/menuData";
import MenuCard from "../../components/MenuCard";

const MenuTab = () => {
  return (
    <div>
      <h3 className="text-2xl pb-3">Set Menu for Today</h3>
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

export default MenuTab;
