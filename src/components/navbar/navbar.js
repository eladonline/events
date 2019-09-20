import React, { PureComponent } from "react";
import Link from "next/link";
import { distanceMeasure } from "src/components/helpers";
import Router from "next/router";
import { getItemsFromStorage } from "../cart/manageCart";
import CartIcon from "./cartIcon";
import NavbarDesktop from "./navbarDesktop";
import data from "src/data/navbar.json";
import NavbarMobile from "./navbarMobile";

class Navbar extends PureComponent {
  state = { top: false, cartItems: 0 };

  componentDidMount = () => {
    const navbar = document.querySelector(".menu-navbar");
    document.addEventListener("scroll", () => {
      const distance = distanceMeasure(navbar, "top");

      if (distance < 10 && !this.state.top) this.setState({ top: true });
      else if (distance > 10 && this.state.top) this.setState({ top: false });
    });
    this.setState({ cartItems: getItemsFromStorage().length });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.addCartTrigger !== this.props.addCartTrigger) {
      this.setState({ cartItems: getItemsFromStorage().length });
    }
  }

  render() {
    const { top } = this.state;
    return (
      <div className="menu-navbar" data-top={top}>
        
        <NavbarDesktop cartItems={this.state.cartItems} top={top} />
        <NavbarMobile cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default Navbar;
