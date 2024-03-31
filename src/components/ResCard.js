import { redirect } from "react-router-dom";

const ResCard = ({ resData }) => {
  // console.log("resData" , resData);
  //Destructuring is done by javascript not React
  const { info } = resData;
  return (
    <div className="flex flex-col  py-6  shadow-md rounded  transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className=" w-full h-full overflow-hidden ">
        <img
          className=" w-[17rem] h-[13rem] object-cover "
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId ? info.cloudinaryImageId : "image"}`}
          alt=""
        />
      </div>
      <div className=" flex flex-col p-2 ">
        <h3 className=" font-bold text-lg">
          {info?.name?.length > 20 ? info?.name?.slice(0, 20) + "..." : info?.name}
        </h3>
        <h4 className=" font-thin text-sm">
          {info?.cuisines?.join().length > 10
            ? info?.cuisines?.join().slice(0, 35) + "..."
            : info?.cuisines?.join(" , ")}
        </h4>
        <h3>Rs {info?.costForTwo}</h3>
        <h3 className=" font-semibold ">⭐{info?.avgRating ? info?.avgRating : "No Reviews"}</h3>
      </div>
    </div>
  );
};



//Higher order component(Takes a component and returns a component with new features)
// Input -> ResCard , Output -> ResCard(Promoted)

// export const withPromotedLabel = (ResCard) =>{
//   return (resData) =>{
//     return(
//         <div>
//             <label >Promoted</label>
//             <ResCard resData = {resData}/>
//         </div>
//     )
//   }
// }

export default ResCard;
