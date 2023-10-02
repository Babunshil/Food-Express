import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../config';
import { SWIGGY_PUBLIC_API } from "../config";

const RestaurentMenu = () => {
  const { id } = useParams();

  const [allRestaurant, setAllRestaurant] = useState(null);


  useEffect(() => {
    async function getAllRestaurent() {
      const data = await fetch(SWIGGY_PUBLIC_API);
      const json = await data.json();
      setAllRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    getAllRestaurent();

  }, []);

  const menu = allRestaurant?.find(x => x.info.id === id);
  const restaurant = menu?.info;

  return (!allRestaurant) ? <Shimmer /> : (
    <>
      <div className="restaurant-details">
        <div className="restaurant-image">
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId
          } alt={restaurant.name} />
        </div>
        <div className="restaurant-info">
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <h4 className="restaurant-location">{restaurant.locality}, {restaurant.areaName}</h4>
          <h4 className="restaurant-cuisine">{restaurant.cuisines.join(', ')}</h4>
          <h4 className="restaurant-rating">Average Rating: {restaurant.avgRating}</h4>
          <h4 className="restaurant-cost">Cost for Two: {restaurant.costForTwo}</h4>
          <h4 className="restaurant-delivery-time">Delivery Time: {restaurant.sla.deliveryTime} mins</h4>
          <h4 className="restaurant-status">{restaurant.isOpen ? 'Open' : 'Closed'}</h4>
        </div>
      </div>
    </>
  )

}


export default RestaurentMenu;