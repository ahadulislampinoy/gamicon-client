import axios from "axios";
import { useEffect, useState } from "react";

const AdvertisedProducts = () => {
  const [advertisedProducts, setAdvertisedProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/advertised-products`)
      .then((res) => setAdvertisedProducts(res.data));
  }, []);

  console.log(advertisedProducts);

  //

  return <></>;
};

export default AdvertisedProducts;
