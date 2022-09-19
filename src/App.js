import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { closeMaxProductModal, toogleSideBar } from "./store/actions";
import MainLayout from "./Layouts/MainLayout";
import MainLayoutLoginPage from "./Layouts/MainLayoutLoginPage";
import * as Maincontainers from "./views";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    /*
    const routerprops = {
      storeCartCount : this.props.storeCartItemsCount, 
      showModal: this.props.showModalProp,
      closeModalProp: this.props.closeModalProp,
      modalMessage: this.props.modalMessageProp,
      showSideBar: this.props.showSideNavigationProp,
      toggleSideBar: this.props.toggleSideBarProp
    }
    */
    return (
      <div className="App">
        <Switch>
          {/*
          <MainLayoutLoginPage
            storeCartCount={this.props.storeCartItemsCount}
            showModal={this.props.showModalProp}
            closeModalProp={this.props.closeModalProp}
            modalMessage={this.props.modalMessageProp}
            showSideBar={this.props.showSideNavigationProp}
            toggleSideBar={this.props.toggleSideBarProp}
          >
            
          </MainLayoutLoginPage>
          */}
          <MainLayout
            storeCartCount={this.props.storeCartItemsCount}
            showModal={this.props.showModalProp}
            closeModalProp={this.props.closeModalProp}
            modalMessage={this.props.modalMessageProp}
            showSideBar={this.props.showSideNavigationProp}
            toggleSideBar={this.props.toggleSideBarProp}
          >
            <Route path={"/"} exact component={Maincontainers.HomePage}  />
            <Route path={"/all"} exact component={Maincontainers.AllPage}  />
            <Route path={"/home"} exact component={Maincontainers.ProductCategoriesHomePage} />
            <Route
              path={"/category/:category"}
              component={Maincontainers.ProductCategoriesPage}
            />
            <Route path={"/sale"} component={Maincontainers.SalesPage} />
            <Route path={"/cart"} component={Maincontainers.CartPage} />
            <Route path={"/checkout"} component={Maincontainers.CheckoutPage} />
            <Route
              path={"/product/:productSlug"}
              render={(props) => (
                <Maincontainers.ProductDetailsPage
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            />
            {/*always redirect to index*/}
            <Redirect to={"/"} />

          </MainLayout>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storeCartItemsCount: state.cartTotal,
    showModalProp: state.productMaxShowModal,
    modalMessageProp: state.modalMessage,
    showSideNavigationProp: state.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
