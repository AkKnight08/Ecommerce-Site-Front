import React, { useState, useRef } from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Productcard from "../components/Productcard";
import Rating from "@mui/material/Rating";
import Zoom from "react-img-zoom-gdn";
import { FaCodeCompare } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Circle from "@uiw/react-color-circle";
const ProductPage = () => {
  const textAreaRef = useRef(null);
  const copyToClip = async () => {
    try {
      if (textAreaRef.current) {
        await navigator.clipboard.writeText(textAreaRef.current.value);
      }
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };
  const [rating, setrating] = useState(3.5);
  const [ordered, setordered] = useState(false);
  const [wrating, setwrating] = useState(0);
  const [mimg, setmimg] = useState("/images/ipad.jpg");
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title={"Product Name"} />
      <div className="main-product-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 bg-white">
              <div className="main-product-img">
                <div className="main-img">
                  <Zoom
                    img={mimg}
                    zoomScale={2}
                    height={640}
                    transitionTime={0.5}
                  />
                </div>
                <div className="other-product-img d-flex gap-6 mt-2 mb-2 justify-content-between flex-wrap">
                  <img
                    onClick={() => setmimg("/images/ipad2.jpg")}
                    src="/images/ipad2.jpg"
                    alt="main pro"
                  />

                  <img src="/images/ipad3.jpg" alt="main pro" />
                  <img src="/images/ipad2.jpg" alt="main pro" />
                  <img src="/images/ipad2.jpg" alt="main pro" />
                  <img src="/images/ipad2.jpg" alt="main pro" />
                  <img src="/images/ipad3.jpg" alt="main pro" />
                </div>
              </div>
            </div>
            <div className="col-6 bg-white">
              <div className="main-product-details">
                <div className="bor-bot">
                  <h6>iPad Pro+ for Max users</h6>
                </div>
                <div className="p-r">
                  <h6 className="mt-3">$100</h6>

                  <div className="d-flex gap-10 align-items-center">
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />{" "}
                    <p className="mb-0">(2 Reviews)</p>
                  </div>
                  <a
                    onClick={() => setordered(true)}
                    className="text-dark mt-2 "
                    href="#review-wrapper"
                  >
                    Write a review
                  </a>
                </div>
                <div className="pro-det mt-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Type:</h6>{" "}
                    <p className="mb-0">Headsets</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Brand:</h6>{" "}
                    <p className="mb-0">Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Categories:</h6>{" "}
                    <p className="mb-0">
                      airpod ,camera's ,Computer & Laptop ,mini speaker
                      ,Portable ,smart phone
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Tags:</h6>{" "}
                    <p className="mb-0">Headphone laptop mobile oppo speaker</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">SKU:</h6>{" "}
                    <p className="mb-0">SKU027</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Availabilty:</h6>{" "}
                    <p className="mb-0">521 in Stock</p>
                  </div>
                  <div className="d-flex gap-10 mt-3 flex-column">
                    <h6 className="mb-0">Sizes:</h6>{" "}
                    <div className="d-flex gap-6 ">
                      <span className="badge border bg-white  border-1 text-dark rounded-2 border-secondary">
                        S
                      </span>
                      <span className="badge border bg-white  border-1 text-dark rounded-2 border-secondary">
                        M
                      </span>
                      <span className="badge border bg-white  border-1 text-dark rounded-2 border-secondary">
                        L
                      </span>
                      <span className="badge border bg-white  border-1 text-dark rounded-2 border-secondary">
                        Xl
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-3">
                    <h6 className="">Colors:</h6>{" "}
                    <Circle
                      colors={["#F44E3B", "#FE9200", "#FCDC00"]}
                      className="w-100 "
                    />
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-3">
                    <h6 className="mb-0">Quantity:</h6>{" "}
                    <input type="number" placeholder="1" min={1} max={10} />
                    <button className="ms-5 button text-white d-flex align-items-center justify-content-center">
                      Add to cart
                    </button>
                    <button className="button d-flex align-items-center justify-content-center bg-warning text-dark border-0">
                      Buy it now
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <a href="" className="text-dark">
                    <FaCodeCompare />
                    &nbsp; Add to Compare
                  </a>
                  <a href="" className="ms-3 text-dark">
                    <CiHeart />
                    &nbsp; Add to Wishlist
                  </a>
                </div>
                <div className="pol-det d-flex gap-10 align-items-center mt-3">
                  <h6 className="mb-0">Shipping details:</h6>{" "}
                  <p className="mb-0">Delivery between Mon to Sat</p>
                </div>
                <div className="pol-det d-flex gap-10 align-items-center mt-3">
                  <h6 className="mb-0">Materials:</h6>{" "}
                  <p className="mb-0">Delivery between Mon to Sat</p>
                </div>
                <div className="pol-det d-flex gap-10 align-items-center mt-3">
                  <h6 className="mb-0">Dimensions:</h6>{" "}
                  <p className="mb-0">Delivery between Mon to Sat</p>
                </div>
                <div className="pol-det d-flex gap-10 align-items-center mt-3">
                  <h6 className="mb-0">Care Instructions:</h6>{" "}
                  <p className="mb-0">Delivery between Mon to Sat</p>
                </div>
                <div className="mt-3">
                  <a
                    onClick={copyToClip}
                    className="text-dark"
                    href="javascript:void(0);"
                  >
                    <CiShare2 />
                    &nbsp; Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="des-wrapper py-4">
          <div className="container-xxl">
            <div className="row">
              <div className=" ms-3 mb-0">
                <h3 className="section-heading">Description</h3>
              </div>
              <div className="col-12 mt-3">
                <div className="bg-white des ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eget risus molestie, vulputate mauris vel, consectetur
                    nulla. Phasellus euismod tortor id libero euismod iaculis.
                    Nullam vitae commodo ligula. Etiam accumsan orci commodo,
                    tempus felis in, aliquam lectus. Morbi sed tincidunt tortor.
                    Maecenas posuere enim ac nulla tempus, ornare efficitur
                    ipsum pretium. Pellentesque id velit ipsum. Quisque maximus
                    cursus sapien, a tincidunt ex tempus vitae. Morbi mauris
                    mauris, placerat eget malesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="review-wrapper py-4" id="review-wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className=" ms-3 mb-0">
                <h3 className="section-heading">Reviews</h3>
              </div>
              <div className="col-12 mt-3">
                <div className="review-head bg-white">
                  <div className="customer">
                    <h3>Cutomer Reviews</h3>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-10 align-items-center">
                        <Rating
                          name="half-rating-read"
                          defaultValue={rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <p className="mb-0">Based On 21 Reviews</p>
                      </div>
                      <h6 className="" onClick={() => setordered(!ordered)}>
                        Write a Review
                      </h6>
                    </div>
                  </div>

                  {ordered === true ? (
                    <form className="write-review mt-3">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Review Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Give your Review Title"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Write a review
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Write your comments here"
                        ></textarea>
                      </div>
                      <div className="">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label rate"
                        >
                          Rating
                        </label>
                        <br />
                        <div className="rate">
                          <Rating
                            name="half-rating-read"
                            value={wrating}
                            onChange={(event, newValue) => {
                              setwrating(newValue);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <button className="button d-flex align-items-center justify-content-center">
                          Submit
                        </button>
                      </div>
                    </form>
                  ) : (
                    ""
                  )}
                  <div className="cutomer-reviews mt-3">
                    <h4>Amazing Product</h4>
                    <h6>Akshay on 12 Jan,2019</h6>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <p>Looks Good and can be very much used at every outing</p>
                  </div>
                  <div className="cutomer-reviews mt-3 ">
                    <h4>Amazing Product</h4>
                    <h6>Akshay on 12 Jan,2019</h6>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <p>Looks Good and can be very much used at every outing</p>

                    <div className=" d-flex justify-content-end">
                      <div className="ad-reply">
                        <h4>Admin on 12 Jan,2019</h4>
                        <p>Thank you, very much for appreciation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-products home-wrapper-2 py-4">
          <div className="container-xxl">
            <div>
              <div className="row ">
                <div className=" ms-3 mb-0">
                  <h3 className="section-heading">Popular Products</h3>
                </div>
                <div className="popular-wrapper d-flex gap-15">
                  <div className="s-popular-card d-flex gap-15">
                    <div className=" p-2 col-2 card-wrapper position-relative">
                      <img
                        className="img-fluid"
                        src="/images/spid.jpg"
                        alt=""
                      />

                      <p className="position-absolute text-white">
                        <Link className="text-white">
                          {" "}
                          Featured Collections
                        </Link>
                      </p>
                    </div>
                    <div className=" p-2 col-2 card-wrapper position-relative">
                      <img
                        className="img-fluid"
                        src="/images/spid2.jpg"
                        alt=""
                      />

                      <p className="position-absolute text-white">
                        <Link className="text-white">
                          {" "}
                          Featured Collections
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="popular-card d-flex gap-15 bg-white">
                    <Productcard />

                    <Productcard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
