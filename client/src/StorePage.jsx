import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const products = [
  { id: 1, name: "Product 1", price: "$25.00", image: "https://picsum.photos/300" },
  { id: 2, name: "Product 2", price: "$30.00", image: "https://picsum.photos/300" },
  { id: 3, name: "Product 3", price: "$25.00", image: "https://picsum.photos/300" },
  { id: 4, name: "Product 4", price: "$40.00", image: "https://picsum.photos/300" },
  { id: 5, name: "Product 5", price: "$40.00", image: "https://picsum.photos/300" },
  { id: 6, name: "Product 6", price: "$40.00", image: "https://picsum.photos/300" },
  { id: 7, name: "Product 7", price: "$50.00", image: "https://picsum.photos/300" },
  { id: 8, name: "Product 8", price: "$60.00", image: "https://picsum.photos/300" },
  { id: 9, name: "Product 9", price: "$70.00", image: "https://picsum.photos/300" },
  { id: 10, name: "Product 10", price: "$80.00", image: "https://picsum.photos/300" },
];

const ITEMS_PER_PAGE = 8;
const ROOTURL = 'http://localhost:8080'
const StorePage = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const {isAuthenticated, getAccessTokenSilently} = useAuth0()
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(start, start + ITEMS_PER_PAGE);
  
  async function AddToCart(id, name){
    if (!isAuthenticated){
      navigate('/pleaselogin')
      return
    }
    const token = await getAccessTokenSilently();
    const options = {
      method: 'POST',
      headers: {'Content-Type':'application/json', 'Authorization': 'Bearer ' + token},
      body: JSON.stringify({id:id,name:name})
    }
    fetch(ROOTURL+'/addtocart', options)
    .then(response => {
      if (!response.ok){
        throw new Error('Request Could Not Be Processed!')
      }
      return response
    })
    .then(data => {
      alert('Succesfully Added Product To Cart')
    })
    .catch(error => {
       alert(error.message) 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl p-4 flex flex-col items-center"
          >
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 font-medium">{product.price}</p>
            <button onClick={() => AddToCart(product.id, product.name)} className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 text-sm font-semibold rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StorePage;
