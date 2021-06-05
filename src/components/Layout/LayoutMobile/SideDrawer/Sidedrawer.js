import React, { Component } from "react";
import NavigationItem from "../Navitem/NavItem";
import classes from "./Sidedrawer.module.css";
import toggleSideMenu from "../functions/toggleSideMenu";
class SideDrawer extends Component {
  render() {
    return (
      <>
        <div className={classes.mobileMenu} id="mobileMenu">
          <ul>
            <NavigationItem onClick={toggleSideMenu} link="/" active>
              Panel główny
            </NavigationItem>
            <NavigationItem
              onClick={toggleSideMenu}
              link="/reservations"
              active
            >
              Rezerwacje
            </NavigationItem>
            <NavigationItem onClick={toggleSideMenu} link="/history" active>
              Historia
            </NavigationItem>
            <NavigationItem onClick={toggleSideMenu} link="/messages" active>
              Wiadomości
            </NavigationItem>
            <NavigationItem onClick={toggleSideMenu} link="/orders" active>
              Zamówienia
            </NavigationItem>
          </ul>

          <div className={classes.bar}></div>
        </div>
        <div className={classes.mobileMenuBackgroud} id="darkBG"></div>
      </>
    );
  }
}

export default SideDrawer;
