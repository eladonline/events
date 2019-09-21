import React, { useState } from "react";
import { Menu } from "antd";
import data from "src/data/navbar.json";
import Router from "next/router";
import Link from "next/link";
import CartIcon from "./cartIcon";

const SubMenu = Menu.SubMenu;

const handleClick = e => {
  const { key } = e;
  Router.push(`/${key}`);
};

const NavbarDesktop = ({ top, cartItems }) => {
  return (
    <div className="notMobile">
      <CartIcon nItems={cartItems} />
      <Menu onClick={handleClick} current={"[]"} mode="horizontal">
        {data.menuItem.map(item => {
          return (
            <Menu.Item key={item.link}>
              <Link href={item.link}>{item.title}</Link>
            </Menu.Item>
          );
        })}

        <Link href="/">
          <div data-top={top} className="menu-navbar__ant-menu__logo logo" />
        </Link>

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
        <Menu.Item key={"#footer"}>צור קשר</Menu.Item>
      </Menu>
    </div>
  );
};

export default NavbarDesktop;