import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menu, setmenu] = useState([]);
  const [showDishes,setShowDishes] = useState(0);
  const [categories, setCategories] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1938475&lng=81.3509416&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    // console.log("json" , json);

    setmenu(json?.data?.cards[2]?.card?.card?.info);

    const fetchedCategories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      // console.log('menu',menu);
    setCategories(fetchedCategories);

    const filteredCategories = fetchedCategories.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

    setCategories(filteredCategories);

  };

  // const setDishes = (index) =>{
  //   setShowDishes(index);
  // }

  return menu?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col  w-2/3 mx-auto">
      <div className=" ">
        <div className="  flex justify-between p-2">
          <div className=" flex flex-col ">
            <h1 className=" font-semibold text-lg ">{menu?.name}</h1>
            <p className=" text-sm font-thin ">
              {menu?.cuisines ? menu?.cuisines.join(",") : " "}
            </p>
            <p>{menu?.areaName}</p>
          </div>
          <div className="flex flex-col">
            <p>
              {menu?.avgRating ? menu?.avgRating + "⭐" : "Not available ⭐"}
            </p>
            <p>{menu?.totalRatingsString}</p>
          </div>
        </div>

        <div className="flex border-t-2 border-gray-200 mt-2 p-2">
          <h3 className=" mr-2 font-bold">{menu?.sla?.slaString}</h3>|
          <h3 className=" ml-2 font-bold">{menu?.costForTwoMessage}</h3>
        </div>
      </div>

      <div className=" border-t-2 pt-2">
        {categories.map((category , index) => (
          <RestaurantCategory  key={category?.card.card?.title} data={category?.card.card}
          showDishItem = {index === showDishes ? true : false}
          setDish={(i)=>{ i===null? setShowDishes(null) : setShowDishes(index)}} /> //Lifting the state up setting setShowDishes according to onclick of RestaurantCategory        //controlling the child(RestaurantCategory from Parent(RestaurantMenu))
        ))}
      </div>

      
    </div>
  );
};

export default RestaurantMenu;
