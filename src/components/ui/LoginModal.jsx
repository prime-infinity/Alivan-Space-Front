import { useState } from "react";
import { login, register } from "../../helpers/auth";
import { setAuth, saveAuthToLocal } from "../../redux/slices/authSlice";
import { setUserDetail } from "../../redux/slices/userdetailsSlice";
import { useDispatch } from "react-redux";

/* eslint-disable jsx-a11y/anchor-is-valid */
function LoginModal() {
  const dispatch = useDispatch();
  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    dispatch(setAuth(e));
    dispatch(saveAuthToLocal());
    dispatch(setUserDetail(e.token));

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    document.querySelectorAll(".modal-backdrop").forEach((element) => {
      element.style.display = "none";
    });
    document.body.style.overflowY = "scroll";
  };

  const loginUser = (e) => {
    e.preventDefault();
    setErrors(null);

    const newForm = { email: formData.email, password: formData.password };
    login(newForm)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };
  const registerUser = (e) => {
    e.preventDefault();
    setErrors(null);

    register(formData)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const errorDiv = <small className="text-danger">{error}</small>;
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button
            onClick={() => setErrors(null)}
            className="btn-close btn-close-absolute btn-close-lg btn-close-rotate"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            {" "}
          </button>
          <div className="modal-body p-2 p-md-5">
            <ul className="nav list-inline" role="tablist">
              <li className="list-inline-item">
                <a
                  className="nav-link nav-link-lg active"
                  data-bs-toggle="tab"
                  href="#loginModalTabLogin"
                  role="tab"
                  id="loginModalLinkLogin"
                  aria-controls="loginModalTabLogin"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="nav-link nav-link-lg"
                  data-bs-toggle="tab"
                  href="#loginModalTabRegister"
                  role="tab"
                  id="loginModalLinkRegister"
                  aria-controls="loginModalTabRegister"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>
            <hr className="mb-3" />
            <div className="tab-content">
              <div
                className="tab-pane active fade show px-3"
                id="loginModalTabLogin"
                role="tabpanel"
                aria-labelledby="loginModalLinkLogin"
              >
                <form onSubmit={loginUser}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      value={formData.email}
                      className="form-control"
                      id="email"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="loginPassword">
                          {" "}
                          Password
                        </label>
                      </div>
                      <div className="col-auto">
                        <a className="form-text small">Forgot password?</a>
                      </div>
                    </div>
                    <input
                      value={formData.password}
                      className="form-control"
                      name="loginPassword"
                      id="loginPassword"
                      placeholder="Password"
                      type="password"
                      required=""
                      data-msg="Please enter your password"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    {/*<div className="form-check">
                      <input
                        className="form-check-input"
                        id="loginRemember"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="loginRemember"
                      >
                        {" "}
                        <span className="text-sm">
                          Remember me for 30 days
                        </span>
                      </label>
                    </div>*/}
                    <div className="row text-center">
                      <div className="col-12">{error ? errorDiv : null}</div>
                    </div>
                  </div>

                  <div className="d-grid mb-3">
                    <button className="btn btn-outline-dark">
                      <i className="fa fa-sign-in-alt me-2"></i> Log in
                    </button>
                  </div>
                </form>
                <hr
                  className="my-3 hr-text letter-spacing-2"
                  data-content="OR"
                />
                {/*<div className="text-center">
                  <button
                    className="btn btn btn-outline-primary letter-spacing-0"
                    data-bs-toggle="tooltip"
                    title="Connect with Facebook"
                  >
                    <i className="fa-fw fa-facebook-f fab"></i>
                    <span className="sr-only">Connect with Facebook</span>
                  </button>
                  <button
                    className="btn btn btn-outline-muted letter-spacing-0"
                    data-bs-toggle="tooltip"
                    title="Connect with Google"
                  >
                    <i className="fa-fw fa-google fab"></i>
                    <span className="sr-only">Connect with Google</span>
                  </button>
                  </div>*/}
              </div>
              <div
                className="tab-pane fade px-3"
                id="loginModalTabRegister"
                role="tabpanel"
                aria-labelledby="loginModalLinkRegister"
              >
                <form onSubmit={registerUser}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="registerName">
                      Name
                    </label>
                    <input
                      value={formData.name}
                      className="form-control"
                      id="registerName"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="registerEmail">
                      Email
                    </label>
                    <input
                      value={formData.email}
                      className="form-control"
                      id="registerEmail"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="registerPassword">
                      Password
                    </label>
                    <input
                      value={formData.password}
                      className="form-control"
                      id="registerPassword"
                      type="password"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                    />
                    <div className="row text-center">
                      <div className="col-12">{error ? errorDiv : null}</div>
                    </div>
                  </div>
                  <div className="d-grid mb-3 text-center">
                    <button className="btn btn-outline-dark">
                      <i className="far fa-user me-2"></i>Register{" "}
                    </button>
                  </div>
                </form>
                <hr
                  className="my-3 hr-text letter-spacing-2"
                  data-content="OR CONNECT WITH"
                />
                {/*<div className="text-center">
                  <button
                    className="btn btn btn-outline-primary letter-spacing-0"
                    data-bs-toggle="tooltip"
                    title="Connect with Facebook"
                  >
                    <i className="fa-fw fa-facebook-f fab"></i>
                    <span className="sr-only">Connect with Facebook</span>
                  </button>
                  <button
                    className="btn btn btn-outline-muted letter-spacing-0"
                    data-bs-toggle="tooltip"
                    title="Connect with Google"
                  >
                    <i className="fa-fw fa-google fab"></i>
                    <span className="sr-only">Connect with Google </span>
                  </button>
                    </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
