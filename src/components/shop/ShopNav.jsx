/* eslint-disable jsx-a11y/anchor-is-valid */

function ShopNav({ allItems, pageNumber, pagePrevious, pageNext }) {
  return (
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
  );
}

export default ShopNav;
