import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
export default function Footer() {
  const contactnumber = "+91 9930684402";
  const email = "thisisakshayk@gmail.com";
  return (
    <>
      {/*Footer First*/}
      <footer className="py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data gap-15 align-items-center d-flex">
                <FaRegNewspaper className="text-white fs-3 " />
                <h4 className="text-white mb-0">Sign Up For Newsletter</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group p-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email..."
                  aria-label="Your Email..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-2 text-white"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Footer Middle*/}
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h5 className="text-white">Contact Us</h5>
              <div>
                <address className="text-white fs-6">
                  Zimmer 645 Schopenhauerstr. 48c
                  <br />
                  Klein Alessa ST 10601
                </address>
                <a
                  href={`tel:${contactnumber}`}
                  className="mt-4 text-white d-block"
                >
                  {contactnumber}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 text-white d-block "
                >
                  {email}
                </a>
                alt="social icons"
                <div className="social-icons d-flex gap-15">
                  <a className="text-white fs-4" href="" alt="social icons">
                    <FaLinkedin />
                  </a>
                  <a className="text-white fs-4" href="" alt="social icons">
                    <FaGithub />
                  </a>
                  <a className="text-white fs-4" href="" alt="social icons">
                    <FaYoutube />
                  </a>
                  <a className="text-white fs-4" href="" alt="social icons">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-3">
              <h5 className="text-white">Information</h5>
              <div>
                <div className="footer-links d-flex flex-column">
                  <NavLink to="refund-policy" className="text-white mb-3">
                    Refund Policy
                  </NavLink>
                  <NavLink to="terms&conditions" className="text-white mb-3">
                    Terms of Service
                  </NavLink>
                  <NavLink to="shipping-policy" className="text-white mb-3">
                    Shipping Policy
                  </NavLink>
                  <NavLink to="privacy-policy" className="text-white mb-3">
                    Privacy Policy
                  </NavLink>
                  <NavLink to="blogs" className="text-white">Blogs</NavLink>
                </div>
              </div>
            </div>
            <div className=" col-3">
              <h5 className="text-white">Account</h5>
              <div>
                <div className="footer-links d-flex flex-column">
                  <NavLink className="text-white mb-3">Search</NavLink>
                  <NavLink className="text-white mb-3">About Us</NavLink>
                  <NavLink className="text-white mb-3">Headphones</NavLink>
                  <NavLink to="faq" className="text-white mb-3">
                    FAQ
                  </NavLink>
                  <NavLink className="text-white">Size Chart</NavLink>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white">Quick Links</h5>
              <div>
                <div className="footer-links d-flex flex-column">
                  <NavLink className="text-white mb-3">Accesories</NavLink>
                  <NavLink className="text-white mb-3">Laptops</NavLink>
                  <NavLink className="text-white mb-3">Headphones</NavLink>
                  <NavLink className="text-white mb-3">Smart Watches</NavLink>
                  <NavLink className="text-white">Tablets</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Footer End */}
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <p className="text-start mb-0 text-white">
                &copy; {new Date().getFullYear()}, Powered By Akshay K.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
