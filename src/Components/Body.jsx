import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestuarantsCardsWithFilters from "./RestuarantsCardsWithFilters";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";


const Body = () => {

  //Custom Hook to get Restuarant data
  const listOfResturants = useRestaurantMenu();

  console.log(listOfResturants)

  if(listOfResturants.length == 0) return <Shimmer />
  else 
  return (
    <div className="mx-auto px-2 bg-gray-100  sm:px-6 lg:px-8">
      <div className="relative flex h-auto items-center justify-between">
        <div className="p-4 m-4">
          <hr className="text-gray-300 border-1 my-10" />
          <RestuarantsCardsWithFilters/>
        </div>
      </div>
    </div>
  );
};

export default Body;
