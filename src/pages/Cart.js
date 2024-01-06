import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import Cartcard from "../components/Cartcard";

const Cart = () => {
  return (
    <>
      <Meta title={"Shopping Cart"} />
      <Breadcrumb title={"Shopping Cart"} />
      <section className="cart-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-9">
              <div className="cart-wrap bg-white">
                <div className="cart-header d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>

                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>

                <Cartcard />
              </div>
            </div>
            <div className="col-3">
              <div className="final-checkout bg-white">
                <h4>Subtotal : $600</h4>
                <p>Inlcluding taxes & shipping charges</p>
                <div className="d-flex justify-content-end">
                  <a
                    href="/checkout"
                    className="button d-flex justify-content-center align-items-center"
                  >
                    {" "}
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
