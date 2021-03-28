import React,{useState} from 'react';
import {Link} from "react-router-dom";

const LoginComponent = () => {
    const [feild, setFeild] = useState({     
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFeild({
            ...feild,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = localStorage.getItem("reginterInfo"); 
        userInfo.map(item=>console.log(item))
        console.log(userInfo.email)
    }

    return (
        <div className="mainPage">
            <div className="CommanPage loginPadding">
                <div className="CommanPart">
                    <form  onSubmit={handleSubmit}>                
                        <h2>Welocme back!</h2>
                        <p>Please login to your account</p>
                        <div className="inputFeilds">
                        
                            <input 
                                type="text" 
                                className="feildInput" 
                                name="email" 
                                value={feild.email} 
                                onChange={handleChange} 
                                placeholder="Email id." 
                            />
                            
                            <input 
                                type="password" 
                                className="feildInput" 
                                name="password" 
                                value={feild.password} 
                                onChange={handleChange} 
                                placeholder="Password" 
                            />
                        
                        </div>
                        <div className="remember">
                            <input type="checkbox" /><label>Remember me</label>  

                        </div>
                        <button type="submit">login</button>
                        <Link to="/register" className="link"><button>register</button></Link>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default LoginComponent;
