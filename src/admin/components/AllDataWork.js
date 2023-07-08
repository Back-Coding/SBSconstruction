import React,{useState,useContext, useEffect} from 'react'
import adminContext from "../context/services/adminContext";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AllDataWork(props) {
    props.handleUserLogin();  
    const context= useContext(adminContext);
  const {workForms,fetchFomrData,deleteOneDataFroms}=context
  useEffect(()=>{
    fetchFomrData();
    // eslint-disable-next-line
  },[])

    // Searching any Elements and item for service object / --------------------------------/
    const [searchResults, setSearchResults] = useState([]);     

    useEffect(() => {
     setSearchResults(workForms) ;
     // eslint-disable-next-line
    }, [workForms]);


  // This Searching bar search
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    if(searchQuery===''){
      props.showAlert("Search box in type")
    }else{
    const results = Object.values(workForms).filter(obj => obj.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if(results.length === 0){
      props.showAlert("Not Found","red")
    }else{

      setSearchResults(results);
    }
  }
  }
    
  return (
  <>
   <Helmet>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SBS-All Work Data Show </title>
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
  <section className="text-gray-600 body-font mb-96 mt-10">
    <div className="flex justify-around text-blue-800 text-lg"> <Link to="/admin/dashboard" >  <i className="fa fa-arrow-left"></i></Link>
     <div className="flex items-center">
      <input
        type="text"
        placeholder="Search.. names"
        className="py-2 px-3 rounded-l-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button  className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-r-md text-white font-semibold" onClick={handleSearch}>
        Search 
      </button>
    </div>  <i className="fa fa-refresh cursor-pointer" onClick={fetchFomrData} ></i></div>
  <div className="container px-5 py-10 mb-3 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left  table-auto text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
      <th scope="col"   className="px-2 py-3 "> Delete </th>     
      <th scope="col"   className="px-2 py-3 ">Scrive Type </th>     
        <th scope="col" className="px-14 py-3">Data</th>
       <th scope="col"  className="px-14 py-3 ">Name </th>     
        <th scope="col" className="px-14 py-3">Eamil </th>  
        <th scope="col" className="px-14 py-3">Phone No.</th>   
         <th scope="col"className="px-14 py-3">Pincode</th>  
        <th scope="col" className="px-14 py-3">Address </th>     
        <th scope="col" className="px-14 py-3">City  </th> 
        <th scope="col" className="px-14 py-3">State  </th>  
        <th scope="col" className="px-14 py-3">Service Work </th>
        </tr>
        </thead>
        <tbody>
          {Array.isArray(searchResults) && searchResults.map((item)=>{
             const dateObj = new Date(item.date);
             const year = dateObj.getFullYear();
             const month = dateObj.getMonth() + 1; // Add 1 to month to match the Date object format
             const day = dateObj.getDate();
             const hours = dateObj.getHours();
             const minutes = dateObj.getMinutes();
             const seconds = dateObj.getSeconds();
            return(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"  key={item._id}>
                <td className="px-2"> 
                 <div onClick={()=>deleteOneDataFroms(item._id)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 "> Delete</div>
                  </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {item.field}</th>
            <td className="px-2 text-black text-base"><p >{`${day}-${month}-${year} `} </p><p> {`${hours}:${minutes}:${seconds}`}</p></td>
            <td className="px-2 text-center"> {item.name} </td>
            <td className="px-2 "> {item.email} </td>
            <td className="px-2 text-center"> {item.phoneno} </td>
            <td className="px-2 text-center"> {item.pincode} </td>
            <td className="px-2"> {item.address} </td>
            <td className="px-2 text-center"> {item.city} </td>
            <td className="px-2"> {item.state} </td>
            <td className="px-2 h-8"> {item.description} </td>
        </tr>
          )})}
        </tbody>
    </table>
</div>

    </div>
  </div>
</section>
  </>
  )
}

export default AllDataWork;