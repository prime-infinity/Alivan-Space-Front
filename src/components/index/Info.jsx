import { Link } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */
function Info() {
  return (
    <div className="container py-6 text-center">
      <h4 className="h1 mb-3">Summer Sales</h4>
      <h5 className="h2 fw-light mb-5">
        Our biggest sales this year -- up to 60% off!
      </h5>
      {/*<p className="h5 text-muted mb-5">
        The bedding was hardly able to cover it and seemed ready to slide off
        any moment!
      </p>*/}
      <Link to="shop" className="btn btn-dark">
        Start shopping
      </Link>
    </div>
  );
}

export default Info;
