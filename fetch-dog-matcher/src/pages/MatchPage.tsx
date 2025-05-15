import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";
import DogCard from "../components/DogCard";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const MatchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const favorites: string[] = location.state?.favorites || [];

  const [matchedDog, setMatchedDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const findMatch = async () => {
    setError("");
    try {
      const matchRes = await api.post("/dogs/match", favorites);
      const matchId = matchRes.data.match;

      const dogRes = await api.post("/dogs", [matchId]);
      setMatchedDog(dogRes.data[0]);
    } catch {
      setError("Failed to find a match. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (favorites.length === 0) {
      navigate("/search");
    } else {
      findMatch(); // Auto-trigger match on load
    }
  }, [favorites, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-100 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-2">
        🎉 You’ve Got a Match!
      </h1>
      <p className="text-gray-600 mb-10 text-center text-sm max-w-md">
        Based on your favorites, we’ve found the perfect pup for you. Get ready
        to meet your new best friend!
      </p>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      {loading ? (
        <p className="text-gray-500 text-sm">Finding your match...</p>
      ) : matchedDog ? (
        <div className="w-full max-w-sm mb-8">
          <DogCard
            dog={matchedDog}
            isFavorite={true}
            onToggleFavorite={() => {}}
            hideFavoriteButton={true}
          />
        </div>
      ) : null}

      <button
        onClick={() => navigate("/search")}
        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Back to Search
      </button>
    </div>
  );
};

export default MatchPage;
