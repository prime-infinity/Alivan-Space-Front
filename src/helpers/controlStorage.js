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
