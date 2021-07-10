import axios from "axios";

export const API_LOGIN = (email, password) =>
  axios({
    url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
    method: "POST",
    data: {
      email: email,
      password: password,
    },
  });
