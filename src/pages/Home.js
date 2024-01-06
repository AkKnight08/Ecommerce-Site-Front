import { Link } from "react-router-dom";
import main_banner_data from "../data/Home/Main-Banner";
import small_banner_data from "../data/Home/Small-Banner";
import service from "../data/Home/Services";
import categories from "../data/Home/Categories";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import Productcard from "../components/Productcard";
import Specialproducts from "../components/Specialproducts";
import Famouscard from "../components/Famouscard";
export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            {/* Main Banner*/}
            <div className="col-6  main-banner ">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner rounded-3">
                  {main_banner_data.map((m, index) => (
                    <div
                      key={index}
                      className={`carousel-item img-fluid position-relative ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        key={index}
                        src={m.img}
                        className="img-fluid"
                        alt="main banner"
                      />
                      <div
                        key={index}
                        className="main-banner-content position-absolute"
                      >
                        <p key={index}>{m.c1}</p>
                        <p className="" key={index}>
                          {m.c2}
                        </p>
                        <p className="" key={index}>
                          {m.c3a}
                          <br />*{m.c3b}*
                        </p>
                        <Link key={index} className="button">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  class="carousel-control-prev invisible"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-6">
              {/* Small Banner*/}
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                {small_banner_data.map((m, index) => (
                  <>
                    <div className="small-banner position-relative">
                      <div key={index} className="img-fluid">
                        <img
                          key={index}
                          src={m.img}
                          className="img-fluid rounded-3"
                          alt="main banner"
                        />
                        <div
                          key={index}
                          className="small-banner-content position-absolute"
                        >
                          <p key={index}>{m.c1}</p>
                          <p className="" key={index}>
                            {m.c2}
                          </p>
                          <p className="" key={index}>
                            {m.c3a}
                            <br />*{m.c3b}*
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {service.map((s) => (
                  <>
                    <div className="service-list d-flex justify-content-between align-items-center gap-15">
                      <img src={s.img} alt="Services" />
                      <div>
                        <h6>{s.c1}</h6>
                        <p className="mb-0">{s.c2}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container-xxl ">
          <div className="row rounded-2">
            <div className="col-12">
              <div className=" categories d-flex justify-content-between gap-1 flex-wrap p-3 bg-white">
                {categories.map((c) => (
                  <>
                    <div className="rounded-3 categories-items d-flex  justify-content-between p-2 mt-2 align-items-center">
                      <div className="content">
                        <h6>{c.c1}</h6>
                        <p>{c.c2}</p>
                      </div>
                      <img className="" src={c.img} alt="categories" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-collection  home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="mb-2">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <Productcard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <Famouscard />
          </div>
        </div>
      </section>
      <section className="special-product home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row d-flex justify-content-between">
            <div className="mb-2 p-1">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <Specialproducts />
          </div>
        </div>
      </section>
      <section className="popular-products home-wrapper-2 py-4">
        <div className="container-xxl">
          <div>
            <div className="row ">
              <div className=" ms-3 mb-0">
                <h3 className="section-heading">Popular Products</h3>
              </div>
              <div className="popular-wrapper d-flex gap-15">
                <div className="s-popular-card d-flex gap-15">
                  <div className=" p-2 col-2 card-wrapper position-relative">
                    <img className="img-fluid" src="images/spid.jpg" alt="" />

                    <p className="position-absolute text-white">
                      <Link className="text-white"> Featured Collections</Link>
                    </p>
                  </div>
                  <div className=" p-2 col-2 card-wrapper position-relative">
                    <img className="img-fluid" src="images/spid2.jpg" alt=""/>

                    <p className="position-absolute text-white">
                      <Link className="text-white"> Featured Collections</Link>
                    </p>
                  </div>
                </div>
                <div className="popular-card d-flex gap-15 bg-white">
                  <Productcard />

                  <Productcard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2  py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper bg-white p-1 card-wrapper">
                <Marquee className="d-flex">
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-01.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-02.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-03.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-04.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-05.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-06.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-07.png"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <img
                      className="mx-2"
                      src="images/brand-08.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="mb-2">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <Blogcard />
          </div>
        </div>
      </section>
    </>
  );
}
