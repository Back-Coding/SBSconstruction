import React ,{useState} from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate  } from 'react-router-dom'



export default function Register(props) {


  const toggelButtonShowAndHide2=()=>{
    let x = document.getElementById("show_hide_text");
    let password = document.getElementById("password");
    let confom_password = document.getElementById("confom_password");
    if (x.innerHTML === "Show") {
      if (password.type === "password" && confom_password.type=== "password") {
        password.type = "text";
        confom_password.type = "text";
      }
      x.innerHTML = "Hide";
      
    } else {
      x.innerHTML = "Show";
      password.type = "password";
      confom_password.type="password";
    }
  }

  const [credentials, setCredentials] = useState({name:"" ,email:"",password:"",confirmPassword:''})
  const navigate = useNavigate();

  const CreateUserOnServer=async (e)=>{
    e.preventDefault();
   const {name,email,password,confirmPassword}=credentials;
   if(password===confirmPassword){
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json =await response.json();
    if(json.success){
      //save the auth token and redirect 
      localStorage.setItem('token',json.authtoken);
      navigate("/")
      props.showAlert("Register successfully direct login","")
      
    }else{
      props.showAlert("Sorry a user with this email already exists","rad")
    }
  }else{
    
    props.showAlert("Password do not match","rad")
  }
  }
  
  const onChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }


  return (
    <>
   <Helmet >

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up -SBSContraction And Interior </title>
    {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
    <meta name="description" content="Ready to join? Create a new account in just a few easy steps. Sign up today and unlock exclusive benefits, personalized features, and a seamless user experience. Start your journey with us now." />
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
    <section className={`text-gray-${props.mode==='light'?900:100 } body-font flex py-8`}>
    <div className="container px-auto py-8 mx-auto  flex-wrap items-center flex justify-around">
      <form onSubmit={CreateUserOnServer} methods="Post"className={`lg:w-2/6 md:w-1/2 bg-gray-${props.mode==='light'?200:800} rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 `}>
        <h2 className={`text-gray-${props.mode==='light'?900:100} text-2xl font-bold title-font mb-5  text-center font-sans `}>Sign Up</h2>
        <div className="relative mb-4">
          <label html="name" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>Name</label>
          <input type="texts" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required  value={credentials.name} onChange={onChange} />
        </div>
        <div className="relative mb-4">
          <label html="email" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required  value={credentials.email} onChange={onChange} />
        </div>
        <div className="relative mb-4">
          <label html="password" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>Password</label>
          <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={credentials.password} minLength={8} onChange={onChange}  />
        </div>
        <div className="relative mb-4">
          <label html="confom_password" className={`leading-7 text-sm text-gray-${props.mode==='light'?900:100}`}>confom password </label>
          <input type="password" id="confom_password" name="confirmPassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={onChange} value={credentials.confirmPassword}  minLength={8} />
        </div>
        {/* <div className='text-center'>
          <span className="text-red-500 font-bold">
            dkjd
            
          </span>
        </div> */}
        <div className="flex items-start py-3">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                  <div htmlFor="remember" className={`ml-2 cursor-pointer text-sm font-medium text-gray-${props.mode==='light'?900:100} dark:text-gray-300`}  onClick={toggelButtonShowAndHide2} id="show_hide_text">Show</div>
                  </div>
              </div>
          </div>
        <button className="text-white bg-yellow-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Create an account</button>
        {/* <p className="text-xs text-gray-500 mt-3">Login</p> */}
        <div className={`text-sm font-medium text-gray-${props.mode==='light'?900:100} dark:text-gray-300 py-2`}>
              registered ? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
          </div>
      </form>
    </div>
  </section>
  </>

  )
}
