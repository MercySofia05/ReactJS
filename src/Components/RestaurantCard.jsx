import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
  const resInfo = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resInfo?.resobj.info;
  console.log(resInfo?.resobj.info);

  return (

    <div className="w-64 h-auto bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-2 font-normal text-gray-700">{cuisines.join(", ")}</p>
        <p className="mb-2 font-normal text-gray-700">{costForTwo}</p>
        <p className="mb-2 font-normal text-gray-700">{avgRating} Rating</p>
      </div>
    </div>

  );
};
export default RestuarantCard;
