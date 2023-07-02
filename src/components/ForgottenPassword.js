import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
;

export default function ForgottenPassword(props) {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [OpenCloseEmail, setOpenCloseEmail] = useState(true)
  const [openOtp, setOpenOtp] = useState(false);
  const [messageOTP, setMessageOTP] = useState('');
  const [OpenResertPassword, setOpenResertPassword] = useState(null)
  // const [resertPassword, setResertPassword] = useState(false)
  const [password, setPassword] = useState(null)
  const [confimPassword, setConfimPassword] = useState(null)
  const [otp, setOtp] = useState(null);


  const headleSeandingOTP = async (email) => {
    if(email===""){
      props.showAlert("Enter email please ",'red')
    }else{
    // Send an OTP to the user's email address
    const response = await fetch(`${props.host}/api/auth/opt/forgotpassword`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'token': localStorage.getItem('token')
      },
      body: JSON.stringify({email})
    });
    const json =await response.json();
    console.log(json.messageOTP)
    setMessageOTP(json.messageOTP);
    if (response.status === 200) {
      // Show the OTP verification page
      setOpenOtp(true);
    } else {
      // Show an error message
      props.showAlert("Not exsit account ","red")
    }
  }
  };
  const SumbitPassword= async(newPassword)=>{
    // Send a request to the backend server to update the user's password
    const response = await fetch(`${props.host}/api/auth/opt/resetpassword`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newPassword,email})
    });
    if(response.status===200){
      props.showAlert("Your password has been change successfully ")
      navigate("/login")
    }else{
      props.showAlert("Your password not change  ")
    }
  }

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const virifyOTP = () => {
      console.log("check",otp===messageOTP)
    if(otp===messageOTP){
      setOpenResertPassword(true)
      setOpenCloseEmail(false)
      setOpenOtp(false)

    } else{
      props.showAlert("Check OTP enter again fill")
    }
  }
  const headleSumbitPasswordVirify = () => {
    if(password===confimPassword){
      SumbitPassword(confimPassword);
      
    }else{
      props.showAlert("Password not match ")
    }
  }

  

  // const handleResetPassword = async () => {
  //   // Send a request to the backend server to update the user's password
  //   const response = await axios.post(
  //     "/api/auth/resetpassword",
  //     { email, otp, newPassword }
  //   );

  //   if (response.status === 200) {
  //     // Redirect the user to the login page
  //     window.location.href = "/";
  //   } else {
  //     // Show an error message
  //     console.log(response.data);
  //   }
  // };




  

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
            {OpenCloseEmail &&(
              
              <div>

            <label className={`block text-gray-${props.mode==='light'?900:100}  text-md font-bold mb-2`}>
              Email:
            </label>
                 <input type="email"  className={`bg-gray-200 text-gray-${props.mode==='light'?900:100} text-blue-900  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none`} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required/>
              <button  className="bg-gray-700 mt-5 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50" 
            onClick={()=>headleSeandingOTP(email)}  >Send OTP </button> </div>
            )}
          {openOtp  && (
                <div>
              <h2 className="text-blue-400 text-lg my-4 ">Enter OTP</h2>
              <input type="number" placeholder="OTP" onChange={handleOtpChange} className={`bg-gray-200 text-gray-${props.mode==='light'?900:100} text-blue-900  focus:outline-none focus:shadow-outline border border-gray-300 rounded not-sr-only appearance-none py-2 px-4 block w-1/4 mt-4 `}/>
              <button onClick={() => virifyOTP() }  className="bg-blue-500 py-2 my-5 hover:bg-blue-700 text-white font-bold  px-4 rounded">Verify OTP</button>
        </div>
        )}
        {OpenResertPassword && (
          <div className="">
            <input type="password"  className={`bg-gray-200 text-gray-${props.mode==='light'?900:100} my-3 focus:outline-none focus:shadow-outline border border-gray-300 text-blue-900 rounded py-2 px-4 block w-full appearance-none`} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>
            <input type="password"  className={`bg-gray-200 text-gray-${props.mode==='light'?900:100}  focus:outline-none focus:shadow-outline border border-gray-300 text-blue-900 rounded py-2 px-4 block w-full appearance-none`} placeholder="Enter confim Password" onChange={(e) => setConfimPassword(e.target.value)} required/>
            <button  className="bg-gray-700 mt-5 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50" 
            onClick={()=>headleSumbitPasswordVirify()}  >Submit Password </button>
          </div>
        )}
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
