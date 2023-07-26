import React, { useState } from "react";

const Form4 = () => {
  const randomDropdownValues = [
    "Choose",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  return (
    <div className="mt-6 mx-6 lg:mr-6 bg-white shadow-md rounded-lg p-8 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Form Title</h2>

      <div className="mb-6">
        <p className="text-sm mb-1">Label Title</p>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Placeholder content"
        />
      </div>

      <div className="mb-6">
          <p className="text-sm  mb-1">Label Title</p>
          <select
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose"
          >
            {randomDropdownValues.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>

      <div className="mb-6">
        <p className="text-sm mb-1">Label Title</p>
        <input
          type="text"
          className="w-full h-32 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Placeholder content"
          style={{ verticalAlign: "top", textAlign: "left" }}
        />
      </div>

      <button className="bg-blue-600 w-full text-center text-white px-2 py-2 rounded">Edit</button>
    </div>
  );
};

export default Form4;
