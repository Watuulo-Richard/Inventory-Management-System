/* eslint-disable no-unused-vars */
import Sparkle from '../assets/images/sparkles_6853977.svg'
import inventImage from '../assets/images/inventImage.jpg'
import { Link } from 'react-router-dom'
import Spinners from '../components/Spinners'
import { useState, useEffect } from 'react'

const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{setLoading(false)}, 2000)
      }, []);

    if(loading) {
        return <Spinners loading={ loading }/>
      }
  return (
    <>
        <div className="my-5 py-5">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold'>Product Inventory</h1>
                        <p className='my-3 text-capitalize text-muted'>Our Product Inventory System simplifies stock management, providing real-time tracking, automated updates, and insightful reporting. Designed to optimize efficiency, it helps businesses monitor inventory levels, categorize products, and make data-driven decisions with ease and accuracy.</p>

                        <Link to="/dashboard" className='btn btn-primary btn-lg w-100 rounded-pill'>Get Started</Link>
                    </div>
                    <div className="col-md-6">
                        <img src={ inventImage } alt="" className='w-100 img-fluid rounded' />
                    </div>
                </div>
            </div>
        
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

        {/* Subscription */}

        <section id="subscription" className="mt-5">
            <div className="container">
                <div className="col-md-6 offset-md-3 text-center align-items-center">
                    <h2 className="fw-bold text-primary"><i className="fa-solid fa-envelope "></i> Stay Updated with the Latest Features</h2>
                    <p>Be the first to know about new features, product updates, and tips on maximizing your inventory management system. Subscribe to our newsletter and never miss an important update that can help you streamline your business operations.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center align-items-center">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder='Enter Email Address'/>
                            <button type='button' className="btn btn-primary text-white rounded-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

        {/* Services & Testimonials */}

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
    </>
    
    
    
  )
}

export default LandingPage