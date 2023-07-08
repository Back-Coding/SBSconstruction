import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Helmet } from "react-helmet";


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
    <Helmet >

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Forgotten Password -SBSContraction And Interior </title>
      {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
      <meta name="description" content="Forgot your password? No problem. Easily reset your password with a few simple steps. Regain access to your account and continue enjoying our services hassle-free. Retrieve your password now." />
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

      <meta name="instagram:title" content="SBSContraction And Interior"/>
      <meta name="instagram:description" content="Extra Fast: Extra fast refers to a service or work done with an accelerated timeline, aiming to complete the project in a shorter period than usual. It often requires efficient planning, allocation of resources, and streamlined processes to achieve the desired results quickly."/>
      <meta name="instagram:url" content="https://www.instagram.com/sbs_constructions_and_interior"/>
      <meta name="whatsapp:title" content="SBSContraction And Interior"/>
      <meta name="whatsapp:url" content="https://wa.me/message/47WINPBGG5F2L1"/>
      <meta name="pinterest:title" content="SBSContraction And Interior"/>
      <meta name="pinterest:url" content="https://in.pinterest.com/sbs_construction_and_interior"/>

      {/* <!-- Canonical URL --> */}
      <link rel="canonical" href="https://sbscai.com" />
      </Helmet>
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
