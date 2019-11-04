import React, { Component } from 'react';

// stateless functional component

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Total Number: <span className="badge badge-pill badge-secondary">{props.totalNumberOfItem}</span>
            </a>
            </nav>
     );
}
 
export default Navbar;
