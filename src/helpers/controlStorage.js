export const loadFromLocal = () => {
  try {
    const userInLocal = localStorage.getItem("alivanauth")
      ? JSON.parse(localStorage.getItem("alivanauth"))
      : null;
    return userInLocal;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export const saveToLocal = (user) => {
  try {
    const serialisedState = JSON.stringify(user);
    localStorage.setItem("alivanauth", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const removeFromLocal = () => {
  localStorage.removeItem("alivanauth");
};

export const cartFromLocal = () => {
  try {
    const cartInLocal = localStorage.getItem("alivancart")
      ? JSON.parse(localStorage.getItem("alivancart"))
      : [];
    return cartInLocal;
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export const cartToLocal = (data) => {
  try {
    const serialisedState = JSON.stringify(data);
    localStorage.setItem("alivancart", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
