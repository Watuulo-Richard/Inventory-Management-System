/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import inventWoman from "/src/assets/images/inventWoman.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinners from "../../components/Spinners";

const ProductsPage = ({ addProductSubmit, deleteProduct, productImage, setProductImage }) => {
  const navigate = useNavigate();

  const onDeleteClick = (productId) => {
    const confirm = window.confirm('Are You Sure You Want To Delete This Product ?')

    if(!confirm) return;

    deleteProduct(productId);
    navigate('/products');
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/products?populate=*');
        const data = await res.json();
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.log('Error Fetching Data', error);
      } finally {
        setTimeout(()=>{setLoading(false)}, 2000)
      }
      
    }

    fetchProducts();
  }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  // const [productImage, setProductImage] = useState(null);
  console.log(productImage)

  

  const submitForm = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      category,
      description,
      brand,
      productImage,
    };
    
    addProductSubmit(newProduct)

    return navigate('/products')
  };
  
  if(loading) {
    return <Spinners loading={ loading }/>
  }
  return (
    <div className="container p-5 bg-light my-5">
      <div className="row">
        {/* <!-- Text and Button Column --> */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold mb-3 text-primary">
            Create a New Product
          </h1>
          <p className="lead mb-4">
            Easily add new products to your store with just a few clicks. Expand
            your inventory now and enhance your customers shopping experience
            by offering them a wide range of products tailored to their needs.
            Stay ahead of the competition and grow your business today!
          </p>
          <div className=" mt-md-5">
            {/* <!-- Button to trigger the modal --> */}
            <button
              type="button"
              className="btn btn-primary btn-lg w-100"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
            >
             <i className="fa-solid fa-circle-plus text-warning"></i> Create New Product
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="productModal"
              tabIndex="-1"
              aria-labelledby="productModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="productModalLabel">
                      Add New Product
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* <!-- Modal Body with Form --> */}
                  <div className="modal-body">
                    <form id="productForm" onSubmit={ submitForm }>
                      {/* <!-- Product Name --> */}
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

                      {/* <!-- Price --> */}
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

                      {/* <!-- brand --> */}
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

                      {/* <!-- Category --> */}
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
                          <option value="Electronics">Electronics</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Books">Books</option>
                        </select>
                      </div>

                      {/* <!-- Description --> */}
                      <div className="mb-3">
                        <label
                          htmlFor="productDescription"
                          className="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="productDescription"
                          rows="3"
                          placeholder="What Does The Product Do...?"
                          required
                          value={description}
                          onChange={(e) =>
                            setDescription(e.target.value)
                          }
                        ></textarea>
                      </div>

                      {/* <!-- Image --> */}
                      
                      <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">
                          Product Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="productImage"
                          accept="image/*"
                          required
                          
                          onChange={(e) => setProductImage(e.target.files[0])}
                        />
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal Footer with Save and Cancel Buttons --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      form="productForm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Image Column --> */}
        <div className="col-md-6">
          <img
            src={inventWoman}
            className="img-fluid rounded-md shadow-lg w-100 "
            alt="Product Creation Image"
          />
        </div>
      </div>
      <hr />

      <table className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.data.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><img src={ product.productImage?.formats.thumbnail.url } alt="..." width="100" /></td>
                <td>{product.createdAt.slice(0, 10)}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link
                    to={"/products/edit" + product.id}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDeleteClick(product.id)}
                    className="btn btn-danger btn-sm mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="row">
        <div className="col-md-10 offset-md-1 text-center align-items-center d-flex justify-content-center">
          <a href="" className="btn btn-outline-primary">
            <i className="fa-solid fa-arrow-left fs-4"></i>
          </a>
          <a href="" className="btn btn-outline-primary mx-3">
            <i className="fa-solid fa-arrow-right fs-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
