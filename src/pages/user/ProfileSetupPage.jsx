import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    phone: "",
    office: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^0\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone no.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Proceeding to OTP verification (mock)...");
    }
  };

  return (
    <div className="px-4 pt-10 pb-20 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-3">Welcome</h1>
      <p className="text-gray-600 mb-8">Provide your details below.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Doe"
            className="w-full border border-gray-300 mb-3 p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="institution" className="block text-sm font-bold text-gray-700 mb-1">
            Institution
          </label>
          <select
            name="institution"
            id="institution"
            className="w-full border border-gray-300 mb-3 p-2 rounded bg-white"
            value={formData.institution}
            onChange={handleChange}
          >
            <option value="">-- Select Institution --</option>
            <option value="MoF">Ministry Of Finance</option>
            <option value="GRA">Ghana Revenue Authority</option>
            <option value="GRA">Ministry Of Trade</option>
            <option value="VRA">Volta River Authority</option>
            <option value="PSC">Public Services Commission</option>
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="050000000"
            className={`w-full mb-1 p-2 rounded border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="office" className="block text-sm font-bold text-gray-700 mb-1">
            Office Location
          </label>
          <input
            type="text"
            name="office"
            id="office"
            placeholder="e.g. Main Block R104"
            className="w-full border border-gray-300 mb-3 p-2 rounded"
            value={formData.office}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[30%] bg-black text-white py-2 rounded font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
