import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import Loading from "../../ui/Loading";
import { sizes } from "../../../utils/sizes";
import { postShopItem } from "../../../helpers/auth";
import NetworkErr from "../../ui/NetworkErr";
import {
  setIsUploading,
  updateNewArrivals,
} from "../../../redux/slices/shopSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function AdminPost() {
  const authState = useSelector((state) => state.auth.auth);
  const categories = useSelector((state) => state.shop.categories);
  const isUploading = useSelector((state) => state.shop.isUploading);
  const dispatch = useDispatch();
  const [upload, setUpload] = useState(null);
  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    sizes: [],
    categories: [],
    price: "",
    description: "",
  });
  const errorDiv = <small className="text-danger">{error}</small>;

  const handleErrors = (e) => {
    dispatch(setIsUploading(false));
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    dispatch(setIsUploading(false));
    dispatch(updateNewArrivals(e));
    console.log(e);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(setIsUploading(true));
    setErrors(null);

    const formData2 = new FormData();

    for (let i = 0; i < upload.cachedFileArray.length; i++) {
      formData2.append(
        "item-images",
        upload.cachedFileArray[i],
        upload.cachedFileArray[i].name
      );
    }

    formData2.append("name", formData.name);
    formData2.append("sizes", formData.sizes);
    formData2.append("categories", formData.categories);
    formData2.append("price", formData.price);
    formData2.append("description", formData.description);

    postShopItem(formData2, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  useEffect(() => {
    setUpload(
      new FileUploadWithPreview("myUniqueUploadId", {
        maxFileCount: 6,
      })
    );
  }, []);

  function remove(arr, item) {
    var index = arr.indexOf(item);
    return [
      // part of the array before the given item
      ...arr.slice(0, index),

      // part of the array after the given item
      ...arr.slice(index + 1),
    ];
  }

  const handleSizeOnChange = (e) => {
    formData.sizes.includes(e.target.value)
      ? setFormData({
          ...formData,
          sizes: remove(formData.sizes, e.target.value),
        })
      : setFormData({
          ...formData,
          sizes: [...formData.sizes, e.target.value],
        });
  };

  const handleCatChange = (e) => {
    formData.categories.includes(e.target.value)
      ? setFormData({
          ...formData,
          categories: remove(formData.categories, e.target.value),
        })
      : setFormData({
          ...formData,
          categories: [...formData.categories, e.target.value],
        });
  };

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <div className="row">
        <div className="col-12 col-md-7">
          {/*testing*/}
          <div
            className="custom-file-container"
            data-upload-id="myUniqueUploadId"
          >
            <label className="custom-file-container__custom-file">
              <input
                type="file"
                className="custom-file-container__custom-file__custom-file-input"
                accept="image/*"
                multiple
                aria-label="Choose File"
              />
              <input type="hidden" name="MAX_FILE_SIZE" value="25000000" />
              <span className="custom-file-container__custom-file__custom-file-control"></span>
            </label>
            <div className="custom-file-container__image-preview"></div>

            <div className="row">
              <div className="col-12">
                <button className="w-100 btn btn-dark">
                  <a
                    className="custom-file-container__image-clear text-white"
                    title="Clear Image"
                  >
                    Clear
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 mt-5 mt-md-0">
          <form onSubmit={submitDetails}>
            <h3 className="mb-4">Item Details</h3>
            <div className="row">
              <div className="mb-3">
                <label className="form-label" htmlFor="item_name">
                  Item Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-control"
                  type="text"
                  id="item_name"
                />
              </div>

              <div className="mb-3">
                <span className="form-label mb-2">select available Sizes</span>{" "}
                <br />
                {sizes.map(({ name, show }, index) => (
                  <div className="form-check form-check-inline" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      value={name}
                      onChange={handleSizeOnChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      {show}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <span className="form-label mb-2">Select Categories</span>{" "}
                <br />
                {categories === "Network Error" ? (
                  <NetworkErr />
                ) : categories !== null ? (
                  categories.map((cat, index) => (
                    <div className="form-check form-check-inline" key={cat._id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`custom-checkbox2-${index}`}
                        value={cat.name}
                        onChange={handleCatChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`custom-checkbox2-${index}`}
                      >
                        {cat.name}
                      </label>
                    </div>
                  ))
                ) : (
                  <Loading />
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="item_price">
                  Item Price
                </label>
                <input
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="form-control"
                  type="text"
                  id="item_price"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="item_description">
                  Item Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="form-control"
                  type="text"
                  id="item_description"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                {error ? errorDiv : null}
              </div>
            </div>
            <div className="mb-3 mt-4">
              {isUploading ? (
                <Loading />
              ) : (
                <button className="btn btn-dark w-100" type="submit">
                  <i className="far fa-save me-2"></i>Create Item
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPost;
