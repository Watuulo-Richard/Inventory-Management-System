import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand btn btn-dark" to="/">
                        <div className="fw-bold d-none d-sm-block">
                            <span className="text-white">IMS</span>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarNavDropdown"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto my-2 mb-lg-0">
                            {/* Render these links on pages other than the landing page */}
                            {location.pathname !== "/" && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-dark mx-2" to="/admin">
                                            <span className="text-white fw-bold text-decoration-none">
                                                Dashboard <i className="fa-solid fa-gauge text-warning"></i>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-dark mx-2" to="/stockstatus">
                                            <span className="text-white fw-bold text-decoration-none">
                                                Product Status <i className="fa-solid fa-chart-pie text-warning"></i>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-dark mx-2" to="/order">
                                            <span className="text-white fw-bold text-decoration-none">
                                                Order <i className="fa-solid fa-arrow-down-short-wide mx-2"></i>
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* Render the Login link only on the landing page */}
                            {location.pathname === "/" && (
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-dark mx-2" to="/login">
                                        <span className="text-white fw-bold text-decoration-underline">
                                            Login <i className="fas fa-sign-in-alt text-warning"></i>
                                        </span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;
