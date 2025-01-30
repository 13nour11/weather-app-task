import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchInput = React.memo(
  ({ handleLocationChange, location, setLocation }) => {
    return (
      <div className="relative mb-4 flex justify-center items-center">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Find your location..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          minLength={4}
        />
        {location && (
          <button
            onClick={() => setLocation("")}
            className="absolute right-2 top-3 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
          >
            <AiOutlineClose size={15} />
          </button>
        )}
      </div>
    );
  }
);

export default SearchInput;
