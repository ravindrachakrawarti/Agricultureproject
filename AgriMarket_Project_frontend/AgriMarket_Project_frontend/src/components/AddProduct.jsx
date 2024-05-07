import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import productvalidation from "../validations/productvalidation";

function AddProduct() {
  const sellerid = sessionStorage.getItem("id");
  const [cats, setcats] = useState([]);
  const [product, setProduct] = useState({
    pname: "",
    category: "",
    price: "",
    descr: "",
    seller: sellerid,
  });
  const [errors, setErrors] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    setSelectedPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(productvalidation(product));
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("pname", product.pname);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("descr", product.descr);
     formData.append("sellerId", sellerid);
      formData.append("photo", selectedPhoto);

      try {
        await axios.post(
          "http://localhost:5000/api/add-products",
          formData
        );
        alert("Product saved successfully");
        history.push("/myproducts");
      } catch (error) {
        console.log("Error", error);
        alert("Error saving product");
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((resp) => setcats(resp.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <body style={{ 
      backgroundImage: "url('/assets/addPro.jpg')", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "500px"
    }}>
    <div className="container">
      <div className="card shadow bg-transparent text-black font-weight-bold">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 mx-auto" style={{fontWeight:"bolder",fontSize:"20px"}}>
              <h4 className="text-center p-2" style={{fontWeight:"bolder",fontSize:"30px"}}>Add Product Form</h4><br/>
              <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Product Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="pname"
                      value={product.pname}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.pname && (
                      <small className="text-danger float-right">
                        {errors.pname}
                      </small>
                    )}
                  </div>
                </div>

                {/* Category */}
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Category
                  </label>
                  <div className="col-sm-8">
                    <select
                      name="category"
                      value={product.category}
                      onChange={handleInput}
                      className="form-control"
                    >
                      <option value="">Select Category</option>
                      {cats
                        .filter((x) => x.isactive)
                        .map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.catname}
                          </option>
                        ))}
                    </select>
                    {errors.category && (
                      <small className="text-danger float-right">
                        {errors.category}
                      </small>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">Price</label>
                  <div className="col-sm-8">
                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.price && (
                      <small className="text-danger float-right">
                        {errors.price}
                      </small>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Description
                  </label>
                  <div className="col-sm-8">
                    <input
                      name="descr"
                      value={product.descr}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.descr && (
                      <small className="text-danger float-right">
                        {errors.descr}
                      </small>
                    )}
                  </div>
                </div>

                {/* Photo */}
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">Photo</label>
                  <div className="col-sm-8">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="form-control-file"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary float-right">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default AddProduct;
