import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
  // console.log(props)
  const resInfo = props;
  // console.log(resInfo)
  const { cloudinaryImageId, name, cuisines, avgRating } = resInfo?.resobj.info;

  const stylesForResturantCard = {
    background: "beige",
  };

  return (
    <div className="res-card" style={stylesForResturantCard}>
      <img src={CDN_URL + cloudinaryImageId + ".jpg"} alt="resturant-image" />
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Rating</p>
    </div>
  );
};
export default RestuarantCard;
