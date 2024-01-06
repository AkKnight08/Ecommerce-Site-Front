import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import compareproduct from "../data/Home/Compareproduct";
import { FaDeleteLeft } from "react-icons/fa6";
import Circle from "@uiw/react-color-circle";
const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <Breadcrumb title={"Compare Products"} />
      <div className="compare-product-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            {compareproduct.map((c) => (
              <>
                <div className="col-3">
                  <div className="compare-product-card position-relative">
                    <div className="product-img">
                      <img src={c.img1} alt="prod-img" />
                    </div>
                    <FaDeleteLeft className="cross position-absolute img-fluid" />
                    <div className="product-content d-flex flex-column">
                      <div className="p-title">{c.c2}</div>
                      <div className="p-price mb-3">${c.c3}</div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">Brand:</div>
                        <div className="compare-p-detail">{c.c1}</div>
                      </div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">Type:</div>
                        <div className="compare-p-detail">{c.type}</div>
                      </div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">SKU:</div>
                        <div className="compare-p-detail">{c.sku}</div>
                      </div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">Availability:</div>
                        <div className="compare-p-detail">
                          In Stock&nbsp;({c.p_count})
                        </div>
                      </div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">Colors:</div>
                        <div className="compare-p-detail">
                          <Circle colors={c.colors} className="w-100" />
                        </div>
                      </div>
                      <div className="c-deatils d-flex justify-content-between">
                        <div className="compare-p-title">Sizes:</div>
                        <div className="compare-p-detail">
                          {c.sizes.map((s) => (
                            <>{s}&nbsp;&nbsp;</>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
