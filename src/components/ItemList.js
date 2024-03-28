import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ item }) => {
  //   console.log(item);

  const dispatch = useDispatch();

  const handleAddClick = (items) =>{
      dispatch(addItem(items));
  }

  return (
    <div>
      {item.map((items) => (
        <div
          key={items?.card?.info?.id}
          className=" flex justify-between  py-3  px-10 border-b-2  bg-gray-100  w-full "
        >
          <div className=" w-[70%]">
            {/* {console.log(items?.card?.info)} */}
            <span>{items?.card?.info?.isVeg ? "🟢" : "🔴"}</span>
            <h3 className=" font-semibold ">{items?.card?.info?.name}</h3>
            <p>₹{items?.card?.info?.price / 100}</p>
            <p className=" font-thin text-xs  mt-4">
              {items?.card?.info?.description}
            </p>
          </div>
          <div className=" w-[15%]  flex justify-end relative">
            <img
              className=" w-full rounded-md  block h-[7.5rem] object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${
                items?.card?.info?.imageId
                  ? items?.card?.info?.imageId
                  : "No Image"
              } `}
              alt=""
            />
            <button onClick={()=>handleAddClick(items)} className=" bg-white font-semibold absolute border-solid border-2 rounded-md bottom-0 z-10 p-1 ">
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
