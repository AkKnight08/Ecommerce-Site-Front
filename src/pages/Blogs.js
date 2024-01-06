import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import Blogcard from "../components/Blogcard";
const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <Breadcrumb title={"Blogs"} />
      <div className="blog-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-2">
                <h3 className="filter-title">Find by categories</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
                <div className="blog-card-section d-flex flex-wrap justify-content-between gap-15">
                    <Blogcard/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
