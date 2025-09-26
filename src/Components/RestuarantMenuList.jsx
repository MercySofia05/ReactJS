import {MENU_CDN_URL} from "../utils/constant";


const RestuarantMenuList = (props) => {
  const {name, defaultPrice, ratings, description, imageId} = props.itemCards;

  return (
    <>
      <div className="space-y-6 py-2 mx-2.5">
      
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <h3 className="font-semibold">
              {name || ""}
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              {defaultPrice ? "₹" + defaultPrice/100 : ""}
          
            </p>
            <p className="text-sm text-gray-600 mt-1"> {ratings?.aggregatedRating?.rating ? "⭐" + ratings.aggregatedRating.rating : ""}</p>
            <p className="text-sm text-gray-500 mt-2">
             {description || ""}
            </p>
          </div>
          <img
            src={MENU_CDN_URL + imageId} alt=""
            className="w-28 h-20 object-cover rounded"
          />
        </div>
      </div>
    </>
  );
};

export default RestuarantMenuList;
