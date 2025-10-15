// src/pages/user/RegisterPage.jsx
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // 🔑 Placeholder for Gmail authentication
    // Later, this will handle OAuth and user ID retrieval.
    // For now, just move to ProfileSetupPage.
    navigate("/profile-setup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <p className="text-center mb-6 text-gray-600">
          Create your account to continue
        </p>

        <button
          onClick={handleRegister}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
        >
          Register with Gmail
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already registered?{" "}
          <span
            onClick={() => navigate("/home")}
            className="text-blue-600 cursor-pointer"
          >
            Go to Home
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
