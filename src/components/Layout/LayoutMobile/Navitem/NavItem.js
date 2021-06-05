import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";
const navigationItem = (props) => (
  <li className={classes.NavItem} onClick={props.onClick}>
    <NavLink
      className={classes.navlink}
      activeClassName={classes.navlinkActive}
      exact
      to={props.link}
    >
      {props.children}
    </NavLink>
    <div className={classes.bar}></div>
  </li>
);

export default navigationItem;
