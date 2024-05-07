import { useRef, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
function ContactUs() {
    let formRef = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const contactAction = async () => {
        try {
            let url = "http://localhost:5000/api/contact"; // Replace with your actual API endpoint URL

            const response = await axios.post(url, user);

            if (response.status !== 200) {
                throw new Error(response.data);
            }

            let newuser = {
                name: "",
                email: "",
                phone: "",
                message: "",
            };
            setUser(newuser);

            formRef.current.classList.remove("was-validated");

            alert("Success");
            setIsSuccess(true);
        } catch (err) {
            alert(err.message);
            setIsError(true);
        } finally {
            setTimeout(() => {
                setIsSuccess(false);
                setIsError(false);
            }, 5000);
        }
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
    <body style={{ 
            backgroundImage: "url('/assets/contact.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px"
          }}>
        <div className="row justify-content-center text-black font-weight-bold">
            <div className="col-sm-10 col-md-4">
                <h1 className="text-center" style={{fontSize:"40px"}}>Contact Us</h1>
                <form ref={formRef} className="needs-validation" >
                    <label htmlFor="name"  style={{fontSize:"20px",fontWeight:"bold"}}>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="form-control mb-1"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email" style={{fontSize:"20px",fontWeight:"bold"}}>Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="form-control mb-1"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="phone" style={{fontSize:"20px",fontWeight:"bold"}}>Phone</label>
                    <input
                        type="text"
                        placeholder="Enter Phone No"
                        className="form-control mb-1"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="mb-5">
                        <label htmlFor="message" style={{fontSize:"20px",fontWeight:"bold"}}>Message</label>
                        <textarea
                            className="form-control"
                            placeholder="Enter your message here"
                            name="message"
                            value={user.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <input
                            type="button"
                            value="Submit"
                            className="btn btn-primary w-50"
                            onClick={contactAction}
                        />
                    </div>
                </form>
                <br/><br/>
            </div>
    
           
        </div>
       
        </body>
         

        
       </>
    );
}

export default ContactUs;
