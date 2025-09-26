import RestuarantCard from "./RestaurantCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantCardBlock = (props) => {
  const listOfResturants = useRestaurantMenu();

  return (
    <div className="flex flex-wrap gap-2.5 justify-center">
      {listOfResturants
        .filter((eachrest) => {
          // if search text exists → filter by it
          if (props.inputToApiCall.searchText) {
            return eachrest.info.name
              .toLowerCase()
              .includes(props.inputToApiCall.searchText.toLowerCase());
          } else if (props.inputToApiCall.fastDelivery) {
            return eachrest.info.sla.deliveryTime < 30;
          } else if (props.inputToApiCall.avgRating) {
            return eachrest.info.avgRatingString > 4;
          } else if (props.inputToApiCall.veg) {
            return eachrest.info.veg;
          } else if (props.inputToApiCall.nonVeg) {
            return !eachrest.info.veg;
          } else if (props.inputToApiCall.isOpen) {
            return eachrest.info.isOpen;
          }
          // if no search text → return all
          return true;
        })
        .map((eachrest) => (
          <RestuarantCard key={eachrest.info.id} resobj={eachrest} />
        ))}
    </div>
  );
};

export default RestaurantCardBlock;
