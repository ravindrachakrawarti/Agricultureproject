import axios from "axios"
import { useState } from "react"

function AdminProfile(){
    const userid=sessionStorage.getItem("userid")
    const uname=sessionStorage.getItem("uname")
    const [user,setUser]=useState({
        "uname":uname,
        "userid":userid,
        "pwd":""        
    })

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.post("http://localhost:5000/api/admin",user)
        .then(resp=>{
            console.log(resp)
            alert("Profile updated successfully")   
            sessionStorage.setItem("uname",user.uname)         
        })
        .catch(error=>console.log("Error",error))   
    }

    return (
        <body style={{ 
            backgroundImage: "url('/assets/adminp.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px"
          }}>
        <div className="container-fluid" >
            <h4 className="p-2 text-black font-weight-bold text-center" style={{fontSize:"40px"}}>Welcome {user.uname}</h4>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <div className="card shadow bg-transparent">
                        <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label" style={{fontSize:"20px",fontWeight: "bold"}}>User ID</label>
                                <div className="col-sm-8">
                                    <input type="text" name="userid" readOnly value={user.userid} onChange={handleInput} className="form-control" />                            
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label" style={{fontSize:"20px",fontWeight: "bold" }}>User Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="uname" value={user.uname} onChange={handleInput} className="form-control" />                            
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label" style={{fontSize:"20px",fontWeight: "bold" }}>Password</label>
                                <div className="col-sm-8">
                                    <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />                            
                                </div>                        
                            </div>
                            <button className="btn btn-primary float-right" style={{fontSize:"20px",fontWeight: "bold" }}>Update Profile</button>
                        </form>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        </body>
    )
}

export default AdminProfile;
