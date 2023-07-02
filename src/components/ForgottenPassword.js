import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function ForgottenPassword(props) {
  const navigate=useNavigate();

  const [email, setEmail] = useState("");
 



  const headleSeandingToken = async () => {
    if(email===""){
      props.showAlert("Enter email please ",'red')
    }else{
      requistBackendEndpoint();
    }
  }
  const requistBackendEndpoint = () => {
     axios.post(`${props.host}/api/auth/opt/forgertpassword`, { email }).then((response)=>{
      props.showAlert("Sending to your email. Please check.");
      navigate("/login");
    }).catch((error)=>{
      console.log(error)
      props.showAlert("User account does not exist.");
     })
    
  }


  

  return (
    <>
    <div className="min-h-screen md:py-3 md:mt-20">
    <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-5xl justify-around">
      <div className={`w-full p-8 lg:w-1/2 rounded-lg shadow-lg bg-gray-${props.mode==='light'?100:800 } `}>
        <h1 className={`text-2xl font-semibold text-gray-${props.mode==='light'?900:100}  text-center`}>
        Resert Password
        </h1>
        <div className="emailForm">
          <div>
            <hr className="mt-2 mb-1" />
            <h2 className={`text-center text-gray-${props.mode==='light'?900:100}  text-xl font-semibold`}>
            Please enter your email address or to search for your account
            </h2>
              <div>

            <label className={`block text-gray-${props.mode==='light'?900:100}  text-md font-bold mb-2`}>
              Email:
            </label>
                 <input type="email"  className={`bg-gray-200 text-gray-${props.mode==='light'?900:100} text-blue-900  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none`} placeholder="Email address" onChange={(e) => setEmail(e.target.value)}  value={email}  required/>
              <button  className="bg-gray-700 mt-5 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50" 
            onClick={()=>headleSeandingToken()} >Sead Email </button> </div>
       
          </div>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-2">
        <Link to="/login"className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
                Login
          </Link>    
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
