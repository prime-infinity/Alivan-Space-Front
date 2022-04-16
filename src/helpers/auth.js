import axios from "axios";

const backendHost = "http://localhost:2000/api/";
//const backendHost = "https://mighty-hamlet-74113.herokuapp.com/api/";

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

//user routes
export async function getDetails(token) {
  try {
    const { data } = await axios.get(backendHost + "userdetails", {
      headers: { "x-auth-token": token },
    });
    return data;
  } catch (e) {
    return e.message;
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

export function addToWishList(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "userdetails/addtowish", data, {
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

export function removeFromWishList(index, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "userdetails/removefromwish", index, {
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

export async function getWishFb(token) {
  try {
    const { data } = await axios.get(backendHost + "userdetails/getwish", {
      headers: { "x-auth-token": token },
    });
    return data;
  } catch (e) {
    return e.message;
  }
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

export function postShopItem(deta, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "admin/saveshopitem", deta, {
        headers: {
          "x-auth-token": token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

//admin change order status
export function changeOrderStatus(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "admin/change_order_status", data, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
export function changeItemStatus(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "admin/change_item_status", data, {
        headers: {
          "x-auth-token": token,
        },
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
  } catch (e) {
    //console.log(e.message);
    return e.message; //Network Error
  }
}

//get shop new arrivals
export async function getArrivals() {
  try {
    const { data } = await axios.get(backendHost + "shop/getnewitems");
    return data;
  } catch (e) {
    //console.log(e.message);
    return e.message;
  }
}

///get shop items by id
export async function getItemById(id) {
  try {
    const { data } = await axios.get(backendHost + "shop/getitembyid", {
      params: { id: id },
    });
    return data;
  } catch (e) {
    //console.log(e.message);
    return e.message;
  }
}

///get all shop items
export async function getAllItems(pageNumber) {
  try {
    const { data } = await axios.get(backendHost + "shop/getitems", {
      params: { pageNumber: pageNumber },
    });
    return data;
  } catch (e) {
    //console.log(e.message);
    return e.message;
  }
}

//order routes
export function placeOrderBack(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "orders/place_order", data, {
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

export function saveOrderBack(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "orders/save_order", data, {
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

//get orders of user
export async function getUserOrders(token) {
  try {
    const { data } = await axios.get(backendHost + "orders/get_user_orders", {
      headers: {
        "x-auth-token": token,
      },
    });
    return data;
  } catch (e) {
    //console.log(e.message);
    return e.message;
  }
}

//admin get all user orders

export async function getAllUserOrders(token) {
  try {
    const { data } = await axios.get(
      backendHost + "orders/get_all_user_orders",
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return data;
  } catch (e) {
    //console.log(e.message);
    return e.message;
  }
}
