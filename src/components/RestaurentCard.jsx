import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {

  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
}

export default RestaurantCard;