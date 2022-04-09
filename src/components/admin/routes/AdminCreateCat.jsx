import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../../helpers/auth";
import Loading from "../../ui/Loading";
import Categories from "../../ui/Categories";
import {
  getShopCategories,
  addToCategories,
} from "../../../redux/slices/shopSlice";
import NetworkErr from "../../ui/NetworkErr";
//bcac76
function AdminCreateCat() {
  const authState = useSelector((state) => state.auth.auth);
  const categories = useSelector((state) => state.shop.categories);
  const dispatch = useDispatch();
  const [error, setErrors] = useState(null);
  const [updated, setIsUpdated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
  });
  const errorDiv = <small className="text-danger">{error}</small>;

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    setIsUpdated(true);
    dispatch(addToCategories(e));
    setFormData({
      name: "",
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    setErrors(null);

    createCategory(formData, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  useEffect(() => {
    if (categories === null) {
      dispatch(getShopCategories());
    }
    //console.log("categories are", categories);
  }, [categories, dispatch]);

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <div className="row">
        <div className="col-12 col-md-5">
          <form onSubmit={submitDetails}>
            <h3 className="mb-4">Create Category</h3>
            <div className="row">
              <div className="mb-3">
                <label className="form-label" htmlFor="country_invoice">
                  Category Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-control"
                  type="text"
                  name="country_invoice"
                  id="country_invoice"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                {error ? errorDiv : null}
                {updated && (
                  <div className="col-12 text-success">
                    <span>
                      <i className="fa fa-check me-2 "></i> Category Added
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-3 mt-4">
              <button className="btn btn-dark w-100" type="submit">
                <i className="far fa-save me-2"></i>Save
              </button>
            </div>
          </form>
        </div>

        {/** where to render categories*/}
        <div className="col-12 col-md-7">
          <h3 className="mb-4">All Categories</h3>
          {categories === "Network Error" ? (
            <NetworkErr />
          ) : categories != null ? (
            <div className="row p-2">
              <Categories />{" "}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCreateCat;
