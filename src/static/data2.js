let data = {
  shopName: "testshop",
  cart: [],
  vat: 16,
  cartTotal: 0,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10
    },
    {
      code: "FIVEPERCENT",
      percentage: 5
    }
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 300
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 1000
    }
  ],
  productMaxShowModal: false,
  modalMessage: null,
  showSideNavigation: false,
  usedCurrency: {
    KES: 1,
    symbol: "SGD"
  },
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700
  },
  products: [
    {
      id: 1,
      name: "men's analog quartz watch",
      slug: "mens-analog-quartz-watch-547383",
      price: 500,
      discount_price: 2800,
      category: "men",
      color: "black",
      subcategory: "",
      sale: true,
      article: "watch",
      quantity: 5,
      img: "analog-quartz-watch.jpg",
      options: [
        1,
        2,
        3
      ],
      fulfilled_by_duka: true,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 1,
        name: "duka"
      },
      ratings: {
        star_ratings: 4.8,
        votes: 350
      }
    },
  ]
};


export default data;
