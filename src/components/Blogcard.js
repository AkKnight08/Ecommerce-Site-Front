import { Link } from "react-router-dom";
import blogcard from "../data/Home/Blogcard";
export default function Blogcard() {
  const today = new Date();
  return (
    <>
      {blogcard.map((b,index) => (
        <>
          <div className="col-3">
            <div className="blog-card">
              <div className="card-img">
                <img className="img-fluid w-100" src={b.img} alt="blog images" />
              </div>
              <div className="blog-content d-flex flex-column">
                <div className="blog-c-data">
                  <p className="date">
                    {today.getDate()}
                    &nbsp;{today.toLocaleString("en-US", { month: "short" })}
                    ,&nbsp;{today.getFullYear()}
                  </p>
                  <h5 className="title">{b.c1}</h5>
                  <p className="des">{b.c2}</p>
                </div>
                <Link to="/blog/:index" className="w-50 button">
                  Read More</Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
