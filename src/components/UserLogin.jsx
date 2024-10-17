import { useState } from 'react'
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"
import { loginUser } from '../Api';

const UserLogin = () => {

   const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {email, password}
        try {
            const response = await loginUser(formData);

            console.log("user logged in successfully", response)
            // localStorage.setItem('token', response.jwt)
            navigate("/dashboard")

            
        } catch (error) {
            console.error('login error', error)
        }
        
    }
  return (
    <div>
     
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <h3>Please login here</h3>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
            Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Username or email"
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
        
            <button className="btn btn-primary" type="submit">
              Login
            </button>

            <h5>Don't have an account? <Link to="/register">Register</Link> here</h5>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
