import { useSelector, useDispatch } from "react-redux";
import { addToWishList } from "../../helpers/auth";
import { setCart, saveCartToLocal } from "../../redux/slices/shopSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Item({ item }) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
  const addToWish = (e) => {
    addToWishList(e, authState.token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = (e) => {
    console.log(e);

    dispatch(setCart(e));
    dispatch(saveCartToLocal());
  };

  return (
    <div className="col-xl-3 col-sm-4 col-6">
      <div className="product product-type-0">
        <div className="product-image mb-md-3">
          <a>
            <div className="product-swap-image">
              <img
                className="img-fluid product-swap-image-front"
                src={item.imagesLocation[0]}
                alt="product"
              />
              <img
                className="img-fluid"
                src={item.imagesLocation[1]}
                alt="product"
              />
            </div>
          </a>

          <div className="product-hover-overlay">
            <a onClick={() => addToCart(item)} className="text-dark text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 svg-icon text-primary-hover svg-icon-heavy d-sm-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="d-none d-sm-inline">Add to cart</span>
            </a>

            <div>
              <a
                onClick={() => addToWish(item._id)}
                className="text-dark text-primary-hover me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>

              <a
                className="text-dark text-primary-hover text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#quickView"
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
  );
}

export default Item;
