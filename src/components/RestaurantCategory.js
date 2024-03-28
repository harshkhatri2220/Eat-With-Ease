import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showDishItem, setDish}) => {
//   console.log(data.itemCards, data.itemCards.length);


  const handleClick = () =>{
    showDishItem? setDish(null) : setDish()
  }

  return (
    <div className=" shadow-lg">
      <div  onClick={handleClick} className={` w-full  py-3 flex justify-between p-4  cursor-pointer ${showDishItem? " border-2 border-gray-100" : "bg-white"}  shadow-md mb-1   `}>
        <span className=" font-semibold text-lg  ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showDishItem? "⬆️" : "⬇️" }</span>
      </div>
        <div className={`overflow-hidden transition-all duration-300 ${
          showDishItem ? "block" : "hidden"
        }`} >
          {showDishItem && <ItemList item={data.itemCards} />}
        </div>
    </div>
  );
};

export default RestaurantCategory;
