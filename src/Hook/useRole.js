import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/users?email=${email}`)
        .then((res) => setRole(res.data.role));
    }
  }, [email]);
  return [role];
};

export default useRole;
