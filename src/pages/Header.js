import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  const contactnumber = "+91 9930684402";
  const email = "thisisakshayk@gmail.com";
  return (
    <>
      {/* top strip of header */}
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                <a className="text-white" href={`Mobile:${contactnumber}`}>
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* upper strip of header */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h4>
                <Link className="text-white">
                  Akshay's <span className="store-title">Store.</span>
                </Link>
              </h4>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p" id="basic-addon2">
                  <FaSearch className="fs-6" />
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-15">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-products"
                  >
                    <img src="images/compare.svg" alt="compare"></img>
                    <p className="mb-0">
                      Compare
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white "
                    to="/faourite-products"
                  >
                    <img src="images/wishlist.svg" alt="wishlist"></img>
                    <p className="mb-0">
                      Favourite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white"
                  to="/login-page">
                    <img src="images/user.svg" alt="user"></img>
                    <p className="mb-0">
                      Log in
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0 noDecoration">$ 0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* bottom of header */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="rwo">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-10"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="menu" />
                      <span>Shop categories</span>
                    </button>
                    <ul
                      className="dropdown-menu text-white"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/our-store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
