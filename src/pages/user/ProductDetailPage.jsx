// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import { menuItems } from "../../data/menuData";

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const menu = menuItems.find((item) => item.id === parseInt(id));

//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [quantity, setQuantity] = useState("");
//   const [preferences, setPreferences] = useState({});

//   if (!menu) {
//     return <div className="p-4">Menu not found</div>;
//   }

//   const handlePreferenceChange = (question, answer) => {
//     setPreferences((prev) => ({ ...prev, [question]: answer }));
//   };

//   // const handleProceed = () => {
//   //   alert(
//   //     `Ordered: ${menu.name}, Price: ${selectedPrice}, Qty: ${quantity}, Preferences: ${JSON.stringify(preferences)}`
//   //   );
//   // };

//     const handleProceed = () => {
//       navigate("/checkout", {
//         state: {
//           name: menu.name,
//           price: selectedPrice,
//           quantity: quantity,
//           preferences: preferences,
//         },
//       });
//     };


//   return (
//     <div className="min-h-screen pb-20">
//       {/* Top container */}
//       <div
//         className="relative h-60 flex items-center justify-center"
//         style={{ backgroundColor: menu.color }}
//       >
//         <button
//           onClick={() => navigate("/home")}
//           className="absolute top-4 left-4 bg-white p-1 rounded-full shadow"
//         >
//           <ArrowLeft className="w-5 h-5 text-black" />
//         </button>
//         <h2 className="text-white text-3xl font-bold text-center">
//           {menu.name}
//         </h2>
//       </div>

//       {/* Details */}
//       <div className="p-4 space-y-4">
//         <h2 className="text-3xl font-bold">{menu.name}</h2>
        
//         {/* Price list (dynamic) */}
//         <div className="space-y-2">
//           <h2 className="text-xl font-semibold">Price</h2>
//           {menu.prices.map((price) => (
//             <label key={price} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="price"
//                 value={price}
//                 checked={selectedPrice === price}
//                 onChange={() => setSelectedPrice(price)}
//               />
//               <span>Ghc {price}.00</span>
//             </label>
//           ))}
//         </div>

//         {/* Quantity */}
//         <div>
//           <label className="block mb-1 text-xl font-semibold">Quantity</label>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="border border-gray-300 p-2 w-full rounded mt-2"
//           />
//         </div>

//         {/* Dynamic preferences */}
//         {menu.preferences.map((pref, idx) => (
//           <div key={idx}>
//             <label className="block mb-1 text-lg">{pref.question}</label>
//             {pref.options.map((option) => (
//               <label key={option} className="mr-4">
//                 <input
//                   type="radio"
//                   name={`pref-${idx}`}
//                   value={option}
//                   checked={preferences[pref.question] === option}
//                   onChange={() =>
//                     handlePreferenceChange(pref.question, option)
//                   }
//                 />{" "}
//                 {option}
//               </label>
//             ))}
//           </div>
//         ))}

//         {/* Proceed button */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={handleProceed}
//             className="w-[40%] bg-black text-white py-3 rounded font-semibold"
//           >
//             Proceed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// src/pages/user/ProductDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { menuItems } from "../../data/menuData";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const menu = menuItems.find((item) => item.id === parseInt(id));

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [preferences, setPreferences] = useState({});

  if (!menu) {
    return <div className="p-4">Menu not found</div>;
  }

  const handlePreferenceChange = (question, answer) => {
    setPreferences((prev) => ({ ...prev, [question]: answer }));
  };

  const handleAddToCart = () => {
    // if (!selectedPrice || quantity < 1) {
    //   alert("Please select a price and quantity");
    //   return;
    // }
        if (!selectedPrice) {
          alert("Please select a price option.");
          return;
        }
        if (!quantity || quantity < 1) {
          alert("Please enter a valid quantity.");
          return;
        }


    // For now, we’ll just simulate adding to cart using localStorage
    // Later this will be replaced with Context or backend calls
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      id: menu.id,
      name: menu.name,
      price: selectedPrice,
      quantity,
      preferences,
    };

    const updatedCart = [...existingCart, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Navigate to cart so user sees it
    navigate("/cart");
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Top container */}
      <div
        className="relative h-60 flex items-center justify-center"
        style={{ backgroundColor: menu.color }}
      >
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 bg-white p-1 rounded-full shadow"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <h2 className="text-white text-3xl font-bold text-center">
          {menu.name}
        </h2>
      </div>

      {/* Details */}
      <div className="p-4 space-y-4">
        <h2 className="text-3xl font-bold">{menu.name}</h2>

        {/* Price list (dynamic) */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Price</h2>
          {menu.prices.map((price) => (
            <label key={price} className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value={price}
                checked={selectedPrice === price}
                onChange={() => setSelectedPrice(price)}
              />
              <span>Ghc {price}.00</span>
            </label>
          ))}
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 text-xl font-semibold">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border border-gray-300 p-2 w-full rounded mt-2"
          />
        </div>

        {/* Dynamic preferences */}
        {menu.preferences.map((pref, idx) => (
          <div key={idx}>
            <label className="block mb-1 text-lg">{pref.question}</label>
            {pref.options.map((option) => (
              <label key={option} className="mr-4">
                <input
                  type="radio"
                  name={`pref-${idx}`}
                  value={option}
                  checked={preferences[pref.question] === option}
                  onChange={() => handlePreferenceChange(pref.question, option)}
                />{" "}
                {option}
              </label>
            ))}
          </div>
        ))}

        {/* Add to cart button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddToCart}
            className="w-[40%] bg-black text-white py-3 rounded font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

