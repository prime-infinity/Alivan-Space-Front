import { removeFromWishList } from "../../helpers/auth";
import { useSelector, useDispatch } from "react-redux";
import { setWish } from "../../redux/slices/shopSlice";
import { useState } from "react";
import QuickViewModal from "./QuickViewModal";

/* eslint-disable jsx-a11y/anchor-is-valid */
function WishItem({ item, index }) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
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

  const removeFromWish = (index) => {
    removeFromWishList({ index: index }, authState.token)
      .then((res) => {
        dispatch(setWish(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isViewingItem && (
        <QuickViewModal item={inItem} closeModal={closeModal} />
      )}
      <div className="row d-flex align-items-center text-start text-md-center mb-4">
        <div className="col-12 col-md-5">
          <a
            onClick={() => removeFromWish(index)}
            style={{ float: "right", fontSize: "xx-large" }}
            className="cart-remove close mt-3 d-md-none"
          >
            <i className="fa fa-times"></i>
          </a>
          <a className="d-md-none" onClick={() => seeItem(item)}>
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
          <div className="d-flex align-items-center">
            <a>
              <img
                className="cart-item-img"
                src={item.imagesLocation[0]}
                alt="..."
              />
            </a>
            <div className="cart-title text-start">
              <a className="text-dark">
                <strong>{item.name}</strong>
              </a>
              <br />
              <span className="text-muted text-sm">Sizes: {item.sizes} </span>
              {/*<br />
            <span className="text-muted text-sm">Colour: Green</span>*/}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="row">
                <div className="col-6 d-md-none text-muted">Price per item</div>
                <div className="col-6 col-md-12 text-end text-md-center">
                  ${item.price}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-6 d-md-none text-muted">Status </div>
                <div className="col-6 col-md-12 text-end text-md-start">
                  <div className="badge p-lg-2 badge-primary-light">
                    In Stock
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block text-center">
              {" "}
              <a
                className="mt-4 mt-md-0 text-primary"
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
            <div className="col-1 d-none d-md-block text-center">
              <a className="cart-remove text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon w-2rem h-2rem mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishItem;
