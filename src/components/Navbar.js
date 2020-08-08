import React from 'react';
import {Link} from 'react-router-dom';


const Navbar=()=>
{
    return(
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className='nav-li'><Link to="/">Home</Link></li>
            <li className='nav-li'><Link to="/Category">Category</Link></li>
            <li className='nav-li'><Link to="/Products">Product</Link></li>
            <li className='nav-li'><Link to="/Login">Admin Area</Link></li>
          </ul>
       </nav>
    )
}

export default Navbar