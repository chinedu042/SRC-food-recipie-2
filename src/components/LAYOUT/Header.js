import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart2={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealImage} />
      </div>
    </>
  );
};

export default Header;
