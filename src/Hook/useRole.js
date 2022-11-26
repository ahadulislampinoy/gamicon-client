import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/users?email=${user?.email}`)
        .then((res) => setRole(res.data.role));
    }
  }, [user?.email]);
  return [role];
};

export default useRole;
