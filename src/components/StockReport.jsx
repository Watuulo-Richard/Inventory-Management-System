import axios from 'axios'
import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';
function StockReport() {
    const [understocked, setUnderstocked]= useState([]);
    const [overstocked, setOverstocked]= useState([]);

    useEffect(()=>{
        axios.get("https://inventorymanagement-systemwithstrapi.onrender.com/api/products")
        .then(response =>{
            const products = response.data.data
            console.log("products", products)

            const UNDERSTOCK_LIMIT = 10;
            const OVERSTOCK_LIMIT = 100

            const understockedProducts = products.filter(product => product?.quantity < UNDERSTOCK_LIMIT);
            const overstockedProducts = products.filter(product => product?.quantity > OVERSTOCK_LIMIT);

            setUnderstocked(understockedProducts);
            console.log("under", understockedProducts)
            setOverstocked(overstockedProducts)

        })
        .catch(error =>{
            console.error ("error fetching products", error)
        })

    },[])

    console.log("understocked", understocked)
  return (
    <div className="">
      <NavigationBar/>
      <div className='container py-5 my-5'>
        <h2>UnderStocked Products</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {understocked.map((product, index)=>(
                <tr key={`understock-${index}`}>
                  <td>{product.name}</td>
                  <td>{product?.quantity}</td>
                  <td>
                    {product.quantity < 10 && (
                      <small className="text-danger d-block">Understocked</small>
                    )}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>OverStocked Products</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {overstocked.map((product,index)=>(
            <tr key={`overstock-${index}`}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                  {product.quantity > 50 && (
                    <small className="text-success d-block">Overstocked</small>
                  )}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
  )
}

export default StockReport
