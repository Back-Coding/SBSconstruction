import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";


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
            props.showAlert("Can't change password. or expired reset token ");
        });
    } else {
      props.showAlert("Password not match  ");
    }
  };

  return (
    <>
     <Helmet>

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Reset Password - SBSContraction And Interior</title>
{/* <!-- Meta tags for SEO indexing and improved visibility --> */}
<meta name="description" content=" No problem. Easily reset your password with a few simple steps. Regain access to your account and continue enjoying our services hassle-free. Retrieve your password now." />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="google" content="notranslate" />

{/* <!-- Additional meta tags --> */}
<meta name="author" content="Ankit Singh & Rupesh Prasad" />
<meta name="revisit-after" content="7 days" />
<meta name="og:title" content="SBSContraction And Interior"/>
<meta name="og:description" content="Your home,reimagined. welcome to our renovation and repair website, where dreams become reality. Discover endless possibilities for transform you space with our exprt team"/>
<meta name="og:url" content="https://sbscai.com" />
<meta name="og:type" content="website" />
<meta name="og:site_name" content="SBSContraction And Interior" />
<meta name="facebook:title" content="Ankit Surendra"/>
<meta name="facebook:description" content="Extra Fast: Extra fast refers to a service or work done with an accelerated timeline, aiming to complete the project in a shorter period than usual. It often requires efficient planning, allocation of resources, and streamlined processes to achieve the desired results quickly."/>
<meta name="facebook:image" content="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/316419374_106090508997411_7012558156685824218_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_UYIR_RXnRAAX-pVKrV&_nc_ht=scontent-bom1-2.xx&oh=00_AfCA5LixV72MG_S7DJ7vkbZFq7PCPBXCem_qVcyPKIGUJg&oe=64ADCB9F"/>
<meta name="facebook:url" content="https://www.facebook.com/people/Ankit-Surendra/pfbid0ZeSvuSY2ZdmCsJL5zhPRoGABC73Ur4mvRcG5E5tRHU6Rc5LWnMsYTxf5gsQBtx3Ql/?mibextid=ZbWKwL" />

{/* <!-- Canonical URL --> */}
<link rel="canonical" href="https://sbscai.com" />
</Helmet>
   <section className="text-gray-600 body-font mb-64">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-${props.mode === "light" ? 900 : 200 }`}>Reset Password </h1>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className={`leading-7 text-sm text-gray-${props.mode==="light"? 900:200}`}>Password</label>
        <input type="password" id="full-name" name="password" className={`w-full bg-gray-${props.mode === "light" ? 100 : 500 } bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${props.mode === "light" ? 900 : 100 } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}  value={password} onChange={(e) => setPassword(e.target.value)} min={6} required />
      </div> 
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className={`leading-7 text-sm text-gray-${props.mode==="light"? 900:200}`}>Confirm Password </label>
        <input type="password" id="email" name="password" className={`w-full bg-gray-${props.mode === "light" ? 100 : 500 }  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${props.mode === "light" ? 900 : 100 } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}  value={confirmPassword} onChange={(e) => setConfimPassword(e.target.value)} min={6} required  />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => resetPasswodrd()}>Submit</button>
    </div>
  </div>
</section>
    </>
  );
};

export default ResetPassword;