import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  const address =
    "1292,2-floor,Krishna Nagar sector 4 Rewari, HARYANA 123401, Rewari";
  const number = "9930684402";
  const email = "thisisakshayk@gmail.com";
  return (
    <>
      <Meta title={"Contact Us"} />
      <Breadcrumb title={"Contact Us"} />
      <div className="contact-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row d-flex flex-column">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28477.39560285292!2d75.79730676602718!3d26.85030495776854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67377871437%3A0x6d191b0b94eae76b!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1704365200012!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100 rounded-2"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 my-3">
              <div className="contact-details-wrapper d-flex justify-content-between ">
                <div className="contact-form d-flex flex-column">
                  <h3 className="contact-title">Contact Us</h3>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-light"
                      id="Name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-light"
                      id="Email address"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-light"
                      id="Phone Number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control bg-light"
                      id="Comment"
                      rows="3"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <Link className="button">Send</Link>
                </div>

                <div className="contact-details d-flex flex-column">
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div className="">
                    <div className="c-1">
                      <FaHome />
                      &nbsp;
                      {address}
                    </div>
                    <div className="c-2">
                      <FaPhoneAlt />
                      &nbsp;
                      {number}
                    </div>
                    <div className="c-3">
                      <MdEmail />
                      &nbsp;
                      {email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
