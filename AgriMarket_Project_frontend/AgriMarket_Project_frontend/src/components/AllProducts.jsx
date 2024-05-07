import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Product from "./Product";
import TopSlider from "./TopSlider";
//import { rgbToHex } from "@material-ui/core";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const { catid } = useParams();
  const state = useSelector((state) => state);
  const [item, setItem] = useState({});
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const pageSize = 8;

  const [showDialog, setShowDialog] = useState("modal fade");
  const [display, setDisplay] = useState("none");

  const showModal = (prod) => {
    setShowDialog("modal fade show");
    setDisplay("block");
    setItem(prod);
  };

  const checkItem = (prodid) => {
    return state.cart.findIndex((x) => x.prodid === prodid) < 0;
  };

  const closeDialog = () => {
    setShowDialog("modal fade");
    setDisplay("none");
  };

  const loadDataFromServer = (page = 0) => {
    axios
      .get(
        `http://localhost:5000/api/add-products/paginated?page=${page}&pagesize=${pageSize}`
      )
      .then((resp) => {
        setProducts(resp.data.data.plist);
        setTotalPage(Math.ceil(resp.data.data.total / pageSize));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    if (catid !== undefined) {
      axios
        .get("http://localhost:5000/api/add-products/cats/" + catid)
        .then((resp) => {
          setProducts(resp.data);
        })
        .catch((error) => {
          console.error("Error fetching category products:", error);
        });
    } else {
      loadDataFromServer(currentPage);
    }
  }, [catid, currentPage]);

  const addToCart = (item) => {
    if (sessionStorage.getItem("userid") == null) {
      alert("Please login first to buy a product");
      history.push("/clogin");
    } else if (sessionStorage.getItem("role") !== "customer") {
      alert("Only customers can buy products");
    } else {
      if (checkItem(item.prodid)) {
        showModal(item);
        setDisplay("none");
        setShowDialog("modal fade");
        item.qty = qty;
        // Add a null check for seller and seller.id
        if (item.seller && item.seller.id) {
          item.sellerId = item.seller.id;
          dispatch({ type: "AddItem", payload: item });
          alert("Item added to cart successfully");
        } else {
          console.error("Seller information is missing.");
        }
      } else {
        alert("Item is already in the cart");
      }
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <TopSlider />
      <div style={{backgroundColor: "rgb(102,156,86)"}}>
      <div className="container-fluid " style={{ width: "92%", }}>
        <div className="card shadow bg-transparent text-black font-weight-bolder" >
          <div className="card-body">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              containerClassName={"pagination"}
              pageCount={totalPage}
              onPageChange={handlePageClick}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
            <div className="row">
              {products.map((x) => (
                <Product key={x.prodid} x={x} showModal={showModal} />
              ))}
            </div>
          </div>
        </div>
        {display === "block" && (
          <div
            className={showDialog}
            style={{ zIndex: "1000", display: display }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Add to Cart</h5>
                  <button onClick={closeDialog} className="close">&times;</button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    {item.productImgUtility && (
                      <img
                        style={{ width: "90%", height: "250px", marginBottom: "10px" }}
                        src={
                          "data:image/jpeg;base64," + item.productImgUtility
                        }
                        className="img-thumbnail"
                        alt={item.pname} // Add alt attribute for accessibility
                      />
                    )}

                    <div className="ml-3" style={{fontSize:"25px"}}>
                      <h4 className="p-2 text-dark">{item.pname}</h4>
                      <h5 className="px-2">About: {item.descr}</h5>
                      <h5 className="px-2">Category: {item.category.catname}</h5>
                      <h5 className="px-2">Seller: {item.sellerName}</h5>
                      <h5 className="px-2">Price: &#8377; {item.price}</h5>
                      <input type="number" min="1" value={qty} onChange={e => setQty(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={e => addToCart(item)} className="btn btn-warning btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default AllProduct;