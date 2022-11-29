import axios from "axios";

export const SaveUserToDb = (user, role, setEmail) => {
  const userDetails = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    role: role,
    verified: false,
  };
  axios
    .post(
      `${process.env.REACT_APP_api_url}/users?email=${user.email}`,
      userDetails
    )
    .then((res) => setEmail(user?.email));
};
