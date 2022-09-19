import React, { Component } from "react";
import CategoriesCards from "./components/Snacks"
import Banner from "./components/Banner";
import "./Category.css";


// ps if you seeing this i still abit confused with redux so i old school react
class Category extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <CategoriesCards />
      </React.Fragment>
    );
  }
}

export default Category;
