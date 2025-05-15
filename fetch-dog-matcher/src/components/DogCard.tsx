import React from "react";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogCardProps {
  dog: Dog;
  isFavorite: boolean;
  onToggleFavorite: (dogId: string) => void;
  hideFavoriteButton?: boolean;
}

const DogCard = ({
  dog,
  isFavorite,
  onToggleFavorite,
  hideFavoriteButton,
}: DogCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-transform duration-200 hover:scale-[1.02]">
      {/* Dog Image */}
      <img src={dog.img} alt={dog.name} className="w-full h-52 object-cover" />

      {/* Dog Info */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold text-gray-800">{dog.name}</h2>
          <p className="text-sm text-gray-600">{dog.breed}</p>
          <p className="text-sm text-gray-500">Age: {dog.age}</p>
          <p className="text-sm text-gray-500">Zip Code: {dog.zip_code}</p>
        </div>

        {/* Favorite Toggle Button */}
        {!hideFavoriteButton && (
          <button
            onClick={() => onToggleFavorite(dog.id)}
            className={`mt-4 w-full py-2 rounded-md text-sm font-medium transition ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
            }`}
          >
            {isFavorite ? "Remove Favorite" : "Add to Favorites"}
          </button>
        )}
      </div>
    </div>
  );
};

export default DogCard;
