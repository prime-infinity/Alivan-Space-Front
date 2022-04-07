import { sizes } from "../../utils/sizes";
import { useSelector } from "react-redux";
import NetworkErr from "../ui/NetworkErr";
import Loading from "../ui/Loading";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ShopSide() {
  const categories = useSelector((state) => state.shop.categories);
  return (
    <div className="sidebar col-xl-3 col-lg-4 pe-xl-5 order-lg-1">
      <div className="sidebar-block px-3 px-lg-0">
        <a
          className="d-lg-none block-toggler"
          data-bs-toggle="collapse"
          href="#categoriesMenu"
          aria-expanded="false"
          aria-controls="categoriesMenu"
        >
          Product Categories<span className="block-toggler-icon"></span>
        </a>
        <div className="expand-lg collapse" id="categoriesMenu" role="menu">
          <h5 className="sidebar-heading d-none d-lg-block">Category </h5>

          {categories === "Network Error" ? (
            <NetworkErr />
          ) : categories !== null ? (
            categories.map((cat, index) => (
              <div key={index} className="sidebar-icon-menu mt-4 mt-lg-0">
                <div className="sidebar-icon-menu-item">
                  <div className="d-flex align-items-center">
                    <a className="sidebar-icon-menu-link fw-bold me-2">
                      {cat.name}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>

      {/*<div className="sidebar-block px-3 px-lg-0">
        <a
          className="d-lg-none block-toggler"
          data-bs-toggle="collapse"
          href="#priceFilterMenu"
          aria-expanded="false"
          aria-controls="priceFilterMenu"
        >
          Filter by price<span className="block-toggler-icon"></span>
        </a>
        </div>*/}

      <div className="sidebar-block px-3 px-lg-0">
        {" "}
        <a
          className="d-lg-none block-toggler"
          data-bs-toggle="collapse"
          href="#sizeFilterMenu"
          aria-expanded="false"
          aria-controls="sizeFilterMenu"
        >
          Filter by size<span className="block-toggler-icon"></span>
        </a>
        {/*<!-- Size filter menu-->*/}
        <div className="expand-lg collapse" id="sizeFilterMenu">
          <h5 className="sidebar-heading d-none d-lg-block">Size </h5>
          <form className="mt-4 mt-lg-0">
            <div className="mb-3 mb-1">
              {sizes.map(({ name, show }, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    value={name}
                    id={`size${index}`}
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor={`size${index}`}>
                    {show}
                  </label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShopSide;
