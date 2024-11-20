/* eslint-disable no-unused-vars */
import Sparkle from '../assets/images/sparkles_6853977.svg'
import inventImage from '../assets/images/inventImage.jpg'
import { Link } from 'react-router-dom'
import Spinners from '../components/Spinners'
import { useState, useEffect } from 'react'
import { Spring } from 'react-spring'

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{setLoading(false)}, 2000)
      }, []);

    if(loading) {
        return <Spinners loading={ loading }/>
      }
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

                        
                            <li className="nav-item">
                                <Link className="nav-link btn btn-dark mx-2" to="/login">
                                    <span className="text-white fw-bold text-decoration-underline">
                                        Login <i className="fas fa-sign-in-alt text-warning"></i>
                                    </span>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="my-5 py-5">
            <Spring 
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay:4000, duration:1000 }}
            >
                { props => (
                    <div style={props}>
                        <div className="container">
                            <div className='row'>
                                <div className="col-md-6">
                                    <h1 className='text-primary fw-bold'>Product Inventory</h1>
                                    <p className='my-3 text-capitalize text-muted'>Our Product Inventory System simplifies stock management, providing real-time tracking, automated updates, and insightful reporting. Designed to optimize efficiency, it helps businesses monitor inventory levels, categorize products, and make data-driven decisions with ease and accuracy.</p>

                                    <Link to="/login" className='btn btn-primary btn-lg w-100 rounded-pill'>Get Started</Link>
                                </div>
                                <div className="col-md-6">
                                    <img src={ inventImage } alt="" className='w-100 img-fluid rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
            </Spring>
            
        
            <section className="icons bg-light rounded p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center align-items-center mb-3">
                        <h2 className='text-primary fw-bold'>Features <i className="fa-solid fa-wand-magic-sparkles"></i></h2>
                    </div>
                </div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-4 d-flex gap-4">
                            <i className="fa-solid fa-plus-circle fa-3x text-primary"></i>
                            <div className="">
                                <h5 className="fw-bold">Add New Products Easily</h5>
                                <p className="text-muted">Easily add new products to your store with just a few clicks. Fill out product details like name, price, category, and description. Upload product images to give your customers a visual of what they are buying.
                                Button: Add Your First Product</p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex gap-4">
                        <i className="fa-solid fa-3x fa-boxes-stacked text-success"></i>
                            <div className="">
                                <h5 className="fw-bold">Organize Your Inventory</h5>
                                <p className="text-muted">Keep track of all your products in one place. View detailed information about each product, including price, stock levels, and descriptions. Edit or delete products anytime to keep your inventory up-to-date and well-organized.
                                Button: Manage Inventory</p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex gap-4">
                        <i className="fa-solid fa-3x fa-layer-group text-warning"></i>
                            <div className="">
                                <h5 className="fw-bold">Categorize Products for Easy Browsing</h5>
                                <p className="text-muted">Organize your stores products into categories like Electronics, Clothing, and Furniture. With categories, your customers can easily find what they are looking for, enhancing their shopping experience.
                                Button: View Categories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section className="services text-bg-dark py-5 position-relative">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="text-capitalize fw-bold text-primary">
                        Services <i className="fa-solid fa-handshake-angle text-primary"></i>
                    </h2>
                    <hr className="w-25 mx-auto" />
                    <h2 className="mb-5">What The System Can Do For You ? </h2>

                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <i className="fas fa-box fa-3x text-primary mb-3"></i>
                        <h3 className="fs-3">Inventory Tracking</h3>
                        <hr className="w-25 mx-auto border border-primary border-2 opacity-75" />
                        <p>Stock Levels</p>
                        <p>Batch Monitoring</p>
                        <p>Expiry Alerts</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                        <h3 className="fs-3">Reporting</h3>
                        <hr className="w-25 mx-auto border border-primary border-2 opacity-75" />
                        <p>Sales Analysis</p>
                        <p>Restock Alerts</p>
                        <p>Inventory Trends</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-exchange-alt fa-3x text-primary mb-3"></i>
                        <h3 className="fs-3">Order Management</h3>
                        <hr className="w-25 mx-auto border border-primary border-2 opacity-75" />
                        <p>Order Tracking</p>
                        <p>Supplier Orders</p>
                        <p>Shipping Status</p>
                    </div>
                </div>
            </div>
        </section>

        <footer className='footer bg-dark text-white position-relative py-5'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <h4 className="text-center text-md-start fw-bold">About Product Inventory</h4>
                    <p className="text-center text-md-start">Our Inventory Management System is designed to streamline your business operations by giving you full control over your stock in real-time. Whether you are managing hundreds of products or just a few.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-md-start fw-bold">Links</h4>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Important: <Link to="/terms" className="text-decoration-none">Terms & Conditions</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Useful: <Link to="/privacy" className="text-decoration-none">Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Menu: <Link to="/" className="text-decoration-none">Home</Link>
                        <Link to="/dashboard" className="text-decoration-none mx-2">Dashboard</Link>
                        <Link to="/contact" className="text-decoration-none">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="mb-4 text-center text-md-start">
                        <a href="#" className="text-decoration-none">
                            <i className="fab fa-facebook fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-x-twitter fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-instagram fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-youtube fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-whatsapp fa-3x text-light mx-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    </>
    
    
    
  )
}

export default LandingPage