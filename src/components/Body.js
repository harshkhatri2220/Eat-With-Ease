import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [dummyRestaurants, setdummyRestaurants] = useState([]); //to help in search - to always search in whole data

  useEffect(() => {
    fetchData();
    // console.log("restaurants", restaurants);
    // console.log("dummy", dummyRestaurants);
  }, []);

  const fetchData = async () => {
    //install allow cors extention here to fetch data from swiggy API
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await apiData.json();

    // console.log("json" , json );
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setdummyRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("restaurants" , restaurants)
  };

 
  return restaurants?.length === 0 ? (
    <Shimmer /> //conditional rendering
  ) : (
    <div className="  flex flex-col justify-center z-0 ">
      <div className=" flex gap-8 m-3 justify-start">
        <div className="">
          <input
            className=" border border-solid border-black mx-2 px-1 "
            data-testid="search"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setsearchInput(e.target.value);
            }}
          />

          <button
            className="bg-gray-300 px-2"
            onClick={() => {
              filterdRestaurants = restaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .split(" ")
                  .join("")
                  .includes(searchInput.toLowerCase().split(" ").join(""))
              );
              setdummyRestaurants(filterdRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="btn">
          <button
            className=" bg-gray-300 px-2"
            onClick={() => {
              const filterdRestaurants = dummyRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              // console.log(filterdData);
              setdummyRestaurants(filterdRestaurants);
            }}
          >
            Filter Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className=" flex justify-center max-w-7x">
        <div className="flex  flex-wrap justify-evenly items-center   ">
          {dummyRestaurants?.map((res) => (
            <Link
              className=" no-underline"
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
            >
              <ResCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
