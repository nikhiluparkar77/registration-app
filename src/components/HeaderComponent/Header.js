import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="appName"><Link to="/dashbord">Demo App</Link></div>
            <div className="links">
               <ul>
                   <li><Link to="/dashbord">Posts</Link></li>
                   <li><Link to="/dashbord">Comments</Link></li>
                   <li><Link to="/dashbord">Todos</Link></li>
                   <li><Link to="/dashbord">Photos</Link></li>
               </ul>
            </div>
        </div>
    )
}

export default Header;
