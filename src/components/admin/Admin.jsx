import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../../redux/slices/orderSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Admin() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
  const orders = useSelector((state) => state.order.allOrder);

  const location = useLocation();

  const inOrders = () => {
    return location.pathname === "/admin/orders" ? true : false;
  };
  const inPost = () => {
    return location.pathname === "/admin/post" ? true : false;
  };
  const inCreateCat = () => {
    return location.pathname === "/admin/createcat" ? true : false;
  };
  const inAll = () => {
    return location.pathname === "/admin/allitems" ? true : false;
  };

  useEffect(() => {
    if (orders === null) {
      dispatch(getAllOrders(authState.token));
    }
  }, [authState, dispatch, orders]);

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
                : inAll()
                ? "All items"
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
                    to="allitems"
                    className={` ${
                      location.pathname === "/admin/allitems" ? "active" : ""
                    } list-group-item d-flex justify-content-between align-items-center`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 svg-icon  me-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      All Itmes
                    </span>
                  </Link>

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
                      See All Orders
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
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Create Category
                    </span>
                  </Link>

                  <Link
                    to="/profile/profile"
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
                          d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                        />
                      </svg>
                      Back
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
