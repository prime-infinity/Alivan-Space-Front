import { useSelector } from "react-redux";
import OrderTr from "../../ui/OrderTr";
import Loading from "../../ui/Loading";
import NetworkErr from "../../ui/NetworkErr";
import { emptyOrder } from "../../profile/routes/Orders";

/* eslint-disable jsx-a11y/anchor-is-valid */
function AdminOrders() {
  const orders = useSelector((state) => state.order.allOrder);

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

export default AdminOrders;
