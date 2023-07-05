import React,{useEffect,useState}from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Navbar from'./components/Navbar';
import HomeContainer from './pages/HomeContainer';
import Footer from './components/Footer';
import Service from './pages/Service';
import Blog from './pages/blogs/Blogs';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import ForgottenPassword from './components/ForgottenPassword';
import AdminForgottenPassword from './admin/components/AdminForgottenPassword';
import companylogo from './img/company_logo.png'
// import Social from './pages/Social';
import About from './pages/About';
import Alert from './components/Alert';
import Dashboard from './admin/components/Dashboard';
import EditBlogs from './admin/components/EditBlogs';
import EditService from './admin/components/EditService';
import AdminLogin from './admin/AdminLogin';
import NoteState from './admin/context/services/adminState';
import AllDataWork from './admin/components/AllDataWork'
import ResetPassword from './components/ResetPassword'
import AdminResetPassword from './admin/components/AdminForgottenPassword'
import { BlogProvider } from './admin/context/blog/BlogContext';
import BlogPost from './pages/blogs/BlogPost'
import axios from 'axios'


const host="http://localhost:5000"

function App()  {
  const getCompanyName = 'SBSCAI'; // Example company name
  // const companylogo = 'company-logo.png'; // Example company log

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // Example state for user login status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Example state for admin login status
  const [mode, setMode] = useState("light"); //drak and light
  const [alert, setAlert] = useState(null); // show alert

  const handleUserLogin = () => {
    // Implement your user login logic here
    setIsUserLoggedIn(false);
  };

  const handleAdminLogin = () => {
    // Implement your admin login logic here
    setIsAdminLoggedIn(true);
  };

  const handleLogout = (userboolen,amdinboolen) => {
    // Implement your logout logic here
    setIsUserLoggedIn(userboolen);
    setIsAdminLoggedIn(amdinboolen);
  };

  
  const toggleMode = () => {
    // Function to toggle the mode (e.g., dark mode or light mode)
    if (mode === "dark") {
        setMode("light");
        document.body.style.background = "white";
      } else {
        setMode("dark");
        document.body.style.background = "black";
      }
    

  };

  const showAlert = (message,color) => {
    // Function to show an alert
    setAlert({
        msg: message,
        color: color,
      });
      setTimeout(() => {
        setAlert(null);
        // eslint-disable-next-line
      }, 4000);
  };
  
   //The Fetch backend in Service Pages a rendring data 
  // store data show frontend 
  
  //The Fetch backend in Service Pages a rendring data 
  // store data show frontend 
  const [interior, setInterior] = useState([])
  const [exterior, setExterior] = useState([])
  const [repairingwork, setRepairingwork] = useState([])
  const [extrafast, setExtrafast] = useState([]);
  const [blogData, setBlogsData] = useState([]);


  const fetchDataInterior = async () => {
    try {
      const response = await fetch(`${host}/api/service/data/interior`);
      const jsonData = await response.json();
      setInterior(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchDataExterior = async () => {
    try {
      const response = await fetch(`${host}/api/service/data/exterior`);
      const jsonData = await response.json();
      setExterior(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchDataRepairingWork = async () => {
    try {
      const response = await fetch(`${host}/api/service/data/repairingwork`);
      const jsonData = await response.json();
      setRepairingwork(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchDataExtraFast = async () => {
    try {
      const response = await fetch(`${host}/api/service/data/extrafast`);
      const jsonData = await response.json();
      setExtrafast(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  // fetch Data in Blogs 
  const fetchDataBlogs=() =>{
    axios.get(`${host}/admin/api/fetchblogs`).then(response => {
      // Update the blogPosts state with the fetched data
      setBlogsData(response.data);
    })
    .catch(error => {
      console.error('Error fetching blog data:', error);
    });
  }
  // The Fetch Blogs Details 

  useEffect(() => {
    fetchDataBlogs();
    fetchDataInterior();
    fetchDataExterior();
    fetchDataRepairingWork();
    fetchDataExtraFast();
        // eslint-disable-next-line 
  },[]);
  


  return (
    <NoteState>
      <BlogProvider>
    <BrowserRouter>
      {isUserLoggedIn ? (
        <Navbar companyname={getCompanyName} searchBar={false} toggleMode={toggleMode}  mode={mode} showAlert={showAlert}  />
      ) : null}
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<HomeContainer mode={mode} companyname={getCompanyName} host={host} showAlert={showAlert}  
        interior={interior} repairingwork={repairingwork} extrafast={extrafast} />} />
        
        <Route path="/service" element={<Service mode={mode} host={host} showAlert={showAlert} interior={interior} exterior={exterior} repairingwork={repairingwork} extrafast={extrafast} />}/>
        <Route path="/blog"  element={<Blog blog="Blogs" blogData={blogData}  mode={mode}/> } /> 
        <Route path="/blog/blogpost"  element={<BlogPost  mode={mode}/> } /> 

        <Route path="/contact" element={<Contact companylogo={companylogo} mode={mode} />} />
        <Route path="/login" element={<Login mode={mode} host={host} showAlert={showAlert} />} />
        <Route path="/register" element={<Register mode={mode} showAlert={showAlert} />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword mode={mode} host={host} showAlert={showAlert}  />} />
        <Route path="/about" element={<About companyname={getCompanyName} mode={mode} />} />
        <Route  path="/reset-password/:token" element={<ResetPassword mode={mode} host={host} showAlert={showAlert}  />} />
        {/* <Route path="/social"  element={<Social mode={mode}/>} /> */} 
        {!isUserLoggedIn && (
          // Ths contenct ADN behaviour is Login required  show Content
          <>
      
        </>
        )}
          {/* Admin site below and desing part working on */}

        <Route path="/admin"  element={<AdminLogin mode={mode} showAlert={showAlert}  handleUserLogin={handleUserLogin} handleLogout={handleLogout} />} /> 
        <Route path="/admin/forgottenpassword" element={<AdminForgottenPassword mode={mode} host={host} showAlert={showAlert}  />} />
        <Route  path="/reset-password-admin/:token" element={<AdminResetPassword mode={mode} host={host} showAlert={showAlert}  />} />
        {isAdminLoggedIn ? (
          <>
        
          <Route path="/admin/dashboard" element={<Dashboard mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/editblogs" element={<EditBlogs mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/editservice" element={<EditService mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/table" element={<AllDataWork mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
        </>         
        ):null }
      </Routes>
      <Footer
        companyname={getCompanyName}
        companylogo={companylogo}
        mode={mode}
      />
    </BrowserRouter>
    </BlogProvider>
    </NoteState>
  

  );
}

export default App;


