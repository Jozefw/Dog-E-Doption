import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        const dogLinks = this.props.dogsNav.map((SingleDog)=>(
            <li className="nav-item" key={SingleDog.name}>
                <NavLink 
                exact to={`/dogs/${SingleDog.name}`} className="nav-link" 
                >{SingleDog.name}</NavLink>
            </li>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/dogs" className="navbar-brand">Dog-E-Doption</NavLink>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <NavLink exact to="/dogs" className="nav-link">Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
