import { useState } from "react";
import { Link } from "react-router-dom";
import { login, register } from "../helpers/auth";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAuth, saveAuthToLocal } from "../redux/slices/authSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const authState = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const errorDiv = <small className="text-danger">{error}</small>;
  const loginIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        authState ? "theme-text-color" : ""
      } h-5 w-5 svg-icon navbar-icon`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );
  const wishListIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 svg-icon navbar-icon"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
  const sideCartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 svg-icon navbar-icon"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      />
    </svg>
  );
  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 svg-icon navbar-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    dispatch(setAuth(e));
    dispatch(saveAuthToLocal());

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    setErrors(null);

    const newForm = { email: formData.email, password: formData.password };
    login(newForm)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };
  const registerUser = (e) => {
    e.preventDefault();
    setErrors(null);

    register(formData)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-white border-0 shadow-0 navbar-light px-lg-5 ">
          <a className="navbar-brand">Alivan Space</a>
          <ul className="list-inline mb-0 d-block d-lg-none">
            <li className="list-inline-item me-3">
              {authState ? (
                <Link to="/profile/profile">{loginIcon}</Link>
              ) : (
                <a
                  className="text-dark text-primary-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  {loginIcon}
                </a>
              )}
            </li>

            <li className="list-inline-item me-3">
              {authState !== null ? (
                <a className="text-dark text-primary-hover position-relative">
                  {wishListIcon}
                  {/*<div className="navbar-icon-badge">3</div>*/}
                </a>
              ) : null}
            </li>
            <li className="list-inline-item position-relative me-3">
              {authState !== null ? (
                <a
                  className="text-dark text-primary-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#sidebarCart"
                >
                  {sideCartIcon}
                  {/*<div className="navbar-icon-badge">5</div>*/}
                </a>
              ) : null}
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {menuIcon}
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mt-3 mt-lg-0">
              <li className="nav-item dropdown active">
                <a className="nav-link ">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link ">Shop</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link ">Something</a>
              </li>
            </ul>
            <form className="d-lg-flex ms-auto me-lg-5 me-xl-6 my-4 my-lg-0">
              <div className="input-group input-group-underlined">
                <input
                  className="form-control form-control-underlined ps-3"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-search"
                />
                <button
                  className="btn btn-underlined"
                  id="button-search"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 svg-icon navbar-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <ul className="list-inline mb-0 d-none d-lg-block">
              <li className="list-inline-item me-3">
                {authState ? (
                  <Link to="/profile/profile">{loginIcon}</Link>
                ) : (
                  <a
                    className="text-dark text-primary-hover"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    {loginIcon}
                  </a>
                )}
              </li>
              <li className="list-inline-item me-3">
                {authState !== null ? (
                  <a className="text-dark text-primary-hover position-relative">
                    {wishListIcon}
                    {/*<div className="navbar-icon-badge">3</div>*/}
                  </a>
                ) : null}
              </li>
              <li className="list-inline-item position-relative me-3">
                {authState !== null ? (
                  <a
                    className="text-dark text-primary-hover"
                    data-bs-toggle="modal"
                    data-bs-target="#sidebarCart"
                  >
                    {sideCartIcon}
                    {/*<div className="navbar-icon-badge">5</div>*/}
                  </a>
                ) : null}
              </li>
              <li className="list-inline-item">
                <a
                  className="text-dark text-primary-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#sidebarRight"
                >
                  {menuIcon}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/*<!-- Login Modal    -->*/}
      {!authState && (
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                onClick={() => setErrors(null)}
                className="btn-close btn-close-absolute btn-close-lg btn-close-rotate"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
              </button>
              <div className="modal-body p-2 p-md-5">
                <ul className="nav list-inline" role="tablist">
                  <li className="list-inline-item">
                    <a
                      className="nav-link nav-link-lg active"
                      data-bs-toggle="tab"
                      href="#loginModalTabLogin"
                      role="tab"
                      id="loginModalLinkLogin"
                      aria-controls="loginModalTabLogin"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="nav-link nav-link-lg"
                      data-bs-toggle="tab"
                      href="#loginModalTabRegister"
                      role="tab"
                      id="loginModalLinkRegister"
                      aria-controls="loginModalTabRegister"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <hr className="mb-3" />
                <div className="tab-content">
                  <div
                    className="tab-pane active fade show px-3"
                    id="loginModalTabLogin"
                    role="tabpanel"
                    aria-labelledby="loginModalLinkLogin"
                  >
                    <form onSubmit={loginUser}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          value={formData.email}
                          className="form-control"
                          id="email"
                          type="text"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col">
                            <label
                              className="form-label"
                              htmlFor="loginPassword"
                            >
                              {" "}
                              Password
                            </label>
                          </div>
                          <div className="col-auto">
                            <a className="form-text small">Forgot password?</a>
                          </div>
                        </div>
                        <input
                          value={formData.password}
                          className="form-control"
                          name="loginPassword"
                          id="loginPassword"
                          placeholder="Password"
                          type="password"
                          required=""
                          data-msg="Please enter your password"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        {/*<div className="form-check">
                        <input
                          className="form-check-input"
                          id="loginRemember"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label text-muted"
                          htmlFor="loginRemember"
                        >
                          {" "}
                          <span className="text-sm">
                            Remember me for 30 days
                          </span>
                        </label>
                      </div>*/}
                        <div className="row text-center">
                          <div className="col-12">
                            {error ? errorDiv : null}
                          </div>
                        </div>
                      </div>

                      <div className="d-grid mb-3">
                        <button className="btn btn-outline-dark">
                          <i className="fa fa-sign-in-alt me-2"></i> Log in
                        </button>
                      </div>
                    </form>
                    <hr
                      className="my-3 hr-text letter-spacing-2"
                      data-content="OR"
                    />
                    {/*<div className="text-center">
                    <button
                      className="btn btn btn-outline-primary letter-spacing-0"
                      data-bs-toggle="tooltip"
                      title="Connect with Facebook"
                    >
                      <i className="fa-fw fa-facebook-f fab"></i>
                      <span className="sr-only">Connect with Facebook</span>
                    </button>
                    <button
                      className="btn btn btn-outline-muted letter-spacing-0"
                      data-bs-toggle="tooltip"
                      title="Connect with Google"
                    >
                      <i className="fa-fw fa-google fab"></i>
                      <span className="sr-only">Connect with Google</span>
                    </button>
                    </div>*/}
                  </div>
                  <div
                    className="tab-pane fade px-3"
                    id="loginModalTabRegister"
                    role="tabpanel"
                    aria-labelledby="loginModalLinkRegister"
                  >
                    <form onSubmit={registerUser}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="registerName">
                          Name
                        </label>
                        <input
                          value={formData.name}
                          className="form-control"
                          id="registerName"
                          type="text"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="registerEmail">
                          Email
                        </label>
                        <input
                          value={formData.email}
                          className="form-control"
                          id="registerEmail"
                          type="text"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="registerPassword"
                        >
                          Password
                        </label>
                        <input
                          value={formData.password}
                          className="form-control"
                          id="registerPassword"
                          type="password"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                        <div className="row text-center">
                          <div className="col-12">
                            {error ? errorDiv : null}
                          </div>
                        </div>
                      </div>
                      <div className="d-grid mb-3 text-center">
                        <button className="btn btn-outline-dark">
                          <i className="far fa-user me-2"></i>Register{" "}
                        </button>
                      </div>
                    </form>
                    <hr
                      className="my-3 hr-text letter-spacing-2"
                      data-content="OR CONNECT WITH"
                    />
                    {/*<div className="text-center">
                    <button
                      className="btn btn btn-outline-primary letter-spacing-0"
                      data-bs-toggle="tooltip"
                      title="Connect with Facebook"
                    >
                      <i className="fa-fw fa-facebook-f fab"></i>
                      <span className="sr-only">Connect with Facebook</span>
                    </button>
                    <button
                      className="btn btn btn-outline-muted letter-spacing-0"
                      data-bs-toggle="tooltip"
                      title="Connect with Google"
                    >
                      <i className="fa-fw fa-google fab"></i>
                      <span className="sr-only">Connect with Google </span>
                    </button>
                      </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*<!-- Sidebar Cart Modal-->*/}
      {authState && (
        <div
          className="modal fade modal-right"
          id="sidebarCart"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content sidebar-cart-content">
              <div className="modal-header mb-3 border-0">
                <button
                  className="btn-close btn-close-lg btn-close-rotate opacity-8"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body px-5 sidebar-cart-body">
                {/*<!-- Empty cart snippet-->*/}
                {/*<!-- In case of empty cart - display this snippet + remove .d-none-->*/}
                <div className="d-none text-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon w-3rem h-3rem svg-icon-light mb-4 text-muted"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Your cart is empty </p>
                </div>
                {/*<!-- Empty cart snippet end-->*/}
                <div className="sidebar-cart-product-wrapper custom-scrollbar">
                  {/*<!-- cart item-->*/}
                  <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                      <a>
                        <img
                          className="img-fluid navbar-cart-product-image"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="w-100">
                        <a className="navbar-cart-product-remove">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon sidebar-cart-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <div className="ps-3">
                          {" "}
                          <a className="navbar-cart-product-link text-dark link-animated">
                            Skull Tee
                          </a>
                          <small className="d-block text-muted">
                            Quantity: 1{" "}
                          </small>
                          <strong className="d-block text-sm">$75.00 </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- cart item-->*/}
                  <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                      <a>
                        <img
                          className="img-fluid navbar-cart-product-image"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="w-100">
                        <a className="navbar-cart-product-remove">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon sidebar-cart-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <div className="ps-3">
                          {" "}
                          <a className="navbar-cart-product-link text-dark link-animated">
                            Transparent Blouse
                          </a>
                          <small className="d-block text-muted">
                            Quantity: 1{" "}
                          </small>
                          <strong className="d-block text-sm">$75.00 </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- cart item-->*/}
                  <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                      <a>
                        <img
                          className="img-fluid navbar-cart-product-image"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="w-100">
                        <a className="navbar-cart-product-remove">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon sidebar-cart-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <div className="ps-3">
                          {" "}
                          <a className="navbar-cart-product-link text-dark link-animated">
                            White Tee
                          </a>
                          <small className="d-block text-muted">
                            Quantity: 1{" "}
                          </small>
                          <strong className="d-block text-sm">$75.00 </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- cart item-->*/}
                  <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                      <a>
                        <img
                          className="img-fluid navbar-cart-product-image"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="w-100">
                        <a className="navbar-cart-product-remove">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon sidebar-cart-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <div className="ps-3">
                          {" "}
                          <a className="navbar-cart-product-link text-dark link-animated">
                            Skull Tee
                          </a>
                          <small className="d-block text-muted">
                            Quantity: 1{" "}
                          </small>
                          <strong className="d-block text-sm">$75.00 </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- cart item-->*/}
                  <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                      <a>
                        <img
                          className="img-fluid navbar-cart-product-image"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="w-100">
                        <a className="navbar-cart-product-remove">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon sidebar-cart-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <div className="ps-3">
                          {" "}
                          <a className="navbar-cart-product-link text-dark link-animated">
                            Transparent Blouse
                          </a>
                          <small className="d-block text-muted">
                            Quantity: 1{" "}
                          </small>
                          <strong className="d-block text-sm">$75.00 </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer sidebar-cart-footer shadow">
                <div className="w-100">
                  <h5 className="mb-4">
                    Subtotal: <span className="float-right">$465.32</span>
                  </h5>
                  <div className="d-grid gap-3">
                    <a className="btn btn-outline-dark">View cart</a>
                    <a className="btn btn-dark">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*<!-- Sidebar Modal Right-->*/}
      <div
        className="modal fade modal-right"
        id="sidebarRight"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close btn-close-lg btn-close-rotate"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5 pb-5">
              <div>
                <h5 className="mb-5">Alivan Space</h5>
                <ul className="nav flex-column mb-5">
                  <li className="nav-item active">
                    <a className="nav-link ps-0">Home </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0 disabled">Disabled</a>
                  </li>
                </ul>
                <ul className="list-inline mb-4">
                  <li className="list-inline-item me-2">
                    <i className="fab fa-facebook-f"> </i>
                  </li>
                  <li className="list-inline-item me-2">
                    <i className="fab fa-twitter"> </i>
                  </li>
                  <li className="list-inline-item me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon me-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    020-800-456-747
                  </li>
                </ul>
                <p className="text-sm text-muted mb-0">
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
