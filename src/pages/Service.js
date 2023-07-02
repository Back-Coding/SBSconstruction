import React ,{useEffect, useState}from 'react' ;
import { Link } from 'react-router-dom'
import InteriorItem from '../serviceitem/InteriorItem'
import ExtraFastServiseItem from '../serviceitem/ExtraFastServiceItem';
import RepairingWorkItem from '../serviceitem/RepairingWorkItem';
import ExteriorItem from '../serviceitem/ExteriorItem';


 


export default function Service(props) {

  const {interior,exterior,repairingwork,extrafast}=props;
 
 


  

const interiorservice=()=>{
  let interior=document.getElementById('idineterior');
  let exterior=document.getElementById('idexterior');
  let idrepairing_work=document.getElementById('idrepairing_work');
  let idextra_fast=document.getElementById('idextra_fast');
  let buttoninterior=document.getElementsByClassName("interior");
  let buttonexterior=document.getElementsByClassName("exterior");
  let buttonrepairing_work=document.getElementsByClassName("repairing_work");
  let buttonextrafast=document.getElementsByClassName("extrafast");
  
  // interior.style.display='inline';
  interior.style.display='block';
  exterior.style.display='none'
  idrepairing_work.style.display='none'
  idextra_fast.style.display='none'
  buttoninterior[0].style.color="rgb(96 165 250)";
  if(props.mode==='light'){
    buttonexterior[0].style.color="black";
    buttonrepairing_work[0].style.color="black";
    buttonextrafast[0].style.color="black";
  }else{
    buttonexterior[0].style.color="white";
    buttonrepairing_work[0].style.color="white";
    buttonextrafast[0].style.color="white";
  }
  
  
  
}
const exteriorservice=()=>{
  let interior=document.getElementById('idineterior');
  let exterior=document.getElementById('idexterior');
  let idrepairing_work=document.getElementById('idrepairing_work');
  let idextra_fast=document.getElementById('idextra_fast');
  let buttoninterior=document.getElementsByClassName("interior");
  let buttonexterior=document.getElementsByClassName("exterior");
  let buttonrepairing_work=document.getElementsByClassName("repairing_work");
  let buttonextrafast=document.getElementsByClassName("extrafast");
  
  interior.style.display="none";
  exterior.style.display="block";
  idrepairing_work.style.display="none";
  idextra_fast.style.display="none";
  buttonexterior[0].style.color="rgb(96 165 250)";
  if(props.mode==='light'){
    buttoninterior[0].style.color="black";
    buttonrepairing_work[0].style.color="black";
    buttonextrafast[0].style.color="black";
  }else{
    buttoninterior[0].style.color="white";
    buttonrepairing_work[0].style.color="white";
    buttonextrafast[0].style.color="white";

  }
  
  
}
const repairingWorkService=()=>{
  let interior=document.getElementById('idineterior');
  let exterior=document.getElementById('idexterior');
  let idrepairing_work=document.getElementById('idrepairing_work');
  let idextra_fast=document.getElementById('idextra_fast');
  let buttoninterior=document.getElementsByClassName("interior");
  let buttonexterior=document.getElementsByClassName("exterior");
  let buttonrepairing_work=document.getElementsByClassName("repairing_work");
  let buttonextrafast=document.getElementsByClassName("extrafast");
  
  interior.style.display="none";
  exterior.style.display="none";
  idextra_fast.style.display="none";
  idrepairing_work.style.display="block";
  buttonrepairing_work[0].style.color="rgb(96 165 250)";
  if(props.mode==='light'){
    buttoninterior[0].style.color="black";
    buttonexterior[0].style.color="black";
    buttonextrafast[0].style.color="black";
  }else{
    buttoninterior[0].style.color="white";
    buttonexterior[0].style.color="white";
    buttonextrafast[0].style.color="white";
  }
}
const extraFastServise = () => {
  let interior=document.getElementById('idineterior');
  let exterior=document.getElementById('idexterior');
  let idrepairing_work=document.getElementById('idrepairing_work');
  let idextra_fast=document.getElementById('idextra_fast');
  let buttoninterior=document.getElementsByClassName("interior");
  let buttonexterior=document.getElementsByClassName("exterior");
  let buttonrepairing_work=document.getElementsByClassName("repairing_work");
  let buttonextrafast=document.getElementsByClassName("extrafast");
  
  // interior.style.display='inline';
  interior.style.display='none';
  exterior.style.display='none'
  idrepairing_work.style.display='none'
  idextra_fast.style.display='block'
  buttonextrafast[0].style.color="rgb(96 165 250)";
  if(props.mode==='light'){
    buttoninterior[0].style.color="black";
    buttonexterior[0].style.color="black";
    buttonrepairing_work[0].style.color="black";
    
  }else{
    buttoninterior[0].style.color="white";
    buttonexterior[0].style.color="white";
    buttonrepairing_work[0].style.color="white";

  }
}
  return (
    <>
    <header className={`text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-32 md:border-gray-900	flex flex-wrap items-center text-base justify-center font-bold">
      <button  className="mr-5 hover:text-blue-400 hover:cursor-pointer  interior text-blue-400" onClick={interiorservice}>Interior</button>
      <button  className="mr-5 hover:text-blue-400 hover:cursor-pointer exterior" onClick={exteriorservice}>Exterior</button>
       <button  className="mr-5 hover:text-blue-400 hover:cursor-pointer repairing_work" onClick={repairingWorkService}>Repairing Work</button>
       <button  className="mr-5 hover:text-blue-400 hover:cursor-pointer extrafast" onClick={extraFastServise}>Extra Fast</button> 
      
    </nav>
  </div>
</header>
<section className="text-gray-600 body-font " id='idineterior'>
  <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100}  my-10 text-center`}> Interior Servise</h2>
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      

      {/* * The is class a call */}
      {interior.map((item) => {
          return (
            <InteriorItem key={item._id} item={item} host={props.host} showAlert={props.showAlert} mode={props.mode} />
          );
        })}

     </div>
  </div>
</section>
<section className="text-gray-600 body-font hidden" id='idexterior'>
    <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100} my-10 text-center`}>Exterior Servise</h2>
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      
      {/** The is functions a call */}
       {exterior.map((item) => {
          return (
            <ExteriorItem key={item._id} item={item} mode={props.mode}  showAlert={props.showAlert} host={props.host}/>
          );
        })}

       </div>
    </div>
  </section>
  <section className="text-gray-600 body-font hidden" id='idrepairing_work'>
  <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100}   my-10 text-center`}>Repairing Work</h2>
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    
     {/** The is functions a call */}
     {repairingwork.map((item) => {
          return (
            <RepairingWorkItem key={item._id} item={item} mode={props.mode} showAlert={props.showAlert} host={props.host} />
          );
        })}

     </div>
  </div>
</section>
  <section className="text-gray-600 body-font hidden" id='idextra_fast'>
  <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100}  my-10 text-center`}>Extra Fast Servise</h2>
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      
    {/** The is functions a call */}
    {extrafast.map((item) => {
          return (
            <ExtraFastServiseItem key={item._id} item={item} mode={props.mode} showAlert={props.showAlert} host={props.host} />
          );
        })}
     

     </div>
  </div>
</section>

    </>
  )
  
}
