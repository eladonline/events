import { slide as BmMenu } from "react-burger-menu";
import CartIcon from "./cartIcon";
import Link from "next/link";
import data from "src/data/navbar.json";

const parseMenuItems = () => {
  return data.menuItem.map(item => {
    return (
      <Link key={item.title} href={item.link}>
        <a>{item.title}</a>
      </Link>
    );
  });
};
const parseSubMenuItems = () => {
  return data.menusWithSubMenus.map(({ subMenuItems }) => {
    return subMenuItems.map(item => {
      return (
        <Link key={item.title} href={item.link}>
          <a>{item.title}</a>
        </Link>
      );
    });
  });
};

const NavbarMobile = ({ cartItems }) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className="mobileOnly">
      <BmMenu right>
        <Link href="/">
          <div className="menu-navbar__ant-menu__logo logo" />
        </Link>
        <div className="bm-items-custom">
          {parseMenuItems()}
          {parseSubMenuItems()}

          <CartIcon nItems={cartItems} />
        </div>
      </BmMenu>
    </div>
  );
};

export default NavbarMobile;
