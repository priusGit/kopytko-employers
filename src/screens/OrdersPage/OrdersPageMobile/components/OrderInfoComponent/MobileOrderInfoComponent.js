import React from "react";
import classes from "./MobileOrderInfoComponent.module.css";
import { MdExpandLess } from "react-icons/md";
import { GoNote } from "react-icons/go";
import { FiTruck } from "react-icons/fi";

const MobileOrderInfoComponent = () => {
  return (
    <div className={classes.darkBG}>
      <div className={classes.mobileOrderInfoComponent}>
        <div className={classes.topInfoBar}>
          <span className={classes.hour}>12:35</span>

          <span></span>
          <span className={classes.expand}>
            <MdExpandLess />
          </span>
          <span className={classes.note}>
            <GoNote />
          </span>
          <span className={classes.status}>
            <FiTruck />
          </span>
        </div>
        <p className={classes.name}>Marcin Szaro</p>
        <table>
          <tr>
            <th>#1</th>
            <th>Nazwa przedmioty 1</th>
            <th>2</th>
          </tr>
          <tr>
            <th>#2</th>
            <th>Nazwa przedmioty 2</th>
            <th>5</th>
          </tr>
          <tr>
            <th>#3</th>
            <th>Nazwa przedmioty 3</th>
            <th>1</th>
          </tr>
          <tr>
            <th>#4</th>
            <th>Termodynamiczka kajzerska śniadaniowa z bakłażanem</th>
            <th>5</th>
          </tr>
        </table>
        <p>Suma: 134,56zł</p>
        <p>Status: OPŁACONO</p>
        <button>przyjmij</button>
        <button>odrzuć</button>
        <button>dostawa</button>
      </div>
    </div>
  );
};

export default MobileOrderInfoComponent;
