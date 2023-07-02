import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const ResetPassword = (props) => {
const navigate=  useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfimPassword] = useState('')


  const resetPasswodrd = () => {
    if (password === confirmPassword) {
      // Send request to backend API to update the password
      axios.post(`${props.host}/api/auth/opt/reset-password/${token}`, {confirmPassword,}).then((Response) => {
        props.showAlert("Your password has been change successfully ");
        navigate("/login");
        }).catch((e) => {
            props.showAlert("Can't change password.");
        });
    } else {
      props.showAlert("Password not match  ");
    }
  };

  return (
    <>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-${props.mode === "light" ? 900 : 200 }`}>Reset Password </h1>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className={`leading-7 text-sm text-gray-${props.mode==="light"? 900:200}`}>Password</label>
        <input type="password" id="full-name" name="password" className={`w-full bg-gray-${props.mode === "light" ? 100 : 500 } bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${props.mode === "light" ? 900 : 100 } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}  value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div> 
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className={`leading-7 text-sm text-gray-${props.mode==="light"? 900:200}`}>Confirm Password </label>
        <input type="password" id="email" name="password" className={`w-full bg-gray-${props.mode === "light" ? 100 : 500 }  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${props.mode === "light" ? 900 : 100 } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}  value={confirmPassword} onChange={(e) => setConfimPassword(e.target.value)}  required  />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => resetPasswodrd()}>Submit</button>
    </div>
  </div>
</section>
    </>
  );
};

export default ResetPassword;