import React from "react";

import MealSummaryText from "./MealSummaryText";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <>
      <MealSummaryText />
      <AvailableMeals />
    </>
  );
};

export default Meals;
