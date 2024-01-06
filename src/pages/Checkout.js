import React, { useState } from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Cartcard from "../components/Cartcard";
const Checkout = () => {
  const [info, setinfo] = useState(true);
  const [ship, setship] = useState(false);
  const [pay, setpay] = useState(false);
  return (
    <>
      <Meta title={"Checkout"} />
      <Breadcrumb title={"Checkout"} />
      <div className="checkout-wrappe home-wrapper-2 py-4 bg-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h4 className="web-name">Akshay's Store.</h4>
                <div className="ar-head mt-3 d-flex gap-10">
                  <a href="/cart" className="mb-5">
                    Cart
                  </a>{" "}
                  &nbsp;{">"}
                  <p
                    className={info ? "onlink" : ""}
                    onClick={() => (setinfo(true), setpay(false))}
                  >
                    Information
                  </p>{" "}
                  &nbsp;{">"}
                  <p
                    className={pay ? "onlink" : ""}
                    onClick={() => (setinfo(false), setpay(true))}
                  >
                    Payment
                  </p>
                </div>
                {info ? (
                  <div className="contact-info">
                    <h4>Contact Information</h4>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Full name "
                      />
                      <label for="floatingInput">Full Name</label>
                    </div>
                    <p>thisisakshayk@gmail.com</p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label mb-3"
                        for="flexCheckDefault"
                      >
                        Email you offers and news
                      </label>
                    </div>

                    <div className="ship-info">
                      <h4>Shipping Information</h4>
                      <div class="input-group mb-3">
                        <form class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue"
                            placeholder="Use Saved Address"
                            value="Use Saved Address"
                          />
                          <label for="floatingInputValue">Address</label>
                        </form>

                        <button
                          class="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="input-group mb-3">
                        <form class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue"
                            placeholder="Use Saved Address"
                            value="Select COuntry"
                          />
                          <label for="floatingInputValue">Country</label>
                        </form>

                        <button
                          class="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="input-group mb-3">
                        <form class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue"
                            placeholder="Use Saved Address"
                            value="Write Address"
                          />
                          <label for="floatingInputValue">Address</label>
                        </form>

                        <button
                          class="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex add-del justify-content-start">
                        <div class="input-group mb-3">
                          <form class="form-floating">
                            <input
                              type="email"
                              class="form-control"
                              id="floatingInputValue"
                              placeholder="Use Saved Address"
                              value="Select City"
                            />
                            <label for="floatingInputValue">City</label>
                          </form>

                          <button
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="input-group mb-3">
                          <form class="form-floating">
                            <input
                              type="email"
                              class="form-control"
                              id="floatingInputValue"
                              placeholder="Use Saved Address"
                              value="Select State"
                            />
                            <label for="floatingInputValue">State</label>
                          </form>

                          <button
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="input-group mb-3">
                          <form class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInputValue"
                              placeholder="Use Saved Address"
                            />
                            <label for="floatingInputValue">Zip Code</label>
                          </form>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center w-75">
                        <Link className="text-dark" to="/cart">
                          Back to the cart
                        </Link>
                        <button
                          onClick={() => (
                            setinfo(false), setpay(true), setship(false)
                          )}
                          className="button "
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {pay ? (
                  <div className="contact-info ship-info">
                    <h4>Payment Information</h4>
                    <form class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInputValue"
                        placeholder="name@example.com"
                        value="**** **** **** ****"
                      />
                      <label for="floatingInputValue">Enter Card Number</label>
                    </form>
                    <form class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputValue"
                        placeholder="name@example.com"
                        value="Name"
                      />
                      <label for="floatingInputValue">Holder's Name</label>
                    </form>
                    <form class="form-floating">
                      <input
                        type="month"
                        class="form-control"
                        id="floatingInputValue"
                      />
                      <label for="floatingInputValue">Expiry</label>
                    </form>
                    <form class="form-floating">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingInputValue"
                        placeholder="123"
                        value="123"
                      />
                      <label for="floatingInputValue">CVC</label>
                    </form>
                    <div className="d-flex justify-content-between mt-3 align-items-center w-75">
                      <Link
                        className="text-dark"
                        onClick={() => (setinfo(true), setpay(false))}
                      >
                        Back
                      </Link>
                      <Link
                        to="/"
                        className="button d-flex align-items-center justify-content-center"
                      >
                        Next
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="final-checkout bg-white">
                <h4>Subtotal : $600</h4>
                <p>Inlcluding taxes & shipping charges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
