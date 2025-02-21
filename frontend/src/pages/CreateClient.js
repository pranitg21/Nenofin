import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateLoan = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      loanAmount: parseFloat(loanAmount),
      loanTerm: parseInt(loanTerm)
    };

    try {
      console.log("Submitting data:", formData);  // ✅ Log data before sending

      const response = await axios.post("http://localhost:8080/api/loans", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Response received:", response);  // ✅ Log response

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Response text:", response.data);  // ✅ Log response text

      alert("✅ Form submitted successfully!");  // Show success alert
      navigate('/loans/all');  // Navigate to another route after successful submission
    } catch (error) {
      console.error("Error:", error.message);  // ✅ Log errors in console
      alert("❌ Failed to submit: " + error.message);
    }
  };

  return (
    <div>
      <h1>Create Loan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Amount</label>
          <input type="number" className="form-control" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Term</label>
          <input type="number" className="form-control" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateLoan;