import { Menu, Icon } from 'antd';
import React, { PureComponent } from 'react';
import Link from 'next/link';
import { distanceMeasure } from 'src/components/helpers';
import Router from 'next/router'

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
  handleClick = e => {
    const {key} = e
    Router.push(`/event/${key}`)
  };

  render() {
    const { current, top } = this.state;
    return (
      <div className="menu-navbar" data-top={top === 0}>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="app">
            <Link href="/">
              <a>מחירים</a>
            </Link>
          </Menu.Item>
          <Link href="/">
            <div data-top={top === 0} className="menu-navbar__ant-menu__logo logo" />
          </Link>

          <SubMenu title={'סוג האירוע'}>
            <Menu.Item key="company">אירוע חברה</Menu.Item>
            <Menu.Item key="wedding">חתונה</Menu.Item>
            <Menu.Item key="bar-mitzva">בר מצווה</Menu.Item>
            <Menu.Item key="brit">ברית/ה</Menu.Item>
            {/* <Menu.Item key="birthday">יום הולדת</Menu.Item> */}
            <Menu.Item key="singles">מסיבת רווקים/רווקות</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
