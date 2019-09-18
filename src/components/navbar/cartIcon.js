import { Menu, Icon } from "antd";
import Link from "next/link";

const CartIcon = ({ nItems }) => {
  return (
    <Link href='/cart'>
      <div className="cart-icon">
        <Icon type="shopping-cart" />
        <span>{nItems}</span>
      </div>
    </Link>
  );
};

export default CartIcon;
