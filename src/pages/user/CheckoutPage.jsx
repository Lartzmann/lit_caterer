// // src/pages/user/CheckoutPage.jsx
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import { useState } from "react";

// const CheckoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const order = location.state; // Data passed from ProductDetailPage

//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   if (!order) {
//     return (
//       <div className="p-4">
//         <p>No order details found.</p>
//         <button
//           onClick={() => navigate("/home")}
//           className="mt-4 px-4 py-2 bg-black text-white rounded"
//         >
//           Back to Menu
//         </button>
//       </div>
//     );
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomer((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = () => {
//     alert(
//       `Order placed!\n\nProduct: ${order.name}\nPrice: Ghc ${order.price}.00\nQuantity: ${order.quantity}\nTotal: Ghc ${
//         order.price * order.quantity
//       }.00\nPreferences: ${JSON.stringify(order.preferences)}\n\nCustomer: ${customer.name}, ${customer.phone}, ${customer.address}`
//     );
//     navigate("/home"); // send back home after placing order
//   };

//   return (
//     <div className="min-h-screen pb-20">
//       {/* Header */}
//       <div className="relative h-16 flex items-center px-4">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-4 bg-white p-1 rounded-full shadow"
//         >
//           <ArrowLeft className="w-5 h-5 text-black" />
//         </button>
//         <h2 className="text-xl font-semibold w-full text-center">Checkout</h2>
//       </div>

//       {/* Order Summary */}
//       <div className="p-4 space-y-4">
//         <h3 className="text-2xl font-bold">Order Summary</h3>
//         <div className="border p-4 rounded bg-gray-50 space-y-2">
//           <p>
//             <span className="font-semibold">Product:</span> {order.name}
//           </p>
//           <p>
//             <span className="font-semibold">Price:</span> Ghc {order.price}.00
//           </p>
//           <p>
//             <span className="font-semibold">Quantity:</span> {order.quantity}
//           </p>
//           <p>
//             <span className="font-semibold">Preferences:</span>{" "}
//             {Object.keys(order.preferences).length > 0
//               ? JSON.stringify(order.preferences)
//               : "None"}
//           </p>
//           <p className="text-lg font-semibold">
//             Total: Ghc {order.price * order.quantity}.00
//           </p>
//         </div>

//         {/* Customer Details */}
//         <div className="space-y-3">
//           <h3 className="text-xl font-bold">Your Details</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={customer.name}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={customer.phone}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//           <textarea
//             name="address"
//             placeholder="Delivery Address"
//             value={customer.address}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           ></textarea>
//         </div>

//         {/* Place Order Button */}
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handlePlaceOrder}
//             className="w-[60%] bg-black text-white py-3 rounded font-semibold"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


// src/pages/user/CheckoutPage.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();

  // Always load cart from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-4">
        <p>Your cart is empty.</p>
        <button
          onClick={() => navigate("/home")}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    alert(
      `Order placed!\n\n${cartItems
        .map(
          (item) =>
            `${item.name} - Ghc ${item.price}.00 x ${item.quantity} ${
              Object.keys(item.preferences || {}).length > 0
                ? `(Prefs: ${JSON.stringify(item.preferences)})`
                : ""
            }`
        )
        .join("\n")}\n\nTotal: Ghc ${totalPrice}.00`
    );

    // Clear cart after placing order
    localStorage.removeItem("cart");
    navigate("/home");
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="relative h-16 flex items-center px-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 bg-white p-1 rounded-full shadow"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <h2 className="text-xl font-semibold w-full text-center">Checkout</h2>
      </div>

      {/* Order Summary */}
      <div className="p-4 space-y-4">
        <h3 className="text-2xl font-bold">Order Summary</h3>
        <div className="border p-4 rounded bg-gray-50 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="last:border-b-0">
              <p>
                <span className="font-semibold">Product:</span> {item.name}
              </p>
              <p>
                <span className="font-semibold">Price:</span> Ghc {item.price}.00
              </p>
              <p>
                <span className="font-semibold">Quantity:</span> {item.quantity}
              </p>
              {item.preferences &&
                Object.keys(item.preferences).length > 0 && (
                  <p>
                    <span className="font-semibold">Preferences:</span>{" "}
                    {JSON.stringify(item.preferences)}
                  </p>
                )}
            </div>
          ))}
          <p className="text-lg font-semibold">Total: Ghc {totalPrice}.00</p>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlaceOrder}
            className="w-[60%] bg-black text-white py-3 rounded font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

