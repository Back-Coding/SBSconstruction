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
import { Helmet } from 'react-helmet';


const host="http://localhost:5000"

function App()  {
  const getCompanyName = 'SBSContraction And Interior'; // Example company name
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
    <NoteState host={host}>
      <BlogProvider host={host}>
    <BrowserRouter>
    <Helmet>

    <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SBSContraction And Interior</title>
  {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
  <meta name="description" content="Our interior design website, your ultimate source for inspiring and practical interior design ideas. Explore our galleries featuring stunning living rooms, bedrooms, kitchens, bathrooms, and more. Discover expert tips on space planning, organization, and the latest design trends. Find top designers, architects, and contractors in our directory. Join our vibrant community and share your projects. Transform your house into a beautiful, functional, and personalized home with our interior design expertise" />
  <meta name="keywords" content="Construction, Interior Repair Work, Extra Fast 24/7" />
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

        <Route path="/admin"  element={<AdminLogin mode={mode} showAlert={showAlert} host={host} handleUserLogin={handleUserLogin} handleLogout={handleLogout} />} /> 
        <Route path="/admin/forgottenpassword" element={<AdminForgottenPassword mode={mode} host={host} showAlert={showAlert}  />} />
        <Route  path="/reset-password-admin/:token" element={<AdminResetPassword mode={mode} host={host} showAlert={showAlert}  />} />
        {isAdminLoggedIn ? (
          <>
        
          <Route path="/admin/dashboard" element={<Dashboard mode={mode} toggleMode={toggleMode}  handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/editblogs" element={<EditBlogs mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/editservice" element={<EditService mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
          <Route path="/admin/table" element={<AllDataWork mode={mode} handleUserLogin={handleUserLogin} showAlert={showAlert} />} />
        </>         
        ):null }
      </Routes>
      <Footer companyname={getCompanyName} companylogo={companylogo} mode={mode}/>
    </BrowserRouter>
    </BlogProvider>
    </NoteState>
  

  );
}

export default App;


