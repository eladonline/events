import CartItemCard from "./cartItemCard";

const parseItemsFromCart = items => {
    
  return items.map((item, i) => {
    return <CartItemCard key={item.id} data={item} index={i} />;
  });
};

export default parseItemsFromCart;
