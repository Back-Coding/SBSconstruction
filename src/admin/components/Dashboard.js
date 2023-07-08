import React, {useContext ,useEffect ,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import adminContext from "../context/services/adminContext";
import ModalFormsCustomer from './items/ModalFormsCustomer'
import { Helmet } from 'react-helmet';

export default function Dashboard(props) {
    props.handleUserLogin();

    const navication=useNavigate();
    const context = useContext(adminContext);
    const {allUser,fetchAllUser}=context;
    
    useEffect( () => {
      
      fetchAllUser();
       // eslint-disable-next-line
     }, []);

    const adminLoggout = () => {
    
      localStorage.removeItem('token');
      props.showAlert('Loggout succssfully','green');
      navication('/admin');
    }

    // This Path -->./item/ModalFormsCustomer The Modal is open and close the pop in screen 
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModalFormsCustomer = () => {
      setModalOpen(true);
    };
    // This Path --> ./item/ModalFormsCustomer The Modal is open and close the pop in screen 
    const  handleCloseModalFormsCustomer = () => {
      setModalOpen(false);
    };
   
return(
 <>

  <Helmet >

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SBSAdmin-Dashboard</title>
  {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
  <meta name="description" content="Admin Control all Penal  ." />
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

  {/* <!-- Canonical URL --> */}
  <link rel="canonical" href="https://sbscai.com" />
  </Helmet>
<div className="bg-gray-100">
  <div className="bg-white shadow">
    <div className="container mx-auto py-4 px-6">
      <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
    </div>
  </div>

  <div className="container mx-auto py-2 px-0">
    <div className="flex">
    <aside className="bg-gray-800 max-w-2xl scrollbar-hide">
      <nav className=" text-white h-screen ">
        <ul className="p-4">
          <li className="mb-2">
            <Link to="/admin/dashboard" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
              <Link to="/admin/editblogs" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Edit Blog
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/editservice" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Edit Service
            </Link>
          </li>
          <li className="mb-2">
            <button onClick={adminLoggout} className="block py-2 px-4 rounded-md hover:bg-gray-700"> Loggout</button>
          </li>
        </ul>
      </nav>
    </aside>
    <main className='bg-white  rounded-md shadow  w-fill-available w-full  ml-6 p-6'>
        <div className="flex  ">
            <div className="mx-2 w-3/4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"> User Register</h5>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className=" mx-10 text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg>
              </div>
              <div className="flex items-center justify-between mb-4">                 
              <i className="fa fa-refresh mb-5 cursor-pointer" onClick={fetchAllUser} ></i>
                  <div className="p-1 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{allUser.length}</h2>
                    <p className="leading-relaxed">Users </p>
                </div>
            </div>
            <hr className='border-rose-700 border-2 border-solid' />
            <div className="flow-root h-screen overflow-y-auto">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700   ">
                      {allUser && allUser.map((item) => {
                            
                            const dateObj = new Date(item.date);
                            const year = dateObj.getFullYear();
                            const month = dateObj.getMonth() ;
                            const day = dateObj.getDate();
                            const hours = dateObj.getHours();
                            const minutes = dateObj.getMinutes();
                            const seconds = dateObj.getSeconds();
                        return (
                          <li className="py-3 sm:py-4" key={item._id}>
                            <div className="flex items-center space-x-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400 overflow-x-auto">
                                  {item.email}
                                </p>
                              </div>
                              <div >
                              <p>{`${hours}:${minutes}:${seconds}`}</p>
                              <p>{`${year}-${month}-${day}`}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                                          
                  </ul>
            </div>
          </div>
        

         <div className="flex "> 
          <div className="mx-4">
            <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Show Any Type Woking on this slide </h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise order.</p>
                <div onClick={handleOpenModalFormsCustomer} className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
                </div>
            </div>
          </div>
          <div className="">
            <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customer Forms Show All Data</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">All Data For Forms </p>
                <Link to="/admin/table" className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                </div>
            </div>
          </div>
         </div>
          </div>
      
        {modalOpen && (
        <ModalFormsCustomer isOpen={modalOpen} onClose={handleCloseModalFormsCustomer} />
      )}
    </main>

  </div>
  </div>

</div>
</>
)};
