import axios from "axios"
import { useEffect, useState } from "react"

function SellerProfile(){
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:5000/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        <body style={{ 
            backgroundImage: "url('/assets/sellerp.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px"
          }}>
        <div className="container">
            <div className="card shadow m-3 p-2 bg-transparent text-white font-weight-bold text-center" >
                <h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto",fontSize:"45px",fontWeight:"bold"}}>Seller Profile</h4>
                <br/>
                
                <h4 style={{fontSize:"30px",fontWeight:"bold"}}>Welcome {user.name}</h4>
                <h5  style={{fontSize:"30px",fontWeight:"bold"}}>City : {user.city}</h5>
                <h5  style={{fontSize:"30px",fontWeight:"bold"}}>User Id : {user.userid}</h5>
                <h5  style={{fontSize:"30px",fontWeight:"bold"}}>Contact No : {user.phone}</h5>
            </div>
        </div>
        </body>
    )
}

export default SellerProfile;
