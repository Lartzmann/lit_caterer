// src/layouts/UserLayout.jsx
import { Outlet, Link } from "react-router-dom";
import { ShoppingCart, Home, User } from "lucide-react";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
        <Link to="/home" className="text-3xl font-bold">Lit Caterer</Link>

        <nav className="flex items-center gap-4">
          <Link to="/home" className="hover:text-black">
            <Home className="w-6 h-6" />
          </Link>
          <Link to="/cart" className="hover:text-black">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <Link to="/profile" className="hover:text-black">
            <User className="w-6 h-6" />
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="">
        <Outlet /> {/* This is where HomePage, ProductDetailPage, etc. will render */}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lit Caterer. All rights reserved.
      </footer>
    </div>
  );
};

export default UserLayout;


// USERLAYOUT 1
// // src/layouts/UserLayout.jsx
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { ShoppingCart, Home, User as UserIcon, LogOut } from "lucide-react";

// const UserLayout = () => {
//   const navigate = useNavigate();
//   const user = (() => {
//     try {
//       return JSON.parse(localStorage.getItem("lit_caterer_user") || "null");
//     } catch {
//       return null;
//     }
//   })();

//   const handleLogout = () => {
//     localStorage.removeItem("lit_caterer_user");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
//         <Link to="/home" className="text-xl font-bold">Lit Caterer</Link>
//         <div className="flex items-center gap-4">
//           <span className="text-sm hidden sm:inline">Hello, {user?.name ?? "Guest"}</span>
//           <Link to="/home" className="hover:text-black"><Home className="w-5 h-5" /></Link>
//           <Link to="/cart" className="hover:text-black"><ShoppingCart className="w-5 h-5" /></Link>
//           <Link to="/profile" className="hover:text-black"><UserIcon className="w-5 h-5" /></Link>
//           <button onClick={handleLogout} title="Logout" className="ml-2">
//             <LogOut className="w-5 h-5" />
//           </button>
//         </div>
//       </header>

//       <main className="flex-1 p-4">
//         <Outlet />
//       </main>

//       <footer className="p-4 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Lit Caterer
//       </footer>
//     </div>
//   );
// };

// export default UserLayout;

