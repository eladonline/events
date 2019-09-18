import React, { PureComponent } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { distanceMeasure } from "src/components/helpers";
import Router from "next/router";
import data from "src/data/navbar.json";
import { getItemsFromStorage } from "../cart/manageCart";
import CartIcon from "./cartIcon";

const SubMenu = Menu.SubMenu;

class Navbar extends PureComponent {
  state = { current: "", top: false, cartItems: 0 };

  componentDidMount = () => {
    const navbar = document.querySelector(".menu-navbar");
    document.addEventListener("scroll", () => {
      const distance = distanceMeasure(navbar, "top");
      this.setState({ top: distance });
    });
    this.setState({ cartItems: getItemsFromStorage().length });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.addCartTrigger !== this.props.addCartTrigger) {
      this.setState({ cartItems: getItemsFromStorage().length });
    }
  }
  handleClick = e => {
    const { key } = e;
    Router.push(`/${key}`);
  };

  render() {
    const { current, top } = this.state;
    return (
      <div className="menu-navbar" data-top={top === 0}>
        <CartIcon nItems={this.state.cartItems} />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          {data.menusWithSubMenus.map(item => {
            return (
              <SubMenu key={item.title} title={item.title}>
                {item.subMenuItems.map(subItem => {
                  return (
                    <Menu.Item key={subItem.link}>{subItem.title}</Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}

          <Link href="/">
            <div
              data-top={top === 0}
              className="menu-navbar__ant-menu__logo logo"
            />
          </Link>

          {data.menuItem.map(item => {
            return <Menu.Item key={item.link}>{item.title}</Menu.Item>;
          })}
        </Menu>
      </div>
    );
  }
}

export default Navbar;
