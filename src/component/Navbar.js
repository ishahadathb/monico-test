import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/team"}>Team</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
