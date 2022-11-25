import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import OurApps from "../OurApps/OurApps";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedProducts />
      <Categories />
      <OurApps />
    </div>
  );
};

export default Home;
