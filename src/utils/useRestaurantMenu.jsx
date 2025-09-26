import { useState, useEffect } from "react";
import swiggyDataFromSwiggyAPI from "../utils/mockData";


const useRestaurantMenu = (props) => {

    const [resInfo, setResInfo] = useState([]);

    useEffect( ()=> {
        fetchData();
    }, []);
    
    const fetchData = async () => {
      // const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(
      //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
      // If API CALL didn't work, then assigning mock data
      setResInfo(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          swiggyDataFromSwiggyAPI?.data?.cards[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
      );
    };
    return resInfo;
}


export default useRestaurantMenu;