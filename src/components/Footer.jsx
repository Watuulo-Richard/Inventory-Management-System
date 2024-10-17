import { Link } from "react-router-dom"

const Footer = () => {
  return (
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
  )
}

export default Footer