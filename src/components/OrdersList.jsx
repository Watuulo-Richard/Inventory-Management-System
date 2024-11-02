import { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar';
const OrdersList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            // Fetch from API if not found in localStorage
            const res = await fetch(
              "http://localhost:1337/api/orders"
            );
            const data = await res.json();
            const orderData = data.data || [];
            console.log(orderData)
            setOrders(orderData);
            // localStorage.setItem("product", JSON.stringify(orderData));
          } catch (error) {
            console.log("Error Fetching Data", error);
          } 
        //   finally {
        // //     setTimeout(() => {
        // //     //   setLoading(false);
        // //     // }, 2000);
        // //   }
        };
        fetchOrders();
      }, []);
  return (
    <div className="">
        <NavigationBar/>
        <div className='container my-5 py-5'>
        <table className="table table-sm">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderNumber}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.location}</td>
                <td>{order.orderStatus}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                {/* <!-- Edit Button --> */}
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editOrderModal">
                      Edit Order
                  </button>

                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="editOrderModal" tabIndex="-1" aria-labelledby="editOrderModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="editOrderModalLabel">Edit Order</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                  {/* <form onSubmit={ handleUpdate }>
                                      <div className="mb-3">
                                          <label htmlFor="orderName" className="form-label">Order Name</label>
                                          <input type="text" className="form-control" id="orderName" placeholder="Enter order name" value={name} onChange={(e) => setName(e.target.value)}/>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="orderPrice" className="form-label">Price</label>
                                          <input type="number" className="form-control" id="orderPrice" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="orderBrand" className="form-label">Order Brand</label>
                                          <input type="text" className="form-control" id="orderBrand" placeholder="Enter brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                                      </div>
                                      <div className="mb-3">
                                        <label htmlFor="orderCategory" className="form-label">
                                          Category
                                        </label>
                                        <select
                                          className="form-select"
                                          id="orderCategory"
                                          required
                                          value={category} onChange={(e) => setCategory(e.target.value)}
                                        >
                                          <option value="">Choose category</option>
                                          <option value="Agricultural Orders">
                                            Agricultural Orders
                                          </option>
                                          <option value="Grocery Items">Grocery Items</option>
                                          <option value="Household Essentials">
                                            Household Essentials
                                          </option>
                                          <option value="Livestock & Poultry Supplies">
                                            Livestock & Poultry Supplies
                                          </option>
                                          <option value="Textiles and Clothing">
                                            Textiles and Clothing
                                          </option>
                                          <option value="Hardware and Building Materials">
                                            Hardware and Building Materials
                                          </option>
                                          <option value="Fuel & Energy">Fuel & Energy</option>
                                          <option value="Health and Wellness">
                                            Health and Wellness
                                          </option>
                                          <option value="Small Appliances and Tools">
                                            Small Appliances and Tools
                                          </option>
                                          <option value="Beverages">Beverages</option>
                                          <option value="Personal Care and Beauty">
                                            Personal Care and Beauty
                                          </option>
                                          <option value="Crafts and Handicrafts">
                                            Crafts and Handicrafts
                                          </option>
                                          <option value="Electronic Accessories">
                                            Electronic Accessories
                                          </option>
                                        </select>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="orderQuantity" className="form-label">Quantity</label>
                                          <input type="text" className="form-control" id="orderQuantity" placeholder="Enter quantity" value={quantity}
                                          onChange={(e) => setQuantity(e.target.value)}/>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="orderDescription" className="form-label">Description</label>
                                          <textarea className="form-control" id="orderDescription" rows="3" placeholder="Enter description" value = {description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                      </div>
                                      <button type="submit" onClick={() => handleUpdate(order.documentId)} className="btn btn-primary">Save Changes</button>
                                  </form> */}
                              </div>
                          </div>
                    </div>
                  </div>
                  {/* <button
                    onClick={ () => onDeleteClick(order.documentId)}
                    className="btn btn-danger btn-sm mx-1"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Orders Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    
  )
}

export default OrdersList