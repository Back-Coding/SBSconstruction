import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const url ="http://localhost:5000/api/auth/admin/login"

// admin login part amdin end-point hit http:// domain.com/admin click here 
export default function AdminLogin(props) {

const [credentials, setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();
  
  props.handleUserLogin();
  const LoginAdmin=async (e)=>{

    e.preventDefault();
    try {
      
      const response = await fetch(url, {
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
      props.showAlert("Login successfully ",'green');
      navigate("/admin/dashboard");
      props.handleLogout(false,true);
      
    }else{
      props.showAlert("Invlide Email and Password  ",'red')
    }
  } catch (error) {
    props.handleLogout(false,false);
    
    props.showAlert("Check your internet connection and try again ",'red')
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
    <div className="container mx-auto mb-72 mt-16 md:mt-5 sm:mt-11">
    <div className="w-full ">
      <form onSubmit={LoginAdmin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-xs ">
        <h2 className="text-center font-bold">Admin</h2>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input name="email" value={credentials.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username" onChange={onChange} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input value={credentials.password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************"  onChange={onChange}/>
      {/* <label onClick={toggelButtonShowAndHide} className=" cursor-pointer click_show_hide">Show</label> */}
      <label className={`ml-2 text-sm font-medium text-gray-${props.mode==='light'?900:100} dark:text-gray-900 cursor-pointer`} id='click_show_hide'  onClick={toggelButtonShowAndHide}>Show</label>
      
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
</div>
    </>
  )
}
