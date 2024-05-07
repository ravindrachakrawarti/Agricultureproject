import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MyProducts() {
  const sellerid = sessionStorage.getItem("id");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    axios
      .get("http://localhost:5000/api/add-products?sellerid=" + sellerid)
      .then((resp) => {
        setProducts(resp.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array to fetch only once when the component mounts

  const deleteProduct = (prodid) => {
    let resp = window.confirm("Are you sure to delete this product ?");
    if (resp) {
      axios
        .delete("http://localhost:5000/api/add-products/" + prodid)
        .then((resp) => {
          alert("Product deleted successfully");
          // Fetch products again after deletion
          axios
            .get("http://localhost:5000/api/add-products?sellerid=" + sellerid)
            .then((resp) => {
              setProducts(resp.data.data);
            });
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  return (
 
    <div className="container">
      <div className="card shadow bg-transparent text-black font-weight-bold">
        <div className="card-body">
          <h4>My Products</h4>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x.prodid}>
                  <td>
                    {x.productImgUtility && (
                      <img
                        style={{ width: "90%", height: "250px", marginBottom: "10px" }}
                        src={
                          "data:image/jpeg;base64," + x.productImgUtility
                        }
                        className="img-thumbnail"
                        alt={x.pname} // Add alt attribute for accessibility
                      />
                    )}
                    {x.pname}
                  </td>
                  <td>{x.category.catname}</td>
                  <td>{x.descr}</td>
                  <td>{x.price}</td>
                  <td>
                    <Link
                      to={"/edit/" + x.prodid}
                      className="btn btn-primary btn-sm mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(x.prodid)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default MyProducts;