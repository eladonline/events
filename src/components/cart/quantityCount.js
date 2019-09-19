const getQuantity = items => {
  let listWithQntity = [];
  items.forEach(item => {
    const filtered = items.filter(obj => {
      return item.id === obj.id;
    });
    const notInCart = listWithQntity.every(objA => objA.item.id !== item.id);
    if (notInCart) listWithQntity.push({ item, quantity: filtered.length });
  });

  return listWithQntity;
};

export default getQuantity;
