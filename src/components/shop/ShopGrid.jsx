import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Item from "../ui/Item";
/* eslint-disable jsx-a11y/anchor-is-valid */
function ShopGrid({ allItems }) {
  const location = useLocation();
  return (
    <div className="products-grid col-xl-9 col-lg-8 order-lg-2">
      {/*<!-- Hero Content-->*/}
      {/*<div className="hero-content pb-5">
        <h1>Jackets and tops</h1>
        </div>*/}
      {/*<!-- Breadcrumbs -->*/}
      {location.pathname === "/shop" && (
        <ol className="breadcrumb undefined">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Shop </li>
        </ol>
      )}

      {/*<header className="product-grid-header">
        <div className="me-3 mb-3">
          Showing <strong>1-12 </strong>of <strong>158 </strong>products
        </div>
    </header>*/}

      <div className="row">
        {/*<!-- product-->*/}
        <div className="col-12">
          <div className="card-columns">
            {allItems.map((item) => (
              <Item key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopGrid;
