/*
    Header 
      - logo
      - nav items
      - cart
    Body
      - Search bar
      - RestrauentList
        - RestaurantCard
          - Image
          - Name
          - Ratting
          - Cusines
    Footer
      - links
      - Copyright       
*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body'
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
};

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />
    },
    {
      path: '/about',
      element: <About />
    }

  ])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);