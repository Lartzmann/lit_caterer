// src/components/MenuCard.jsx
function MenuCard({ name, color }) {
  return (
    <div
      className="h-32 flex items-center justify-center rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <p className="text-lg font-semibold  text-center">
        {name}
      </p>
    </div>
  );
}

export default MenuCard;
