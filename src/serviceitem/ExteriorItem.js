import React ,{useState}from 'react'


export default function Exterior(props) {
  
    
  const [isOpenPop, setIsOpenPop] = useState(false)
  const [isOpenPopnextForm, setIsOpenPopnextForm] = useState(false)
  const [data, setData] = useState({name:'',email:'',phoneno:'',pincode:'',address:'', description:'',city:'',state:'',field:''})
  
const addContect = async (name,email,phoneno,pincode,address,description,city,state,field) => {

  const response = await fetch(`${props.host}/api/service/u/usercontectforms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name,email,phoneno,pincode,address,description ,city,state,field})
  });

  // const note = await response.json();
  

  if(response.ok){
    props.showAlert("Thank you contect vist website","green")
  }else{
    props.showAlert("Enter again fil the form","red")
  }
}


const change = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });

};
const nextPop = (event) => {
  setIsOpenPopnextForm(!isOpenPopnextForm);
};
const nextForm=(e)=>{
  setIsOpenPopnextForm(!isOpenPopnextForm);
  setIsOpenPop(!isOpenPop);
}
  // working on claer mind
  const openAndClosePop2 = (event) => {
    setData({name:'',email:'',phoneno:'',pincode:'',address:'',description:'',city:'',state:'',field:''})  
      setIsOpenPop(!isOpenPop);
  };
  const userWorkFormSubmit = (e) => {
    e.preventDefault();
    data.field=props.item.type;
    // Perform form submission logic here
    // Reset the form data
    if(data.phoneno.length!==10){
      props.showAlert("Plase ckeck phone no.")
    }else if(data.pincode.length!==6){
      
      props.showAlert("Plase ckeck Pincode")
    }else{
    

    addContect(data.name,data.email,data.phoneno,data.pincode,data.address,data.description,data.city,data.state,data.field);
    setData({name:'',email:'',phoneno:'',pincode:'',address:'',description:'',city:'',state:'',field:''})  
    openAndClosePop2();
    // Close the popup
    }
  }
  return (
    <>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6" >
        <div className="rounded-lg h-64 overflow-hidden  cursor-pointer" onClick={nextPop} >
          {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"   /> */}
          <img alt="content" className="object-cover object-center h-full w-full" src={`${props.item.image}`}   />
        
        </div>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-2">{props.item.type}</h2>
        <h2 className={`text-xl font-medium title-font text-gray-${props.mode==='light'?900:100}  mt-5`}>{props.item.title}</h2>
        <p className={`text-base leading-relaxed text-gray-${props.mode==='light'?900:100} mt-2`}>{props.item.description.substring(0,300)}</p>
        <div onClick={nextPop} className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">Contect work
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>

 <>     
    {/* The click box is next shwo work details   */}
   {isOpenPopnextForm &&<div id="defaultModal" tabIndex="-1" aria-hidden="true" className=" fixed top-44  md:mb-4 left-0 right-0 z-50 flex  justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(75%-1rem)] max-h-full">
    <div className="relative  max-w-2xl max-h-full">
        <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700`}>
    
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Service Details                      
                </h3>
                <button type="button" onClick={nextPop} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-0 ">
              <div className="mx-5 my-3 flex"> 
               Service Type:<div className="mx-3"><span className="text-red-900 font-bold text-xl">{props.item.type}</span></div>
              </div>
              <div className="mx-5 my-3 flex"> 
              Work name :<div className="mx-3"><span className="text-blue-900 font-semibold text-lg">{props.item.title}</span></div>
              </div>
              <div className="mx-5 my-3 flex"> 
              Work details :<div className="mx-2"><div className="text-blue-900 font-semibold text-lg">{props.item.description}</div></div>
              </div>
              <div className="mx-5 my-3 flex"> 
              Tag :<div className="ml-8"><span className="text-gray-900 font-semibold text-lg">{props.item.tag}</span></div>
              </div>
  


            </div>
              <div className="flex items-center justify-center p-6 md:space-x-1  border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button  type="button" onClick={nextPop} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close <i className="fa fa-times"></i> </button>
                      <button  type="button" onClick={nextForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
             </div>
     
              </div>
          </div>
      </div>}
   </>

 <>     
    {/* The Forms is last and submit */}
   {isOpenPop &&<div id="defaultModal" tabIndex="-1" aria-hidden="true" className=" fixed top-44 md:mb-4 left-0 right-0 z-50 flex  justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(75%-1rem)] max-h-full">
    <div className="relative  max-w-2xl max-h-full">
        <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700`}>
        <form className="w-full max-w-lg" onSubmit={userWorkFormSubmit}>
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service Contect
                </h3>
                <button type="button" onClick={openAndClosePop2} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-0">
    
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Full Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe"  name="name" value={data.name} onChange={change} minLength={5} required/>
              
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                  Phone No.
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="number" placeholder="1234567890" name="phoneno" value={data.phoneno} minLength={10} onChange={change} required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-emails">
                Email
                </label>
                <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-eamils" placeholder="exmple@gmail.com"  name="email" value={data.email} onChange={change} required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
              Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"  type="text" placeholder="your address"  name="address" value={data.address} minLength={5} onChange={change} required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="city" name="city" value={data.city} onChange={change} minLength={4} required/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" type="text" placeholder="State" name="state" value={data.state} onChange={change} minLength={4} required/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        pin code
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="90210" name="pincode" value={data.pincode} onChange={change} minLength={6} required/>
    </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-dec">
            Sarvice descriptions
            </label>
            <textarea className="appearance-none block w-full xl:h-14  md:h-3 bg-gray-200  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-dec"  type="text" placeholder="write here "  name="description" value={data.description} onChange={change} minLength={5} style={{resize:"none"}} required/>
          </div>
        </div>
        </div>
              <div className="flex items-center justify-center p-6 md:space-x-1  border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button  type="button" onClick={openAndClosePop2} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close <i className="fa fa-times"></i> </button>
                      <button  type="button" onClick={userWorkFormSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={ data.name===""|| data.email==="" || data.address==="" || data.city==="" || data.state==="" }>Submit</button>
             </div>
            </form>
              </div>
          </div>
</div>}


 </>
    </>
  )
}
