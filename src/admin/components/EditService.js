import React, { useContext, useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import adminContext from "../context/services/adminContext";
import ServiceItems from "./items/ServiceItems";
import { Helmet } from "react-helmet";




function EditService(props) {
  props.handleUserLogin();

  const navication=useNavigate();
  const adminLoggout = () => {
    localStorage.removeItem('token');
    props.showAlert('Loggout succssfully','green');
    navication('/admin');
  }


  const context=useContext(adminContext);
  const {service ,updateService,addService,fetchService,deleteService}=context;
  useEffect( () => {
     fetchService();
    // eslint-disable-next-line
  }, []);
  
  // Searching any Elements and item for service object / --------------------------------/
  const [searchResults, setSearchResults] = useState([]);     

      useEffect(() => {
       setSearchResults(service) ;
       // eslint-disable-next-line
      }, [service]);



  
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    const results = Object.values(service).filter(obj => obj.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if(results.length === 0){
      props.showAlert("Not Found","red")
    }else{

      setSearchResults(results);
    }
    
    
  };


    // Adding Serivce on database create documention  logic here /-----------------------------------------/
    const [isOpenAding, setIsOpenAding] = useState(false);
    const [add,setAdd] = useState({title:"", description: "", tag: "", type:"" ,image_url:''});
    
    
    const togglePopupAddingService = () => {
      setAdd({title:"",description:"",tag:"",type:"",image_url:""})
      setIsOpenAding(!isOpenAding);
     
    };  
  
  
    const allOnChange = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value });
  
    };
    
    
    const CreateServiceContent  = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      // Reset the form data
      console.log("ADD Service")
        addService(add.title,add.description,add.tag,add.type,add.image_url);
        setAdd({title:"",description:"",tag:"",type:"",image_url:""})
      // Close the popup
      togglePopupAddingService();
    };
    
