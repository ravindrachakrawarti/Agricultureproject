import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../validations/loginvalidation"

function CustomerLogin() {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        "userid": "",
        "pwd": ""
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const history = useHistory()

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(loginvalidation(user))
        setSubmitted(true)
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(user)
            axios.post("http://localhost:5000/api/customers/validate", user)
                .then(resp => {
                    let result = resp.data.data;
                    console.log(resp.data.data)
                    sessionStorage.setItem("userid", result.userid)
                    sessionStorage.setItem("uname", result.name)
                    sessionStorage.setItem("role", "customer")
                    sessionStorage.setItem("id", result.id)
                    dispatch({ type: 'IsLoggedIn' })
                    history.push("/")
                })
                .catch(error => {
                    console.log("Error", error);
                    alert("Invalid username or password")
                })
        }
    }, [errors])


    return (
        <body style={{ 
            backgroundImage: "url('/assets/customer.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px"
          }}>
        <div className="container" style={{ width: "40%" }}>
            <div className="card shadow bg-transparent mt-3 text-black font-weight-bold">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8 mx-auto" style={{marginTop:"40px"}}>
                            <h4 className="text-center p-2" style={{fontSize:"40px"}}>
                                Customer Login 
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label" style={{fontSize:"25px"}}>Email_Id</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                                        {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label" style={{fontSize:"25px"}}>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                                        {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                                    </div>
                                </div>
                                <button className="btn btn-primary float-right" style={{fontSize:"20px"}}>Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </body>
    );
}

export default CustomerLogin;