import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { useState } from "react";
import Circle from "@uiw/react-color-circle";
import Productcard3 from "../components/Productcard3";
import Productcard2 from "../components/Productcard2";
import { FaGripLines } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";
import Specialproducts2 from "../components/Specialproducts2";
const OurStore = () => {
  const [hex, setHex] = useState("#F44E3B");
  const [pvalue, setpvalue] = useState(21);
  const [grid, setgrid] = useState(1);
  return (
    <>
      <Meta title="Our Store" />
      <Breadcrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-2">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-2">
                <h3 className="filter-title">Filter by</h3>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    In Stock (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    Out of Stock (0)
                  </label>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="price-range d-flex gap-15 align-items-center">
                  <div className="d-flex gap-6 align-items-center">
                    <h6>$</h6>
                    <form class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInputValue"
                        placeholder="0.00"
                      />
                      <label htmlFor="floatingInputValue">Start Price</label>
                    </form>
                  </div>
                  <h6 className="">-</h6>
                  <div className="d-flex gap-6 align-items-center">
                    <h6>$</h6>
                    <form class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInputValue"
                        placeholder="0.00"
                      />
                      <label htmlFor="floatingInputValue">End price</label>
                    </form>
                  </div>
                </div>
                <h5 className="sub-title">Color</h5>
                <Circle
                  colors={[
                    "#F44E3B",
                    "#FE9200",
                    "#FCDC00",
                    "#DBDF00",
                    "#0000ff",
                    "#800080",
                    "#000000",
                    "#7ED331",
                    "#F64E4B",
                    "#FE9220",
                    "#FCDE00",
                    "#0BCF20",
                    "#00CCff",
                    "#D00780",
                  ]}
                  color={hex}
                  onChange={(color) => {
                    setHex(color.hex);
                  }}
                />
                <h5 className="sub-title">Size</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    S
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    M
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    L
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    xl
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    XXl
                  </label>
                </div>
              </div>
              <div className="filter-card mb-2">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Headphone
                  </span>
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Apple
                  </span>
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Laptop
                  </span>
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Mobile
                  </span>
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Speaker
                  </span>
                  <span className="badge rounded-3 bg-light px-2 py-3 txt">
                    Tablet
                  </span>
                </div>
              </div>
              <div className="filter-card mb-2">
                <h3 className="filter-title">other Products</h3>
                <div className="other-products d-flex flex-wrap justify content-between">
                  <Productcard2 />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid bg-white d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center text-center gap-10">
                  <div className="m-0 sub-title text-center">Sort By :</div>
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle  txt"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Best Selling
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="">
                          Alphabetically, A to z
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Alphabetically, A to z
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Price, low to high
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Price, hign to low
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Date, old to new
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Date, new to old
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center text-center gap-10">
                  <div className="product-count text-center">
                    {pvalue} Products:
                  </div>
                  <div className="d-flex align-items-center text-center gap-10">
                    <button
                      onClick={() => setgrid(1)}
                      className={`${
                        grid === 1 ? "gactive" : ""
                      } grid badge rounded-3 text-dark`}
                    >
                      <CiLineHeight className="w-100 h=100" />
                    </button>
                    <button
                      onClick={() => setgrid(2)}
                      className={`${
                        grid === 2 ? "gactive" : ""
                      } grid badge rounded-3 text-dark`}
                    >
                      <CiViewTimeline className="w-100 h=100" />
                    </button>
                    <button
                      onClick={() => setgrid(3)}
                      className={`${
                        grid === 3 ? "gactive" : ""
                      } grid badge rounded-3 text-dark`}
                    >
                      <FaGripLinesVertical className="w-100 h=100" />
                    </button>
                    <button
                      onClick={() => setgrid(4)}
                      className={`${
                        grid === 4 ? "gactive" : ""
                      } grid badge rounded-3 text-dark`}
                    >
                      <FaGripLines className="w-100 h=100" />
                    </button>
                  </div>
                </div>
              </div>
              {grid === 1 ? (
                <div className="product-list d-flex flex-wrap gap-10 align-items-center">
                  <Productcard3 setpvalue={setpvalue} />
                </div>
              ) : null}
              {grid === 2 ? (
                <div className="product-list-2 d-flex flex-wrap gap-10 align-items-center justify-content-between">
                  <Productcard3 setpvalue={setpvalue} />
                </div>
              ) : null}
              {grid === 3 ? (
                <div className="product-list-3 d-flex flex-wrap gap-10 align-items-center justify-content-between">
                  <Specialproducts2 setpvalue={setpvalue} />
                </div>
              ) : null}
              {grid === 4 ? (
                <div className="product-list-4 d-flex flex-wrap gap-10 align-items-center justify-content-between">
                  <Specialproducts2 setpvalue={setpvalue} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
