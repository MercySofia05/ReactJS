import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";


const RestaurantCard = ({ resobj }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resobj?.info || {};


  return (
    <Link to={"/restuarant/" + resobj?.info?.id}>
      <div className="w-64 min-h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300 flex flex-col">
        {/* Image */}
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={
            cloudinaryImageId ? CDN_URL + cloudinaryImageId : "/placeholder.jpg"
          }
          alt={name || "restaurant"}
        />

        {/* Body */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 line-clamp-1">
            {name || "Loading..."}
          </h5>
          <p className="mb-1 text-sm text-gray-700 line-clamp-1">
            {cuisines?.join(", ") || "—"}
          </p>
          <p className="text-sm text-gray-700">{costForTwo || "—"}</p>
          <p className="text-sm text-gray-700">
            {avgRating ? `${avgRating} ⭐` : "—"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
