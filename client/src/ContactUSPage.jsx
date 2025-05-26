import React, { useState } from "react";
const ROOTURL = 'phoenix-iota-seven.vercel.app'
const ContactPage = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    function UpdateName(e){
      setName(e.target.value); 
    }
    function UpdateEmail(e){
      setEmail(e.target.value)  
    }
    function UpdateMessage(e){
      setMessage(e.target.value)
    }

    function HandleSubmit(e){
      e.preventDefault()
      if (name.length!=0&&email.length!=0&&message.length!=0){
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name:name,email:email,message:message})
          }
          fetch(ROOTURL+'/addemail', options)
          .then(response => {
            if (!response.ok){
              throw new Error('Request Could Not Be Processed!') 
            }
            return response
          })
          .then(data => {
            alert('Thanks For Contacting Us!')
          })
          .catch(error => {
            alert('Could Not Save Email', error.message)
          })
          .finally(() => {
            setEmail('')
            setMessage('')
            setName('')
          })
      }
      else{
        alert('One Of The Inputs Is Empty')
      }
    }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl bg-white p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={(e) => HandleSubmit(e)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => UpdateName(e)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => UpdateEmail(e)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                type='text'
                value={message}
                onChange={(e) => UpdateMessage(e)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col justify-center space-y-6 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold mb-1">Email</h4>
            <p>support@phoenixstore.com</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Phone</h4>
            <p>+1 (800) 123-4567</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Address</h4>
            <p>123 Market Street, Suite 100<br />San Francisco, CA 94103</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
