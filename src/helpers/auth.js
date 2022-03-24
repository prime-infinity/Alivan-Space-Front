import axios from "axios";

const backendHost = "http://localhost:2000/api/";

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
  } catch {
    return null;
  }
}

export function submitUserDetails(details, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "userdetails", details, {
        headers: { "x-auth-token": token },
      })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export function submitUserAddress(details, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "userdetails/address", details, {
        headers: { "x-auth-token": token },
      })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

//admin routes
export function createCategory(details, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "admin/savecategory", details, {
        headers: { "x-auth-token": token },
      })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

//shop routes
//get all shop categories
export async function getCategories() {
  try {
    const { data } = await axios.get(backendHost + "shop/getcategories");
    return data;
  } catch {
    return null;
  }
}
