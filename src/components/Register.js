import React ,{useState} from 'react'
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
  )
}
