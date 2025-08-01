import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [plan, setPlan] = useState('monthly');

  const handleSubmit = () => {
    alert(`Subscribed: ${email}, ${make}, ${model}, VIN: ${vin}, Plan: ${plan}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-[#D35400] mb-4">Oil Subscription Service</h1>
      <p className="mb-8 text-gray-700 max-w-lg text-center">
        Get oil and filters delivered to your door on your schedule. Sign up below.
      </p>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="text"
          placeholder="VIN (optional)"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="biannually">Biannually</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-[#D35400] w-full py-3 text-white font-bold rounded hover:bg-[#c44500]"
        >
          Start Subscription
        </button>
      </div>
    </div>
  );
}