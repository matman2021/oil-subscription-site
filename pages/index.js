import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [plan, setPlan] = useState("monthly");

  const handleSubscribe = () => {
    alert(`Subscribed: ${email}, ${make}, ${model}, VIN: ${vin}, Plan: ${plan}`);
    setEmail("");
    setMake("");
    setModel("");
    setVin("");
    setPlan("monthly");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-[#D35400]">
        Hassle-Free Oil Change Subscription
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl text-center">
        We deliver the right oil and filters for your car — when you need them.
        Choose your plan and never worry about maintenance again.
      </p>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#D35400]"
          />
          <input
            type="text"
            placeholder="Make (e.g. Toyota)"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#D35400]"
          />
          <input
            type="text"
            placeholder="Model (e.g. Camry)"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#D35400]"
          />
          <input
            type="text"
            placeholder="VIN (optional but preferred)"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#D35400]"
          />
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#D35400]"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="biannually">Biannually</option>
          </select>
          <button
            onClick={handleSubscribe}
            className="bg-[#D35400] text-white rounded-md py-3 font-semibold hover:bg-[#b84700]"
          >
            Start Subscription
          </button>
        </div>
      </div>
    </div>
  );
}