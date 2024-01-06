import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <Meta title={"Account"} />
      <Breadcrumb title={"Account"} />
      <div className="login-page-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="login-page d-flex align-item-center justify-content-center">
              <div className="col-4 card-wrapper p-3">
                <h3 className="login-title text-center">Log-In</h3>
                <form action="">
                  <input
                    type="text"
                    className="mb-3 form-control bg-light"
                    id="nam"
                    placeholder="Name"
                  ></input>
                  <input
                    type="email"
                    className="mb-3 form-control bg-light"
                    id="email"
                    placeholder="Email"
                  ></input>
                </form>
                <div>
                  <div className="d-flex align-items-center justify-content-between gap-15 mt-3">
                    <Link className="mx-2" to="/forgot-pass">
                      Forgot Password?
                    </Link>
                    <Link className="mx-2" to="/reset-pass">
                      Reset Password
                    </Link>
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-15 mt-3">
                    <button className="button text-white d-flex align-items-center justify-content-center">
                      Login
                    </button>
                    <Link
                      className="button text-white text-center m-0 d-flex align-items-center justify-content-center"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
