// import React, { useEffect, useState } from "react";
// import api from "../api/api";
// import BreedFilter from "../components/BreedFilter";
// import DogCard from "../components/DogCard";
// import { useNavigate } from "react-router-dom";

// interface Dog {
//   id: string;
//   img: string;
//   name: string;
//   age: number;
//   zip_code: string;
//   breed: string;
// }

// const SearchPage = () => {
//   const [breeds, setBreeds] = useState<string[]>([]);
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [dogIds, setDogIds] = useState<string[]>([]);
//   const [dogs, setDogs] = useState<Dog[]>([]);
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

//   const [nextPage, setNextPage] = useState<string | null>(null);
//   const [prevPage, setPrevPage] = useState<string | null>(null);
//   const [currentQuery, setCurrentQuery] = useState<string | null>(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBreeds = async () => {
//       const response = await api.get("/dogs/breeds");
//       setBreeds(response.data);
//     };
//     fetchBreeds();
//   }, []);

//   useEffect(() => {
//     setCurrentQuery(null);
//   }, [selectedBreed, sortOrder]);

//   useEffect(() => {
//     const fetchDogIds = async () => {
//       try {
//         let url = "/dogs/search";
//         if (currentQuery) {
//           url += `?${currentQuery}`;
//         } else {
//           const params: any = {
//             size: 12,
//             sort: `breed:${sortOrder}`,
//           };
//           if (selectedBreed) params.breeds = [selectedBreed];
//           const queryString = new URLSearchParams(params).toString();
//           url += `?${queryString}`;
//         }

//         const response = await api.get(url);
//         setDogIds(response.data.resultIds || []);
//         setNextPage(response.data.next || null);
//         setPrevPage(response.data.prev || null);
//       } catch (err) {
//         console.error("Error fetching dogs", err);
//       }
//     };
//     fetchDogIds();
//   }, [selectedBreed, sortOrder, currentQuery]);

//   useEffect(() => {
//     const fetchDogs = async () => {
//       if (dogIds.length === 0) return;
//       const response = await api.post("/dogs", dogIds.slice(0, 12));
//       setDogs(response.data);
//     };
//     fetchDogs();
//   }, [dogIds]);

//   const toggleFavorite = (dogId: string) => {
//     setFavorites((prev) =>
//       prev.includes(dogId)
//         ? prev.filter((id) => id !== dogId)
//         : [...prev, dogId]
//     );
//   };

//   const handleNext = () => {
//     if (nextPage) setCurrentQuery(nextPage);
//     setPageOffset((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (prevPage) setCurrentQuery(prevPage);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-12">
//       <div className="max-w-5xl mx-auto space-y-10">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//           <h1 className="text-4xl font-bold text-gray-800">Browse Dogs 🐶</h1>
//           <button
//             onClick={() =>
//               setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
//             }
//             className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             Sort: {sortOrder === "asc" ? "A ➜ Z" : "Z ➜ A"}
//           </button>
//         </div>

//         {/* Filter */}
//         <BreedFilter
//           breeds={breeds}
//           selectedBreed={selectedBreed}
//           onChange={setSelectedBreed}
//         />

//         {/* Dog Grid */}
//         {dogs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {dogs.map((dog) => (
//               <DogCard
//                 key={dog.id}
//                 dog={dog}
//                 isFavorite={favorites.includes(dog.id)}
//                 onToggleFavorite={toggleFavorite}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No dogs found.</p>
//         )}

//         {/* Match Button */}
//         <div className="flex justify-center">
//           <button
//             onClick={() => navigate("/match", { state: { favorites } })}
//             disabled={favorites.length === 0}
//             className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:opacity-50"
//           >
//             Find My Match
//           </button>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handlePrev}
//             disabled={!prevPage}
//             className={`px-4 py-2 rounded-md transition ${
//               prevPage
//                 ? "bg-gray-200 hover:bg-gray-300"
//                 : "bg-gray-100 text-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Previous
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={!nextPage}
//             className={`px-4 py-2 rounded-md transition ${
//               nextPage
//                 ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                 : "bg-gray-100 text-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Next
//           </button>
//         </div>

//         {/* Favorites Info */}
//         <div className="text-center text-sm text-gray-500">
//           You’ve favorited {favorites.length} dog
//           {favorites.length !== 1 ? "s" : ""}.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
import React, { useEffect, useState } from "react";
import api from "../api/api";
import BreedFilter from "../components/BreedFilter";
import DogCard from "../components/DogCard";
import { useNavigate } from "react-router-dom";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const SearchPage = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogIds, setDogIds] = useState<string[]>([]);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const [paginationStack, setPaginationStack] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await api.get("/dogs/breeds");
      setBreeds(response.data);
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    setCurrentQuery(null);
    setPaginationStack([]); // Reset on filter/sort change
  }, [selectedBreed, sortOrder]);

  useEffect(() => {
    const fetchDogIds = async () => {
      try {
        let url = "/dogs/search";
        if (currentQuery) {
          url += `?${currentQuery}`;
        } else {
          const params: any = {
            size: 12,
            sort: `breed:${sortOrder}`,
          };
          if (selectedBreed) params.breeds = [selectedBreed];
          const queryString = new URLSearchParams(params).toString();
          url += `?${queryString}`;
        }

        const response = await api.get(url);
        setDogIds(response.data.resultIds || []);
        setNextPage(response.data.next || null);
      } catch (err) {
        console.error("Error fetching dogs", err);
      }
    };
    fetchDogIds();
  }, [selectedBreed, sortOrder, currentQuery]);

  useEffect(() => {
    const fetchDogs = async () => {
      if (dogIds.length === 0) return;
      const response = await api.post("/dogs", dogIds.slice(0, 12));
      setDogs(response.data);
    };
    fetchDogs();
  }, [dogIds]);

  const toggleFavorite = (dogId: string) => {
    setFavorites((prev) =>
      prev.includes(dogId)
        ? prev.filter((id) => id !== dogId)
        : [...prev, dogId]
    );
  };

  const handleNext = () => {
    if (nextPage) {
      setPaginationStack((prev) => [...prev, currentQuery || ""]);
      setCurrentQuery(nextPage);
    }
  };

  const handlePrev = () => {
    if (paginationStack.length > 0) {
      const newStack = [...paginationStack];
      const lastQuery = newStack.pop();
      setPaginationStack(newStack);
      setCurrentQuery(lastQuery || null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-100 px-6 py-12">
      {" "}
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800">Browse Dogs 🐶</h1>
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Sort: {sortOrder === "asc" ? "A ➜ Z" : "Z ➜ A"}
          </button>
        </div>

        {/* Filter */}
        <BreedFilter
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={setSelectedBreed}
        />

        {/* Dog Grid */}
        {dogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <DogCard
                key={dog.id}
                dog={dog}
                isFavorite={favorites.includes(dog.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No dogs found.</p>
        )}

        {/* Favorites Info */}
        <div className="text-center text-sm text-gray-500">
          You’ve favorited {favorites.length} dog
          {favorites.length !== 1 ? "s" : ""}.
        </div>

        {/* Match Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/match", { state: { favorites } })}
            disabled={favorites.length === 0}
            className={`px-6 py-3 rounded-md text-sm font-semibold transition duration-200 ${
              favorites.length === 0
                ? "bg-white text-gray-400 border border-gray-300 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Find My Match
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={paginationStack.length === 0}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
              paginationStack.length === 0
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!nextPage}
            className={`px-4 py-2 rounded-md transition ${
              nextPage
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
