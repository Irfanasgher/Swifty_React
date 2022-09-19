import React from "react";
import PromoCodes from "./PromoCodes";
import ProductFilter from "../components/ProductFilter/Index";

const LeftColumn = () => {
  return (
    <React.Fragment>
      <div className={"container shop-left-column py-2"}>
        <PromoCodes showText>
          {/*shown only if there are no promocodes set*/}
          <div>
            <h5>New Stock!</h5>
            <p>
              We have just restocked.
            </p>
          </div>
        </PromoCodes>
        <hr />
      </div>
      <ProductFilter />
    </React.Fragment>
  );
};

export default LeftColumn;
