import CartItemCard from "./cartItemCard";
import getQuantity from "./quantity";

const parseItemsFromCart = items => {
  const withQuantity = getQuantity(items);
  return withQuantity.map((item, i) => {
    return (
      <CartItemCard
        key={item.item.id}
        data={item.item}
        quantity={item.quantity}
        index={i}
      />
    );
  });
};

export default parseItemsFromCart;
