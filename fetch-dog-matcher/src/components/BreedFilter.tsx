// src/components/BreedFilter.tsx
import React from "react";

interface BreedFilterProps {
  breeds: string[];
  selectedBreed: string;
  onChange: (breed: string) => void;
}

const BreedFilter = ({ breeds, selectedBreed, onChange }: BreedFilterProps) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Filter by Breed</label>
      <div className="relative">
        <select
          value={selectedBreed}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {/* Custom caret icon */}
        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          ▼
        </div>
      </div>
    </div>
  );
};

export default BreedFilter;
