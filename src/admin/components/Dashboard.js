import React, {useContext ,useEffect ,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import adminContext from "../context/services/adminContext";
import ModalFormsCustomer from './items/ModalFormsCustomer'

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
            <div className="mx-2 w-4/4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
          <div className="flex">
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
          <div className="flex">
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
