import React, { Component } from "react";
import classes from "./LayoutMobile.module.css";
import SideDrawer from "./SideDrawer/Sidedrawer";
import toggleSideMenu from "./functions/toggleSideMenu";
class LayoutMobile extends Component {
  render() {
    return (
      <>
        <section className={classes.layoutMobile}>
          <div className={classes.navBar}>
            <div className={classes.navIconCont} onClick={toggleSideMenu}>
              X
            </div>
            <h1>kopytko admin panel</h1>
            <div></div>
          </div>
        </section>
        <SideDrawer />
      </>
    );
  }
}

export default // connect(mapStateToProps, mapDispatchToProps)
LayoutMobile;
