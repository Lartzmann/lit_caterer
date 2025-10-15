const dummyUsers = [
  { id: 1, name: "Mr. Minta Botwe", institution: "MoF", color: "bg-red-400" },
  { id: 2, name: "Naa-Dey Ashie", institution: "MoF", color: "bg-blue-400" },
  { id: 3, name: "Lisa", institution: "MoF", color: "bg-green-400" },
  { id: 4, name: "Andrews", institution: "University of Ghana", color: "bg-red-400" },
  { id: 5, name: "Jane Smith", institution: "KNUST", color: "bg-blue-400" },
  { id: 6, name: "Michael Brown", institution: "Legon Medical School", color: "bg-amber-400" },
  { id: 7, name: "Lisa Boadu", institution: "MoF", color: "bg-green-400" },
  { id: 8, name: "Andrews", institution: "University of Ghana", color: "bg-red-400" },
  { id: 9, name: "Jane Smith", institution: "KNUST", color: "bg-blue-400" },
];

const OrdersTab = () => {
  return (
    <div className="p-2 space-y-4">
      <h3 className="text-2xl pb-3">Order List</h3>
      {dummyUsers.map((user) => (
        <div key={user.id} className="flex items-center border-1 border-gray-200 rounded-md px-2 py-2 space-x-4">
          {/* Rounded Image Placeholder */}
          <div className={`w-10 h-10 rounded-full ${user.color}`}></div>

          {/* Text Content */}
          <div>
            <div className="font-bold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-500">{user.institution}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTab;
