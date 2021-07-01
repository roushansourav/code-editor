const readFromLocalStorage = (key) => {
  if (!key || typeof key !== "string") throw new Error("key must be a string");
  return JSON.parse(localStorage.getItem(key));
};

export default readFromLocalStorage;
