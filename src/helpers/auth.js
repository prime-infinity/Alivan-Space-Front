import axios from "axios";

const backendHost = "http://localhost:2000/api/";
//const backendHost = 'https://reqres.in/api/'

export function login(data) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "login", data)
      .then((result) => {
        res({ ...result.data, token: result.headers["x-auth-token"] });
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export function register(data) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "register", data)
      .then((result) => {
        res({ ...result.data, token: result.headers["x-auth-token"] });
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export function getUserFromLocal() {
  const userStr = localStorage.getItem("alivanauth");
  if (!userStr) {
    return null;
  }
  return JSON.parse(userStr);
}

export async function getDetails(token) {
  try {
    const { data } = await axios.get(backendHost + "userdetails", {
      headers: { "x-auth-token": token },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
