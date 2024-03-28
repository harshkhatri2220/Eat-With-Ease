import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext"
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore"

const Cart = lazy(()=>import("./components/Cart")) //to lazy load import like this

const AppLayout = () => {
  return (
    // <userContext.Provider value={{loggedInUser : "blah"}}>
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet /> {/**This will be replaced according to children in appRouter*/}
    </div>
    </Provider>
    // </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        
        path: "/cart",
        element: <Suspense fallback={<Shimmer/>}><Cart /></Suspense>,
        
      },
      {
        path: "/restaurants/:resId",   //:resId -> Means dynamic url
        element: <RestaurantMenu/>

      }
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // will return an object

root.render(<RouterProvider router={appRouter} />);
