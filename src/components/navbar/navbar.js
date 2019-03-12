import { Menu, Icon } from 'antd';
import React, { PureComponent } from 'react';
import Link from 'next/link';
import { distanceMeasure } from 'src/components/helpers';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends PureComponent {
  state = { current: '', top: false };
  componentDidMount = () => {
    const navbar = document.querySelector('.menu-navbar');
    document.addEventListener('scroll', () => {
      const distance = distanceMeasure(navbar, 'top');
      this.setState({ top: distance });
    });
  };

  render() {
    const { current, top } = this.state;
    return (
      <div className="menu-navbar" data-top={top === 0}>
        <Menu selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="app">
            <Link href="/">
              <a>שני ןכמה</a>
            </Link>
          </Menu.Item>
          <div data-top={top === 0} className="menu-navbar__ant-menu__logo logo" />

          <SubMenu title={'סוג האירוע'}>
            <Menu.Item key="setting:1">אירוע חברה</Menu.Item>
            <Menu.Item key="setting:2">חתונה</Menu.Item>
            <Menu.Item key="setting:3">בר מצווה</Menu.Item>
            <Menu.Item key="setting:4">ברית/ה</Menu.Item>
            <Menu.Item key="setting:5">יום הולדת</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
