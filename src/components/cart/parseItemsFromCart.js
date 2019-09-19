import CartItemCard from "./cartItemCard";
import getQuantity from "./quantityCount";

const parseItemsFromCart = (items, setCartChange) => {
  const withQuantity = getQuantity(items);
  return withQuantity.map((item, i) => {
    return (
      <CartItemCard
        key={item.item.id}
        data={item.item}
        quantity={item.quantity}
        setCartChange={setCartChange}
      />
    );
  });
};

export default parseItemsFromCart;
