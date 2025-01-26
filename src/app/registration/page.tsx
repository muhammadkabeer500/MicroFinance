'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const Registration = () => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!cnic || !email || !name) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Here, you can handle registration logic (e.g., send to backend)
    // After registration, redirect to the loan request page
    router.push("/loan-request");
  };

  return (
    <div className="conatiner text-black mx-auto w-1/2 mt-9 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Registerd</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-600">CNIC</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Enter CNIC"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
