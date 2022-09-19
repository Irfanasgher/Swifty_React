import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


const CategoriesCards = (props) => {
  // temp route first
  let cardsData = [
    {
      image: "snacks.png",
      route: "snacks"
    },
    {
      image: "drinks.png",
      route: "drinks"
    },
    {
      image: "ice_cream.png",
      route: "icecream"
    }
  ];

  let instantandbreaddata = [
    {
      image: "instant.png",
      route: "instant"
    },
    {
      image: "bread.png",
      route: "bread"
    }
  ];

  let moreproductsdata = [
    {
      image: "more.png",
      route: "sale"
    }
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <NavLink to= {"category/" + card.route} activeClassName="selected"  key={index}>
          <img 
            className="categoryBanner"
            src={require(`../../../assets/images/${card.image}`).default}
            alt="Swifty Banner"
          />
        </NavLink>
      );
    });
  }


  function generateBreadandInstantCards() {
    const instantdata = instantandbreaddata[0]
    const breaddata = instantandbreaddata[1]

    /*
    const components = instantandbreaddata.map((card, index) => {
      return (
        <NavLink style = {{marginInline:4}}to= {"category/" + card.route} activeClassName="selected"  key={index}>
          <img 
            className="categoryBanner"
            src={require(`../../../assets/images/${card.image}`).default}
            alt="Swifty Banner"
          />
        </NavLink>
      );
    });
    */

    return (
      <div style = {{display:"flex", flexDirection:"row"}}>
        <NavLink style = {{marginRight:5}}to= {"category/" + instantdata.route} activeClassName="selected"  key={"instant"}>
          <img 
            className="categoryBanner"
            src={require(`../../../assets/images/${instantdata.image}`).default}
            alt="Swifty Banner"
          />
        </NavLink>
        <NavLink style = {{marginLeft:5}}to= {"category/" + breaddata.route} activeClassName="selected"  key={"bread"}>
          <img 
            className="categoryBanner"
            src={require(`../../../assets/images/${breaddata.image}`).default}
            alt="Swifty Banner"
          />
        </NavLink>
      
      </div>)
  }

  function generateMorProductsCards() {
    return moreproductsdata.map((card, index) => {
      return (
        <NavLink to= {"category/" + card.route} activeClassName="selected"  key={index}>
          <img 
            className="categoryBanner"
            src={require(`../../../assets/images/${card.image}`).default}
            alt="Swifty Banner"
          />
        </NavLink>
      );
    });

  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
      {generateBreadandInstantCards()}
      {generateMorProductsCards()}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    fullState:state
  };
};

export default connect(mapStateToProps)(CategoriesCards);