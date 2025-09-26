import { useState } from "react";
import RestaurantCardBlock from "./RestaurantCardBlock";

const RestaurantsCardsWithFilters = () => {
  const filterButtons = [
    "Fast delivery",
    "Ratings 4.0+",
    "Pure veg",
    "Non veg",
    "Is Open",
  ];

  const filterConfig = {
    "Fast delivery": { fastDelivery: true },
    "Ratings 4.0+": { avgRating: true },
    "Pure veg": { veg: true },
    "Non veg": { nonVeg: true },
    "is Open": { isOpen: true },
  };

  const [searchText, setSearchText] = useState("");
  const [inputToApiCall, setInputToApiCall] = useState({});

  return (
    <>
      <div className="flex flex-col gap-4 items-baseline">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search Bar (styled like filter buttons) */}
          <input
            type="search"
            className="px-4 py-2 rounded-full border text-sm text-gray-900 focus:ring-yellow-500"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setInputToApiCall({ searchText: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputToApiCall({ searchText });
              }
            }}
          />

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            {filterButtons.map((label) => (
              <button
                key={label}
                onClick={() => {
                  setInputToApiCall({
                    searchText,
                    ...filterConfig[label],
                  });
                  // console.log({
                  //   searchText,
                  //   ...filterConfig[label],
                  // })
                }
                 
                }
                className="px-4 py-2 rounded-full border shadow text-black hover:bg-gray-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}

        <div className="mx-4">
          <h3 className="font-bold italic">
            Restaurants with online food delivery in Hyderabad
          </h3>
        </div>
        <RestaurantCardBlock inputToApiCall={inputToApiCall} />
      </div>
    </>
  );
};

export default RestaurantsCardsWithFilters;
