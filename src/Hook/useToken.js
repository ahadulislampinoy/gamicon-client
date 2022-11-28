import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      axios
        .get(`/products-advertise/jwt?email=${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("gamicon-token")}`,
          },
        })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("gamicon-token", res.data.token);
            setToken(res.data.token);
          }
        });
    }
  }, [email]);

  return [token];
};
export default useToken;
