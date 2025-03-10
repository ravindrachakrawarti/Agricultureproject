function Product(props) {
  const { x, showModal } = props;

  console.log("Image URL:", x.productImgUtility); // Log the image URL to check its value

  return (
    
    <div className="col-sm-3 shadow mb-3" key={x.prodid}>
      <div
        className="card text-center text-black  mb-3 bg-transparent"
        style={{ boxShadow: "0 0 3px 3px white" }}
      >
        <div className="card-header p-1 border-bottom border-white font-weight-bold">
          <h5>{x.pname}</h5>
        </div>
        <div className="card-body py-1">
          {/* Correct the image URL concatenation */}
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
          {/* Rest of your code */}
          <h6 className="float-left">About: {x.descr}</h6>
          <br></br>
          <h6 className="float-middle font-weight-bold">
            Price: {x.price}&#8377;/kg{" "}
          </h6>
        </div>
        <div className="card-footer p-1">
          <button
            onClick={(e) => showModal(x)}
            className="btn btn-primary btn-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  
  );
}

export default Product;