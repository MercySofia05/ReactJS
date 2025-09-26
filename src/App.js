import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Help from "./Components/Help";
import Offers from "./Components/Offers"
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path: "/",
        element: <Body />,
      },
      
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restuarant/:resId",
        element: <RestaurantMenu />,
      },
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
