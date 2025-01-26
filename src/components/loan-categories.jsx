"use client";
import { useState } from "react";
import Link from "next/link"; // Ensure you import Link
import LoanCalculator from '@/components/loan-calculator'; // Import the LoanCalculator component

const LoanCategories = () => {
  const categories = [
    { name: "Wedding Loans" },
    { name: "Home Construction Loans" },
    { name: "Business Startup Loans" },
    { name: "Education Loans" }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="py-12 bg-yellow-500 text-black ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Loan Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index} 
              className={`bg-white py-8 px-6 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-600 cursor-pointer ${
                selectedCategory === category.name ? 'border-red-600' : 'border-gray-300'
              }`}
              onClick={() => setSelectedCategory(category.name)} // Set the category on click
            >
              <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
              <p className="text-red-600 mt-4 hover:underline">
                <Link href="#">GET LOAN</Link>
              </p>
            </div>
          ))}
        </div>
        
        {/* Conditionally render Loan Calculator */}
        {selectedCategory && (
          <div className="mt-10 p-6 bg-white shadow-xl rounded-lg">
            <LoanCalculator selectedCategory={selectedCategory} />
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanCategories;
