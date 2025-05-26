import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const ROOTURL = 'https://phoenix-iota-seven.vercel.app/'
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  useEffect(() => {
    const options = {
        method: 'GET'
      }
      fetch(ROOTURL+'/checkcart', options)
      .then(response => {
         if (!response.ok){
           throw new Error('Request Could Not Be Processed!')
         }
         return response.json() 
      })
      .then(data => {
        const cartitems = []
        const getsub = user.sub
        for (let i = 0; i < data.length; i++){
          let variable = data[i]
          if (variable.user_id===getsub){
            cartitems.push(variable)  
          }
        }
        setCartItems(cartitems)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">🛒 Your Cart</h2>
  
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-2xl">Your cart is currently empty.</p>
            <p className="mt-2 text-gray-400">Browse the shop and add some items you love!</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-orange-100 text-orange-900 rounded-xl px-6 py-4 shadow-sm"
              >
                <span className="text-xl font-semibold">{item.name}</span>
                {/* You could add quantity or remove button here in future */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
  
  
}

export default CartPage;
