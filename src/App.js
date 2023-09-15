import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body'
import Footer from "./components/Footer";


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


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);