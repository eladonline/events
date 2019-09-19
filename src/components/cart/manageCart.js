export const quickeSaveToStorage = toStore => {
  localStorage.setItem("cart", JSON.stringify(toStore));
};

// save items to storage
export const saveInStorage = ({ background, description, id, service, page }) => {
  const data = { background, description, id, service, page };
  let itemInCart = localStorage.getItem("cart");
  let itemToStore = [];
  if (itemInCart) {
    let parsedStore = JSON.parse(itemInCart);
    itemToStore.push(...parsedStore, data);
  } else {
    itemToStore.push(data);
  }

  quickeSaveToStorage(itemToStore);
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
  quickeSaveToStorage(items);
};
