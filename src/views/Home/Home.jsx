import React, { Component } from "react";
import SelloutCards from "./components/SelloutCards";
import Loader from "../../components/Loader/Index";
import "./Home.css";
import { connect } from "react-redux";
import { getShopAPI } from "../../store/actions/index.js"
import Banner from "./components/Banner"
import axios from 'axios';
import PropTypes from "prop-types";
import MainLayoutLoginPage from "../../Layouts/MainLayoutLoginPage";



async function getPostalCode(userInputPostal) {
  const api = `https://swiftys-server.glitch.me/api/postal/${userInputPostal}`
  const data = await axios.get(api);
  if (data.status === 204) {
    return data
  } else {
    const output = data.data[0].shopName
    return output
  }
};

// ps if you seeing this i still abit confused with redux so i old school react
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      postalCode: ""
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await getPostalCode(this.state.postalCode).then(async (shopName2) => {
      if (shopName2.status === 204) {
        alert("Postal Not Found Yo")
        this.setState({ postalCode: "" });
      } else if (shopName2 !== undefined) {
        let data = await this.props.getApiCall(shopName2);
        if (data.status === 200) {
          this.props.history.push("/home");
        } else {
          alert("ERROR IN getShopAPI")
          this.setState({ postalCode: "" });
        }
      } else {
        alert("Something went Wrong")
        this.setState({ postalCode: "" });
      }
    })
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <MainLayoutLoginPage>
        <div className="postalcode-contaner mt-2">
          <div className="input-contaner mt-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Postal Code"
                value={this.state.postalCode}
                onChange={e => this.setState({ postalCode: e.target.value })}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={this.onSubmit}
                  style ={{zIndex: '0'}}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <PostalCode /> */}
        <Banner />
        <SelloutCards />
        {/* <Deal /> */}
        </MainLayoutLoginPage>
    );
  }
}


Home.propTypes = {
  shopNameProps: PropTypes.string,
};


const mapStateToProps = (state) => {
  return {
    nameProps: state.shopeName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getApiCall: (shopName) => dispatch(getShopAPI(shopName))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
