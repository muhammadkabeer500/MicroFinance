'use client'
import { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', credentials);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
