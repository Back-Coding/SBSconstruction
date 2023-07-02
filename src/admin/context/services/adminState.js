import react, { useState } from "react";
import serviceContext from './adminContext'

const host = "http://localhost:5000"

const NoteState = (props) => {

  const [service, setService] = useState([])
  const [allUser, setAllUser] = useState([])
  const [workForms,setWorkForms]=useState([]);


 /**
  * The Servise fetch ,add ,updata and delete the service databse is frontend endpoint 
  */
  // Get all 
  const fetchService = async () => {
    // API Call 
    const response = await fetch(`${host}/api/service/fetchallservice`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": localStorage.getItem('token')
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setService(json)
  }

  // Add a Note
  const addService = async (title, description, tag,type , image) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/service/addservice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag ,type,image})
    });

    const note = await response.json();
    setService(service.concat(note))
  }

  // Delete a Note
  const deleteService = async (id) => {
    // API Call

    const response = await fetch(`${host}/api/service/deleteservice/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newNotes = service.filter((element) => { return element._id !== id })
    setService(newNotes)
  }

  // Edit a Note
  const updateService = async (id, title, description, tag,type,image) => {
   
    
    // API Call 
    const response = await fetch(`${host}/api/service/updateserve/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag,type,image})
    });
    const json = await response.json(); 

     let  newNotes= JSON.parse(JSON.stringify(service))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        newNotes[index].type = type; 
        newNotes[index].image = image; 
        break; 
      }
    }  
    setService(newNotes);
  }


/**
 * The user fetch Froms data for example :- name ,email phone and other field  --> Admin DashBoard
 */
const fetchAllUser = async () => {
  // API Call 
  const response = await fetch(`${host}/api/u/fetchalluser`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const json = await response.json() 
  setAllUser(json)
}
const fetchFomrData = async () => {

  // API Call 
  const response = await fetch(`${host}/api/u/fetchforms`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const json = await response.json() 
    setWorkForms(json)
}
const deleteOneDataFroms = async (id) => {
  // API Call
  console.log("delete the data");
  const response = await fetch(`${host}/api/service/u/deleteonerowforms/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    }
  });
  const json = response.json(); 
  const newNotes = workForms.filter((element) => { return element._id !== id })
  setService(newNotes)
}




  return (
    <serviceContext.Provider value={{ service, addService, deleteService, updateService, fetchService ,allUser,fetchAllUser , workForms,fetchFomrData ,deleteOneDataFroms}}>
      {props.children}
    </serviceContext.Provider>
  )

  };

export default NoteState;