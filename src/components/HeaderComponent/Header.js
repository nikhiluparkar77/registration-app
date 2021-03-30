import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {

    const handleLogout = () =>{
        localStorage.removeItem("login");
        window.location.href = "/"
    }

    return (
        <div className="header">
            <div className="appName"><Link to="/dashbord">Demo App</Link></div>
            <div className="links">
               <ul>
                   <li><Link to="/posts">Posts</Link></li>
                   <li><Link to="/comments">Comments</Link></li>
                   <li><Link to="/todos">Todos</Link></li>
                   <li><Link to="/photos">Photos</Link></li>
                   {localStorage.login ? <li><Link to="#!" onClick={handleLogout}>Logout</Link></li> : null} 
               </ul>
            </div>
        </div>
    )
}

export default Header;
