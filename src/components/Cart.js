import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/redux/cartSlice";

const Cart = () => {
    //subscribing the store using selector
    // const cartItems=null;
   cartItems = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();

  const handleClearCartClick = () =>{
    dispatch(clearItem());
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-5">
        <h1 className=" font-bold text-xl"> Cart </h1>
        <button  onClick={handleClearCartClick} className=" p-1 bg-gray-200 border-2  border-black ">Clear Cart</button>
      </div>
      <div>
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
