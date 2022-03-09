/* eslint-disable jsx-a11y/anchor-is-valid */
function ProfileOrders() {
  return (
    <div className="col-lg-8 col-xl-9">
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
          <tr>
            <th className="ps-4 py-5 align-middle">1735</th>
            <td className="py-5 align-middle">22/6/2017</td>
            <td className="py-5 align-middle">$150.00</td>
            <td className="py-5 align-middle">
              <span className="badge badge-info-light">Being prepared</span>
            </td>
            <td className="py-5 align-middle">
              <a
                className="btn btn-outline-dark btn-sm"
                href="customer-order.html"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <th className="ps-4 py-5 align-middle">1734</th>
            <td className="py-5 align-middle">7/5/2017</td>
            <td className="py-5 align-middle">$150.00</td>
            <td className="py-5 align-middle">
              <span className="badge badge-warning-light">Action needed</span>
            </td>
            <td className="py-5 align-middle">
              <a className="btn btn-outline-dark btn-sm">View</a>
            </td>
          </tr>
          <tr>
            <th className="ps-4 py-5 align-middle">1730</th>
            <td className="py-5 align-middle">30/9/2016</td>
            <td className="py-5 align-middle">$150.00</td>
            <td className="py-5 align-middle">
              <span className="badge badge-success-light">Received</span>
            </td>
            <td className="py-5 align-middle">
              <a className="btn btn-outline-dark btn-sm">View</a>
            </td>
          </tr>
          <tr>
            <th className="ps-4 py-5 align-middle">1705</th>
            <td className="py-5 align-middle">22/6/2016</td>
            <td className="py-5 align-middle">$150.00</td>
            <td className="py-5 align-middle">
              <span className="badge badge-danger-light">Cancelled</span>
            </td>
            <td className="py-5 align-middle">
              <a className="btn btn-outline-dark btn-sm">View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileOrders;
