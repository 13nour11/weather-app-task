import React from "react";

export default function SearchInput({ handleLocationChange, location }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Find your location..."
      />
    </div>
    
  );
}
