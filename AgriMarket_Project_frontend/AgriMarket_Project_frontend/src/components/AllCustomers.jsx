import axios from "axios";
import { useEffect, useState } from "react";

function AllCustomers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/customers")
        .then(resp=>{
            setCustomers(resp.data)
            console.log(customers)
        })
    },[])
    
    return (
        <body style={{
            backgroundImage: "url('/assets/customer.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px"
          }}>
        <div className="container-fluid">
            <h4 className="p-2 text-center text-danger font-weight-bold" style={{fontSize:"40px"}}>All Customers</h4>
            <table className="table table-bordered table-light table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>User Id</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.phone}</td>
                        <td>{x.userid}</td>
                        <td>{x.pwd}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </body>
    )
}

export default AllCustomers;