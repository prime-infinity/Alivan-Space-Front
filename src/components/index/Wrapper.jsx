import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Wrapper() {
  return (
    <div
      className="swiper swiper-container home-slider"
      style={{ height: "80vh", minHeight: "600px" }}
    >
      {/*<!-- Additional required wrapper-->*/}
      <div className="swiper-wrapper">
        {/*<!-- Slides-->*/}
        <div
          className="swiper-slide bg-cover"
          style={{
            backgroundImage: "url('images/a.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 align-items-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6 ms-auto text-white">
                <p className="subtitle letter-spacing-3 mb-3 font-weight-light">
                  Where Clothes and Accessories live
                </p>
                <h2
                  className="display-3 theme-text-color"
                  style={{ lineHeight: "1" }}
                >
                  Alivan Space
                </h2>
                {/*<p className="text-muted mb-5">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit
                </p>*/}
                <Link to="/shop" className="btn btn-dark mt-4 p-3">
                  Shop Items
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide bg-cover"
          style={{
            backgroundImage: "url('images/b.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 align-items-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6 theme-text-color">
                <p className="subtitle letter-spacing-3 mb-3 font-weight-light">
                  Accessorize Yourself
                </p>
                {/*<h2 className="display-3" style={{ lineHeight: "1" }}>
                  Blouses &amp; Tops
                </h2>*/}
                <p className="mb-5 subtitle text-white">
                  Don't just focus on the big picture, Checkout all the smaller
                  details that will complete you
                </p>
                <Link to="/shop" className="btn btn-dark p-3">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide bg-cover bg-cover-abnor"
          style={{
            backgroundImage: "url('images/c.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 justify-content-center align-items-center text-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6">
                <p className="subtitle letter-spacing-3 mb-2 text-white font-weight-light">
                  More that just Clothes
                </p>
                <h2 className="display-3 mb-5" style={{ lineHeight: "1" }}>
                  <span className="text-white">A Way Of </span>
                  <span className="theme-text-color">Life!</span>
                </h2>
                <Link to="/shop" className="btn btn-dark p-3">
                  Start shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide bg-cover bg-cover-abnor"
          style={{
            backgroundImage: "url('images/d.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 justify-content-center align-items-center text-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6">
                {/*<p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">
                  Blue &amp; White
                </p>*/}
                <h2 className="display-2" style={{ lineHeight: "1" }}>
                  <span className="text-white">Become The</span>{" "}
                  <span className="theme-text-color">Trend</span>
                </h2>
                {/*<a className="btn btn-dark">Start shopping</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-nav d-none d-lg-block">
        <div className="swiper-button-prev" id="homePrev"></div>
        <div className="swiper-button-next" id="homeNext">
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
