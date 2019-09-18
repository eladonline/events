// save items to storage
export const saveInStorage = ({ background, description, id, service }) => {
  const data = { background, description, id, service };
  let itemInCart = localStorage.getItem("cart");
  let itemToStore = [];
  if (itemInCart) {
    let parsedStore = JSON.parse(itemInCart);
    itemToStore.push(...parsedStore, data);
  } else {
    itemToStore.push(data);
  }

  localStorage.setItem("cart", JSON.stringify(itemToStore));
};

// get cart items from storage
export const getItemsFromStorage = () => {
  let items = localStorage.getItem("cart");
  return items ? JSON.parse(items) : [];
};
// delete by index from storage
export const deleteItemsFromStorage = index => {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
};
