import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import OurApps from "../OurApps/OurApps";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedProducts />
      <Categories />
      <Testimonial />
      <OurApps />
    </div>
  );
};

export default Home;
