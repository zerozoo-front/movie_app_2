import React from 'react';
import { Link } from "react-router-dom";
import '../Navigation.css';

function Navigation(){
    return(
        <div className="Nav">
            <ul>
                <li className="Nav__Home">
                    <Link className="Nav__Link" to="/">Home</Link>
                </li>
                <li className="Nav__About">
                    <Link className="Nav__Link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navigation;