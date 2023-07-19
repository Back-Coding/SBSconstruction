import React, { useState } from 'react'
import { Link ,useLocation, useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';



const drackIcon = <> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd">
  </path>
</svg>
</>
const lightIcon = <> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
</>


    


export default function Navbar(props) {
  const location = useLocation();
  const navgation=useNavigate();


  

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
  const logout = () => {
    localStorage.removeItem('token');
    props.showAlert(" Logout succssfully ","green");
    navgation('/login');

  }

  return (
    <>
      <header className={`text-gray-100 body-font bg-blue-${props.mode === 'light' ? 700 : 950}`} >
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0 cursor-pointer">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
            <span className="ml-3 text-xl">{props.companyname}</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <Link to="/" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 
            ${location.pathname==="/"?"bg-blue-500":""}`}>Home</Link>
            <Link to="/service" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 ${location.pathname==="/service"?"bg-blue-500":""}`}>Service</Link>
            <Link to="/blog" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 ${location.pathname==="/blog"?"bg-blue-500":""} `}>Blog</Link>

            {/*The below comment line not devlop woring on the page  */}
            {/* <Link to="/social" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 ${location.pathname==="/social"?"bg-blue-500":""} `}>Social</Link> */}
    
            <Link to="/contact" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 ${location.pathname==="/contact"?"bg-blue-500":""}`}>Contact</Link>      
            <Link to="/about" className={`mr-5 hover:text-gray-300 rounded 3px; cursor-pointer hover:bg-blue-500 p-2 ${location.pathname==="/about"?"bg-blue-500":""}`}>About</Link>
          </nav>
          {props.searchBar ? <form action="">
            <label className="relative block mr-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-900" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="sr-only">Search</span>
              <input type="text" name="search" className="block bg-blue-500 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." />
            </label>
          </form> : null}
        {!localStorage.getItem('token')? <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0 ${location.pathname==="/login"?"bg-blue-500 ":" "}`}><Link to="/login">Login</Link></button>:
         <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`inline-flex justify-center w-full rounded-md border  shadow-sm px-4 py-2 bg-blue-${props.mode === 'light' ? 700 : 950} text-sm font-medium text-gray-100 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          id="dropdown-button"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="flase"
          onClick={toggleDropdown} >
          Profile
        </button>
      </div>

      {isOpen && (
        <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-${props.mode === 'light' ? 100 : 900} ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button" tabIndex="-1`}>
          <div className="py-1" role="none">
            <div onClick={logout} className={`block px-4 py-2  text-sm text-gray-${props.mode==='light'?900:100} hover:bg-gray-300 hover:text-gray-900`} role="menuitem" tabIndex="-1" id="dropdown-item-3">Loggout</div>
          </div>
        </div>
      )}
    </div >
       }
          <div className="cursor-pointer mx-3 " onClick={props.toggleMode}>{props.mode === 'light' ? drackIcon : lightIcon} </div>
        </div>
      </header>
    </>
  )
}

Navbar.defaultProps = {
  title: "Company name",
  searchBar: true
}

Navbar.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}

