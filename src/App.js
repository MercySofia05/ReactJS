import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart"
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
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
        path: "/cart",
        element: <Cart />,
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
