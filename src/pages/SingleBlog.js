import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blog Read More"} />
      <Breadcrumb title={"Blog Read More"} />
      <div className="single-blog-wrapper home-wrapper-2 py-4">
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
              <div className="single-blog-card">
                <Link to="/blogs">
                  <IoMdArrowRoundBack />
                  &nbsp; Back to Blogs
                </Link>
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src="/images/spid.jpg" alt="blog" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first
                  true generator on the Internet. It uses a dictionary of over
                  200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                <div className="d-flex gap-10">
                  <h6>11 Jan,2018</h6>
                  <h6>Akshay Kumar</h6>
                </div>
              </div>
              <div className="blog-down-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleBlog;
