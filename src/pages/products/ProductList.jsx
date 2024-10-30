import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinners from "../../components/Spinners";

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch from API if not found in localStorage
        const res = await fetch(
          "https://inventorymanagement-systemwithstrapi.onrender.com/api/products"
        );
        const data = await res.json();
        const productData = data.data || [];

        setProducts(productData);
        localStorage.setItem("products", JSON.stringify(productData));
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchProducts();
  }, []);

  const addProductSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      price,
      category,
      brand,
      description,
      quantity,
    };

    try {
      const response = await fetch(
        "https://inventorymanagement-systemwithstrapi.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: productData }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("product created");
        console.log("result", result);
        
      }
      
    } catch (error) {
      console.error("Error placing order", error);
    }
    navigate('/productlist');
    window.location.reload();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setBrand(product.brand);
    setDescription(product.description);
    setQuantity(product.quantity); 
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? {
            ...product,
            name,
            price,
            category,
            brand,
            description,
            quantity, // Include quantity in the updated product
          }
        : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setEditingProduct(null); // Close the editing form
  };

// Delete Product 
const deleteProduct = async (id) => {
  try {
    const deleteRes = await fetch(`https://inventorymanagement-systemwithstrapi.onrender.com/api/products/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Authorization": "7f977e153287cbd660b179f27403a807d761cb760506a50ba97a5460e3c46deb58f3bbd23daabd8697af10c70c871472376c08a3ac27079242fa4063ba9d36ab5f52ab197b154262e43dc667e927af2b824feb67570f049d12b507bcde12aefcf46c0279491f8aa2c426d142bf720646aabcd8103aa39cd2fbf73f7d92084ebc",

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        identifier: "Watuulo Richard",
        password: "Watuulorichardb54f20#",
      }),
    });

    if (deleteRes.status === 404) {
      console.error(`Product with ID ${id} does not exist.`);
      return;
    }

    if (!deleteRes.ok) {
      throw new Error(`Failed to delete product with ID ${id}: ${deleteRes.statusText}`);
    }

    console.log(`Product with ID ${id} deleted successfully.`);

    // Update the products state after successful deletion
    setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
  }
    
};

const onDeleteClick = async (documentId) => {
  const confirmDelete = window.confirm("Are You Sure You Want To Delete This Product?");
  if (!confirmDelete) return;

  try {
    await deleteProduct(documentId);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete the product. Please try again.");
  }
};

  if (loading) {
    return <Spinners loading={loading} />;
  }

  return (
    <div className="container my-5 py-5">

      
        <button
          type="button"
          className="btn btn-primary w-100 w-md-auto"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Create a Product
        </button>
      

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editingProduct ? handleUpdate : addProductSubmit}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Enter product name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    placeholder="Enter product price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">
                    Product Brand
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    placeholder="Enter product brand"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="productCategory"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Choose category</option>
                    <option value="Agricultural Products">
                      Agricultural Products
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
                  <label htmlFor="productQuantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productQuantity"
                    placeholder="Enter quantity"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    rows="3"
                    placeholder="What Does The Product Do...?"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" onClick={addProductSubmit} className="btn btn-primary">
                  {editingProduct ? "Update Product" : "Create Product"}
                </button>
                {editingProduct && (
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setEditingProduct(null)}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  {product.quantity}
                  {/* {product.quantity < 10 && (
                    // <small className="text-danger d-block">Understocked</small>
                  )}
                  {product.quantity > 50 && (
                    // <small className="text-success d-block">Overstocked</small>
                  )} */}
                </td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <button
                    onClick={() => handleEdit(product)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={ () => onDeleteClick(product.documentId)}
                    className="btn btn-danger btn-sm mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
