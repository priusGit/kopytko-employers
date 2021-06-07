import React from "react";
import classes from "./MobileMessageComponent.module.css";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileMessageComponent = (props) => {
  return (
    <div className={classes.mobileOrderComponent}>
      <span className={classes.hour}>12:25</span>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.status}>
        <AiOutlineCloseCircle />
      </span>
      <span className={classes.more}>
        <MdExpandMore />
      </span>
    </div>
  );
};

export default MobileMessageComponent;
