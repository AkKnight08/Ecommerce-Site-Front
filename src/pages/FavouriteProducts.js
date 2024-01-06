import React, { useState } from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import Wishlist from "../components/Wishlist";
const FavouriteProducts = () => {
    const [count,setcount]=useState(0);
  return (
    <>
      <Meta title={"Favourite Products"} />
      <Breadcrumb title={"Favourite Products"} />
      <div className="favourite-products-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-count bg-white">
             Total Products:&nbsp; {count}
            </div>
            <div className="favourite-products d-flex flex-wrap gap-15">
              <Wishlist count={setcount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteProducts;
