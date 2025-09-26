import { useState, useEffect } from "react";

// To get each Resturant info when clicked on individual resturant cards
const useRestaurantInfo = (resId) => {
  const [eachResInfo, setEachResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.508267&lng=80.61616169999999&restaurantId=" + resId)
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.508267&lng=80.61616169999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    // If API CALL didn't work, then assigning mock data
    setEachResInfo(json.data.cards);
  };
  return eachResInfo;
};

export default useRestaurantInfo;
