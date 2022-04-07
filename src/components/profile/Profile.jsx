import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import { removeFromLocal } from "../../helpers/controlStorage";
import Loading from "../ui/Loading";
import { useEffect } from "react";
import { setUserDetail } from "../../redux/slices/userdetailsSlice";
import NetworkErr from "../ui/NetworkErr";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Profile() {
  const authState = useSelector((state) => state.auth.auth);
  const userDetails = useSelector((state) => state.userdetails.details);
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setAuth(null));
    removeFromLocal();
  };

  useEffect(() => {
    if (userDetails === null) {
      dispatch(setUserDetail(authState.token));
    }
  }, [userDetails, dispatch, authState.token]);

  const inProfile = () => {
    return location.pathname === "/profile/profile" ? true : false;
  };
  const inOrders = () => {
    return location.pathname === "/profile/orders" ? true : false;
  };
  const inAddress = () => {
    return location.pathname === "/profile/address" ? true : false;
  };
  const inWishlist = () => {
    return location.pathname === "/profile/wishlist" ? true : false;
  };

  return (
    <div>
      <section className="hero py-6">
        <div className="container">
          {/*<!-- Breadcrumbs -->*/}
          <ol className="breadcrumb ps-0 ">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              {inProfile()
                ? "Your profile"
                : inOrders()
                ? "Your orders"
                : inAddress()
                ? "Your address"
                : inWishlist()
                ? "Your wishlist"
                : null}{" "}
            </li>
          </ol>
          {/*<!-- Hero Content-->*/}
          <div className="hero-content">
            <h1 className="hero-heading">
              {inProfile()
                ? "Your profile"
                : inOrders()
                ? "Your orders"
                : inAddress()
                ? "Your address"
                : inWishlist()
                ? "Your wishlist"
                : null}{" "}
            </h1>
            {/*<div>
              <p className="lead text-muted">
                Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt
                ante vitae massa. Cras pede libero, dapibus nec, pretium sit
                amet, tempor quis. Fusce dui leo, imperdiet in.
              </p>
            </div>*/}
          </div>
        </div>
      </section>
      <section className="pb-6">
        <div className="container">
          <div className="row">
            {/*<!-- Customer Sidebar-->*/}
            <div className="col-xl-3 col-lg-4 mb-5">
              <div className="customer-sidebar card border-0">
                <div className="customer-profile">
                  {/*<a className="d-inline-block">
                    <img
                      className="img-fluid rounded-circle customer-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/avatar/avatar-0.jpg"
                      alt=""
                    />
                  </a>*/}
                  <h5>{authState.name}</h5>
                  {userDetails && (
                    <p className="text-muted text-sm mb-0">
                      {userDetails[1].city
                        ? `${userDetails[1].city},${userDetails[1].state}`
                        : null}
                    </p>
                  )}
                </div>
                <nav className="list-group customer-nav">
                  <Link
                    to="profile"
                    className={` ${
                      location.pathname === "/profile/profile" ? "active" : ""
                    } list-group-item d-flex justify-content-between align-items-center`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Profile
                    </span>
                  </Link>
                  <Link
                    to="orders"
                    className={` ${
                      location.pathname === "/profile/orders" ? "active" : ""
                    } list-group-item d-flex justify-content-between align-items-center`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Orders
                    </span>

                    <div className="badge rounded-pill bg-dark fw-normal px-3">
                      5
                    </div>
                  </Link>
                  <Link
                    to="address"
                    className={` ${
                      location.pathname === "/profile/address" ? "active" : ""
                    } list-group-item d-flex justify-content-between align-items-center`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Addresses
                    </span>
                  </Link>
                  <Link
                    to="wishlist"
                    className={` ${
                      location.pathname === "/profile/wishlist" ? "active" : ""
                    } list-group-item d-flex justify-content-between align-items-center`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      Wishlist
                    </span>
                  </Link>
                  <Link
                    to="/admin/orders"
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Admin
                    </span>
                  </Link>
                  <a
                    className="list-group-item d-flex justify-content-between align-items-center"
                    onClick={logout}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Log out
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            {/*<!-- /Customer Sidebar-->*/}
            {userDetails === "Network Error" ? (
              <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
                <NetworkErr />
              </div>
            ) : userDetails !== null ? (
              <Outlet />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
