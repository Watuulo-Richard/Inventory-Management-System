import { useState, useEffect } from 'react'
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"
import { loginUser } from '../Api';
import imagePicture from '../assets/images/Login 2.avif';
import Spinners from './Spinners'

const UserLogin = () => {
   const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {email, password}
        try {
            const response = await loginUser(formData);

            console.log("user logged in successfully", response)
            // localStorage.setItem('token', response.jwt)
            navigate("/admin")

            
        } catch (error) {
            console.error('login error', error)
        }
        
    }
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
                    
                </div>
            </div>
      </nav>
      <div className="container my-5 py-5">
        <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className=''>
                <h3 className='text-uppercase fs-2 text-primary fw-bold'>Please login here</h3>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                  <input type="text" name="email" value={email} className="form-control" id="formGroupExampleInput" placeholder="Enter Username or email" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
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
                  <button className="btn btn-primary " type="submit">
                    Login
                  </button>
                  <Link to='/register' className="mx-auto my-2" type="submit">
                    If You Don't Have An Account Sign Up ?
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6 align-items-center">
              <img src={ imagePicture } alt="..." className='d-none d-md-block w-50 rounded'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogin
