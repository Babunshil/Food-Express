import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { RestrauentList } from '../config'
import { useEffect, useState } from "react";
import { SWIGGY_PUBLIC_API } from "../config";
import { Link } from "react-router-dom";


const filterData = (searchText, restaurants) => {
  const filterResult = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterResult;
}

const Body = () => {

  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(allRestaurants);


  useEffect(() => {
    getSwiggyData();
  }, [])

  async function getSwiggyData() {
    const data = await fetch(SWIGGY_PUBLIC_API);
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setAllRestaurants(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
  }



  return (allRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <input
        type="text"
        className="Search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />

      <button
        className="Search-btn"
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }
        }
      >
        Search
      </button >

      <div className="RestrauentList">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurent/" + restaurant.info.id} className="link">
              <RestaurantCard {...restaurant.info}
                key={restaurant.info.id}
              />
            </Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;