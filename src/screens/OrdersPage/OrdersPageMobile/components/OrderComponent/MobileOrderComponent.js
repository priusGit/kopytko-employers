import React from "react";
import classes from "./MobileOrderComponent.module.css";
import { MdExpandMore } from "react-icons/md";
import { GoNote } from "react-icons/go";
import { FiTruck } from "react-icons/fi";

const MobileOrderComponent = (props) => {
  return (
    <div className={classes.mobileOrderComponent}>
      <span className={classes.hour}>12:25</span>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.status}>
        <GoNote />
      </span>
      <span className={classes.status}>
        <FiTruck />
      </span>
      <span className={classes.more}>
        <MdExpandMore />
      </span>
    </div>
  );
};

export default MobileOrderComponent;
