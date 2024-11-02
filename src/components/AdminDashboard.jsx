import axios from "axios";
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import Spinners from './Spinners'
import NavigationBar from "./NavigationBar";
function AdminDashboard() {
const [productCount, setProductCount]= useState(0)
const [ordersCount, setOrdersCount] = useState(0);

useEffect(()=>{
  axios.get("https://inventorymanagement-systemwithstrapi.onrender.com/api/orders")
  .then(response=>{
    const orders = response.data.data

    setOrdersCount(orders.length)
  })
  .catch(error=>{
    console.error("Error fetching products", error)
  })
},[])

useEffect(()=>{
  axios.get("https://inventorymanagement-systemwithstrapi.onrender.com/api/products")
  .then(response=>{
    const products = response.data.data

    setProductCount(products.length)
  })
  .catch(error=>{
    console.error("Error fetching products", error)
  })
},[])

const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{setLoading(false)}, 2000)
      }, []);

    if(loading) {
        return <Spinners loading={ loading }/>
      }

  return (
    <div className="">
      <NavigationBar/>
      <div className="main my-5">
            <div className="container-fluid border-bottom">
              <div className="row">
                <div className="col-md-10 offset-md-1 text-center pt-5">
                  <h1 className="text-primary fw-bolder">Welcome To Our Dashboard</h1>
                </div>
              </div>
            </div>
        <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                  <i className="mt-2 fa-brands fa-product-hunt fa-5x text-warning"></i>
                  </div>
                  <div className="col text-warning">
                    <h3 className="display-3">{productCount}</h3>
                    <h6 className="fw-bold">Products</h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                  <Link to="/productlist" className="text-decoration-none">View Details</Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center my-3 my-md-0">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                  <i className="mt-2 fa-solid fa-arrow-down-short-wide text-warning fa-4x"></i>
                  </div>
                  <div className="col text-warning">
                    <h3 className="display-3">{ordersCount}</h3>
                    <h6 className="fw-bold">Orders</h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                  <Link to="/orders" className="text-primary text-decoration-none">
                    View Details
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                    <i className="fa-solid fa-chart-column fa-4x text-warning mt-2"></i>
                  </div>
                  <div className="col">
                    <h3 className="display-6 text-warning">
                      Stock Status
                    </h3>
                    <h6 className="fw-bold text-warning"></h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                <Link to="/stockstatus" className="text-decoration-none">View Details</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
      
  );
}

export default AdminDashboard;
