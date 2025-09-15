import { useEffect, useState } from "react";
import resturantList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";



const Body = () =>{
  let [listOfResturants, setListOfResturants] = useState(resturantList);

  useEffect(() => {
    console.log("use Effect call back is called !!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    console.log(data);

    const json = await data.json();
    console.log(json)
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4.5);
          setListOfResturants(filteredList);
          console.log("button clicked");
        }}>Top Rated Restuarants</button>
      </div>
      <div className="res-container">
        {/* <RestuarantCard resName={"Vindhu Bojanam"} cusiniesName={"Biryani | North Indian"}/> */}
        {/* <RestuarantCard resName={"KFC"} cusiniesName={"FastFoods"}/> */}


        {listOfResturants.map((eachrest) => (
          <RestuarantCard key={eachrest.info.id} resobj={eachrest} />
        ))};


        {/* <RestuarantCard resobj={resturantList[0]}/> */}
      </div>
    </div>
  )
} 


export default Body;