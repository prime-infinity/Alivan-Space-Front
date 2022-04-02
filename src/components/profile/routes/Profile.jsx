import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { submitUserDetails } from "../../../helpers/auth";
import { setDetails } from "../../../redux/slices/userdetailsSlice";

function ProfileProfile() {
  const authState = useSelector((state) => state.auth.auth);
  const userDetails = useSelector((state) => state.userdetails.details);
  const dispatch = useDispatch();

  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    firstname: userDetails.details.firstname,
    lastname: userDetails.details.lastname,
    phone: userDetails.details.phone,
    email: authState.email,
  });
  const errorDiv = <small className="text-danger">{error}</small>;

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    console.log(e);
    //dispatch(setDetails(e));
  };

  const submitDetails = (e) => {
    e.preventDefault();
    setErrors(null);

    submitUserDetails(formData, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <h3 className="mb-5">Personal details</h3>
      <form onSubmit={submitDetails}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="firstname">
                Firstname
              </label>
              <input
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                className="form-control"
                id="firstname"
                type="text"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">
                Lastname
              </label>
              <input
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                className="form-control"
                id="lastname"
                type="text"
              />
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
              <input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="form-control"
                id="phone"
                type="text"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="emailAccount">
                Email
              </label>
              <input
                className="form-control"
                value={formData.email}
                id="emailAccount"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">{error ? errorDiv : null}</div>
        </div>
        {/*<!-- /.row-->*/}
        <div className="mt-4"></div>
        <button className="btn btn-dark" type="submit">
          <i className="far fa-save me-2"></i>Save changes
        </button>
      </form>
      <hr className="mb-5" />
      {/*<div className="mb-5">
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
              </div>*/}
    </div>
  );
}

export default ProfileProfile;
