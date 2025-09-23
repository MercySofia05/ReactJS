import { useEffect, useState } from "react";
import swiggyDataFromSwiggyAPI from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    console.log("use Effect call back is called !!");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // If API CALL didn't work, then assigning mock data
    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        swiggyDataFromSwiggyAPI?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
    );
  };

  if(listOfResturants.length == 0) return <Shimmer />
  else 
  return (
    <div className="mx-auto px-2 bg-gray-100  sm:px-6 lg:px-8">
      <div className="relative flex h-auto items-center justify-between">
        <div className="p-4 m-4">
          <div className="filter">
            <button
              className=" bg-green-100 rounded-lg px-4"
              onClick={() => {
                const filteredList = listOfResturants.filter(
                  (res) => res.info.avgRating > 4.5
                );
                setListOfResturants(filteredList);
              }}
            >
              Click Me for Top Rated Restuarants
            </button>
          </div>
          <hr className="text-gray-300 border-1 my-10" />
          <div className="flex flex-col gap-4 items-baseline">
            <div className="mx-4">
              <h3 className="font-bold italic">
                Restuarants with online food delivery in Hyderabad
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {listOfResturants.map((eachrest) => (
                <RestuarantCard key={eachrest.info.id} resobj={eachrest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
