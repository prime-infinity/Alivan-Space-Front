import { useState } from "react";
import QuickViewModal from "./QuickViewModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "./Loading";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Item({ item }) {
  const [isViewingItem, setIsViewItem] = useState(false);
  const [inItem, setItem] = useState(null);

  const seeItem = (e) => {
    setItem(e);
    setIsViewItem(true);
  };
  const closeModal = () => {
    setIsViewItem(false);
    setItem(false);
  };

  return (
    <>
      {isViewingItem && (
        <QuickViewModal item={inItem} closeModal={closeModal} />
      )}
      <div className="col-xl-3 col-sm-4 col-6">
        <div className="product product-type-0">
          <div className="product-image mb-md-3">
            {item.state === 1 ? (
              <div className="product-badge badge bg-secondary">Fresh</div>
            ) : item.state === 2 ? (
              <div className="product-badge badge bg-dark">Sold out</div>
            ) : null}
            <a>
              <div className="product-swap-image">
                <LazyLoadImage
                  className="img-fluid product-swap-image-front"
                  alt={"product-image"}
                  placeholder={<Loading />}
                  src={item.imagesLocation[0]}
                />
                <LazyLoadImage
                  className="img-fluid"
                  alt={"product-image"}
                  placeholder={<Loading />}
                  src={item.imagesLocation[1]}
                />
              </div>
            </a>

            <div className="product-hover-overlay">
              <div>
                <a
                  className="text-dark text-primary-hover text-decoration-none"
                  onClick={() => seeItem(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 svg-icon svg-icon-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="position-relative">
            <h3 className="text-base mb-1">
              <a className="text-dark">{item.name}</a>
            </h3>
            <p className="text-gray-600 text-sm">
              <span>${item.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
