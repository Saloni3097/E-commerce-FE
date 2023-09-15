//Local Storage

export const getItemLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  // console.log(item);
  return item;
};

export const setItemLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItemLocalStorage = (key) => {
  localStorage.removeItem(key);
};
