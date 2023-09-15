import RestaurantCard from "./RestaurentCard";
import { RestrauentList } from '../config'
import { useEffect, useState } from "react";
import { SWIGGY_PUBLIC_API } from "../config";


const filterData = (searchText, restaurants) => {
  const filterRestaurants = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterRestaurants;
}

const Body = () => {

  const [searchText, setsearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RestrauentList);
  console.log(restaurants);

  useEffect(() => {
    getSwiggyData();
  }, [])

  async function getSwiggyData() {
    const data = await fetch(SWIGGY_PUBLIC_API);
    const json = await data.json();

    setRestaurants(json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  return (
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
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }
        }
      >
        Search
      </button >

      <div className="RestrauentList">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info}
              key={restaurant.info.id}
            />
          )
        })}
      </div>
    </>
  );
};

export default Body;