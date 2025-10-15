// src/components/StatCard.jsx
const StatCard = ({ label, value }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 text-center">
      <div className="text-[3rem] font-bold">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
};

export default StatCard;
