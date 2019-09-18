const getQuantity = items => {
  let listWithQntity = [];
  items.forEach(item => {
    const filtered = items.filter(obj => {
      return item.id === obj.id;
    });
    listWithQntity.push({ item, quantity: filtered.length });
  });
  listWithQntity = listWithQntity.filter((a, i) => {
    if(a.quantity === 1) return a.quantity === 1
    if (a.quantity > 1 && listWithQntity[i - 1])
      return a.item.id !== listWithQntity[i - 1].item.id;
  });
  return listWithQntity;
};

export default getQuantity;
