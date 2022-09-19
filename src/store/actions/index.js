import * as actionTypes from "./actionTypes";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export const refreshPageNumber = (refreshvalue) => {
  return { type: actionTypes.REFRESH_PAGE_NUMBER, refreshvalue: refreshvalue};
};

export const setCategoriesChangedValue = (valuetoset) => {
  //console.log("redux store function triggered")
  return { type: actionTypes.SET_CATEGORIES_CHANGED_VALUE, newvalue: valuetoset };
};

export const setProductPriceFilter = (price) => {
  return { type: actionTypes.SET_PRODUCT_PRICE_FILTER, price: price };
};

export const addToCart = (productDetails) => {
  return {
    type: actionTypes.ADD_TO_CART,
    productDetails: productDetails,
  };
};

export const removeFromCart = (productDetails) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productDetails: productDetails,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const updateCartProductCount = (value, productDetails) => {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
    newCountValue: value,
    productDetails: productDetails,
  };
};

export const confirmOrder = (order, ownProps) => {
  return (dispatch) => {
    var i;
    var temp = {}
    for (i = 0; i < order.itemName.length; i++) {
      const id = order.itemName[i].id
      const name = order.itemName[i].name
      temp[id] = name
    }
    for (i = 0; i < order.cart.length; i++) {
      const id = order.cart[i].id
      if (id in temp) {
        order.cart[i]['name'] = temp[id]
      }
    }
    delete order.itemName

    // send order object to an end point of choice
    // console.log(order);

    // Upload to Sheets
    // sendToSheets(order);

    // Upload to Zoho
    // sendToZoho(order)

    // Upload order to mongoDB
    // sendToDatabase(order)

    // Send to Telegram
    // sendToTelegram(order)

    checkoutSuccess(order)

    // todo
    // token for stripe
    dispatch(confirmOrderSuccess());
    ownProps.history.push("/cart");
    setTimeout(() => {
      dispatch(resetOrderSuccess());
    }, 5000);
  };
};

export async function sendToSheets(order) {
  const url = `https://swiftys-server.glitch.me/api/orders/sheets`
  await axios.post(url, order).then(function (response) {
  })
}


export async function sendToZoho(order){
  // const clientID = process.env.zohoID;
  // const clientSecret = process.env.zohoSecret;

  // TUTORIAL : https://www.youtube.com/watch?v=UqSsP-wz-mE

  // Access to XMLHttpRequest at 'https://accounts.zoho.com/oauth/v2/token?grant_type=authorization_code&client_id=1000.2O0AG0LGY5JDLS6DVOCOLRQMU5QXQI&client_secret=68b58c17404ae05a3ffe810e6751c99a2cdc45d808&redirect_uri=http://localhost&code=1000.cf22de7178d5149ca0105dda7455dd25.93a59c0b3a5b5c925f658d349a9d8274' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  const clientID = '1000.2O0AG0LGY5JDLS6DVOCOLRQMU5QXQI'
  const clientSecret = '68b58c17404ae05a3ffe810e6751c99a2cdc45d808'
  const redirectURI = 'http://localhost:3000'
  const code = ''

  const testURL = "https://accounts.zoho.com/oauth/v2/token?grant_type=authorization_code&client_id=1000.2O0AG0LGY5JDLS6DVOCOLRQMU5QXQI&client_secret=68b58c17404ae05a3ffe810e6751c99a2cdc45d808&redirect_uri=http://localhost&code=1000.cf22de7178d5149ca0105dda7455dd25.93a59c0b3a5b5c925f658d349a9d8274"

  const zohoGenerateToken = `https://accounts.zoho.com/oauth/v2/token?grant_type=authorization_code&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&code=${code}`

  // axios.get(testURL).then((response) => { 
  //   console.log(response)
  // })

}

export async function checkoutSuccess(order) {
  console.log(order)
  try {
    await axios.post("https://swiftys-server.glitch.me/api/orders/sheets", order)
  } catch (err) {
    throw (err)
  }
}

export async function sendToTelegram(order) {

  // const apiToken = process.env.telegramAPI;
  // const chatID = process.env.telegramChatID;
  return 
}

export async function sendToDatabase(order) {
  const url = `https://swiftys-server.glitch.me/api/orders/`
  await axios.post(url, order).then(function (response) {
  })
}

export function getShopAPI(userShopName) {
  return async dispatch => {
    function onSuccess(data) {
      dispatch({
        type: actionTypes.GET_API,
        payload: data.data[0],
        shopName: userShopName
      });
      return data;
    }
    function onError(error) {
      console.log(error)
    }
    try {
      const api = `https://swiftys-server.glitch.me/api/shop/${userShopName}`
      const data = await axios.get(api);
      return onSuccess(data)
    } catch (error) {
      return onError(error)
    }
  }
}

export const closeMaxProductModal = () => {
  return {
    type: actionTypes.CLOSE_MAX_PRODUCT_MODAL,
  };
};

export const confirmOrderSuccess = () => {
  return {
    type: actionTypes.CONFIRM_ORDER_SUCCESS,
  };
};

export const resetOrderSuccess = () => {
  return {
    type: actionTypes.RESET_ORDER_SUCCESS,
  };
};

export const confirmOrderFailure = () => {
  // todo
  return {
    type: actionTypes.CONFIRM_ORDER_FAILURE,
  };
};

export const toogleSideBar = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_BAR,
  };
};

export const setPromoCode = (promoCodeObject) => {
  return {
    type: actionTypes.SET_PROMO_CODE,
    promoCode: promoCodeObject,
  };
};

export const setShopName = (value, productDetails) => {
  return {
    type: actionTypes.SET_SHOP_NAME,
    shopName: value,
    productDetails: productDetails,
  };
};