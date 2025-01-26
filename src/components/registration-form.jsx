'use client'

import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">User Registration</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Full Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="CNIC"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
