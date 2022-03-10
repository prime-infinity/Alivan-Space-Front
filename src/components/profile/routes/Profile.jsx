function ProfileProfile() {
  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <h3 className="mb-5">Personal details</h3>
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="firstname">
                Firstname
              </label>
              <input className="form-control" id="firstname" type="text" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">
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
              <label className="form-label" htmlFor="phone">
                Telephone
              </label>
              <input className="form-control" id="phone" type="text" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="emailAccount">
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
      <hr className="mb-5" />
      <div className="mb-5">
        <h3 className="mb-5">Change your password</h3>
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="password_old">
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
                <label className="form-label" htmlFor="password_1">
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
                <label className="form-label" htmlFor="password_2">
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
    </div>
  );
}

export default ProfileProfile;
