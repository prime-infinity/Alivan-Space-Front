import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Admin() {
  const authState = useSelector((state) => state.auth.auth);
  const location = useLocation();

  useEffect(() => {
    //console.log("auths state is", authState);
  }, [authState]);

  const inOrders = () => {
    return location.pathname === "/admin/orders" ? true : false;
  };
  const inPost = () => {
    return location.pathname === "/admin/post" ? true : false;
  };
  const inCreateCat = () => {
    return location.pathname === "/admin/createcat" ? true : false;
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
              {inOrders()
                ? "View all orders"
                : inPost()
                ? "Post an item"
                : inCreateCat()
                ? "Create a category"
                : null}{" "}
            </li>
          </ol>
        </div>
      </section>
      <section className="pb-6">
        <div className="container">
          <div className="row">
            {/*<!-- Customer Sidebar-->*/}
            <div className="col-xl-3 col-lg-4 mb-5">
              <div className="customer-sidebar card border-0">
                <div className="customer-profile">
                  <h5>{authState && authState.name}</h5>
                </div>
                <nav className="list-group customer-nav">
                  <Link
                    to="orders"
                    className={` ${
                      location.pathname === "/admin/orders" ? "active" : ""
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
                      See Orders
                    </span>

                    <div className="badge rounded-pill bg-dark fw-normal px-3">
                      5
                    </div>
                  </Link>

                  <Link
                    to="post"
                    className={` ${
                      location.pathname === "/admin/post" ? "active" : ""
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
                      Post Item
                    </span>
                  </Link>

                  <Link
                    to="createcat"
                    className={` ${
                      location.pathname === "/admin/createcat" ? "active" : ""
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
                      Create Category
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            {/*admin operations*/}
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
