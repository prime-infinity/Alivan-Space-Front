import { useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function OrderTr({ order, auth }) {
  let navigate = useNavigate();
  const formatDate = (date) => {
    let dat = new Date(date);
    return dat.toLocaleDateString();
  };

  const viewOrder = (order) => {
    //console.log(order);
    navigate("/vieworder", { state: { order } });
  };

  return (
    <tr>
      <th className="ps-4 py-5 align-middle">{order.orderNumber}</th>
      <td className="py-5 align-middle">{formatDate(order.createdAt)}</td>
      <td className="py-5 align-middle">${order.price}</td>
      <td className="py-5 align-middle">
        <span
          className={`badge ${
            order.status === 0
              ? "badge-success-light"
              : order.status === 1
              ? "badge-info-light"
              : order.status === 2
              ? "badge-danger-light"
              : null
          }`}
        >
          {order.status === 0
            ? "Received"
            : order.status === 1
            ? "Being prepared"
            : order.status === 2
            ? "Cancelled"
            : null}
        </span>
      </td>
      <td className="py-5 align-middle">
        <a
          onClick={() => viewOrder(order)}
          className="btn btn-outline-dark btn-sm"
        >
          View
        </a>
      </td>
    </tr>
  );
}

export default OrderTr;
