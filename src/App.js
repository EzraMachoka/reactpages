import React, { useState } from 'react';

function App() {
  // Define a state variable to hold the input value
  const [number, setNumber] = useState(0);

  // Define a function to handle the doubling of the number
  const doubleNumber = () => {
    setNumber(number * 2);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl mb-4">Double the Number</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border p-2 mb-4"
      />
      <button onClick={doubleNumber} className="bg-blue-500 text-white px-4 py-2 rounded">
        Double
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {number}
      </div>
    </div>
  );
}

export default App;
