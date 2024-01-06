import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../data/Home/Cart";
import { IoTrashBinOutline } from "react-icons/io5";
export default function Cartcard() {
  const navigate = useNavigate();
  const [qty,setqty]= useState(1);
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
      {Cart.map((p, index) => (
        <>
          <div className="cart-data d-flex justify-content-between align-items-center gap-10">
            <div className="cart-col-1">
              {" "}
              <div
                className="col-4 my-2 card-wrapper rounded-3 special-card-size
          "
                onMouseEnter={() => setvalue(index)}
                onMouseLeave={() => setvalue(-1)}
                onClick={() => navigate("/product/:id")}
              >
                <div className="special-p-card d-flex gap-15">
                  <div className=" special-p-img d-flex flex-column">
                    <div className=" position-relative">
                      <img className="img-fluid" src={p.img2} alt="watch" />
                    </div>
                  </div>
                  <div className="special-p-content">
                    <div className="product-details">
                      <h6 className="brand">{p.c1}</h6>
                      <h5 className="product-title w-100">{p.c2}</h5>
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

                      <div className="product-count my-3 d-flex align-items-center justify-content-between">
                        <div className="p-count">
                          <p>Product Left:&nbsp; {p.p_count}</p>
                        </div>

                        <Link className="text-dark my-2">
                          <IoTrashBinOutline />
                          &nbsp;Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-col-2"></div>
            <div className="cart-col-3 d-flex flex-column align-items-center">
              <input
                type="number"
                placeholder={qty}
                min={1}
                max={10}
                onChange={(e) => setqty(e.target.value)}
              />
            </div>
            <div className="cart-col-4">${p.dis*qty}</div>
          </div>
        </>
      ))}
    </>
  );
}
