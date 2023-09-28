import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../config';

const RestaurentMenu = () => {
  const { id } = useParams();

  const [allRestaurant, setAllRestaurant] = useState(null);
  console.log(allRestaurant)


  useEffect(() => {
    async function getAllRestaurent() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5276488&lng=88.3645056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    getAllRestaurent();

  }, []);

  const menu = allRestaurant?.find(x => x.info.id === id);
  console.log(menu);
  const restaurant = menu?.info

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