// // src/pages/user/CartPage.jsx
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const CartPage = () => {
//   // Sample cart state for now (later we’ll make this dynamic with context or redux)
//   const [cartItems, setCartItems] = useState([
//     // { id: 1, name: "Banku", price: 25, quantity: 1 },
//     // { id: 2, name: "Kokonte", price: 20, quantity: 2 },
//   ]);

//   const navigate = useNavigate();

//   const updateQuantity = (id, newQty) => {
//     setCartItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: newQty } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

    
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty. <Link to="/home" className="text-blue-500">Continue shopping</Link></p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center bg-gray-100 p-3 rounded"
//               >
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-500">GHS {item.price}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     min="1"
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value))
//                     }
//                     className="w-16 border rounded p-1"
//                   />
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 flex justify-between items-center font-bold">
//             <span>Total:</span>
//             <span>GHS {totalPrice}</span>
//           </div>

//           <div className="mt-6 flex justify-between">
//             <Link to="/home" className="bg-gray-200 px-4 py-2 rounded">
//               Continue Shopping
//             </Link>
//             <button
//               onClick={() => navigate("/checkout")}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;


// src/pages/user/CartPage.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
const CartPage = () => {
  const navigate = useNavigate();

  // Load cart items from localStorage when component mounts
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Sync cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQty) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/home" className="text-blue-500">
            Continue shopping
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">GHS {item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded p-1"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>GHS {totalPrice}</span>
          </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:justify-between">
            <Link
                to="/home"
                className="w-full md:w-auto text-center bg-gray-200 px-4 py-2 rounded font-medium"
            >
                Continue Shopping
            </Link>
            <button
                onClick={() => navigate("/checkout")}
                className="w-full md:w-auto bg-green-600 text-white px-4 py-2 rounded font-medium"
            >
                Proceed to Checkout
            </button>
            </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
