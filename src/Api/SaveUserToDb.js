import axios from "axios";

export const SaveUserToDb = (user, role) => {
  const userDetails = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    role: role,
  };
  axios
    .post(`http://localhost:5000/users?email=${user.email}`, userDetails)
    .then((res) => console.log(res.data));
};
