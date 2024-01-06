import React, { useState } from "react";
import productcard2 from "../data/Home/Productcard2";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Productcard3(props) {
  const navigate = useNavigate();
  const [value, setvalue] = useState(-1);
  props.setpvalue(productcard2.length);
  return (
    <>
      {productcard2.map((p, index) => (
        <>
          <div
            className="col-2"
            onMouseEnter={() => setvalue(index)}
            onMouseLeave={() => setvalue(-1)}
            onClick={()=>navigate('/product/:id')}
          >
            <div className="product-card card-wrapper position-relative ">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src={value === index ? p.img1 : p.img2}
                  alt="product"
                />
              </div>
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
                <p className="product-price mt-2">${p.c3}</p>
              </div>
              <div className="wish position-absolute">
                <Link>
                  <img src="images/wish.svg" alt="wish" />
                </Link>
              </div>
              <div className="action-bar position-absolute">
                <div className="de-flex flex-column gap-15">
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
        </>
      ))}
    </>
  );
}
