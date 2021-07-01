const addToLocalStorage = (key, value) => {
  if (!key || typeof key !== "string") throw new Error("key must be a string");
  localStorage.setItem(key, JSON.stringify(value));
};

export default addToLocalStorage;
