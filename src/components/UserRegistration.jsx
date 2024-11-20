import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Api";
import { Link } from "react-router-dom";


const UserRegistration = () => {
 const navigate = useNavigate()
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {username, email,password}
    try {
      const response = await registerUser(formData);
      console.log("User registered successfully", response);
      //handle post-registration logic(redirect)
      navigate("/login")
    } catch (error) {
      console.error("registration error", error);
    }
    console.log("form data", formData);
  };

  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>
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
                    
                </div>
            </div>
      </nav>

      <div className="container my-5 py-5 justify-content-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
            <h3>Please sign up here</h3>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Username"
                onChange={(e)=>setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Email
              </label>
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={password}
                type="password"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
                <Link to='/login' className='btn btn-outline-primary my-2'>
                  <i className="fas fa-sign-in-alt text-warning"></i> Back To Login
                </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserRegistration;
