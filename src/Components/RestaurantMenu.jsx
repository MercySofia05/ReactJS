import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import RestuarantMenuList from "./RestuarantMenuList";
import { useState } from "react";
import ShimmerForMenuList from "./ShimmerForMenuList"

const RestuarantMenu = () => {
  const [searchMenuText, setSearchMenuText] = useState("");
  const params = useParams();
  const eachRestuarantInfo = useRestaurantInfo(params.resId);
  if (eachRestuarantInfo.length == 0) return <ShimmerForMenuList/>;
  const eachRestuarantData = eachRestuarantInfo[2]?.card?.card?.info;
  let eachRestuarantMenuList =
    eachRestuarantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  eachRestuarantMenuList = eachRestuarantMenuList.slice(
    1,
    eachRestuarantMenuList.length
  );
  console.log(eachRestuarantMenuList);
//   if (eachRestuarantData.length == 0) return;
  const {
    name,
    availabilityServiceabilityMessage,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = eachRestuarantData;
if(eachRestuarantInfo.length == 0) return <ShimmerForMenuList/> 
else return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-900">{name}</h1>

      <div className="mt-4 italic mx-2 border-4 border-blue-200 rounded-lg px-4 py-2 shadow-lg shadow-blue-200">
      <div className="flex items-center py-1 text-sm text-gray-700">
          <span className="font-semibold">
            {avgRating} ({totalRatingsString})
          </span>
        </div>
        <div className="flex items-center py-1 text-sm text-gray-700">
          <span className="font-semibold">
            {costForTwoMessage}
          </span>
        </div>
        <div className="flex items-center py-1 text-sm text-gray-700">
          <span className="font-semibold">
          {cuisines?.join(", ") || "—"}
          </span>
        </div>

        <div className="flex items-center py-1 text-sm text-gray-700">
          <span className="font-semibold">
          Outlet: {areaName}
          </span>
        </div>
      
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">MENU</h2>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for dishes"
            value={searchMenuText}
            onChange={(e) => {
              setSearchMenuText(e.target.value);
              // setInputToApiCall({ searchText: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchMenuText(e.target.value);
              }
            }}
            className="w-full border rounded-full px-4 py-2 pl-10 focus:ring-2 focus:ring-yellow-400"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </div>

        {eachRestuarantMenuList.map((eachCategoryInMenu, index) => {
          const data = eachCategoryInMenu.card.card;
          return (
            <div key={index} className="mb-6">
              {/* Category Title */}
              <h2 className="font-bold border-b-2 italic text-lg mb-3">
                {data.title}
              </h2>

              {/* Menu Items */}
              {data.itemCards?.length > 0 &&
                data.itemCards.map((eachMenu, idx) => {
                  //   console.log(eachMenu);
                  const data = eachMenu?.card?.info;
                  //   console.log(data);
                  if (
                    !searchMenuText ||
                    (searchMenuText &&
                      data.name.toLowerCase().includes(searchMenuText))
                  ) {
                    return (
                      <RestuarantMenuList
                        key={idx}
                        itemCards={eachMenu?.card?.info}
                      />
                    );
                  }
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default RestuarantMenu;
