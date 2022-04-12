import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  const authState = useSelector((state) => state.auth.auth);
  const location = useLocation();
  const notAllowed = () => {
    /*return location.pathname === "/admin" ||
      location.pathname === "/admin/orders" ||
      location.pathname === "/admin/post" ||
      location.pathname === "/admin/createcat" ||
      location.pathname === "/shop"
      ? true
      : false;*/

    return location.pathname !== "/" ? true : false;
  };

  return notAllowed() ? null : (
    <footer>
      <div className="py-5 py-lg-6 bg-gray-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon service-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="service-text">
                <h6 className="text-sm mb-1">Money back guarantee</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  30 Days Money Back Guarantee
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon service-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div className="service-text">
                <h6 className="text-sm mb-1">Best prices</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  Always the best prices
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon service-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div className="service-text">
                <h6 className="text-sm mb-1">020-800-456-747</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  24/7 Available Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-muted">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pe-lg-5 pe-xl-6 mb-5 mb-lg-0">
              <h6 className="text-dark letter-spacing-1 mb-4">Be in touch</h6>
              <p className="text-sm mb-3">
                {" "}
                Send us a message, and we'll be in touch ASAP!
              </p>
              <form id="newsletter-form">
                <div className="input-group input-group-underlined mb-3">
                  <input
                    className="form-control form-control-underlined"
                    type="text"
                    placeholder="Your message"
                  />
                </div>

                <div className="input-group input-group-underlined mb-3">
                  <input
                    className="form-control form-control-underlined"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className="btn btn-underlined text-gray-700 py-0"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-7">
              <div className="row justify-content-end">
                {/*<div className="col-lg-4">
                  <a
                    className="d-lg-none block-toggler my-3"
                    data-bs-toggle="collapse"
                    href="/#footerMenu1"
                    aria-expanded="false"
                    aria-controls="footerMenu1"
                  >
                    Company<span className="block-toggler-icon"></span>
                  </a>

                  <div className="expand-lg collapse" id="footerMenu1">
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                      Company
                    </h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                      <li className="mb-2">
                        {" "}
                        <a className="text-muted text-dark-hover link-animated">
                          Login
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className="text-muted text-dark-hover link-animated">
                          Register
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className="text-muted text-dark-hover link-animated">
                          Our Products
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className="text-muted text-dark-hover link-animated">
                          Checkouts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>*/}
                <div className="col-lg-4">
                  <a
                    className="d-lg-none block-toggler my-3"
                    data-bs-toggle="collapse"
                    href="/#footerMenu2"
                    aria-expanded="false"
                    aria-controls="footerMenu2"
                  >
                    Your account<span className="block-toggler-icon"></span>
                  </a>

                  <div className="expand-lg collapse" id="footerMenu2">
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                      Your account
                    </h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                      {!authState && (
                        <li className="mb-2">
                          {" "}
                          <a
                            className="text-muted text-dark-hover link-animated"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                          >
                            Login
                          </a>
                        </li>
                      )}
                      {!authState && (
                        <li className="mb-2">
                          {" "}
                          <a
                            className="text-muted text-dark-hover link-animated"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                          >
                            Register
                          </a>
                        </li>
                      )}
                      {authState && (
                        <li className="mb-2">
                          {" "}
                          <Link
                            to="/profile/profile"
                            className="text-muted text-dark-hover link-animated"
                          >
                            Your Profile
                          </Link>
                        </li>
                      )}
                      {authState && (
                        <li className="mb-2">
                          {" "}
                          <Link
                            to="/profile/wishlist"
                            className="text-muted text-dark-hover link-animated"
                          >
                            Your Wishlist
                          </Link>
                        </li>
                      )}

                      {/*<li className="mb-2">
                        {" "}
                        <a className="text-muted text-dark-hover link-animated">
                          Checkouts
                        </a>
                      </li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 fw-light text-muted">
        <div className="container">
          <div className="row align-items-center text-sm text-gray-500">
            <div className="col-lg-4 text-center text-lg-start">
              <p className="mb-lg-0">
                {" "}
                &copy; 2022, Alivan Space. All rights reserved.
              </p>
            </div>
            <div className="col-lg-8">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-end">
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset">Terms &amp; Conditions </a>
                </li>
                {/*<li className="list-inline-item">
                  {" "}
                  <a className="text-reset">Privacy &amp; cookies </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset">Accessibility </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset">Customer Data Promise </a>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
