import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
 

const RegisterComponent = () => {
    const [feild, setFeild] = useState({
        name:"",
        mobile:"",
        email:"",
        password:""
    }); 
    const [reginterInfo, setRegisterInfo] = useState([]);
    const [user, setUser] = useState([]);
    
    useEffect(()=>{
        if(localStorage.getItem("reginterInfo") === null){
            localStorage.setItem("reginterInfo", JSON.stringify(reginterInfo))
        } 
        const userData = localStorage.getItem("reginterInfo");
        setUser(JSON.parse(userData));
    },[])

    useEffect(()=>{
        user.filter(item=> {
            if(item.email === feild.email) alert("email already avilable")
        } )
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFeild({
            ...feild,
            [name]:value
        })
    }
  

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setRegisterInfo([...reginterInfo, feild])
        localStorage.setItem("reginterInfo", JSON.stringify(reginterInfo));  
        window.location.href = "/login";
    }

    return (
        <div className="mainPage">
            <div className="CommanPage loginPadding">
                <div className="CommanPart">
                    <form onSubmit={handleSubmit}>               
                        
                        <p>Please register to your account</p>
                        <div className="inputFeilds">
                            <input 
                                type="text" 
                                className="feildInput" 
                                name="name" 
                                value={feild.name} 
                                onChange={handleChange} 
                                placeholder="Name" 
                                required
                            />
                            
                            <input 
                                type="text" 
                                className="feildInput" 
                                name="mobile" 
                                value={feild.mobile} 
                                onChange={handleChange} 
                                placeholder="Mobile no." 
                                required
                            />
                            
                            <input 
                                type="text" 
                                className="feildInput" 
                                name="email" 
                                value={feild.email} 
                                onChange={handleChange} 
                                placeholder="Email id." 
                                required
                            />
                            
                            <input 
                                type="password" 
                                className="feildInput" 
                                name="password" 
                                value={feild.password} 
                                onChange={handleChange} 
                                placeholder="Password" 
                                required
                            />
                        
                        </div>
                        <div className="remember">
                            <input type="checkbox" /><label>Remember me</label>   
                        </div>
                        
                        <button type="submit">register</button>
                        <Link to="/login" className="link"><button>login</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;
