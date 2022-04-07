import { Link } from "react-router-dom";
import Item from "../ui/Item";
/* eslint-disable jsx-a11y/anchor-is-valid */
function ShopGrid({ allItems, pageNumber, pagePrevious, pageNext }) {
  return (
    <div className="products-grid col-xl-9 col-lg-8 order-lg-2">
      {/*<!-- Hero Content-->*/}
      {/*<div className="hero-content pb-5">
        <h1>Jackets and tops</h1>
        </div>*/}
      {/*<!-- Breadcrumbs -->*/}
      <ol className="breadcrumb undefined">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Shop </li>
      </ol>

      {/*<header className="product-grid-header">
        <div className="me-3 mb-3">
          Showing <strong>1-12 </strong>of <strong>158 </strong>products
        </div>
    </header>*/}

      <div className="row">
        {/*<!-- product-->*/}
        {allItems.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
      <nav
        className="d-flex justify-content-center mb-5 mt-3"
        aria-label="page navigation"
      >
        <ul className="pagination">
          {pageNumber > 1 && (
            <li className="page-item">
              <a
                onClick={pagePrevious}
                className="page-arrow"
                aria-label="Previous"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon page-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
          )}

          {allItems.length >= 20 && (
            <li className="page-item">
              <a onClick={pageNext} className="page-arrow" aria-label="Next">
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon page-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="sr-only">Next </span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default ShopGrid;
