import React, { useState } from 'react'

export default function EntryPointFrom(props) {

  const [data, setData] = useState({name:'',email:'',phoneno:'',pincode:'',address:'',description:'',city:'',state:'',field:''})

  const addContect = async (name,email,phoneno,pincode,address,description,city,state,field) => {
    // TODO: API Call
    // API Call 
    field="home"
    const response = await fetch(`${props.host}/api/service/u/usercontectforms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name,email,phoneno,pincode,address,description,city,state,field})
    });

    // const note = await response.json();
    
  
    if(response.ok){
      props.showAlert("Thank you contect vist website","green")
    }else{
      props.showAlert("Enter again fil the form","red")
    }
  }
  

  
  
    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
  
    };
    
    
    const userFormSubmit  = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      // Reset the form data
     addContect(data.name,data.email,data.phoneno,data.pincode,data.address,data.description,data.city,data.state,data.field);
        setData({name:'',email:'',phoneno:'',pincode:'',address:'',description:'',city:'',state:'',field:''})
      // Close the popup
    };




  return (
     <section className={`text-gray-${props.mode==='light'?900:100} body-font relative`}>
   <form onSubmit={userFormSubmit}>
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-${props.mode==='light'?900:100}`}>Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Work and contact us</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={data.name} onChange={change}  required={true} min={5} />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.email}  onChange={change}  required={true} />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="phone_number" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input type="number" id="phone_number" name="phoneno" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.phoneno} onChange={change} pattern="[1-9]{1}[0-9]{9}"  required={true}   min={10} />
          </div>
        </div>
        <div className="p-2 w-1/4">
          <div className="relative">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
            <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.pincode}  onChange={change} required={true}  min={6} />
          </div>
        </div>
          <div className="p-2 flex w-1/1 ">
        <div className="mx-1">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">city</label>
            <input type="text" id="city" name="city" className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.city} onChange={change} required={true} min={4} />
        </div>
      <div className="mx-1">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.state} onChange={change} required={true} min={4} />
      </div>
        </div>
        <div className="p-2 w-3/4">
          <div className="relative">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <input type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.address}  onChange={change} required={true} min={5}  />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Service Description</label>
            <textarea id="message" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={data.description} onChange={change} required={true} min={5}  ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 cursor-pointer py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'  > Submit </button>
        </div>
        
      </div>
    </div>
  </div>
   </form>
</section>
  )
}