//-------------------------------------------------------------------------------------------------------//
    // Edit a Service Content Updating allOnChange behaviour 
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({id:'',title: '', description: '', tag: '', type:'' ,image:''});
  
  const [titleDisplayHerder, setTitleDisplayHerder] = useState('')

  const update_Service = (currentSerive) => {
    togglePopup();
    setTitleDisplayHerder(currentSerive.title);
    setFormData({id: currentSerive._id})
}
  const togglePopup = () => {
    setFormData({id:'',title: '', description: '', tag: '', type:'' ,image:''});
    setIsOpen(!isOpen);
   
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const editServiceOnSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Reset the form data
   updateService(formData.id,formData.title,formData.description,formData.tag,formData.type,formData.image);
   setFormData({id:'',title: '', description: '', tag: '', type:'' ,image:''});
    // Close the popup
    togglePopup();
  };
 

 

  return (
    <> 
    <Helmet >
      
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SBSAdmin-Edit Service </title>
      {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
      <meta name="description" content=" Edit Servie page Fast & reliable repair service for all needs. Efficiently diagnose & fix issues. Plumbing, structural repairs & extra fast service." />
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
    <div className="bg-gray-100 sm:scale-100 " >
        <div className="bg-white shadow">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-2xl font-semibold text-center">Edit Service</h1>
          </div>
        </div>
        <div className="container mx-auto py-4 px-6  overflow-auto">
          <div className="flex">
            <aside className="2xl:w-64 overflow-auto md:w-26 sm:w-26">
              <nav className="bg-gray-800 text-white h-screen">
                <ul className="p-4">
                  <li className="mb-2">
                    <Link
                      to="/admin/dashboard"
                      className="block py-2 px-4 rounded-md hover:bg-gray-700"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/admin/editblogs"
                      className="block py-2 px-4 rounded-md hover:bg-gray-700"
                    >
                      Edit Blog
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/admin/editservice"
                      className="block py-2 px-4 rounded-md hover:bg-gray-700"
                    >
                      Edit Service
                    </Link>
                  </li>
                  <li className="mb-2">
            <button onClick={adminLoggout} className="block py-2 px-4 rounded-md hover:bg-gray-700"> Loggout</button>
          </li>
                </ul>
              </nav>
            </aside>
            <main className=" bg-white flex-1 overflow-auto shadow ml-6  rounded-md  p-6   ">
              <div className="">
              <div className="my-6" >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Type here... title" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} min={4} required/>

                  <button  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"onClick={handleSearch} > Search </button>
                </div>
              </div>
              <div className="flex justify-between">
              
              <i className="fa fa-refresh cursor-pointer" onClick={()=>fetchService() }></i>
                <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  onClick={togglePopupAddingService}> Add Service</button>
           
              </div>
            <div className="overflow-y-auto h-screen my-5 sticky shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Service Type
                          <div className="cursor-pointer" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 ml-1"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                        Description
                          <div className="cursor-pointer" >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 ml-1"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Tag
                          <div className="cursor-pointer" >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 ml-1"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    { Array.isArray(searchResults) && searchResults.map((item) => {
                      return (
                        <ServiceItems key={item._id} item={item} update_Service={update_Service} deleteService={deleteService} />
                      );
                    })}
                      
                  </tbody>
                </table>
              </div>
              </div>

            </main>
          </div>
        </div>
      </div>
      <>
    {/* // Add new  Service  Contents add database  */}
    <div  className="relative">
      {isOpenAding && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Add Service</h2>
              <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={togglePopupAddingService}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={CreateServiceContent}>
              <div className="mb-4">
                <label htmlFor="title1" className="block text-gray-700 font-bold mb-2">
                  Title*
                </label>
                <input type="text" id="title1" name="title"   className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={allOnChange} value={add.title} minLength={5} required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="tag" className="block text-gray-700 font-bold mb-2">
                  Tag*
                </label>
                <input type="text" id="tag" name="tag"  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={allOnChange} value={add.tag} minLength={5} required
                />
              </div>
              <div className="mb-4">
                
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Image URL*</label>
              <div className="w-64">
              <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" name="image_url" placeholder="Enter Image URL" value={add.image_url} onChange={allOnChange}/>
                 </div>

              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                 Service Type*
                </label>
                <select type="text" id="type" name="type" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={add.type} onChange={allOnChange} required>
                  <option value="">Select </option>
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                  <option value="ExtraFast">ExtraFast</option>
                  <option value="RepairingWork">RepairingWork</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description* (<span className="text-blue-400">work details</span>)
                </label>
                <textarea id="description" name="description" className="border border-gray-400 rounded-md py-2 px-3 w-full h-32 resize-none focus:outline-none focus:ring-2  focus:ring-blue-500"  onChange={allOnChange} value={add.description} minLength={10} required ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={add.title.length<5 || add.description.length<5}  >Add Service</button>
               <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={togglePopupAddingService}  > Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
      <>
    {/* // Updating fill this from the service page */}
    <div  className="relative">
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Edit Service</h2>
              <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={togglePopup}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={editServiceOnSubmit}>
            <h2 className="text-2xl font-semibold text-blue-400 text-center">{titleDisplayHerder.substring(0,25)}</h2>
              <div className="mb-4">
                <label htmlFor="title1" className="block text-gray-700 font-bold mb-2">
                  Title
                </label>
                <input type="text" id="title" name="title"   className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} value={formData.title} minLength={5} required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="tag" className="block text-gray-700 font-bold mb-2">
                  Tag
                </label>
                <input type="text" id="tag" name="tag"  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} value={formData.tag} minLength={5} required
                />
              </div>
              <div className="w-64">
                <label htmlFor="image_url " className=" text-gray-700 font-bold mb-2">Image URL</label>
               <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter Image URL" id="image_url" name="image" type="url"  onChange={handleChange} value={formData.image} required/>
              </div>
                    <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                 Service Type
                </label>
                <select type="text" id="type" name="type" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  onChange={handleChange} value={formData.type} minLength={5} required >
                  <option value="">Select </option>
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                  <option value="ExtraFast">ExtraFast</option>
                  <option value="RepairingWork">RepairingWork</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea id="description" name="description" className="border border-gray-400 rounded-md py-2 px-3 w-full h-32 resize-none focus:outline-none focus:ring-2  focus:ring-blue-500"  onChange={handleChange} value={formData.description} minLength={10} required ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"   >Update Service</button>
               <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={togglePopup}  > Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
     
    </>
  );
}

export default EditService;
