<section className="pb-6">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
        <div className="mb-5">
          <h3 className="mb-5">Change your password</h3>
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label" for="password_old">
                    Old password
                  </label>
                  <input
                    className="form-control"
                    id="password_old"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label" for="password_1">
                    New password
                  </label>
                  <input
                    className="form-control"
                    id="password_1"
                    type="password"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label" for="password_2">
                    Retype new password
                  </label>
                  <input
                    className="form-control"
                    id="password_2"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark" type="submit">
                <i className="far fa-save me-2"></i>Change password
              </button>
            </div>
          </form>
        </div>
        <hr className="mb-5" />
        <h3 className="mb-5">Personal details</h3>
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="firstname">
                  Firstname
                </label>
                <input className="form-control" id="firstname" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="lastname">
                  Lastname
                </label>
                <input className="form-control" id="lastname" type="text" />
              </div>
            </div>
          </div>
          {/*<!-- /.row-->*/}
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="company">
                  Company
                </label>
                <input className="form-control" id="company" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="street">
                  Street
                </label>
                <input className="form-control" id="street" type="text" />
              </div>
            </div>
          </div>
          {/*<!-- /.row-->*/}
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="mb-3">
                <label className="form-label" for="city">
                  Company
                </label>
                <input className="form-control" id="city" type="text" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mb-3">
                <label className="form-label" for="zip">
                  ZIP
                </label>
                <input className="form-control" id="zip" type="text" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mb-3">
                <label className="form-label" for="state">
                  State
                </label>
                <select className="form-control" id="state"></select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mb-3">
                <label className="form-label" for="country">
                  Country
                </label>
                <select className="form-control" id="country"></select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="phone">
                  Telephone
                </label>
                <input className="form-control" id="phone" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" for="emailAccount">
                  Email
                </label>
                <input className="form-control" id="emailAccount" type="text" />
              </div>
            </div>
          </div>
          {/*<!-- /.row-->*/}
          <div className="mt-4"></div>
          <button className="btn btn-dark" type="submit">
            <i className="far fa-save me-2"></i>Save changes
          </button>
        </form>
      </div>
      {/*<!-- Customer Sidebar-->*/}
      <div className="col-xl-3 col-lg-4 mb-5">
        <div className="customer-sidebar card border-0">
          <div className="customer-profile">
            <a className="d-inline-block">
              <img
                className="img-fluid rounded-circle customer-image"
                src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/avatar/avatar-0.jpg"
                alt=""
              />
            </a>
            <h5>Jane Doe</h5>
            <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
          </div>
          <nav className="list-group customer-nav">
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy me-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Orders
              </span>
              <div className="badge rounded-pill bg-dark fw-normal px-3">5</div>
            </a>
            <a className="active list-group-item d-flex justify-content-between align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy me-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </span>
            </a>
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy me-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Addresses
              </span>
            </a>
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy me-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Wishlist
              </span>
            </a>
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 svg-icon svg-icon-heavy me-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Log out
              </span>
            </a>
          </nav>
        </div>
      </div>
      {/*<!-- /Customer Sidebar-->*/}
    </div>
  </div>
</section>;
