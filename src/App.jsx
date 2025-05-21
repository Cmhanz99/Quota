import React, { useState } from "react";

const App = () => {
  const quotes = [
    "Believe in yourself.",
    "Stay positive and happy.",
    "Never stop learning.",
    "Work hard and be kind.",
    "Dream big and dare to fail.",
  ];
  const [quote, setQuote] = useState("Click the button to generate quote");
  const [favorites, setFavorites] = useState([]);

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="p-5 shadow-lg rounded w-96">
        <div className="text-center font-bold mb-2">Random Quote Generator</div>
        <div className="bg-gray-200 p-5 text-center rounded text-xl transition duration-500 ">
          <p>{quote}</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleGenerate}
            className="p-2 bg-black text-white rounded mt-5 cursor-pointer
            hover:bg-gray-700 transition duration-500 mr-2"
          >
            Generate Quote
          </button>

          <button
            onClick={() => {
              if (quote && !favorites.includes(quote)) {
                setFavorites([...favorites, quote]);
              }
            }}
            className="p-2 bg-red-400 text-white rounded mt-5 cursor-pointer
            hover:bg-red-700 transition duration-500"
          >
            Favorites
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-bold mb-2">Favorite Quotes:</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          <ul className="list-disc list-inside">
            {favorites.map((fav, i) => (
              <li
                key={i}
                className="flex border border-gray-400
              w-80 rounded mt-2
              justify-between p-2
              sm:w-100"
              >
                "{fav}"
                <p
                  className="cursor-pointer
                hover:underline text-red-500"
                  onClick={() => {
                    setFavorites(favorites.filter((_, index) => index !== i));
                  }}
                >
                  remove
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
