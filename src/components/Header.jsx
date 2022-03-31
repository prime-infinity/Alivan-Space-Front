import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import LoginModal from "./ui/LoginModal";
import CartModal from "./ui/CartModal";
import MenuModal from "./ui/MenuModal";
import WishModal from "./ui/WishModal";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const authState = useSelector((state) => state.auth.auth);

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
                <a
                  className="text-dark text-primary-hover position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#wishModal"
                >
                  {wishListIcon}
                  {/*<div className="navbar-icon-badge">3</div>*/}
                </a>
              ) : null}
            </li>
            <li className="list-inline-item position-relative me-3">
              <a
                className="text-dark text-primary-hover"
                data-bs-toggle="modal"
                data-bs-target="#sidebarCart"
              >
                {sideCartIcon}
                {/*<div className="navbar-icon-badge">5</div>*/}
              </a>
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
                  <a
                    className="text-dark text-primary-hover position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#wishModal"
                  >
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
      {!authState && <LoginModal />}

      {/*<!-- Sidebar Cart Modal-->*/}
      <CartModal />

      {/*<!-- wishlist Modal-->*/}
      {authState && <WishModal />}

      {/*<!-- Sidebar Modal Right-->*/}
      <MenuModal />
    </div>
  );
}

export default Header;
