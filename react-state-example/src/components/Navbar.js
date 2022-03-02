import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {
        username : 'YOUR NAME'
    }

    render(){
        return (
            <nav id='navbar'>
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="#"><li>About</li></a>
            </ul>
       
            <div className="nav-details">
              <p className="nav-username"> Bob </p> <!-- Replace 'Bob' by this.state.username -->
            </div>
          </nav>
        )
    }
}

export default Navbar;
