
// // src/App.jsx
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "./layouts/AdminLayout";
// import LoginPage from "./pages/user/LoginPage";
// import HomePage from "./pages/user/HomePage";
// import ProductDetailPage from "./pages/user/ProductDetailPage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/admin" element={<AdminLayout />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/product/:id" element={<ProductDetailPage />} />
//     </Routes>
//   );
// }

// export default App;

// src/App.jsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import ProfileSetupPage from "./pages/user/ProfileSetupPage";
import HomePage from "./pages/user/HomePage";
import ProductDetailPage from "./pages/user/ProductDetailPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import RegisterPage from "./pages/user/RegisterPage";
import CartPage from "./pages/user/CartPage";

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />} />

      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      <Route path="/profile-setup" element={<ProfileSetupPage />} />

      {/* Registration */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Login */}

    </Routes>
  );
}

export default App;

