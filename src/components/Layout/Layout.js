import React, { Component } from "react";
import LayoutMobile from "./LayoutMobile/LayoutMobile";
class Layout extends Component {
  render() {
    return (
      <>
        <LayoutMobile />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
