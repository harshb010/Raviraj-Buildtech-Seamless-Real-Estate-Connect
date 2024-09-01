import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(true);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const handleLogout = () => {
        logout();
        setCollapsed(true); // Close the navbar after logout
    };

    return (
        <div className=" text-center">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Raviraj Buildtech</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleToggleCollapse}
                        aria-controls="navbarNav"
                        aria-expanded={!collapsed ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home" onClick={handleToggleCollapse}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard" onClick={handleToggleCollapse}>Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile" onClick={handleToggleCollapse}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/' onClick={() => { handleLogout(); }}>Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={handleToggleCollapse}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services" onClick={handleToggleCollapse}>Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about" onClick={handleToggleCollapse}>About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="builderdashboard" onClick={handleToggleCollapse}>userdashboard</a>
                                    </li>

                                    <li className="nav-item">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Login / Register
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="nav-link" href="UserLogin" onClick={handleToggleCollapse}>User</a>
                                        <a className="nav-link" href="BuilderLogin" onClick={handleToggleCollapse}>Builder</a>
                                        <a className="nav-link" href="AdminLogin" onClick={handleToggleCollapse}>Admin</a>
                                        </div>
                                    </div>
                                    </li>
                                   
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
