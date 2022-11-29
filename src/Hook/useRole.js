import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${process.env.REACT_APP_api_url}/users?email=${user?.email}`)
        .then((res) => {
          setRole(res.data.role);
          setRoleLoading(false);
        });
    }
  }, [user?.email]);
  return [role, roleLoading];
};

export default useRole;
