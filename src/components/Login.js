import React ,{useState} from 'react'
import { Helmet } from 'react-helmet';
import { Link,useNavigate } from "react-router-dom";
// import CreateAccount from '../config';  

const url="http://localhost:5000"

export default function Login(props) {
  
  const [credentials, setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();

  const LoginUser=async (e)=>{

    e.preventDefault();
    const response = await fetch(`${props.host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });
    const json =await response.json();
    if(json.success){
      //save the auth token and redirect 
      localStorage.setItem('token',json.authtoken);
      props.showAlert("Login successfully ",'green')
      navigate("/");
      
    }else{
      props.showAlert("Invlide Email and Password ",'red')
    }
  }

  
  
  const onChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const toggelButtonShowAndHide=()=>{
    let x = document.getElementById("click_show_hide");
    let password = document.getElementById("password");
    if (x.innerHTML === "Show") {
      if (password.type === "password") {
        password.type = "text";
      }
      x.innerHTML = "Hide";
      
    } else {
      x.innerHTML = "Show";
      password.type = "password";
    }
  }



  return (
  <>
  <Helmet >

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login -SBSContraction And Interior </title>
      {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
      <meta name="description" content="Login to access your account and enjoy personalized features. Enter your credentials and securely access your account to manage your settings, preferences, and exclusive content. Experience convenience and control with our login feature" />
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
  <section className={`text-gray-${props.mode==='light'?900:100} body-font flex py-8`}>
  <div className="container px-auto py-20 mx-auto  flex-wrap items-center flex justify-around">
    <form  method='POST' onSubmit={LoginUser} className={`lg:w-2/6 md:w-1/2 bg-gray-${props.mode==='light'?200:800 } rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 `}>
      <h2 className={`text-gray-${props.mode==='light'?900:100} text-2xl font-bold title-font mb-5  text-center font-sans `}>Sign in</h2>
      <div className="relative mb-4">
        <label html="email" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>Email</label>
        <input type="email" id="email" name="email"  value={credentials.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} required />
      </div>
      <div className="relative mb-4">
        <label html="password" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>Password</label>
        <input type="password" id="password" name="password" minLength={5} value={credentials.password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} required />
      </div>
     
      <div className="flex items-start py-3">
            <div className="flex items-start">
               
                <label className={`ml-2 text-sm font-medium text-gray-${props.mode==='light'?900:100} dark:text-gray-900 cursor-pointer`} id='click_show_hide'  onClick={toggelButtonShowAndHide}>Show</label>
            </div>
            <Link to="/forgottenpassword" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgotten Password?</Link>
        </div>
      <button className="text-white bg-green-800 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Login</button>
      {/* <p className="text-xs text-gray-500 mt-3">Login</p> */}
      <div className={`text-sm font-medium text-gray-${props.mode==='light'?900:100} dark:text-gray-300 py-2`}>
            Not registered ? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create new account</Link>
        </div>
    </form>
  </div>
</section>
  </>
  )
}
