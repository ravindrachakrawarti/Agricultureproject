import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../validations/uservalidation"

function RegCustomer() {
    const [user, setUser] = useState({
        "name": "",
        "city": "",
        "userid": "",
        "pwd": "",
        "cpwd": "",
        "phone": "",
        "gender": ""
    })
    const [errors, setErrors] = useState({})
    const history = useHistory()
    const [submitted, setSubmitted] = useState(false)

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(uservalidation(user))
        if (!user.gender) {
            errors.gender = "Gender is required"
        }
        setSubmitted(true)
    }

    useEffect(() => {
        if (!user.gender) {
            errors.gender = "Gender is required"
        }
        console.log(errors)

        if (Object.keys(errors).length === 0 && submitted) {
            console.log(user)
            axios.post("http://localhost:5000/api/customers", user)
                .then(resp => {
                    console.log(resp)
                    alert("Customer registered successfully")
                    history.push("/clogin")
                })
                .catch(error => console.log("Error", error))
        }
    }, [errors])
    return (
        <body style={{
            backgroundImage: "url('/assets/page4.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "1000px"
          }}>
        <div className="container" style={{ width: "40%" }}>
            <div className="card shadow bg-transparent mt-3 text-black font-weight-bold">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-9 mx-auto" style={{ width: "100%",marginTop:"30px"}}>
                            <h4 className="text-center p-2 "  style={{fontSize:"40px"}}>
                                Customer Registration 
                            </h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>Customer Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />
                                        {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>City</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" />
                                        {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>Gender</label>
                                    <div className="col-sm-8">
                                        <select name="gender" value={user.gender} onChange={handleInput} className="form-control">
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        {errors.gender && <small className="text-danger float-right">{errors.gender}</small>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success " style={{fontSize:"25px"}}>Email_Id</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                                        {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>Phone</label>
                                    <div className="col-sm-8">
                                        <input type="text" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" />
                                        {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                                        {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-success" style={{fontSize:"25px"}}>Confirm Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="cpwd" value={user.cpwd} onChange={handleInput} className="form-control" />
                                        {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                                    </div>
                                </div>
                                <button className="btn btn-primary float-right">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default RegCustomer;
