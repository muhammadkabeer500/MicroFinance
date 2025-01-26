'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LoanCalculator = ({ selectedCategory }) => {
  // Define loan categories and their properties
  const loanDetails = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000, // PKR 5 Lakh
      loanPeriod: 3, // 3 years
      initialDepositPercent: 0, // No initial deposit
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 5, // 5 years
      initialDepositPercent: 0, // No initial deposit
    },
    "Business Startup Loans": {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 5, // 5 years
      initialDepositPercent: 0, // No initial deposit
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement", // No predefined limit
      loanPeriod: 4, // 4 years
      initialDepositPercent: 0, // No initial deposit
    },
  };

  // Get category details based on the selected category
  const categoryDetails = loanDetails[selectedCategory];

  if (!categoryDetails) {
    return <p className="text-red-600">Selected category details are not available.</p>;
  }

  // State hooks for loan calculator
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialDeposit, setInitialDeposit] = useState(0); // Initial deposit input
  const [monthlyEMI, setMonthlyEMI] = useState(0); // Monthly EMI

  // Function to calculate the EMI
  const calculateEMI = (loanAmount, initialDeposit) => {
    const annualInterestRate = 10;
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const loanPrincipal = loanAmount - initialDeposit;
    const totalPayments = categoryDetails.loanPeriod * 12; // Loan period in months

    // EMI Calculation
    const emi = (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return emi;
  };

  // Automatically calculate EMI whenever loan amount or deposit changes
  useEffect(() => {
    if (loanAmount && initialDeposit >= 0) {
      const emi = calculateEMI(loanAmount, initialDeposit);
      setMonthlyEMI(emi);
    }
  }, [loanAmount, initialDeposit]);

  // Handle loan amount changes and update the loan after deposit (no deposit logic now)
  const handleLoanAmountChange = (e) => {
    const value = e.target.value;
    if (categoryDetails.maxLoan !== "Based on requirement" && value > categoryDetails.maxLoan) {
      setErrorMessage(`Loan amount should not exceed PKR ${categoryDetails.maxLoan.toLocaleString()}`);
    } else {
      setErrorMessage("");
      setLoanAmount(value);
    }
  };

  // Handle initial deposit changes
  const handleInitialDepositChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setErrorMessage("Initial deposit cannot be negative.");
    } else {
      setErrorMessage("");
      setInitialDeposit(value);
    }
  };

  // Use the Next.js router to redirect after form submission
  const router = useRouter();

  // Check if user is logged in (replace with your logic)
  const isLoggedIn = false;  // Replace with actual login check

  const handleApplyLoan = () => {
    if (isLoggedIn) {
      router.push("/loan-request");  // Redirect to loan request page if logged in
    } else {
      router.push("/registration");  // Redirect to registration page if not logged in
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8 py-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Loan Calculator</h3>

      {/* Subcategory Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">Select Category</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {categoryDetails.subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>

      {/* Loan Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">Enter Loan Amount</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Loan Amount"
          value={loanAmount}
          onChange={handleLoanAmountChange}
        />
        {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
      </div>

      {/* Initial Deposit Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">Enter Initial Deposit (optional)</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Initial Deposit (if any)"
          value={initialDeposit}
          onChange={handleInitialDepositChange}
        />
        {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
      </div>

      {/* Display Loan Details */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-lg mb-3">Loan Details</h4>
        <p className="mb-2">Maximum Loan: PKR {categoryDetails.maxLoan === "Based on requirement" ? "No limit" : categoryDetails.maxLoan.toLocaleString()}</p>
        <p>Loan Period: {categoryDetails.loanPeriod} years</p>
      </div>

      {/* EMI Calculation Section */}
      {loanAmount && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-lg mb-3">Loan Breakdown</h4>
          <p className="mb-2">Loan Amount: PKR {loanAmount.toLocaleString()}</p>
          <p>Initial Deposit: PKR {initialDeposit.toLocaleString()}</p>
        </div>
      )}

      {/* Monthly EMI Display */}
      {monthlyEMI > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Monthly EMI</h4>
          <p className="text-xl font-bold text-blue-600">PKR {monthlyEMI.toFixed(2)}</p>
        </div>
      )}

      {/* Apply Loan Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedSubcategory || !loanAmount || loanAmount > categoryDetails.maxLoan}
          onClick={handleApplyLoan}
        >
          Apply for Loan
        </button>
      </div>
    </div>
  );
};

export default LoanCalculator;
