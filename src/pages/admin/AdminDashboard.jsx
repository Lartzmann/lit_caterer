// src/pages/admin/AdminDashboard.jsx
import StatCard from "../../components/StatCard";

const stats = [
  { label: "Total Orders", value: 40 },
  { label: "Cancelled", value: 3 },
  { label: "Delivered", value: 32 },
  { label: "Pending", value: 5 }
];

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {stats.map((stat, i) => (
        <StatCard key={i} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
};

export default AdminDashboard;
