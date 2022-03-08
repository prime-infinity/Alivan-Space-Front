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
          className="swiper-slide bg-cover bg-cover-left"
          style={{
            backgroundImage:
              "url('https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-5.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 align-items-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6 ms-auto">
                <p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">
                  Our all-time favourites
                </p>
                <h2 className="display-3" style={{ lineHeight: "1" }}>
                  Blouses &amp; Tops
                </h2>
                <p className="text-muted mb-5">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit
                </p>
                <a className="btn btn-dark">Discover more</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide bg-cover bg-cover-right"
          style={{
            backgroundImage:
              "url('https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-1.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 align-items-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6">
                <p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">
                  Our all-time favourites
                </p>
                <h2 className="display-3" style={{ lineHeight: "1" }}>
                  Blouses &amp; Tops
                </h2>
                <p className="text-muted mb-5">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit
                </p>
                <a className="btn btn-dark">Discover more</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide bg-cover bg-cover-abnor"
          style={{
            backgroundImage:
              "url('https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-2.jpg')",
          }}
        >
          <div className="container-fluid px-lg-6 h-100">
            <div
              className="row h-100 justify-content-center align-items-center text-center"
              data-swiper-parallax="-500"
            >
              <div className="col-lg-6">
                <p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">
                  Blue &amp; White
                </p>
                <h2 className="display-3" style={{ lineHeight: "1" }}>
                  Linen and denim
                </h2>
                <a className="btn btn-dark">Start shopping</a>
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
