import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const AdvertisedProducts = () => {
  const [advertisedProducts, setAdvertisedProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_api_url}/advertised-products`)
      .then((res) => setAdvertisedProducts(res.data));
  }, []);

  return (
    <>
      {advertisedProducts.length !== 0 && (
        <div className="justify-between px-6 lg:px-12 mx-auto">
          <div className="rounded-lg py-10 relative">
            <Slider advertisedProducts={advertisedProducts} />
            <span className="absolute top-[45px] rounded-tr-lg rounded-br-lg left-0 py-0 px-2 inline-block bg-green-300">
              Ad
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedProducts;
