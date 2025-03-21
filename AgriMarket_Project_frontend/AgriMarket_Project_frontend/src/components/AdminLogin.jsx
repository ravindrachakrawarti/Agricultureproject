import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../validations/loginvalidation"

function AdminLogin(){
    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [submitted,setSubmitted]=useState(false)
    const [errors,setErrors]=useState({})
    const [errmsg,setErrmsg]=useState()
    const history=useHistory()

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user))    
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:5000/api/admin/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("userid",result.userid)
                sessionStorage.setItem("uname",result.uname)
                sessionStorage.setItem("role","admin")
                dispatch({type:'IsLoggedIn'})
                history.push("/aprofile")
            })
            .catch(error=>{
                console.log("Error",error);
                setErrmsg("Invalid username or password..!!")
            })            
        }
    },[errors])


    return (
        <body style={{backgroundImage: "url('/assets/admin.jpg')",height:"500px"}}>
            <br/>
    <div className="container" style={{ width: "40%" }}>
       
            <div className="card shadow bg-transparent mt-3 text-black font-weight-bold">
        <div className="card-body" >
        <div className="row" >
            <div className="col-sm-8 mx-auto"  style={{marginTop:"100"}} >
                <h4 className="text-center p-4"  style={{fontSize:"40px"}}>
                    Admin Login 
                </h4>
                <form onSubmit={handleSubmit}>                 
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label"  style={{fontSize:"25px"}}>User Id</label>
                    <div className="col-sm-8">
                        <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                        {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                    </div>
                    
                </div>                    
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label"  style={{fontSize:"25px"}}>Password</label>
                    <div className="col-sm-8">
                        <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                        {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                    </div>
                </div>                    
                <button className="btn btn-primary float-right"  style={{fontSize:"25px"}}>Login Now</button>
                </form>
                <div className="clearfix"></div>
                {errmsg && <p className="alert alert-danger mt-4 text-center font-weight-bold">{errmsg}</p>}
            </div>
        </div>
    </div>
    </div>
    </div>
    </body>
    );
}

export default AdminLogin;