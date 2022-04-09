import Item from "../ui/Item";
import { getNewArrivals } from "../../redux/slices/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../ui/Loading";
import NetworkErr from "../ui/NetworkErr";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function NewArrivals() {
  const newItems = useSelector((state) => state.shop.newArrivals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newItems === null) {
      dispatch(getNewArrivals());
    }
  }, [newItems, dispatch]);

  return (
    <div className="container py-6">
      <div className="text-center">
        <h2>New Arrivals</h2>
        {/*<p className="lead text-muted mb-5">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections
        </p>*/}
      </div>
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-12 col-md-auto text-center">
          <Link to="/shop" className="btn btn-link px-0">
            All products
          </Link>
        </div>
      </div>

      <div className="row">
        {/* items */}
        {newItems === "Network Error" ? (
          <NetworkErr />
        ) : newItems != null ? (
          newItems.map((item) => <Item key={item._id} item={item} />)
        ) : (
          <Loading />
        )}
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card-columns">
            {newItems.map((item) => (
              <div className="card" key={item._id}>
                <Item item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quickview Modal    */}
    </div>
  );
}

export default NewArrivals;
