import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState } from "react";
import productcard2 from "../data/Home/Productcard2";
import { useNavigate } from "react-router-dom";
export default function Specialproducts2() {
  const navigate = useNavigate();
  const discount = {
    day: "05",
    hr: 19,
    sec: 20,
  };
  function per_product(count, total) {
    return Math.floor((count * 100) / total);
  }
  const [value, setvalue] = useState(-1);
  return (
    <>
      {productcard2.map((p, index) => (
        <>
          <div
            className="col-4 my-2 card-wrapper rounded-3 special-card-size
          "
            onMouseEnter={() => setvalue(index)}
            onMouseLeave={() => setvalue(-1)}
            onClick={() => navigate("/product/:id")}
          >
            <div className="special-p-card d-flex">
              <div className=" special-p-img d-flex flex-column">
                <div className=" position-relative">
                  <img
                    className="img-fluid"
                    src={value === index ? p.img1 : p.img2}
                    alt="watch"
                  />
                  <div className="wish position-absolute">
                    <Link>
                      <img src="images/wish.svg" alt="wish" />
                    </Link>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="de-flex flex-column gap-10">
                      <div>
                        <Link>
                          <img src="images/add-cart.svg" alt="add-car" />
                        </Link>
                      </div>
                      <div>
                        <Link>
                          <img src="images/view.svg" alt="views" />
                        </Link>
                      </div>
                      <div>
                        <Link>
                          <img src="images/prodcompare.svg" alt="prodcmp" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="special-p-content">
                <div className="product-details">
                  <h6 className="brand">{p.c1}</h6>
                  <h5 className="product-title">{p.c2}</h5>
                  <div>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={p.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                    </Stack>
                  </div>
                  <div className="product-price mt-2">
                    <span className="text-red">${p.c3}</span>&nbsp; &nbsp;
                    <strike>${p.c4}</strike>
                  </div>
                  <div className="sproduct-des mt-1">
                    <p className="mb-0">"{p.des}"</p>
                  </div>
                  <div className="discount-till d-flex align-items-center gap-6 mt-1">
                    <div className="discount-day mb-0">
                      {p.dis}&nbsp; &nbsp; <span> Days</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <span className="badge rounded-circle bg-danger p-2">
                        {discount.day}
                      </span>
                      :
                      <span className="badge rounded-circle bg-danger p-2">
                        {discount.hr}
                      </span>
                      :
                      <span className="badge rounded-circle bg-danger p-2">
                        {discount.sec}
                      </span>
                    </div>
                  </div>
                  <div className="product-count my-3 d-flex flex-column">
                    <div className="p-count">
                      <p>Product Left:&nbsp; {p.p_count}</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${per_product(p.p_count, p.t_count)}%`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <Link className="button">Add to cart</Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
