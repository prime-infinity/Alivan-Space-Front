import { useSelector } from "react-redux";
import Loading from "../../ui/Loading";
import OrderTr from "../../ui/OrderTr";
import NetworkErr from "../../ui/NetworkErr";

export const emptyOrder = (
  <div className="text-center mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon w-3rem h-3rem svg-icon-light mb-4 text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
    <p>No orders </p>
  </div>
);

/* eslint-disable jsx-a11y/anchor-is-valid */
function ProfileOrders() {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div className="col-lg-8 col-xl-9" style={{ overflowX: "auto" }}>
      {!orders ? (
        <Loading />
      ) : orders === "Network Error" ? (
        <NetworkErr />
      ) : orders.length < 1 ? (
        emptyOrder
      ) : (
        <table className="table table-hover table-responsive">
          <thead className="bg-light">
            <tr>
              <th className="py-4 ps-4 text-sm border-0">#</th>
              <th className="py-4 text-sm border-0">Date</th>
              <th className="py-4 text-sm border-0">Total</th>
              <th className="py-4 text-sm border-0">Status</th>
              <th className="py-4 text-sm border-0">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orr, index) => (
              <OrderTr key={index} order={orr} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProfileOrders;
